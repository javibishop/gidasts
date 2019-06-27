using ServiceStack.DataAnnotations;
using System;

namespace TSModel.Dominio.Consejeria
{
    [Alias("Consejerias")]
    public class ConsejeriaEntidad : EntidadBase
    {
        public int Numero { get; set; }
        public DateTime FechaIngreso { get; set; }
        [References(typeof(Usuarie))]
        public int Usuarie1Id { get; set; }
        [References(typeof(Usuarie))]
        public int Usuarie2Id { get; set; }
        [References(typeof(Usuaria))]
        public int UsuariaId { get; set; }
        public string Observacion { get; set; }
    }
}
