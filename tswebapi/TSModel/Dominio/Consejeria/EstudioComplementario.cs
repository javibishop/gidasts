using System;

namespace TSModel.Dominio.Consejeria
{
    public class EstudioComplementario : EntidadBase
    {
        public virtual  Consejeria Consejeria { get; set; }
        public virtual DateTime Fecha { get; set; }
        public virtual  string Eco1Observacion { get; set; }
        public virtual  DateTime Eco1Fecha { get; set; }
        public virtual  string Eco1EG { get; set; }
        public virtual  bool Eco1LFC { get; set; }
        public virtual  bool Eco1Embrion { get; set; }
        public virtual  bool Eco1Saco { get; set; }
        public virtual  string Eco1Ubicacion { get; set; }
        public virtual  bool Eco1Normoincerto { get; set; }
        public virtual  bool Eco1Ectopico { get; set; }

        public virtual  string Eco2Observacion { get; set; }
        public virtual  DateTime Eco2Fecha { get; set; }
        public virtual  string Eco2EG { get; set; }
        public virtual  bool Eco2LFC { get; set; }
        public virtual  bool Eco2Embrion { get; set; }
        public virtual  bool Eco2Saco { get; set; }
        public virtual  string Eco2Ubicacion { get; set; }
        public virtual  bool Eco2Normoincerto { get; set; }
        public virtual  bool Eco2Ectopico { get; set; }

        public virtual  DateTime LabFecha { get; set; }
        public virtual  string LabGB { get; set; }
        public virtual  string LabGR { get; set; }
        public virtual  string LabHb { get; set; }
        public virtual  string LabHto { get; set; }
        public virtual  string LabGrupo { get; set; }
        public virtual  string LabRh { get; set; }
    }
}
