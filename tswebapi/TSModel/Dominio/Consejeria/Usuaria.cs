﻿namespace TSModel.Dominio.Consejeria
{
    public class Usuaria : Persona
    {
        public virtual bool UsuarioCentroSalud { get; set; }
        public virtual bool ParejaConViviente { get; set; }
        public virtual bool ParejaNoConViviente { get; set; }
        public virtual bool SinPareja { get; set; }
        public virtual bool ConocePorConocido { get; set; }
        public virtual bool ConocePorUS { get; set; }
        public virtual bool ConocePorOrganizacion { get; set; }
        public virtual bool ConocePorMedios { get; set; }
        public virtual bool ConocePorReferente { get; set; }
        public virtual bool ConocePorUsuarioConcejeria { get; set; }
        public virtual bool ConocePorInsititucionSalud { get; set; }
        public virtual string ConocePorInsititucionSaludObs { get; set; }
        public virtual string ConocePorOtro { get; set; }
        public virtual string TelefonoAlternativo { get; set; }

        public virtual short Cogestante { get; set; }
        public virtual short NivelInstruccion { get; set; }
        public virtual short NivelInstruccionEstado { get; set; }
    }
}
