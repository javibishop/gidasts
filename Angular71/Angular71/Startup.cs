using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Angular71
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);

            // In production, the Angular files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/dist";
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseSpaStaticFiles();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller}/{action=Index}/{id?}");
            });

            app.UseSpa(spa =>
            {
                // To learn more about options for serving an Angular SPA from ASP.NET Core,
                // see https://go.microsoft.com/fwlink/?linkid=864501

                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseAngularCliServer(npmScript: "start");
                }
            });
        }
    }
}

//using Funq;
//using Microsoft.AspNetCore.Authentication.JwtBearer;
//using Microsoft.AspNetCore.Builder;
//using Microsoft.AspNetCore.Hosting;
//using Microsoft.AspNetCore.HttpsPolicy;
//using Microsoft.AspNetCore.Mvc;
//using Microsoft.AspNetCore.SpaServices.AngularCli;
//using Microsoft.Extensions.Configuration;
//using Microsoft.Extensions.DependencyInjection;
//using Microsoft.IdentityModel.Tokens;
//using MyApp.ServiceInterface;
//using ServiceStack;
//using ServiceStack.Data;
//using ServiceStack.OrmLite;
//using ServiceStack.Text;
//using System.Text;

//namespace Angular71
//{
//    public class Startup
//    {
//        public Startup(IConfiguration configuration)
//        {
//            Configuration = configuration;
//        }

//        public IConfiguration Configuration { get; }

//        // This method gets called by the runtime. Use this method to add services to the container.
//        public void ConfigureServices(IServiceCollection services)
//        {
//            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);

//            // In production, the Angular files will be served from this directory
//            services.AddSpaStaticFiles(configuration =>
//            {
//                configuration.RootPath = "ClientApp/dist";
//            });

//            services.AddAuthentication(option =>
//            {
//                option.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
//                option.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
//                option.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
//            })
//           .AddJwtBearer(options =>
//           {
//               //https://devblogs.microsoft.com/aspnet/jwt-validation-and-authorization-in-asp-net-core/
//               //https://www.youtube.com/watch?v=vEU9SDmIvVY
//               //https://salslab.com/a/jwt-authentication-and-authorisation-in-asp-net-core-web-api
//               options.SaveToken = true;
//               options.RequireHttpsMetadata = false;
//               options.TokenValidationParameters = new TokenValidationParameters
//               {
//                   ValidateIssuer = true,
//                   ValidateAudience = true,
//                   ValidAudience = "http://localhost:5000/",
//                   ValidIssuer = "http://localhost:4200/",
//                   //ValidateIssuerSigningKey = true,
//                   IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("Mysuperclave"))
//               };
//           });

//            services.AddCors();
//            services.AddSingleton(_ => Configuration);
//        }

//        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
//        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
//        {
//            if (env.IsDevelopment())
//            {
//                app.UseDeveloperExceptionPage();
//            }
//            else
//            {
//                app.UseExceptionHandler("/Error");
//                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
//                app.UseHsts();
//            }
//            //app.UseAuthentication();
//            app.UseHttpsRedirection();
//            app.UseStaticFiles();
//            app.UseSpaStaticFiles();

//            app.UseMvc(routes =>
//            {
//                routes.MapRoute(
//                    name: "default",
//                    template: "{controller}/{action=Index}/{id?}");
//            });

//            app.UseSpa(spa =>
//            {
//                // To learn more about options for serving an Angular SPA from ASP.NET Core,
//                // see https://go.microsoft.com/fwlink/?linkid=864501

//                spa.Options.SourcePath = "ClientApp";

//                if (env.IsDevelopment())
//                {
//                    spa.UseAngularCliServer(npmScript: "start");
//                }
//            });

//            //app.UseCors();
//            //app.UseCors(options => options.WithOrigins("http://localhost:4200").AllowAnyMethod().AllowAnyHeader());
//            app.UseServiceStack(new AppHost(this.Configuration)
//            {
//                AppSettings = new NetCoreAppSettings(Configuration)
//            });
//        }
//    }

//    public class AppHost : AppHostBase
//    {
//        private readonly IConfiguration _configuration;

//        public AppHost(IConfiguration configuration) : base("MyApp", typeof(MyServices).Assembly)
//        {
//            _configuration = configuration;
//        }

//        // Configure your AppHost with the necessary configuration and dependencies your App needs
//        public override void Configure(Container container)
//        {
//            var connectionString = _configuration.GetConnectionString("SQL");
//            var factory = new OrmLiteConnectionFactory(connectionString, SqlServer2017Dialect.Provider)
//            {
//                DialectProvider = { StringSerializer = new JsonStringSerializer() },
//                ConnectionFilter = (db =>
//                {
//                    if (!RequestContext.Instance.Items.Contains("HasSessionContext") && RequestContext.Instance.Items.Contains("TenantUserId"))
//                    {
//                        if (int.TryParse(RequestContext.Instance.Items["TenantUserId"].ToString(), out var tenantUserId))
//                        {
//                            if (tenantUserId != 0)
//                            {
//                                //db.SetSessionContextValue("TenantUserId", tenantUserId);
//                                //db.SetSessionContextValue("TenantId", int.Parse(RequestContext.Instance.Items["TenantId"].ToString()));
//                                //db.SetSessionContextValue("UserId", int.Parse(RequestContext.Instance.Items["UserId"].ToString()));
//                                RequestContext.Instance.Items.Add("HasSessionContext", true);
//                            }
//                        }
//                    }

//                    return db;
//                }),
//                AutoDisposeConnection = true
//            };
//            container.Register<IDbConnectionFactory>(factory);
//            Plugins.Add(new AutoQueryFeature { IncludeTotal = true });
//        }
//    }
//}
