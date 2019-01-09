using FluentNHibernate.Cfg;
using FluentNHibernate.Cfg.Db;
using NHibernate;
using NHibernate.Cfg;
using NHibernate.Tool.hbm2ddl;
using System;
using System.Reflection;
using TSModel.Dominio;

namespace TSModel.NH
{
    public sealed class SessionFactory
    {
        ISessionFactory _sessionFactory;
        ISession _session;

        private static readonly SessionFactory _instance = new SessionFactory();

        private SessionFactory()
        {
            InitializeSession();
        }

        public static SessionFactory Instance
        {
            get
            {
                return _instance;
            }
        }

        void InitializeSession()
        {
            try
            {
                bool create = false, update = true;

                // NHibernate.NHibernateLogger.SetLoggersFactory(new NHibernateToMicrosoftLoggerFactory(loggerFactory));
                //https://github.com/nhibernate/nhibernate-core/blob/master/src/NHibernate.Example.Web/Infrastructure/AppSessionFactory.cs

                string connectionstring = "server=localhost;port=3306;database=ts;userid=root;password=mysql;SslMode=none;"; // System.Configuration.ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;

                var assembly = Assembly.Load("TSModel");

                this._sessionFactory = Fluently.Configure().Database(MySQLConfiguration.Standard.ConnectionString(connectionstring))
                    .Mappings(m => m.FluentMappings.AddFromAssembly(assembly)).CurrentSessionContext("call").ExposeConfiguration(cfg => BuildSchema(cfg, create, update)).BuildSessionFactory();

                _session = _sessionFactory.OpenSession();
            }
            catch (Exception ex)
            {
                throw ex;
            }
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

        public T GetEntity<T>(int id) where T : EntidadBase
        {
            try
            {
                return _session.Get<T>(id);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public ICriteria CreateCriteria<T>() where T : EntidadBase
        {
            try
            {
                return _session.CreateCriteria<T>();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public ISQLQuery CreateSQLQuery(string query)
        {
            try
            {
                return _session.CreateSQLQuery(query);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public T AddEntity<T>(T entity) where T : EntidadBase
        {
            T newOne = null;
            using (var transaction = _session.BeginTransaction())
            {
                try
                {
                    //entity.Id = int.Newint();
                    _session.SaveOrUpdate(entity);
                    Commit(transaction, entity);
                    //RefreshParentObject(entity);
                    newOne = _session.Get<T>(entity.Id) as T;
                }
                catch (Exception ex)
                {
                    throw ex;
                }

                return newOne;
            }
        }

        public void SaveOrUpdateEntity<T>(T entity) where T : EntidadBase
        {
            using (var transaction = _session.BeginTransaction())
            {
                try
                {
                    _session.SaveOrUpdate(entity);
                    Commit(transaction, entity);
                    //RefreshParentObject(entity);
                }
                catch (Exception ex)
                {
                    throw ex;
                }

            }
        }

        public void UpdateEntity<T>(T entity) where T : EntidadBase
        {
            using (var transaction = _session.BeginTransaction())
            {
                try
                {
                    _session.Update(entity);
                    Commit(transaction, entity);
                    //RefreshParentObject(entity);
                }
                catch (Exception ex)
                {
                    throw ex;
                }

            }
        }

        public void DeleteEntity<T>(int id) where T : EntidadBase
        {
            using (var transaction = _session.BeginTransaction())
            {
                var entity = _session.Get<T>(id);
                if (entity != null)
                {
                    try
                    {
                        _session.Delete(entity);
                        Commit(transaction, entity);
                        //RefreshParentObject(entity);
                    }
                    catch (Exception ex)
                    {
                        throw ex;
                    }
                }
            }
        }


        #region Private Methods
        void Commit(ITransaction transaction, object obj)
        {
            try
            {
                transaction.Commit();
            }
            catch (StaleObjectStateException)
            {
                try
                {
                    _session.Merge(obj);
                    transaction.Commit();
                }
                catch
                {
                    transaction.Rollback();
                    throw;
                }
            }

        }

        //void RefreshParentObject(EntidadBase entity)
        //{
        //    if (!entity.ParentId.HasValue)
        //        return;
        //    var parentObj = _session.Get(entity.ParentType, entity.ParentId.Value);
        //    if (parentObj != null)
        //        _session.Refresh(parentObj);
        //}
        #endregion
    }
}
