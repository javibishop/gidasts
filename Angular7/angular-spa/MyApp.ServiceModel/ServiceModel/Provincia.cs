using ServiceStack;

namespace MyApp.ServiceModel
{
    public class Provincia
    {
        [Route("/consejerias/provincias", "GET")]
        public class Get : TSModel.Dominio.Provincia
        {
        }

        [Route("/consejerias/provincias/{Id}", "GET")]
        public class GetById : TSModel.Dominio.Provincia
        {
            public int Id { get; set; }
        }

        [Route("/consejerias/provincias", "POST")]
        [Route("/consejerias/provincias/{Id}", "PUT")]
        public class Post : TSModel.Dominio.Provincia
        {
        }
        [Route("/consejerias/provincias", "GET")]
        public class Query : TSModel.Dominio.Provincia
        {
        }

        //[Route("/consejerias/Provincias/lookup", "GET")]
        //public class Lookup : LookupRequest, IReturn<List<LookupItem>>
        //{
        //}

        [Route("/consejerias/provincias/delete/{Id}", "POST")]
        public class DeleteProvincia
        {
            public int Id { get; set; }
        }
      
    }
}
