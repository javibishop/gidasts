using MyApp.ServiceModel.Domain;
using ServiceStack;
using TSModel.Dominio.Consejeria;

namespace MyApp.ServiceModel
{
    [Route("/consejerias/gestasactuales")]
    public class GetGestasActuales : IReturn<GestaActual>
    {
    }

    [Route("/consejerias/gestasactuales/{Id}")]
    public class GetGestaActualById : IReturn<GestaActual>
    {
        public int Id { get; set; }
    }

    [Route("/consejerias/{ConsejeriaId}/gestasactuales")]
    public class GetGestaActualByConsejeriaId : IReturn<GestaActual>
    {
        public int ConsejeriaId { get; set; }
    }

    [Route("/consejerias/gestasactuales", "POST")]
    [Route("/consejerias/gestasactuales/{Id}", "PUT")]
    public class PostGestaActual : GestaActual
    {
    }

    [Route("/consejerias/gestasactuales/{Id}", "DELETE")]
    public class DeleteGestaActual
    {
        public int Id { get; set; }
    }

}
