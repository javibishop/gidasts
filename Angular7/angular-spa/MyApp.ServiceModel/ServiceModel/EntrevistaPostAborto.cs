using ServiceStack;
using TSModel.Dominio.Consejeria;

namespace MyApp.ServiceModel
{
    [Route("/consejerias/entrevistaspostabortos")]
    public class GetEntrevistasPostAbortos : IReturn<EntrevistaPostAborto>
    {
    }

    [Route("/consejerias/entrevistaspostabortos/{Id}")]
    public class GetEntrevistaPostAbortoById : IReturn<EntrevistaPostAborto>
    {
        public int Id { get; set; }
    }

    [Route("/consejerias/{ConsejeriaId}/entrevistaspostabortos")]
    public class GetEntrevistaPostAbortoByConsejeriaId : IReturn<EntrevistaPostAborto>
    {
        public int ConsejeriaId { get; set; }
    }

    [Route("/consejerias/entrevistaspostabortos", "POST")]
    [Route("/consejerias/entrevistaspostabortos/{Id}", "PUT")]
    public class PostEntrevistaPostAborto : EntrevistaPostAborto
    {
    }

    [Route("/consejerias/entrevistaspostabortos/{Id}", "DELETE")]
    public class DeleteEntrevistaPostAborto
    {
        public int Id { get; set; }
    }

}
