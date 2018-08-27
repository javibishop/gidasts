using System;
using System.Collections.Generic;
using System.Text;

namespace TSModel.Dominio
{
    public class Consejeria
    {
        public int Numero { get; set; }
        public int PacienteId { get; set; }
        public DateTime FechaIngreso { get; set; }
        public int Residente1Id { get; set; }
        public int Residente2Id { get; set; }
        public string Observacion { get; set; }
    }
}
