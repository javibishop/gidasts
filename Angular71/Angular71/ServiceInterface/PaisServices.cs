using System.Linq;
using ServiceStack;
using ServiceStack.OrmLite;
using System;

namespace LDP.Web.ServiceInterface
{
  [Microsoft.AspNetCore.Authorization.Authorize]
  public class PaisServices : Service
    {
        public IAutoQueryDb AutoQuery { get; set; }

        //public object Put(MyApp.ServiceModel.Pais.Post request)
        //{
        //    return Db.Update((TSModel.Dominio.Pais)request);
        //}

        //public object Post(MyApp.ServiceModel.Pais.Post request)
        //{
        //    request.Id = (int)Db.Insert((TSModel.Dominio.Pais)request, true);
        //    return request;
        //}

        public object Get(MyApp.ServiceModel.Pais.GetById request)
        {
            var model = Db.SingleById<TSModel.Dominio.Pais>(request.Id);
            return model;
        }

    public object Get(MyApp.ServiceModel.Pais.Get request)
    {
      var model = Db.Select<TSModel.Dominio.Pais>();
      return model;
    }

    //public QueryResponse<TSModel.Dominio.Pais> Get(MyApp.ServiceModel.Pais.Query request)
    //{
    //    if (request.OrderByDesc == null)
    //    {
    //        request.OrderBy = "Nombre";
    //    }

    //    var q = AutoQuery.CreateQuery(request, Request.GetRequestParams());
    //    return AutoQuery.Execute(request, q);
    //}



    //public LookupResult Get(MyApp.ServiceModel.Pais.Lookup request)
    //{
    //    var query = Db.From<TSModel.Dominio.Pais>().Select(x => new { x.Id, x.Nombre });

    //    if (!string.IsNullOrEmpty(request.Q))
    //    {
    //        query = query.Where(q => q.Nombre.Contains(request.Q));
    //    }
    //    var count = Db.Count(query);
    //    query = query.OrderBy(q => q.Nombre)
    //       .Limit((request.Page.GetValueOrDefault(1) - 1) * request.PageSize.GetValueOrDefault(100), request.PageSize.GetValueOrDefault(100));
    //    var result = new LookupResult
    //    {
    //        Data = Db.Select(query).Select(x => new LookupItem { Id = x.Id, Text = x.Nombre }),
    //        Total = (int)count
    //    };
    //    return result;
    //}

    //public object Post(MyApp.ServiceModel.Pais.DeletePais request)
    //{
    //    var autos = Db.Select<TSModel.Dominio.Pais>(m => m.Id == request.Id);
    //    if (autos.Count == 0)
    //    {
    //        Db.DeleteById<TSModel.Dominio.Pais>(request.Id);
    //        return new { result = true };
    //    }
    //    else
    //    {
    //        return new { result = false };
    //    }
    //}
  }
}

