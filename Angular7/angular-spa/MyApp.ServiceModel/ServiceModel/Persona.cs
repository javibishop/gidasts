using ServiceStack;
using TSModel.Dominio;

namespace MyApp.ServiceModel
{
    [Route("/consejerias/personas")]
    public class GetPersonas : IReturn<Persona>
    {
    }

    [Route("/consejerias/personas/{Id}")]
    public class GetPersonaById : IReturn<Persona>
    {
        public int Id { get; set; }
    }

    [Route("/consejerias/personas", "POST")]
    [Route("/consejerias/personas/{Id}", "PUT")]
    public class PostPersona : Persona
    {
    }

    [Route("/consejerias/personas/{Id}", "DELETE")]
    public class DeletePersona
    {
        public int Id { get; set; }
    }

}
