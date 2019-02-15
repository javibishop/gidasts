using System;

namespace TSModel.Dominio.Consejeria
{
    public class GestaActual: EntidadBase
    {
        public virtual Consejeria Consejeria { get; set; }
        public virtual bool EnteroPorTestOrina { get; set; }
        public virtual bool EnteroPorTestSangre { get; set; }
        public virtual bool EnteroPorEcografia{ get; set; }
        public virtual DateTime Fecha { get; set; }
        public virtual DateTime EnteroFecha { get; set; }
        public virtual string FUM { get; set; }
        public virtual string EGFUM { get; set; }
        public virtual bool IntentoSuprimir { get; set; }
        public virtual string IntentoSuprimirObservaciones { get; set; }
        public virtual bool Lactancia { get; set; }
        public virtual bool LoComento { get; set; }
        public virtual string LoComentoAQuien { get; set; }
        public virtual bool ILE { get; set; }
        public virtual bool CausaViolacion { get; set; }
        public virtual bool CausaSaludFisica{ get; set; }
        public virtual bool CausaSaludPSI { get; set; }
        public virtual bool CausaSaludSocial { get; set; }
        public virtual bool CausaSinVE { get; set; }

        public virtual bool CUMSPACO { get; set; }
        public virtual bool CUMSPDisfuncionHepaticaSevera { get; set; }
        public virtual bool CUMSPEmbarazoEctopico { get; set; }
        public virtual bool CUMSPAlergiaMisoDiclo { get; set; }

        public virtual bool FactorRiesgoHb7 { get; set; }
        public virtual bool FactorRiesgoCardiopatia { get; set; }
        public virtual bool FactorRiesgoDIU { get; set; }
        public virtual bool FactorRiesgoCardiovascular { get; set; }
        public virtual bool FactorRiesgoCorticoterapia { get; set; }
    }
}
