using FluentNHibernate.Mapping;
using TSModel.Dominio.Consejeria;

namespace TSModel.Maps.Consejeria
{
    public class GestaActualMap : ClassMap<GestaActual>
    {
        public GestaActualMap()
        {
            Table("GestasActuales");
            Id(x => x.Id);
            References(x => x.Consejeria).Not.Nullable();
            Map(x => x.EnteroPorTestOrina);
            Map(x => x.EnteroPorTestSangre);
            Map(x => x.EnteroPorEcografia);
            Map(x => x.EnteroFecha);
            Map(x => x.FUM);
            Map(x => x.EGFUM);
            Map(x => x.IntentoSuprimir);
            Map(x => x.IntentoSuprimirObservaciones);
            Map(x => x.Lactancia);
            Map(x => x.LoComento);
            Map(x => x.LoComentoAQuien);
            Map(x => x.ILE);
            Map(x => x.CausaViolacion);
            Map(x => x.CausaSaludFisica);
            Map(x => x.CausaSaludPSI);
            Map(x => x.CausaSaludSocial);
            Map(x => x.CausaSinVE);
            Map(x => x.CUMSPACO);
            Map(x => x.CUMSPDisfuncionHepaticaSevera);
            Map(x => x.CUMSPEmbarazoEctopico);
            Map(x => x.CUMSPAlergiaMisoDiclo);
            Map(x => x.FactorRiesgoHb7);
            Map(x => x.FactorRiesgoCardiopatia);
            Map(x => x.FactorRiesgoDIU);
            Map(x => x.FactorRiesgoCardiovascular);
            Map(x => x.FactorRiesgoCorticoterapia);
        }
    }
}
