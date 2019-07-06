using FluentNHibernate.Cfg;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using NHibernate;
using System.Linq;
using System.Reflection;
using TSModel.NH;

namespace reactredux
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
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);


            services.AddCors();

            //services.AddSingleton<NHibernate.ISessionFactory>(factory =>
            //{
            //    //    return Fluently
                //                .Configure()
                //                .Database(() =>
                //                {

                //                    return FluentNHibernate.Cfg.Db.MySQLConfiguration
                //                            .Standard
                //                            .ShowSql()
                //                            .ConnectionString("server=localhost;port=3306;database=ts;userid=root;password=mysql;SslMode=none;");
                //                })
                //                .Mappings(m => m.FluentMappings.AddFromAssembly(Assembly.Load("TSModel")))
                //                .BuildSessionFactory();
                //});

                //services.AddScoped<NHibernate.ISession>(factory =>
                //   factory
                //        .GetServices<NHibernate.ISessionFactory>()
                //        .First()
                //        .OpenSession()
                //);

                //services.AddSingleton<SessionFactory>();

                services.AddSingleton<SessionFactory>((provider) =>
                {
                    var cfg = provider.GetService<SessionFactory>();
                    return cfg;
                });

                services.AddScoped<ISession>((provider) =>
                {
                    var factory = provider.GetService<ISessionFactory>();
                    return factory.OpenSession();
                });


                // In production, the React files will be served from this directory
                services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/build";
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
                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseReactDevelopmentServer(npmScript: "start");
                    //spa.UseProxyToSpaDevelopmentServer("http://localhost:3000");

                }
            });

            //app.use(bodyParser.urlencoded({ extended: true }));
            //app.use(bodyParser.json());
        }
    }
}
