using FluentNHibernate.Mapping;
using TSModel.Dominio.Consejeria;

namespace TSModel.Maps.Consejeria
{
    public class AntecedenteMap : ClassMap<Antecedente>
    {
        public AntecedenteMap()
        {
            Table("Antecedentes");
            Id(x => x.Id);
            References(x => x.Consejeria).Not.Nullable();
            Map(x => x.Gestas);
            Map(x => x.PartosVaginal);
            Map(x => x.Cesareas);
            Map(x => x.AbortoEspontaneo);
            Map(x => x.AbortoVoluntario);
            Map(x => x.MACNoUsa);
            Map(x => x.MACACO);
            Map(x => x.MACACI);
            Map(x => x.MACDIU);
            Map(x => x.MACPreservativo);
            Map(x => x.MACImplanteHormonal);
            Map(x => x.FalloMAC);
            Map(x => x.NoUsoMAC);
            Map(x => x.AHEMAC);
            Map(x => x.Observaciones);
        }
    }
}
