using MyApp.ServiceModel.Domain;
using ServiceStack;
using TSModel.Dominio.Consejeria;

namespace MyApp.ServiceModel
{
    [Route("/consejerias/gestasctuales")]
    public class GetGestasActuales : IReturn<GestaActual>
    {
    }

    [Route("/consejerias/gestasctuales/{Id}")]
    public class GetGestaActualById : IReturn<GestaActual>
    {
        public int Id { get; set; }
    }

    [Route("/consejerias/{ConsejeriaId}/gestasctuales")]
    public class GetGestaActualByConsejeriaId : IReturn<GestaActual>
    {
        public int ConsejeriaId { get; set; }
    }

    [Route("/consejerias/gestasctuales", "POST")]
    [Route("/consejerias/gestasctuales/{Id}", "PUT")]
    public class PostGestaActual : GestaActual
    {
    }

    [Route("/consejerias/gestasctuales/{Id}", "DELETE")]
    public class DeleteGestaActual
    {
        public int Id { get; set; }
    }

}
