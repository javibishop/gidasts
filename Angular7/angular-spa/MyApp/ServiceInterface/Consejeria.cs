using ServiceStack;
using ServiceStack.OrmLite;
using System;
using TSModel.Dominio.Consejeria;
using MyApp.ServiceModel;

namespace MyApp.ServiceInterface
{
  public class ConsejeriaService : Service
  {
    public IAutoQueryDb AutoQuery { get; set; }

    public object Get(GetConsejerias request)
    {
      var alumnos = Db.Select<ConsejeriaEntidad>();
      return alumnos;
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
