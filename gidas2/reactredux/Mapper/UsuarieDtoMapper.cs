using TSModel.Dominio;
using TSModel.Dominio.Consejeria;
using TSModel.NH;
using tswebapi.Dtos;

namespace tswebapi.Mapper
{
    public class UsuarieDtoMapper
    {
        private SessionFactory sessionFactory;

        public UsuarieDtoMapper(SessionFactory sessionFactory)
        {
            this.sessionFactory = sessionFactory;
        }
        public UsuarieDto MapConsejeriaToDto(UsuarieDto dto, Usuarie usuarie)
        {
            dto.Id = usuarie.Id;
            dto.Apellido  = usuarie.Apellido;
            dto.Nombre = usuarie.Nombre;
            return dto;
        }
        
        public Usuarie MapDtoToUsuarie(UsuarieDto dto)
        {
            Usuarie usuarie = new Usuarie();
            if(dto.Id > 0)
            {
                usuarie = this.sessionFactory.GetEntity<Usuarie>(dto.Id);
            }
            
            usuarie.Nombre = dto.Nombre;
            usuarie.Apellido = dto.Apellido;

            return usuarie;
        }

    }
}
