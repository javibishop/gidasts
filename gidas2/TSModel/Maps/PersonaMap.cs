using FluentNHibernate.Mapping;
using TSModel.Dominio;

namespace TSModel.Maps
{
    public class PersonaMap : ClassMap<Persona>
    {
        public PersonaMap()
        {
            Table("Personas");
            Id(x => x.Id).GeneratedBy.Identity();
            Map(x => x.Nombre);
            Map(x => x.Apellido);
            Map(x => x.Edad);
            Map(x => x.FechaNacimiento);
            Map(x => x.NacionalidadId);
            Map(x => x.Telefono);
            Map(x => x.Direccion);
            //Map(x => x.Tipo).CustomType<int>();
            DiscriminateSubClassesOnColumn("UsuarioTipo");
        }
    }
}
