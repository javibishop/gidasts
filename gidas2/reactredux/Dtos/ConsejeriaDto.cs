using System;

namespace tswebapi.Dtos
{
    public class ConsejeriaDto
    {
        public int Id { get; set; }
        public int Numero { get; set; }
        public DateTime FechaIngreso { get; set; }
        public string Usuario1 { get; set; }
        public string Usuario2 { get; set; }
        public string Usuaria { get; set; }
        public int Usuarie1Id { get; set; }
        public int Usuarie2Id { get; set; }
        public int UsuariaId { get; set; }
        public string Observacion { get; set; }
    }
}
