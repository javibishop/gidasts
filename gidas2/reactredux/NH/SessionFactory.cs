﻿using FluentNHibernate.Cfg;
using FluentNHibernate.Cfg.Db;
using NHibernate;
using NHibernate.Cfg;
using NHibernate.Tool.hbm2ddl;
using System;
using System.Collections.Generic;
using System.Reflection;
using TSModel.Dominio;

namespace tswebapi.NH
{
    //public class SessionFactory
    //{
    //    public virtual  ISessionFactory sessionFactory { get; protected set; }
    //    //https://www.codeproject.com/Tips/1243873/Work-with-Fluent-NHibernate-in-Core https://www.c-sharpcorner.com/article/work-with-fluent-nhibernate-in-core-2-0/
    //    public virtual  ISessionFactory BuildSessionFactory() //Microsoft.Extensions.Logging.ILoggerFactory loggerFactory
    //    {
    //        bool create = false, update = true;

    //        // NHibernate.NHibernateLogger.SetLoggersFactory(new NHibernateToMicrosoftLoggerFactory(loggerFactory));
    //        //https://github.com/nhibernate/nhibernate-core/blob/master/src/NHibernate.Example.Web/Infrastructure/AppSessionFactory.cs

    //        string connectionstring = "server=localhost;port=3306;database=ts;userid=root;password=mysql;SslMode=none;"; // System.Configuration.ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;

    //        var assembly = Assembly.Load("TSModel");

    //        this.sessionFactory = Fluently.Configure().Database(MySQLConfiguration.Standard.ConnectionString(connectionstring))
    //            .Mappings(m => m.FluentMappings.AddFromAssembly(assembly)).CurrentSessionContext("call").ExposeConfiguration(cfg => BuildSchema(cfg, create, update)).BuildSessionFactory();
            
    //        return this.sessionFactory;
    //    }

    //    private static void BuildSchema(Configuration config, bool create = false, bool update = false)
    //    {
    //        if (create)
    //        {
    //            new SchemaExport(config).Create(false, true);
    //        }
    //        else
    //        {
    //            new SchemaUpdate(config).Execute(false, update);
    //        }
    //    }

    //    public virtual  ISession OpenSession()
    //    {
    //        return sessionFactory.OpenSession();
    //    }
    //}

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

        //public IList<Recipe> GetAllRecipes()
        //{
        //    try
        //    {
        //        return _session.QueryOver<Recipe>().List();
        //    }
        //    catch (Exception ex)
        //    {
        //        throw ex;
        //    }
        //}

        public T GetEntity<T>(Guid id) where T : EntidadBase
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

        public T AddEntity<T>(T entity) where T : EntidadBase
        {
            T newOne = null;
            using (var transaction = _session.BeginTransaction())
            {
                try
                {
                    //entity.Id = Guid.NewGuid();
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

        public void DeleteEntity<T>(Guid id) where T : EntidadBase
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
