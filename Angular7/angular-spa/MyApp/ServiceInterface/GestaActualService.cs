using MyApp.ServiceModel;
using ServiceStack;
using ServiceStack.OrmLite;
using System;
using TSModel.Dominio.Consejeria;

namespace MyApp.ServiceInterface
{
  public class GestaActualService : Service
  {
    public IAutoQueryDb AutoQuery { get; set; }

    public object Get(GetGestasActuales request)
    {
      var alumnos = Db.Select<GestaActual>();
      return alumnos;
    }
    public object Get(GetGestaActualById request)
    {
      return Db.SingleById<GestaActual>(request.Id);
    }

    public object Get(GetGestaActualByConsejeriaId request)
    {
      return Db.Single<GestaActual>(ant => ant.ConsejeriaId == request.ConsejeriaId);
    }
    
    public object Post(PostGestaActual request)
    {
      request.Id = (int)Db.Insert<GestaActual>(request, true);
      return request;
    }

    public object Put(PostGestaActual request)
    {
      Db.Update<GestaActual>(request);
      return request;
    }

    public object Delete(DeleteGestaActual request)
    {
      try
      {
        Db.DeleteById<GestaActual>(request.Id);
        return true;
      }
      catch (Exception)
      {
        return false;
      }
    }
  }
}
