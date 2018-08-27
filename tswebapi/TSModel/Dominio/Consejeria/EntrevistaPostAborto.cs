using System;

namespace TSModel.Dominio.Consejeria
{
    public class EntrevistaPostAborto
    {
        public int ConsejeriaId { get; set; }
        public Consejeria Consejeria { get; set; }

        public DateTime Fecha { get; set; }
        public string ProcedimientoObservaciones { get; set; }

        public bool ProcedimientoHecho { get; set; }
        public bool ProcedimientoNoContinua { get; set; }
        public bool ProcedimientoNoAbortoEspontaneo { get; set; }
        public string ProcedimientoNoOtro { get; set; }

        public bool ProcedimientoSiInformado { get; set; }
        public bool ProcedimientoSiOtra { get; set; }
        public bool ProcedimientoSiViaV { get; set; }
        public bool ProcedimientoSiViaSL { get; set; }
        public string ProcedimientoSiOtro { get; set; }

        public bool AccedioPorFarmacia { get; set; }
        public bool AccedioPorConocido { get; set; }
        public bool AccedioPorInternet { get; set; }
        public bool AccedioPorOrgSocial { get; set; }

        public bool PresentacionSuelto { get; set; }
        public bool PresentacionCaja20 { get; set; }
        public bool PresentacionCaja16 { get; set; }

        public bool EfectoAdversoNo { get; set; }
        public bool EfectoAdversoGastro { get; set; }
        public bool EfectoAdversoTemperatura { get; set; }
        public bool EfectoAdversoCafalea { get; set; }
        public string EfectoAdversoOtro { get; set; }

        public bool ComplicacionNo { get; set; }
        public bool ComplicacionHemorragia { get; set; }
        public bool ComplicacionInfeccion { get; set; }
        public string ComplicacionOtro { get; set; }

        public bool IndicacionGammaglobulina { get; set; }

        public DateTime EcografiaPostFecha { get; set; }
        public bool EcografiaPostNoRealizo { get; set; }
        public bool EcografiaPostAbortoCompleto { get; set; }
        public bool EcografiaPostHMR { get; set; }
        public bool EcografiaPostAbortoIncompleto { get; set; }
        public bool EcografiaPostEmbrionViable { get; set; }
        public bool EcografiaPostNuevaConsejeria { get; set; }
        public bool EcografiaPostDerivacion2Nivel { get; set; }
        public bool EcografiaPostConductaExpectante { get; set; }

        public bool ConcejeriaMACNo { get; set; }
        public bool ConcejeriaMACACO { get; set; }
        public bool ConcejeriaMACACI { get; set; }
        public bool ConcejeriaMACDIU { get; set; }
        public bool ConcejeriaMACPreservativo { get; set; }
        public bool ConcejeriaMACImplanteHormonal { get; set; }
    }
}
