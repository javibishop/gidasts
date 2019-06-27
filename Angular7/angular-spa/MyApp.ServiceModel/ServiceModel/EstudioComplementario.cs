using MyApp.ServiceModel.Domain;
using ServiceStack;
using TSModel.Dominio.Consejeria;

namespace MyApp.ServiceModel
{
    [Route("/consejerias/estudioscomplementarios")]
    public class GetEstudiosComplementarios : IReturn<EstudioComplementario>
    {
    }

    [Route("/consejerias/estudioscomplementarios/{Id}")]
    public class GetEstudioComplementarioById : IReturn<EstudioComplementario>
    {
        public int Id { get; set; }
    }

    [Route("/consejerias/{ConsejeriaId}/estudioscomplementarios")]
    public class GetEstudioComplementarioByConsejeriaId : IReturn<EstudioComplementario>
    {
        public int ConsejeriaId { get; set; }
    }

    [Route("/consejerias/estudioscomplementarios", "POST")]
    [Route("/consejerias/estudioscomplementarios/{Id}", "PUT")]
    public class PostEstudioComplementario : EstudioComplementario
    {
    }

    [Route("/consejerias/estudioscomplementarios/{Id}", "DELETE")]
    public class DeleteEstudioComplementario
    {
        public int Id { get; set; }
    }

}
