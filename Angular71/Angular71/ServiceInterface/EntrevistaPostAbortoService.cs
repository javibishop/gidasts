using MyApp.ServiceModel;
using ServiceStack;
using ServiceStack.OrmLite;
using System;
using TSModel.Dominio.Consejeria;

namespace MyApp.ServiceInterface
{
  [Microsoft.AspNetCore.Authorization.Authorize]
  public class EntrevistaPostAbortoService : Service
  {
    public IAutoQueryDb AutoQuery { get; set; }

    public object Get(GetEntrevistasPostAbortos request)
    {
      var ecs = Db.Select<EntrevistaPostAborto>();
      return ecs;
    }
    public object Get(GetEntrevistaPostAbortoById request)
    {
      return Db.SingleById<EntrevistaPostAborto>(request.Id);
    }

    public object Get(GetEntrevistaPostAbortoByConsejeriaId request)
    {
      return Db.Single<EntrevistaPostAborto>(ant => ant.ConsejeriaId == request.ConsejeriaId);
    }
    
    public object Post(PostEntrevistaPostAborto request)
    {
      request.Id = (int)Db.Insert<EntrevistaPostAborto>(request, true);
      return request;
    }

    public object Put(PostEntrevistaPostAborto request)
    {
      Db.Update<EntrevistaPostAborto>(request);
      return request;
    }

    public object Delete(DeleteEntrevistaPostAborto request)
    {
      try
      {
        Db.DeleteById<EntrevistaPostAborto>(request.Id);
        return true;
      }
      catch (Exception)
      {
        return false;
      }
    }
  }
}
