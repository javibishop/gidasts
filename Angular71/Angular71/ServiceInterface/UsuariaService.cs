using ServiceStack;
using ServiceStack.OrmLite;
using System;
using TSModel.Dominio;
using MyApp.ServiceModel;
using TSModel.Dominio.Consejeria;

namespace MyApp.ServiceInterface
{
  [Microsoft.AspNetCore.Authorization.Authorize]
  public class UsuariaService : Service
  {
    public IAutoQueryDb AutoQuery { get; set; }

    public object Get(GetUsuarias request)
    {
      var alumnos = Db.Select<Usuaria>();
      return alumnos;
    }
    public object Get(GetUsuariaById request)
    {
      return Db.SingleById<Usuaria>(request.Id);
    }

    public object Post(PostUsuaria request)
    {
      request.FechaNacimiento = DateTime.Now;
      request.Id = (int)Db.Insert<Usuaria>(request, true);
      return request;
    }

    public object Put(PostUsuaria request)
    {
      Db.Update<Usuaria>(request);
      return request;
    }

    public object Delete(DeleteUsuaria request)
    {
      try
      {
        Db.DeleteById<Usuaria>(request.Id);
        return true;
      }
      catch (Exception)
      {
        return false;
      }
    }
  }
}
