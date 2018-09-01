using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using NHibernate;
using tswebapi.NH;

namespace tswebapi
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
            services.AddCors();
            services.AddSingleton<SessionFactory>();

            services.AddSingleton<ISessionFactory>((provider) => {
                var cfg = provider.GetService<SessionFactory>();
                return cfg.BuildSessionFactory();
            });

            services.AddScoped<ISession>((provider) => {
                var factory = provider.GetService<ISessionFactory>();
                return factory.OpenSession();
            });


            //services.AddScoped(x => x.GetService<SessionFactory>().OpenSession());

            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors(options => options.WithOrigins("*").AllowAnyMethod().AllowAnyHeader());
            app.UseMvc();
        }
    }
}
