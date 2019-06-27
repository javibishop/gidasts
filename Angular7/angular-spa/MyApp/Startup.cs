using Funq;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
//using ApiKeyAuthProvider = CentralOperativa.Infraestructure.ApiKeyAuthProvider;
//using GetApiKeysService = CentralOperativa.Infraestructure.GetApiKeysService;
//using RegenerateApiKeysService = CentralOperativa.Infraestructure.RegenerateApiKeysService;

using MyApp.ServiceInterface;
using ServiceStack;
//using ServiceStack.Api.OpenApi;
using ServiceStack.Data;
using ServiceStack.OrmLite;
using ServiceStack.Text;

namespace MyApp
{
  public class Startup
  {
    public IConfiguration Configuration { get; }
    //public Startup(IConfiguration configuration) => Configuration = configuration;
    public Startup(IHostingEnvironment env)
    {
      var builder = new ConfigurationBuilder()
          .SetBasePath(env.ContentRootPath)
          .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
          .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
          .AddEnvironmentVariables();
      Configuration = builder.Build();

      //Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);
    }

    // This method gets called by the runtime. Use this method to add services to the container.
    // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
    public void ConfigureServices(IServiceCollection services)
    {
      services.AddCors();
      services.AddSingleton(_ => Configuration);
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IHostingEnvironment env)
    {
      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
      }
      app.UseCors(options => options.WithOrigins("*").AllowAnyMethod().AllowAnyHeader());
      app.UseServiceStack(new AppHost(this.Configuration)
      {
        AppSettings = new NetCoreAppSettings(Configuration)
      });

    }
  }
  public class AppHost : AppHostBase
  {
    private readonly IConfiguration _configuration;

    public AppHost(IConfiguration configuration) : base("MyApp", typeof(MyServices).Assembly)
    {
      _configuration = configuration;
    }

    // Configure your AppHost with the necessary configuration and dependencies your App needs
    public override void Configure(Container container)
    {
      var connectionString = _configuration.GetConnectionString("SQL");
      var factory = new OrmLiteConnectionFactory(connectionString, SqlServer2017Dialect.Provider)
      {
        DialectProvider = { StringSerializer = new JsonStringSerializer() },
        ConnectionFilter = (db =>
        {
          if (!RequestContext.Instance.Items.Contains("HasSessionContext") && RequestContext.Instance.Items.Contains("TenantUserId"))
          {
            if (int.TryParse(RequestContext.Instance.Items["TenantUserId"].ToString(), out var tenantUserId))
            {
              if (tenantUserId != 0)
              {
                //db.SetSessionContextValue("TenantUserId", tenantUserId);
                //db.SetSessionContextValue("TenantId", int.Parse(RequestContext.Instance.Items["TenantId"].ToString()));
                //db.SetSessionContextValue("UserId", int.Parse(RequestContext.Instance.Items["UserId"].ToString()));
                RequestContext.Instance.Items.Add("HasSessionContext", true);
              }
            }
          }

          return db;
        }),
        AutoDisposeConnection = true
      };
      container.Register<IDbConnectionFactory>(factory);

      //Plugins.Add(new SharpPagesFeature()); // enable server-side rendering, see: https://sharpscript.net/docs/sharp-pages

      //SetConfig(new HostConfig
      //{
      //  AddRedirectParamsToQueryString = true,
      //  DebugMode = AppSettings.Get(nameof(HostConfig.DebugMode), false)
      //});

      //var connectionString = _configuration.GetConnectionString("SQLIte");
      //var factory = new OrmLiteConnectionFactory(connectionString, SqliteDialect.Provider)
      //{
      //  DialectProvider = { StringSerializer = new JsonStringSerializer() },
      //  ConnectionFilter = (db =>
      //  {
      //    //if (!RequestContext.Instance.Items.Contains("HasSessionContext") && RequestContext.Instance.Items.Contains("TenantUserId"))
      //    //{
      //    //  if (int.TryParse(RequestContext.Instance.Items["TenantUserId"].ToString(), out var tenantUserId))
      //    //  {
      //    //    if (tenantUserId != 0)
      //    //    {
      //    //      db.SetSessionContextValue("TenantUserId", tenantUserId);
      //    //      db.SetSessionContextValue("TenantId", int.Parse(RequestContext.Instance.Items["TenantId"].ToString()));
      //    //      db.SetSessionContextValue("UserId", int.Parse(RequestContext.Instance.Items["UserId"].ToString()));
      //    //      RequestContext.Instance.Items.Add("HasSessionContext", true);
      //    //    }
      //    //  }
      //    //}

      //    return db;
      //  }),
      //  AutoDisposeConnection = true
      //};

      //var dbPath = "~/db.sqlite".MapProjectPath();
      //var factory = new OrmLiteConnectionFactory(dbPath, OrmLiteConfig.DialectProvider);

      //container.Register<IDbConnectionFactory>(factory);
    }
  }
}
  //public class AppHost : AppHostBase
  //{
  //  private readonly IConfiguration _configuration;
  //  public RSAParameters? JwtRsaPrivateKey;
  //  public RSAParameters? JwtRsaPublicKey;
  //  public bool JwtEncryptPayload = false;

  //  //Tell Service Stack the name of your application and where to find your web services
  //  public AppHost(IConfiguration configuration) : base("Central Operativa Api", typeof(AppHost).Assembly)
  //  {
  //    _configuration = configuration;

  //    ExcludeAutoRegisteringServiceTypes.Add(typeof(GetApiKeysService));
  //    ExcludeAutoRegisteringServiceTypes.Add(typeof(RegenerateApiKeysService));
  //  }

  //  public override void Configure(Container container)
  //  {
  //    LogManager.LogFactory = new DebugLogFactory();

  //    JsConfig.ConvertObjectTypesIntoStringDictionary = true;
  //    //Set JSON web services to return idiomatic JSON camelCase properties
  //    JsConfig.IncludeNullValues = true;
  //    JsConfig.EmitCamelCaseNames = true;
  //    JsConfig.DateHandler = DateHandler.ISO8601;
  //    JsConfig.AlwaysUseUtc = true;

  //    Config.AllowSessionCookies = false;
  //    //this.Config.AddRedirectParamsToQueryString = true;
  //    //this.Config.ApiVersion = "v1";
  //    Config.HandlerFactoryPath = "api";
  //    Config.GlobalResponseHeaders.Remove("X-Powered-By");
  //    Config.GlobalResponseHeaders.Remove("Server");

  //    // Cache
  //    var cacheManagerSetting = _configuration["CacheManager"];
  //    if (cacheManagerSetting.ToLowerInvariant() == "redis")
  //    {
  //      var redisConnectionString = _configuration.GetConnectionString("Redis");
  //      //var redisClientManager = new BasicRedisClientManager(redisConnectionString);
  //      //container.Register<IRedisClientsManager>(c => redisClientManager);
  //      //container.Register(c => c.Resolve<IRedisClientsManager>().GetCacheClient()).ReusedWithin(ReuseScope.None);
  //    }
  //    else
  //    {
  //      container.Register<ICacheClient>(new MemoryCacheClient());
  //    }

  //    container.Register<ISessionFactory>(c => new SessionFactory(c.Resolve<ICacheClient>()));

  //    // SQL RLS
  //    //GlobalRequestFilters.Add((req, res, dto) =>
  //    //{
  //    //  var sessionObj = req.GetSession();
  //    //  if (sessionObj is Session session)
  //    //  {
  //    //    if (session.TenantUserId != 0 && !RequestContext.Instance.Items.Contains("TenantUserId"))
  //    //    {
  //    //      RequestContext.Instance.Items.Add("TenantUserId", session.TenantUserId);
  //    //      RequestContext.Instance.Items.Add("TenantId", session.TenantId);
  //    //      RequestContext.Instance.Items.Add("UserId", session.UserId);
  //    //    }
  //    //  }
  //    //});

  //    //ORM
  //    OrmLiteConfig.IsCaseInsensitive = true;
  //    OrmLiteConfig.StripUpperInLike = true;
  //    var dialectProvider = new SqliteOrmLiteDialectProvider();
  //    dialectProvider.GetDateTimeConverter().DateStyle = DateTimeKind.Utc;

  //    //AfterInitCallbacks.Add(host =>
  //    //{
  //    //  var authProvider = (ApiKeyAuthProvider)AuthenticateService.GetAuthProvider(ApiKeyAuthProvider.Name);
  //    //  using (var db = host.TryResolve<IDbConnectionFactory>().Open())
  //    //  {
  //    //    var userWithKeysIds = db.Column<string>(db.From<ApiKey>()
  //    //        .SelectDistinct(x => x.UserAuthId)).Map(int.Parse);

  //    //    var userIdsMissingKeys = db.Column<string>(db.From<TenantUser>()
  //    //        .Where(x => userWithKeysIds.Count == 0 || !userWithKeysIds.Contains(x.Id))
  //    //        .Select(x => x.Id));

  //    //    var authRepo = (IManageApiKeys)host.TryResolve<IAuthRepository>();
  //    //    foreach (var userId in userIdsMissingKeys)
  //    //    {
  //    //      var apiKeys = authProvider.GenerateNewApiKeys(userId.ToString());
  //    //      authRepo.StoreAll(apiKeys);
  //    //    }
  //    //  }
  //    //});

  //    var connectionString = _configuration.GetConnectionString("SQL");
  //    var factory = new OrmLiteConnectionFactory(connectionString, SqliteDialect.Provider )
  //    {
  //      DialectProvider = { StringSerializer = new JsonStringSerializer() },
  //      //ConnectionFilter = (db =>
  //      //{
  //      //  if (!RequestContext.Instance.Items.Contains("HasSessionContext") && RequestContext.Instance.Items.Contains("TenantUserId"))
  //      //  {
  //      //    if (int.TryParse(RequestContext.Instance.Items["TenantUserId"].ToString(), out var tenantUserId))
  //      //    {
  //      //      if (tenantUserId != 0)
  //      //      {
  //      //        db.SetSessionContextValue("TenantUserId", tenantUserId);
  //      //        db.SetSessionContextValue("TenantId", int.Parse(RequestContext.Instance.Items["TenantId"].ToString()));
  //      //        db.SetSessionContextValue("UserId", int.Parse(RequestContext.Instance.Items["UserId"].ToString()));
  //      //        RequestContext.Instance.Items.Add("HasSessionContext", true);
  //      //      }
  //      //    }
  //      //  }

  //      //  return db;
  //      //}),
  //      AutoDisposeConnection = true
  //    };
  //    container.Register<IDbConnectionFactory>(factory);

  //    var corsPlugin = new CorsFeature { AutoHandleOptionsRequests = true };
  //    Plugins.Add(corsPlugin);
  //    Plugins.Add(new AutoQueryFeature { IncludeTotal = true });
  //    Plugins.Add(new OpenApiFeature());
  //    // Plugins.Add(new ValidationFeature());
  //    ConfigureAuth(container);

  //    //container.RegisterAutoWired<TenantRepository>();

  //    //container.RegisterAutoWired<PersonRepository>();
  //    //container.RegisterAutoWired<UserRepository>();

  //    //container.RegisterAutoWired<MessageRepository>();

  //    //container.RegisterAutoWired<BusinessPartnerRepository>();
  //    //container.RegisterAutoWired<BusinessPartnerAccountRepository>();

  //    //container.RegisterAutoWired<WorkflowActivityRepository>();
  //    //container.RegisterAutoWired<WorkflowInstanceRepository>();
  //    //container.RegisterAutoWired<FolderRepository>();
  //    //container.RegisterAutoWired<FileRepository>();
  //    //container.RegisterAutoWired<PhotoRepository>();

  //    //container.RegisterAutoWired<FormRepository>();

  //    //container.RegisterAutoWired<PaymentDocumentRepository>();

  //    //container.RegisterAutoWired<CostCenterRepository>();

  //    //container.RegisterAutoWired<AssetRepository>();

  //    //container.RegisterAutoWired<ProjectRepository>();
  //    //container.RegisterAutoWired<CallRepository>();
  //  }

  //  private void ConfigureAuth(Container container)
  //  {
  //    container.Register<IUserAuthRepository>(c => new UserAuthRepository(c.Resolve<IDbConnectionFactory>()));
  //    container.Register<IAuthRepository>(c => c.Resolve<IUserAuthRepository>());

  //    var key = AesUtils.CreateKey();
  //    // var keyString = Convert.ToBase64String(key);
  //    // var keyString = Convert.FromBase64CharArray(key);

  //    // Register all Authentication methods you want to enable for this web app.            
  //    Plugins.Add(new AuthFeature(
  //        () => new Session(), //Use your own typed Custom UserSession type
  //        new IAuthProvider[] {
  //                  new BasicAuthProvider(AppSettings),
  //                  new ApiKeyAuthProvider(AppSettings) {
  //                      RequireSecureConnection = false,
  //                      PersistSession = true,
  //                      SessionCacheDuration = TimeSpan.FromMinutes(10)
  //                  },
  //                  new JwtAuthProvider(AppSettings)
  //                  {
  //                      AuthKey = JwtRsaPrivateKey != null || JwtRsaPublicKey != null ? null : key,
  //                      SetBearerTokenOnAuthenticateResponse = true,
  //                      RequireSecureConnection = false,
  //                      HashAlgorithm = JwtRsaPrivateKey != null || JwtRsaPublicKey != null ? "RS256" : "HS256",
  //                      PublicKey = JwtRsaPublicKey,
  //                      PrivateKey = JwtRsaPrivateKey,
  //                      EncryptPayload = JwtEncryptPayload,
  //                      CreatePayloadFilter = CreatePayloadFilter,
  //                      PopulateSessionFilter = PopulateSessionFilter,
  //                      PersistSession = true
  //                  },
  //                  new CustomCredentialsAuthProvider(AppSettings)
  //        }));

  //    //Provide service for new users to register so they can login with supplied credentials.
  //    //Plugins.Add(new RegistrationFeature());

  //    //override the default registration validation with your own custom implementation
  //    //container.RegisterAs<CustomRegistrationValidator, IValidator<Registration>>();
  //  }

  //  private void CreatePayloadFilter(JsonObject payload, IAuthSession session)
  //  {
  //    if (session is Session typedSession)
  //    {
  //      payload["tenantId"] = typedSession.TenantId.ToString();
  //    }
  //  }

  //  private void PopulateSessionFilter(IAuthSession session, JsonObject payload, IRequest request)
  //  {
  //    if (session is Session typedSession)
  //    {
  //      // for some reason by default this reader loses the auth0| prefix from the user's id when it populates
  //      // the userauthid, so we'll override that behaviour here
  //      typedSession.TenantId = int.Parse(payload["tenantId"]);
  //    }
  //  }

  //  /*
  //  public override List<IVirtualPathProvider> GetVirtualFileSources()
  //  {
  //      var existingProviders = base.GetVirtualFileSources();
  //      var connectionString = _configuration.GetConnectionString("Storage");
  //      existingProviders.Add(new AzureBlobVirtualFiles(connectionString, "centraloperativa-files"));
  //      return existingProviders;
  //  }
  //  */
  //}

//}
