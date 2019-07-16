using System.Linq;
using ServiceStack;
using ServiceStack.OrmLite;
using System;

namespace LDP.Web.ServiceInterface
{
  [Microsoft.AspNetCore.Authorization.Authorize]
  public class PartidoServices : Service
    {
        public IAutoQueryDb AutoQuery { get; set; }

        //public object Put(MyApp.ServiceModel.Partido.Post request)
        //{
        //    return Db.Update((TSModel.Dominio.Partido)request);
        //}

        //public object Post(MyApp.ServiceModel.Partido.Post request)
        //{
        //    request.Id = (int)Db.Insert((TSModel.Dominio.Partido)request, true);
        //    return request;
        //}

      public object Get(MyApp.ServiceModel.Partido.GetById request)
      {
          var model = Db.SingleById<TSModel.Dominio.Partido>(request.Id);
          return model;
      }

    public object Get(MyApp.ServiceModel.Partido.GetByProvinciaId request)
    {
      var model = Db.Select<TSModel.Dominio.Partido>(p=> p.ProvinciaId == request.ProvinciaId);
      return model;
    }
    

    public object Get(MyApp.ServiceModel.Partido.Get request)
    {
      var model = Db.Select<TSModel.Dominio.Partido>();
      return model;
    }

    //public QueryResponse<TSModel.Dominio.Partido> Get(MyApp.ServiceModel.Partido.Query request)
    //{
    //    if (request.OrderByDesc == null)
    //    {
    //        request.OrderBy = "Nombre";
    //    }

    //    var q = AutoQuery.CreateQuery(request, Request.GetRequestParams());
    //    return AutoQuery.Execute(request, q);
    //}



    //public LookupResult Get(MyApp.ServiceModel.Partido.Lookup request)
    //{
    //    var query = Db.From<TSModel.Dominio.Partido>().Select(x => new { x.Id, x.Nombre });

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

    //public object Post(MyApp.ServiceModel.Partido.DeletePartido request)
    //{
    //    var autos = Db.Select<TSModel.Dominio.Partido>(m => m.Id == request.Id);
    //    if (autos.Count == 0)
    //    {
    //        Db.DeleteById<TSModel.Dominio.Partido>(request.Id);
    //        return new { result = true };
    //    }
    //    else
    //    {
    //        return new { result = false };
    //    }
    //}
  }
}

