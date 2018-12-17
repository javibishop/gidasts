using FluentNHibernate.Mapping;
using TSModel.Dominio.Consejeria;

namespace TSModel.Maps.Consejeria
{
    public class UsuariaMap : SubclassMap<Usuaria>
    {
        public UsuariaMap()
        {
            Join("Usuarias", m =>
            {
                m.KeyColumn("Id");
                m.Map(x => x.UsuarioCentroSalud);
                m.Map(x => x.ParejaConViviente);
                m.Map(x => x.ParejaNoConViviente);
                m.Map(x => x.SinPareja);
                m.Map(x => x.ConocePorConocido);
                m.Map(x => x.ConocePorUS);
                m.Map(x => x.ConocePorOrganizacion);
                m.Map(x => x.ConocePorMedios);
                m.Map(x => x.ConocePorUsuarioConsejeria);
                m.Map(x => x.ConocePorInsititucionSalud);
                m.Map(x => x.ConocePorInsititucionSaludObs);
                m.Map(x => x.ConocePorOtro);
                m.Map(x => x.NivelInstruccion);
                m.Map(x => x.NivelInstruccionEstado);
            });
            DiscriminatorValue(2);
        }
    }
}
