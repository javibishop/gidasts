using System;

namespace TSModel.Dominio.Consejeria
{
    public class EntrevistaPostAborto : EntidadBase
    {
        public virtual  Consejeria Consejeria { get; set; }

        public virtual  DateTime Fecha { get; set; }
        public virtual  string ProcedimientoObservaciones { get; set; }

        public virtual  bool ProcedimientoHecho { get; set; }
        public virtual  bool ProcedimientoNoContinua { get; set; }
        public virtual  bool ProcedimientoNoAbortoEspontaneo { get; set; }
        public virtual  string ProcedimientoNoOtro { get; set; }

        public virtual  bool ProcedimientoSiInformado { get; set; }
        public virtual  bool ProcedimientoSiOtra { get; set; }
        public virtual  bool ProcedimientoSiViaV { get; set; }
        public virtual  bool ProcedimientoSiViaSL { get; set; }
        public virtual  string ProcedimientoSiOtro { get; set; }

        public virtual  bool AccedioPorFarmacia { get; set; }
        public virtual  bool AccedioPorConocido { get; set; }
        public virtual  bool AccedioPorInternet { get; set; }
        public virtual  bool AccedioPorOrgSocial { get; set; }

        public virtual  bool PresentacionSuelto { get; set; }
        public virtual  bool PresentacionCaja20 { get; set; }
        public virtual  bool PresentacionCaja16 { get; set; }

        public virtual  bool EfectoAdversoNo { get; set; }
        public virtual  bool EfectoAdversoGastro { get; set; }
        public virtual  bool EfectoAdversoTemperatura { get; set; }
        public virtual  bool EfectoAdversoCafalea { get; set; }
        public virtual  string EfectoAdversoOtro { get; set; }

        public virtual  bool ComplicacionNo { get; set; }
        public virtual  bool ComplicacionHemorragia { get; set; }
        public virtual  bool ComplicacionInfeccion { get; set; }
        public virtual  string ComplicacionOtro { get; set; }

        public virtual  bool IndicacionGammaglobulina { get; set; }

        public virtual  DateTime EcografiaPostFecha { get; set; }
        public virtual  bool EcografiaPostNoRealizo { get; set; }
        public virtual  bool EcografiaPostAbortoCompleto { get; set; }
        public virtual  bool EcografiaPostHMR { get; set; }
        public virtual  bool EcografiaPostAbortoIncompleto { get; set; }
        public virtual  bool EcografiaPostEmbrionViable { get; set; }
        public virtual  bool EcografiaPostNuevaConsejeria { get; set; }
        public virtual  bool EcografiaPostDerivacion2Nivel { get; set; }
        public virtual  bool EcografiaPostConductaExpectante { get; set; }

        public virtual  bool ConcejeriaMACNo { get; set; }
        public virtual  bool ConcejeriaMACACO { get; set; }
        public virtual  bool ConcejeriaMACACI { get; set; }
        public virtual  bool ConcejeriaMACDIU { get; set; }
        public virtual  bool ConcejeriaMACPreservativo { get; set; }
        public virtual  bool ConcejeriaMACImplanteHormonal { get; set; }
    }
}
