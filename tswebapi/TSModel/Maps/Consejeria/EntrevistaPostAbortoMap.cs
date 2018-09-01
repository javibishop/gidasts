using FluentNHibernate.Mapping;
using TSModel.Dominio.Consejeria;

namespace TSModel.Maps.Consejeria
{
    public class EntrevistaPostAbortoMap : ClassMap<EntrevistaPostAborto>
    {
        public EntrevistaPostAbortoMap()
        {
            Table("EntrevistasPostAbortos");
            Id(x => x.Id);
            References(x => x.Consejeria).Not.Nullable();
            Map(x => x.Fecha);
            Map(x => x.ProcedimientoObservaciones);
            Map(x => x.ProcedimientoHecho);
            Map(x => x.ProcedimientoNoContinua);
            Map(x => x.ProcedimientoNoAbortoEspontaneo);
            Map(x => x.ProcedimientoNoOtro);
            Map(x => x.ProcedimientoSiInformado);
            Map(x => x.ProcedimientoSiOtra);
            Map(x => x.ProcedimientoSiViaV);
            Map(x => x.ProcedimientoSiViaSL);
            Map(x => x.ProcedimientoSiOtro);
            Map(x => x.AccedioPorFarmacia);
            Map(x => x.AccedioPorConocido);
            Map(x => x.AccedioPorInternet);
            Map(x => x.AccedioPorOrgSocial);
            Map(x => x.PresentacionSuelto);
            Map(x => x.PresentacionCaja20);
            Map(x => x.PresentacionCaja16);
            Map(x => x.EfectoAdversoNo);
            Map(x => x.EfectoAdversoGastro);
            Map(x => x.EfectoAdversoTemperatura);
            Map(x => x.EfectoAdversoCafalea);
            Map(x => x.EfectoAdversoOtro);
            Map(x => x.ComplicacionNo);
            Map(x => x.ComplicacionHemorragia);
            Map(x => x.ComplicacionInfeccion);
            Map(x => x.ComplicacionOtro);
            Map(x => x.IndicacionGammaglobulina);
            Map(x => x.EcografiaPostFecha);
            Map(x => x.EcografiaPostNoRealizo);
            Map(x => x.EcografiaPostAbortoCompleto);
            Map(x => x.EcografiaPostAbortoIncompleto);
            Map(x => x.EcografiaPostEmbrionViable);
            Map(x => x.EcografiaPostNuevaConsejeria);
            Map(x => x.EcografiaPostDerivacion2Nivel);
            Map(x => x.EcografiaPostConductaExpectante);
            Map(x => x.ConcejeriaMACNo);
            Map(x => x.ConcejeriaMACACO);
            Map(x => x.ConcejeriaMACACI);
            Map(x => x.ConcejeriaMACDIU);
            Map(x => x.ConcejeriaMACPreservativo);
            Map(x => x.ConcejeriaMACImplanteHormonal);
        }
    }
}
