using FluentNHibernate.Cfg;
using FluentNHibernate.Cfg.Db;
using NHibernate;
using NHibernate.Cfg;
using NHibernate.Tool.hbm2ddl;
using System.Reflection;

namespace tswebapi.NH
{
    public class SessionFactory
    {
        public virtual  ISessionFactory sessionFactory { get; protected set; }
        //https://www.codeproject.com/Tips/1243873/Work-with-Fluent-NHibernate-in-Core https://www.c-sharpcorner.com/article/work-with-fluent-nhibernate-in-core-2-0/
        public virtual  ISessionFactory BuildSessionFactory() //Microsoft.Extensions.Logging.ILoggerFactory loggerFactory
        {
            bool create = false, update = true;

            // NHibernate.NHibernateLogger.SetLoggersFactory(new NHibernateToMicrosoftLoggerFactory(loggerFactory));
            //https://github.com/nhibernate/nhibernate-core/blob/master/src/NHibernate.Example.Web/Infrastructure/AppSessionFactory.cs

            string connectionstring = "server=localhost;port=3306;database=ts;userid=root;password=mysql;SslMode=none;"; // System.Configuration.ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;

            var assembly = Assembly.Load("TSModel");

            this.sessionFactory = Fluently.Configure().Database(MySQLConfiguration.Standard.ConnectionString(connectionstring))
                .Mappings(m => m.FluentMappings.AddFromAssembly(assembly)).CurrentSessionContext("call").ExposeConfiguration(cfg => BuildSchema(cfg, create, update)).BuildSessionFactory();
            
            return this.sessionFactory;
        }

        private static void BuildSchema(Configuration config, bool create = false, bool update = false)
        {
            if (create)
            {
                new SchemaExport(config).Create(false, true);
            }
            else
            {
                new SchemaUpdate(config).Execute(false, update);
            }
        }

        public virtual  ISession OpenSession()
        {
            return sessionFactory.OpenSession();
        }
    }
}
