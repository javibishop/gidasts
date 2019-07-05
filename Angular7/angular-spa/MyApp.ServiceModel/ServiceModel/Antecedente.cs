using ServiceStack;
using TSModel.Dominio.Consejeria;

namespace MyApp.ServiceModel
{
    [Route("/consejerias/antecedentes")]
    public class GetAntecedentes : IReturn<Antecedente>
    {
    }

    [Route("/consejerias/antecedentes/{Id}")]
    public class GetAntecedenteById : IReturn<Antecedente>
    {
        public int Id { get; set; }
    }

    [Route("/consejerias/{ConsejeriaId}/antecedentes")]
    public class GetAntecedenteByConsejeriaId : IReturn<Antecedente>
    {
        public int ConsejeriaId { get; set; }
    }

    [Route("/consejerias/antecedentes", "POST")]
    [Route("/consejerias/antecedentes/{Id}", "PUT")]
    public class PostAntecedente : Antecedente
    {
    }

    [Route("/consejerias/antecedentes/{Id}", "DELETE")]
    public class DeleteAntecedente
    {
        public int Id { get; set; }
    }

}
