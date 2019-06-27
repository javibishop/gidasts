using MyApp.ServiceModel;
using MyApp.ServiceModel.Domain;
using ServiceStack;
using ServiceStack.OrmLite;
using System;

namespace MyApp.ServiceInterface
{
  public class AlumnoService : Service
  {
    public IAutoQueryDb AutoQuery { get; set; }

    public object Get(GetAlumnos request)
    {
      var alumnos = Db.Select<Alumno>();
      //List<Alumno> alumnos = new List<Alumno>();
      //alumnos.Add(new Alumno { Apellido = "A", Id = 1, Nombre = "A", PerfilId = 1, SexoId = 1 });
      return alumnos;
    }
    public object Get(GetAlumnoById request)
    {
      return Db.SingleById<Alumno>(request.Id);
    }

    public object Post(PostAlumno request)
    {
      request.Id = (int)Db.Insert<Alumno>(request, true);
      return request;
    }

    public object Put(PostAlumno request)
    {
      Db.Update<Alumno>(request);
      return request;
    }

    public object Delete(DeleteAlumno request)
    {
      try
      {
        Db.DeleteById<Alumno>(request.Id);
        return true;
      }
      catch (Exception)
      {
        return false;
      }
    }
  }
}
