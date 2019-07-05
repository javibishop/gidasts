using ServiceStack;
namespace MyApp.ServiceModel
{
    public class Partido
    {
        [Route("/servicios/maestros/partidos", "GET")]
        public class Get : TSModel.Dominio.Partido
        {
        }

        [Route("/servicios/maestros/partidos/{Id}", "GET")]
        public class GetById : TSModel.Dominio.Partido
        {
            public int Id { get; set; }
        }

        [Route("/servicios/maestros/partidos", "POST")]
        [Route("/servicios/maestros/partidos/{Id}", "PUT")]
        public class Post : TSModel.Dominio.Partido
        {
        }
        [Route("/servicios/maestros/partidos", "GET")]
        public class Query : TSModel.Dominio.Partido
        {
        }

        //[Route("/servicios/maestros/partidos/lookup", "GET")]
        //public class Lookup : LookupRequest, IReturn<List<LookupItem>>
        //{
        //}

        [Route("/servicios/maestros/partidos/delete/{Id}", "POST")]
        public class DeletePartido
        {
            public int Id { get; set; }
        }

    }
}
