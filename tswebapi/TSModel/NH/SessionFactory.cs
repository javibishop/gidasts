using FluentNHibernate.Cfg;
using FluentNHibernate.Cfg.Db;
using NHibernate;
using NHibernate.Cfg;
using NHibernate.Tool.hbm2ddl;

namespace TSModel.NH
{
    public class SessionFactory
    {
        public ISessionFactory sessionFactory { get; protected set; }

        public ISessionFactory BuildSessionFactory() //Microsoft.Extensions.Logging.ILoggerFactory loggerFactory
        {
            bool create = true, update = false;

            // NHibernate.NHibernateLogger.SetLoggersFactory(new NHibernateToMicrosoftLoggerFactory(loggerFactory));
            //https://github.com/nhibernate/nhibernate-core/blob/master/src/NHibernate.Example.Web/Infrastructure/AppSessionFactory.cs

            string connectionstring = "server=localhost;port=3306;database=ts;userid=root;password=mysql;SslMode=none;"; // System.Configuration.ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;

            this.sessionFactory = Fluently.Configure().Database(MySQLConfiguration.Standard.ConnectionString(connectionstring))
                .Mappings(m => m.FluentMappings.AddFromAssemblyOf<NHibernate.Cfg.Mappings>()).CurrentSessionContext("call").ExposeConfiguration(cfg => BuildSchema(cfg, create, update)).BuildSessionFactory();
            
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

        public ISession OpenSession()
        {
            return sessionFactory.OpenSession();
        }
    }
}
