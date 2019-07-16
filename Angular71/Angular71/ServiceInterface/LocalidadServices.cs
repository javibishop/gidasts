using ServiceStack;
using ServiceStack.OrmLite;
using System;

namespace LDP.Web.ServiceInterface
{
  [Microsoft.AspNetCore.Authorization.Authorize]
  public class LocalidadServices : Service
  {
        public IAutoQueryDb AutoQuery { get; set; }

      public object Get(MyApp.ServiceModel.Localidad.Get request)
      {
        var localidades = Db.Select<TSModel.Dominio.Localidad>();
        return localidades;
      }
    public object Get(MyApp.ServiceModel.Localidad.GetByPartidoId request)
    {
      var localidades = Db.Select<TSModel.Dominio.Localidad>(l => l.PartidoId == request.PartidoId);
      return localidades;
    }
    
      public object Get(MyApp.ServiceModel.Localidad.GetById request)
      {
        return Db.SingleById<TSModel.Dominio.Localidad>(request.Id);
      }

      public object Post(MyApp.ServiceModel.Localidad.Post request)
      {
        request.Id = (int)Db.Insert<TSModel.Dominio.Localidad>(request, true);
        return request;
      }

      public object Put(MyApp.ServiceModel.Localidad.Post request)
      {
        Db.Update<TSModel.Dominio.Localidad>(request);
        return request;
      }

      public object Delete(MyApp.ServiceModel.Localidad.DeleteLocalidad request)
      {
        try
        {
          Db.DeleteById<TSModel.Dominio.Localidad>(request.Id);
          return true;
        }
        catch (Exception)
        {
          return false;
        }
      }

    //public object Put(ServiceModel.Localidad.Post request)
    //{
    //    //request.UsuarioUMId = this.Session.UserId;
    //    //request.FechaModificacion = DateTime.Now;
    //    return Db.Update((Domain.Localidad)request);
    //}

    //public object Post(ServiceModel.Localidad.Post request)
    //{
    //    //if (request.ProvinciaId == 0 && !string.IsNullOrEmpty(request.ProvinciaNombre))
    //    //{
    //    //    Domain.Provincia provincia = new Domain.Provincia();
    //    //    provincia.Nombre = request.ProvinciaNombre;
    //    //    request.ProvinciaId = (int)Db.Insert((Domain.Provincia)provincia, true);
    //    //}
    //    if (request.PartidoId == 0 && !string.IsNullOrEmpty(request.PartidoNombre))
    //    {
    //        Domain.Partido Partido = new Domain.Partido();
    //        var idMax = Db.Select<Domain.Partido>().Max(p => p.Id);
    //        Partido.Codigo = (idMax + 1).ToString();
    //        Partido.Nombre = request.PartidoNombre;
    //        Partido.ProvinciaId = request.ProvinciaId;
    //        request.PartidoId = (int)Db.Insert((Domain.Partido)Partido, true);
    //    }
    //    request.Id = (int)Db.Insert((Domain.Localidad)request, true);
    //    return request;
    //}

    //public object Get(ServiceModel.Localidad.Get request)
    //{
    //    var model = Db.SingleById<Domain.Localidad>(request.Id);
    //    return model;
    //}

    //public QueryResponse<ServiceModel.Localidad.QueryResult> Get(ServiceModel.Localidad.Query request)
    //{
    //    if (request.OrderByDesc == null)
    //    {
    //        request.OrderBy = "Nombre";
    //    }

    //    var q = AutoQuery.CreateQuery(request, Request.GetRequestParams());
    //    return AutoQuery.Execute(request, q);
    //}

    //public LookupResult Get(ServiceModel.Localidad.Lookup request)
    //{
    //    var query = Db.From<Domain.Localidad>().Select(x => new { x.Id, x.Nombre });

    //    if (!string.IsNullOrEmpty(request.Q))
    //    {
    //        query = query.Where(q => q.Nombre.Contains(request.Q));
    //    }

    //    var count = Db.Count(query);

    //    query = query.OrderBy(x => x.Nombre)
    //       .Limit((request.Page.GetValueOrDefault(1) - 1) * request.PageSize.GetValueOrDefault(100), request.PageSize.GetValueOrDefault(100));


    //    var result = new LookupResult
    //    {
    //        Data = Db.Select(query).Select(x => new LookupItem { Id = x.Id, Text = x.Nombre }),
    //        Total = (int)count
    //    };
    //    return result;
    //}


    //public LookupResult Get(ServiceModel.Localidad.LookupPorPartido request)
    //{
    //    var query = Db.From<Domain.Localidad>().Where(l => l.PartidoId == request.PartidoId).Select(x => new { x.Id, x.Nombre });

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

    //public LookupResult Get(ServiceModel.Localidad.LookupProvincia request)
    //{
    //    var query = Db.From<Domain.Provincia>().Select(x => new { x.Id, x.Nombre });

    //    if (!string.IsNullOrEmpty(request.Q))
    //    {
    //        query = query.Where(q => q.Nombre.Contains(request.Q));
    //    }

    //    var count = Db.Count(query);

    //    query = query.OrderBy(x => x.Nombre)
    //       .Limit((request.Page.GetValueOrDefault(1) - 1) * request.PageSize.GetValueOrDefault(100), request.PageSize.GetValueOrDefault(100));


    //    var result = new LookupResult
    //    {
    //        Data = Db.Select(query).Select(x => new LookupItem { Id = x.Id, Text = x.Nombre }),
    //        Total = (int)count
    //    };
    //    return result;
    //}

    //public object Post(ServiceModel.Localidad.DeleteLocalidad request)
    //{
    //    var autos = Db.Select<Domain.Localidad>(m => m.Id == request.Id);
    //    if (autos.Count == 0)
    //    {
    //        Db.DeleteById<Domain.Localidad>(request.Id);
    //        return new { result = true };
    //    }
    //    else
    //    {
    //        return new { result = false };
    //    }
    //}
  }
}

