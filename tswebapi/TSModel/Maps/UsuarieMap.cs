using FluentNHibernate.Mapping;
using TSModel.Dominio;

namespace TSModel.Maps
{
    public class UsuarieMap : SubclassMap<Usuarie>
    {
        public UsuarieMap()
        {
            Table("Usuaries");
            KeyColumn("Id");
            Map(x => x.Password);
            Map(x => x.UserName);
        }
    }
}
