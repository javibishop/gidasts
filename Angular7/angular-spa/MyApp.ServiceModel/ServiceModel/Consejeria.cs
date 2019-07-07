using ServiceStack;
using System;
using TSModel.Dominio.Consejeria;

namespace MyApp.ServiceModel
{
    [Route("/consejerias/consejerias")]
    public class GetConsejerias : QueryDb<ConsejeriaEntidad, ConsejeriaResult>
       
    {
    }

    [Route("/consejerias/consejerias/{Id}")]
    public class GetConsejeriaById : IReturn<ConsejeriaEntidad>
    {
        public int Id { get; set; }
    }

    [Route("/consejerias/consejerias", "POST")]
    [Route("/consejerias/consejerias/{Id}", "PUT")]
    public class PostConsejeria : ConsejeriaEntidad
    {
    }

    [Route("/consejerias/consejerias/{Id}", "DELETE")]
    public class DeleteConsejeria
    {
        public int Id { get; set; }
    }


    public class ConsejeriaResult 
    {
        public int Id { get; set; }
        public int Numero { get; set; }
        public DateTime FechaIngreso { get; set; }
        public string Observacion { get; set; }
        public string Usuarie1Nombre { get; set; }
        public string Usuarie2Nombre { get; set; }
        public string UsuariaNombre { get; set; }
        public string Usuarie1Apellido { get; set; }
        public string Usuarie2Apellido { get; set; }
        public string UsuariaApellido { get; set; }
    }
}
