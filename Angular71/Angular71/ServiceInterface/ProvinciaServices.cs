using ServiceStack;
using ServiceStack.OrmLite;

namespace LDP.Web.ServiceInterface
{
  [Microsoft.AspNetCore.Authorization.Authorize]
  public class ProvinciaServices : Service
    {
        public IAutoQueryDb AutoQuery { get; set; }

    public object Get(MyApp.ServiceModel.Provincia.GetById request)
    {
      var model = Db.SingleById<TSModel.Dominio.Provincia>(request.Id);
      return model;
    }

    public object Get(MyApp.ServiceModel.Provincia.Get request)
    {
      var model = Db.Select<TSModel.Dominio.Provincia>();
      return model;
    }

    //public object Put(MyApp.ServiceModel.Provincia.Post request)
    //{
    //    return Db.Update((TSModel.Dominio.Provincia)request);
    //}

    //public object Post(MyApp.ServiceModel.Provincia.Post request)
    //{
    //    request.Id = (int)Db.Insert((TSModel.Dominio.Provincia)request, true);
    //    return request;
    //}



    //public QueryResponse<TSModel.Dominio.Provincia> Get(MyApp.ServiceModel.Provincia.Query request)
    //{
    //    if (request.OrderByDesc == null)
    //    {
    //        request.OrderBy = "Nombre";
    //    }

    //    var q = AutoQuery.CreateQuery(request, Request.GetRequestParams());
    //    return AutoQuery.Execute(request, q);
    //}



    //public LookupResult Get(MyApp.ServiceModel.Provincia.Lookup request)
    //{
    //    var query = Db.From<TSModel.Dominio.Provincia>().Select(x => new { x.Id, x.Nombre });

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

    //public object Post(MyApp.ServiceModel.Provincia.DeleteProvincia request)
    //{
    //    var autos = Db.Select<TSModel.Dominio.Provincia>(m => m.Id == request.Id);
    //    if (autos.Count == 0)
    //    {
    //        Db.DeleteById<TSModel.Dominio.Provincia>(request.Id);
    //        return new { result = true };
    //    }
    //    else
    //    {
    //        return new { result = false };
    //    }
    //}
  }
}

