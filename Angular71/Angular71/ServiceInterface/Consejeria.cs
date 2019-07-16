using ServiceStack;
using ServiceStack.OrmLite;
using System;
using TSModel.Dominio.Consejeria;
using MyApp.ServiceModel;

namespace MyApp.ServiceInterface
{
  [Microsoft.AspNetCore.Authorization.Authorize]
  public class ConsejeriaService : Service
  {
    public IAutoQueryDb AutoQuery { get; set; }

    public object Get(GetConsejerias request)
    {
      //var alumnos = Db.Select<ConsejeriaEntidad>();
      //return alumnos;

      var q = AutoQuery.CreateQuery(request, Request.GetRequestParams())
         .Join<TSModel.Dominio.Consejeria.ConsejeriaEntidad, TSModel.Dominio.Consejeria.Usuaria>((c, u) => c.UsuariaId == u.Id, Db.JoinAlias("Usuarias"))
         .Join<TSModel.Dominio.Consejeria.ConsejeriaEntidad, TSModel.Dominio.Usuarie>((c, p) => c.Usuarie1Id == p.Id, Db.JoinAlias("Usuaries1"))
         .Join<TSModel.Dominio.Consejeria.ConsejeriaEntidad, TSModel.Dominio.Usuarie>((c, p) => c.Usuarie2Id == p.Id, Db.JoinAlias("Usuaries2"));
      q.Select<ConsejeriaEntidad, TSModel.Dominio.Consejeria.Usuaria, TSModel.Dominio.Usuarie>((c, u, p) => new 
      {
        c.Id,
        c.Numero,
        c.FechaIngreso,
        c.Observacion,
        UsuariaApellido = u.Apellido,
        UsuariaNombre = u.Nombre,
        Usuarie1Apellido = Sql.JoinAlias(p.Apellido, "Usuaries1"),
        Usuarie1Nombre = Sql.JoinAlias(p.Nombre, "Usuaries1"),
        Usuarie2Apellido = Sql.JoinAlias(p.Apellido, "Usuaries2"),
        Usuarie2Nombre = Sql.JoinAlias(p.Nombre, "Usuaries2"),
      });


      //si quiero devolver el objeto result ConsejeriaResult y hago el  => new ConsejeriaResult{ Id = c.Id}  me da error  con  la c que noe sta definida en el scope. no se que es.

      var result = AutoQuery.Execute(request, q);
      return result.Results;

    }
    public object Get(GetConsejeriaById request)
    { 
      return Db.SingleById<ConsejeriaEntidad>(request.Id);
    }

    public object Post(PostConsejeria request)
    {
      request.FechaIngreso = DateTime.Now;
      request.Id = (int)Db.Insert<ConsejeriaEntidad>(request, true);
      return request;
    }

    public object Put(PostConsejeria request)
    {
      Db.Update<ConsejeriaEntidad>(request);
      return request;
    }

    public object Delete(DeleteConsejeria request)
    {
      try
      {
        Db.DeleteById<ConsejeriaEntidad>(request.Id);
        return true;
      }
      catch (Exception)
      {
        return false;
      }
    }
  }
}
