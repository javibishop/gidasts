using Microsoft.AspNetCore.Mvc;
using NHibernate;
using System.Collections.Generic;
using TSModel.Dominio.Consejeria;
using System.Linq;
using NHibernate.Criterion;
using tswebapi.Dtos;
using tswebapi.Mapper;
using reactredux.Dtos;

namespace tswebapi.Controllers
{
    [Route("api/[controller]")]
    public class ConsejeriasController : Controller
    {
        ISession session;
        private ConsejeriaDtoMapper consejeriaDtoMapper;

        public ConsejeriasController(ISession session)
        {
            this.session = session;
            this.consejeriaDtoMapper = new ConsejeriaDtoMapper();
        }

        // GET api/pacientes
        [HttpGet("[action]")]
        public List<ConsejeriaDto> Get()
        {
            List<ConsejeriaDto> resutl = new List<ConsejeriaDto>();
            var consejeria = session.CreateCriteria<ConsejeriaEntidad>().List<ConsejeriaEntidad>();
            var consejerias = consejeria.ToList();
            consejerias.ForEach(c => resutl.Add(this.consejeriaDtoMapper.MapConsejeriaToDto(new ConsejeriaDto(), c)));
            return resutl;
        }

        // GET api/pacientes/5
        [HttpGet("{id}")]
        public ConsejeriaEntidad Get(int id)
        {
            var criteria = session.CreateCriteria<ConsejeriaEntidad>();
            criteria.Add(Restrictions.Eq("Id", id));
            return criteria.UniqueResult<ConsejeriaEntidad>();
        }

        // GET api/pacientes/5
        [HttpGet("[action]")]
        public ConsejeriaDatosDto GetCompleta(int id)
        {
            ConsejeriaDatosDto consejeriaDatosDto = new ConsejeriaDatosDto();
            ConsejeriaDto consejeriaDto = new ConsejeriaDto();
            GestaActualDto gestaActualDto = new GestaActualDto();
            UsuariaDto usuariaDto = new UsuariaDto();
            AntecedenteDto antecedenteDto = new AntecedenteDto();
            EstudioComplementarioDto estudioComplementarioDto = new EstudioComplementarioDto();
            EntrevistaPostAbortoDto entrevistaPostAbortoDto = new EntrevistaPostAbortoDto();

            var criteria = session.CreateCriteria<ConsejeriaEntidad>();
            criteria.Add(Restrictions.Eq("Id", id));
            var consejeria = criteria.UniqueResult<ConsejeriaEntidad>();
            this.consejeriaDtoMapper.MapConsejeriaToDto(consejeriaDto, consejeria);

            consejeriaDatosDto.ConsejeriaDto = consejeriaDto;

            criteria = session.CreateCriteria<GestaActual>();
            criteria.Add(Restrictions.Eq("Consejeria.Id", consejeria.Id));
            var gestaActual = criteria.UniqueResult<GestaActual>();

            if (gestaActual != null)
            {
                this.consejeriaDtoMapper.MapGestaActualToDto(gestaActualDto, gestaActual);
            }
            consejeriaDatosDto.GestaActualDto = gestaActualDto;

            if (consejeria.Usuaria != null)
            {
                this.consejeriaDtoMapper.MapUsuariaToDto(usuariaDto, consejeria.Usuaria);
            }
            consejeriaDatosDto.UsuariaDto = usuariaDto;

            criteria = session.CreateCriteria<Antecedente>();
            criteria.Add(Restrictions.Eq("Consejeria.Id", consejeria.Id));
            var antecedente = criteria.UniqueResult<Antecedente>();

            if (antecedente != null)
            {
                this.consejeriaDtoMapper.MapAntecedenteToDto(antecedenteDto, antecedente);
            }
            consejeriaDatosDto.AntecedenteDto = antecedenteDto;

            criteria = session.CreateCriteria<EstudioComplementario>();
            criteria.Add(Restrictions.Eq("Consejeria.Id", consejeria.Id));
            var estudioComplementario = criteria.UniqueResult<EstudioComplementario>();
            if (estudioComplementario != null)
            {
                this.consejeriaDtoMapper.MapEstudioComplementarioDto(estudioComplementarioDto, estudioComplementario);
            }
            consejeriaDatosDto.EstudioComplementarioDto = estudioComplementarioDto;

            criteria = session.CreateCriteria<EntrevistaPostAborto>();
            criteria.Add(Restrictions.Eq("Consejeria.Id", consejeria.Id));
            var entrevistaPostAborto = criteria.UniqueResult<EntrevistaPostAborto>();

            if (entrevistaPostAborto != null)
            {
                this.consejeriaDtoMapper.MapEntrevistaPostAbortoDto(entrevistaPostAbortoDto, entrevistaPostAborto);
            }
            consejeriaDatosDto.EntrevistaPostAbortoDto = entrevistaPostAbortoDto;

            return consejeriaDatosDto;
        }

        // POST api/pacientes
        [HttpPost]
        public void Post([FromBody]ConsejeriaEntidad value)
        {
            ConsejeriaEntidad ussuaria = new ConsejeriaEntidad();
            //ussuaria.Apellido = "cardenas";
            //ussuaria.Direccion = "la pasppp";
            //ussuaria.Edad = 22;
            //ussuaria.FechaNacimiento = System.DateTime.Now;
            //ussuaria.Nombre = "pedra";
            //ussuaria.Telefono = "333333";

            this.session.Save(ussuaria);
        }

        // PUT api/pacientes/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]ConsejeriaEntidad value)
        {
        }

        // DELETE api/pacientes/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
