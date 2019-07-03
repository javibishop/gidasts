using ServiceStack.DataAnnotations;
using System;

namespace TSModel.Dominio.Consejeria
{
    [Alias("EstudiosComplementarios")]
    public class EstudioComplementario : EntidadBase
    {
        public int ConsejeriaId { get; set; }

        public string Eco1Observacion { get; set; }
        public DateTime Eco1Fecha { get; set; }
        public string Eco1EG { get; set; }
        public bool Eco1LFC { get; set; }
        public bool Eco1Embrion { get; set; }
        public bool Eco1Saco { get; set; }
        public string Eco1Ubicacion { get; set; }
        public bool Eco1Normoincerto { get; set; }
        public bool Eco1Ectopico { get; set; }

        public bool Eco1HMR { get; set; }

        public string Eco2Observacion { get; set; }
        public DateTime Eco2Fecha { get; set; }
        public string Eco2EG { get; set; }
        public bool Eco2LFC { get; set; }
        public bool Eco2Embrion { get; set; }
        public bool Eco2Saco { get; set; }
        public string Eco2Ubicacion { get; set; }
        public bool Eco2Normoincerto { get; set; }
        public bool Eco2Ectopico { get; set; }
        public bool Eco2HMR { get; set; }
        public DateTime LabFecha { get; set; }
        public string LabGB { get; set; }
        public string LabGR { get; set; }
        public string LabHb { get; set; }
        public string LabHto { get; set; }
        public string LabGrupo { get; set; }
        public string LabRh { get; set; }
    }
}
