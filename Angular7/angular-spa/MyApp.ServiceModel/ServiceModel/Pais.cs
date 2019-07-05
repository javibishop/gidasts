using ServiceStack;



namespace MyApp.ServiceModel
{
    public class Pais
    {
        [Route("/consejerias/paises", "GET")]
        public class Get : TSModel.Dominio.Pais
        {
        }

        [Route("/consejerias/paises/{Id}", "GET")]
        public class GetById : TSModel.Dominio.Pais
        {
            public int Id { get; set; }
        }

        [Route("/consejerias/paises", "POST")]
        [Route("/consejerias/paises/{Id}", "PUT")]
        public class Post : TSModel.Dominio.Pais
        {
        }
        [Route("/consejerias/paises", "GET")]
        public class Query : TSModel.Dominio.Pais
        {
        }

        //[Route("/consejerias/paises/lookup", "GET")]
        //public class Lookup : LookupRequest, IReturn<List<LookupItem>>
        //{
        //}

        [Route("/consejerias/paises/delete/{Id}", "POST")]
        public class DeletePais
        {
            public int Id { get; set; }
        }

    }
}
