using ServiceStack;
using ServiceStack.OrmLite;
using System;
using TSModel.Dominio;
using MyApp.ServiceModel;

namespace MyApp.ServiceInterface
{
  [Microsoft.AspNetCore.Authorization.Authorize]
  public class PersonaService : Service
  {
    public IAutoQueryDb AutoQuery { get; set; }

    public object Get(GetPersonas request)
    {
      var alumnos = Db.Select<Persona>();
      return alumnos;
    }
    public object Get(GetPersonaById request)
    {
      return Db.SingleById<Persona>(request.Id);
    }

    public object Post(PostPersona request)
    {
      request.Id = (int)Db.Insert<Persona>(request, true);
      return request;
    }

    public object Put(PostPersona request)
    {
      Db.Update<Persona>(request);
      return request;
    }

    public object Delete(DeletePersona request)
    {
      try
      {
        Db.DeleteById<Persona>(request.Id);
        return true;
      }
      catch (Exception)
      {
        return false;
      }
    }
  }
}
