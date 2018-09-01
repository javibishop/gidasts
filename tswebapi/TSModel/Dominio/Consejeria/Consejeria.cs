using System;

namespace TSModel.Dominio.Consejeria
{
    public class Consejeria : EntidadBase
    {
        public virtual  int Numero { get; set; }
        public virtual  DateTime FechaIngreso { get; set; }
        public virtual  Usuarie Usuarie1 { get; set; }
        public virtual  Usuarie Usuarie2 { get; set; }
        public virtual  Usuaria Usuaria { get; set; }
        public virtual  string Observacion { get; set; }
    }
}
