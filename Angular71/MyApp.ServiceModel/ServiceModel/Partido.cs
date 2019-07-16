using ServiceStack;
namespace MyApp.ServiceModel
{
    public class Partido
    {
        [Route("/consejerias/partidos", "GET")]
        public class Get : TSModel.Dominio.Partido
        {
        }

        [Route("/consejerias/partidos/{Id}", "GET")]
        public class GetById : TSModel.Dominio.Partido
        {
            public int Id { get; set; }
        }

        [Route("/consejerias/partidos/{ProvinciaId}/porprovincia", "GET")]
        public class GetByProvinciaId 
        {
            public int ProvinciaId { get; set; }
        }

        [Route("/consejerias/partidos", "POST")]
        [Route("/consejerias/partidos/{Id}", "PUT")]
        public class Post : TSModel.Dominio.Partido
        {
        }
        [Route("/consejerias/partidos", "GET")]
        public class Query : TSModel.Dominio.Partido
        {
        }

        //[Route("/consejerias/partidos/lookup", "GET")]
        //public class Lookup : LookupRequest, IReturn<List<LookupItem>>
        //{
        //}

        [Route("/consejerias/partidos/delete/{Id}", "POST")]
        public class DeletePartido
        {
            public int Id { get; set; }
        }

    }
}
