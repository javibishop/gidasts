

using ServiceStack;
using System.Collections.Generic;

namespace MyApp.ServiceModel
{
    public class Localidad
    {
        [Route("/consejerias/localidades/{Id}", "GET")]
        public class GetById
        {
            public int Id { get; set; }
        }

        [Route("/consejerias/localidades/{PartidoId}/porpartido", "GET")]
        public class GetByPartidoId
        {
            public int PartidoId { get; set; }
        }

        [Route("/consejerias/localidades", "GET")]
        public class Get
        {
        }

        [Route("/consejerias/localidades", "POST")]
        [Route("/consejerias/localidades/{Id}", "PUT")]
        public class Post : TSModel.Dominio.Localidad
        {
        }
        [Route("/consejerias/localidades", "GET")]
        public class Query : TSModel.Dominio.Localidad
            , IJoin<TSModel.Dominio.Localidad, TSModel.Dominio.Pais>
        {
        }

        //[Route("/consejerias/localidades/lookup", "GET")]
        //public class Lookup : LookupRequest, IReturn<List<LookupItem>>
        //{
        //}

        //[Route("/consejerias/localidades/{PaisId}/lookup", "GET")]
        //public class LookupPorPais : LookupRequest, IReturn<List<LookupItem>>
        //{
        //    public int PaisId { get; set; }
        //}

        //[Route("/consejerias/localidades/lookupprovincia", "GET")]
        //public class LookupProvincia : LookupRequest, IReturn<List<LookupItem>>
        //{
        //}

        [Route("/consejerias/localidades/delete/{Id}", "POST")]
        public class DeleteLocalidad
        {
            public int Id { get; set; }
        }
        public class QueryResult
        {
            public int Id { get; set; }
            public string Nombre { get; set; }
            public string CP { get; set; }
            public string PaisNombre { get; set; }
        }
    }
}
