using ServiceStack;
using ServiceStack.OrmLite;
using System;
using TSModel.Dominio;
using MyApp.ServiceModel;

namespace MyApp.ServiceInterface
{
  public class UsuarieService : Service
  {
    public IAutoQueryDb AutoQuery { get; set; }

    public object Get(GetUsuaries request)
    {
      var alumnos = Db.Select<Usuarie>();
      return alumnos;
    }
    public object Get(GetUsuarieById request)
    {
      return Db.SingleById<Usuarie>(request.Id);
    }

    public object Post(PostUsuarie request)
    {
      request.Id = (int)Db.Insert<Usuarie>(request, true);
      return request;
    }

    public object Put(PostUsuarie request)
    {
      Db.Update<Usuarie>(request);
      return request;
    }

    public object Delete(DeleteUsuarie request)
    {
      try
      {
        Db.DeleteById<Usuarie>(request.Id);
        return true;
      }
      catch (Exception)
      {
        return false;
      }
    }
  }
}
