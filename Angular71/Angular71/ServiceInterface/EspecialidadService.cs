using MyApp.ServiceModel;
using ServiceStack;
using ServiceStack.OrmLite;
using System;
using TSModel.Dominio;

namespace MyApp.ServiceInterface
{
  [Microsoft.AspNetCore.Authorization.Authorize]
  public class EspecialidadService : Service
  {
    public IAutoQueryDb AutoQuery { get; set; }

    public object Get(GetEspecialidades request)
    {
      var especialidads = Db.Select<Especialidad>();
      return especialidads;
    }
    public object Get(GetEspecialidadById request)
    {
      return Db.SingleById<Especialidad>(request.Id);
    }

    public object Post(PostEspecialidad request)
    {
      request.Id = (int)Db.Insert<Especialidad>(request, true);
      return request;
    }

    public object Put(PostEspecialidad request)
    {
      Db.Update<Especialidad>(request);
      return request;
    }

    public object Delete(DeleteEspecialidad request)
    {
      try
      {
        Db.DeleteById<Especialidad>(request.Id);
        return true;
      }
      catch (Exception)
      {
        return false;
      }
    }
  }
}
