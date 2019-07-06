using ServiceStack;
using TSModel.Dominio;

namespace MyApp.ServiceModel
{
    [Route("/consejerias/especialidades")]
    public class GetEspecialidades : IReturn<Especialidad>
    {
    }

    [Route("/consejerias/especialidades/{Id}")]
    public class GetEspecialidadById : IReturn<Especialidad>
    {
        public int Id { get; set; }
    }

    [Route("/consejerias/especialidades", "POST")]
    [Route("/consejerias/especialidades/{Id}", "PUT")]
    public class PostEspecialidad : Especialidad
    {
    }

    [Route("/consejerias/especialidades/{Id}", "DELETE")]
    public class DeleteEspecialidad
    {
        public int Id { get; set; }
    }

}
