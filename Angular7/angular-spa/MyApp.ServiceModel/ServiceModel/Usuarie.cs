using ServiceStack;
using TSModel.Dominio;

namespace MyApp.ServiceModel
{
    [Route("/consejerias/usuaries")]
    public class GetUsuaries : IReturn<Usuarie>
    {
    }

    [Route("/consejerias/usuaries/{Id}")]
    public class GetUsuarieById : IReturn<Usuarie>
    {
        public int Id { get; set; }
    }

    [Route("/consejerias/usuaries", "POST")]
    [Route("/consejerias/usuaries/{Id}", "PUT")]
    public class PostUsuarie : Usuarie
    {
    }

    [Route("/consejerias/usuaries/{Id}", "DELETE")]
    public class DeleteUsuarie
    {
        public int Id { get; set; }
    }

}
