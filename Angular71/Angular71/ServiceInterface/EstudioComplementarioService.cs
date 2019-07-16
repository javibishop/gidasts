using MyApp.ServiceModel;
using ServiceStack;
using ServiceStack.OrmLite;
using System;
using TSModel.Dominio.Consejeria;

namespace MyApp.ServiceInterface
{
  [Microsoft.AspNetCore.Authorization.Authorize]
  public class EstudioComplementarioService : Service
  {
    public IAutoQueryDb AutoQuery { get; set; }

    public object Get(GetEstudiosComplementarios request)
    {
      var ecs = Db.Select<EstudioComplementario>();
      return ecs;
    }
    public object Get(GetEstudioComplementarioById request)
    {
      return Db.SingleById<EstudioComplementario>(request.Id);
    }

    public object Get(GetEstudioComplementarioByConsejeriaId request)
    {
      return Db.Single<EstudioComplementario>(ant => ant.ConsejeriaId == request.ConsejeriaId);
    }
    
    public object Post(PostEstudioComplementario request)
    {
      request.Id = (int)Db.Insert<EstudioComplementario>(request, true);
      return request;
    }

    public object Put(PostEstudioComplementario request)
    {
      Db.Update<EstudioComplementario>(request);
      return request;
    }

    public object Delete(DeleteEstudioComplementario request)
    {
      try
      {
        Db.DeleteById<EstudioComplementario>(request.Id);
        return true;
      }
      catch (Exception)
      {
        return false;
      }
    }
  }
}
