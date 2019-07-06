using FluentNHibernate.Mapping;

namespace TSModel.Maps.Consejeria
{
    public class ConsejeriaMap : ClassMap<TSModel.Dominio.Consejeria.ConsejeriaEntidad>
    {
        public ConsejeriaMap()
        {
            Table("Consejerias");
            Id(x => x.Id).GeneratedBy.Identity();
            References<TSModel.Dominio.Consejeria.Usuaria>(x => x.Usuaria).Not.Nullable();
            References<TSModel.Dominio.Usuarie>(x => x.Usuarie1).Not.Nullable();
            References<TSModel.Dominio.Usuarie>(x => x.Usuarie2).Not.Nullable();
            //HasOne<TSModel.Dominio.Consejeria.GestaActual>(x => x.GestaActual);
            //HasOne<TSModel.Dominio.Consejeria.EstudioComplementario>(x => x.EstudioComplementario);
            //HasOne<TSModel.Dominio.Consejeria.EntrevistaPostAborto>(x => x.EntrevistaPostAborto);
            //HasOne<TSModel.Dominio.Consejeria.Antecedente>(x => x.Antecedente);
            Map(x => x.Numero);
            Map(x => x.FechaIngreso);
            Map(x => x.Observacion);
        }
    }
}
