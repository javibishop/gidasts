using FluentNHibernate.Mapping;
using TSModel.Dominio;

namespace TSModel.Maps
{
    public class UsuarieMap : SubclassMap<Usuarie>
    {
        public UsuarieMap()
        {
            Join("Usuaries", m =>
            {
                m.KeyColumn("Id");
                m.Map(x => x.Password);
                m.Map(x => x.UserName);
            });
            DiscriminatorValue(1);
        }
    }
}
