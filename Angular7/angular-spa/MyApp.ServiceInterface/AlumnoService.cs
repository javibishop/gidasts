using MyApp.ServiceModel;
using ServiceStack;
using ServiceStack.OrmLite;
using System.Collections.Generic;

namespace MyApp.ServiceInterface
{
    public class AlumnoService : Service
    {
        public IAutoQueryDb AutoQuery { get; set; }

        public object Get(GetAlumnos request)
        {
            
            List<Alumno> alumnos = new List<Alumno>();
            alumnos.Add(new Alumno {Apellido = "A", Id = 1, Nombre = "A", PerfilId = 1, SexoId = 1 });
            return alumnos;
        }
        public object Get(GetAlumnoById request)
        {
            return new Alumno();
        }
    }
}
