using System;

namespace TSModel.Dominio
{
    public class Usuaria : Persona
    {
        public bool UsuarioCentroSalud { get; set; }
        public bool ParejaConViviente { get; set; }
        public bool ParejaNoConViviente { get; set; }
        public bool SinPareja { get; set; }

        public bool ConocePorConocido { get; set; }
        public bool ConocePorUS { get; set; }
        public bool ConocePorOrganizacion { get; set; }
        public bool ConocePorMedios { get; set; }
        public bool ConocePorUsuarioConcejeria { get; set; }
        public bool ConocePorInsititucionSalud { get; set; }
        public string ConocePorInsititucionSaludObs { get; set; }
        public string ConocePorOtro { get; set; }

        public int NivelInstruccion { get; set; }
        public int NivelInstruccionEstado { get; set; }
    }
}
