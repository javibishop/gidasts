using ServiceStack;
using TSModel.Dominio;
using TSModel.Dominio.Consejeria;

namespace MyApp.ServiceModel
{
    [Route("/consejerias/usuarias")]
    public class GetUsuarias : IReturn<Usuaria>
    {
    }

    [Route("/consejerias/usuarias/{Id}")]
    public class GetUsuariaById : IReturn<Usuaria>
    {
        public int Id { get; set; }
    }

    [Route("/consejerias/usuarias", "POST")]
    [Route("/consejerias/usuarias/{Id}", "PUT")]
    public class PostUsuaria : Usuaria
    {
    }

    [Route("/consejerias/usuarias/{Id}", "DELETE")]
    public class DeleteUsuaria
    {
        public int Id { get; set; }
    }

}
