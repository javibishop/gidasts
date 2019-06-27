using MyApp.ServiceModel.Domain;
using ServiceStack;

namespace MyApp.ServiceModel
{
    [Route("/alumnos")]
    public class GetAlumnos : IReturn<Alumno>
    {
    }

    [Route("/alumnos/{Id}")]
    public class GetAlumnoById : IReturn<Alumno>
    {
        public int Id { get; set; }
    }

    [Route("/alumnos", "POST")]
    [Route("/alumnos/{Id}", "PUT")]
    public class PostAlumno : Alumno
    {
    }

    [Route("/alumnos/{Id}", "DELETE")]
    public class DeleteAlumno
    {
        public int Id { get; set; }
    }

}
