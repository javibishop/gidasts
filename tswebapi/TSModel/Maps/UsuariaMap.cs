using FluentNHibernate.Mapping;
using TSModel.Dominio;

namespace TSModel.Maps
{
    public class UsuariaMap : SubclassMap<Usuaria>
    {
        public UsuariaMap()
        {
            Table("Usuarias");
            KeyColumn("Id");
            Map(x => x.UsuarioCentroSalud);
            Map(x => x.ParejaConViviente);
            Map(x => x.ParejaNoConViviente);
            Map(x => x.SinPareja);
            Map(x => x.ConocePorConocido);
            Map(x => x.ConocePorUS);
            Map(x => x.ConocePorOrganizacion);
            Map(x => x.ConocePorMedios);
            Map(x => x.ConocePorUsuarioConcejeria);
            Map(x => x.ConocePorInsititucionSalud);
            Map(x => x.ConocePorInsititucionSaludObs);
            Map(x => x.ConocePorOtro);
            Map(x => x.NivelInstruccion);
            Map(x => x.NivelInstruccionEstado);
        }
    }
}
