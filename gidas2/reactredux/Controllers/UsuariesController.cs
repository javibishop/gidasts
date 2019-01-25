using Microsoft.AspNetCore.Mvc;
using NHibernate;
using System.Collections.Generic;
using System.Linq;
using NHibernate.Criterion;
using tswebapi.Dtos;
using TSModel.Dominio;
using TSModel.Dominio.Consejeria;
using TSModel.NH;
using tswebapi.Mapper;

namespace tswebapi.Controllers
{
    [Route("api/[controller]")]
    public class UsuariesController : Controller
    {
        SessionFactory sessionFactory = SessionFactory.Instance;
        private UsuarieDtoMapper usuarieDtoMapper;

        public UsuariesController()
        {
            this.usuarieDtoMapper = new UsuarieDtoMapper(this.sessionFactory);
        }

        // GET api/pacientes
        [HttpGet("[action]")]
        public List<UsuarieDto> Get()
        {
            List<UsuarieDto> resutl = new List<UsuarieDto>();
            var criteria = sessionFactory.CreateCriteria<Usuarie>().List<Usuarie>();
            var consejerias = criteria.ToList();
            consejerias.ForEach(c => resutl.Add(this.usuarieDtoMapper.MapConsejeriaToDto(new UsuarieDto(), c)));
            return resutl;
        }

        // GET api/pacientes
        [HttpGet("[action]")]
        public JsonResult GetForCombo()
        {
            var criteria = sessionFactory.CreateCriteria<Usuarie>().List<Usuarie>();
            var consejerias = criteria.ToList();
            var result = consejerias.Select(c => new { label = c.Nombre + " "+ c.Apellido, value = c.Id });
            return new JsonResult(result);
        }

        // GET api/pacientes/5
        [HttpGet("{id}")]
        public Usuarie Get(int id)
        {
            var criteria = sessionFactory.CreateCriteria<Usuarie>();
            criteria.Add(Restrictions.Eq("Id", id));
            var result = criteria.UniqueResult<Usuarie>();
            return result;
        }

        // POST api/pacientes
        [HttpPost]
        public void Post([FromBody]UsuariaDto value)
        {
            //UsuariaDto ussuaria = new UsuariaDto();
            //ussuaria.Apellido = "cardenas";
            //ussuaria.Direccion = "la pasppp";
            //ussuaria.Edad = 22;
            //ussuaria.FechaNacimiento = System.DateTime.Now;
            //ussuaria.Nombre = "pedra";
            //ussuaria.Telefono = "333333";

            //this.sessionFactory.SaveOrUpdateEntity(ussuaria);
        }

        // PUT api/pacientes/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]UsuariaDto value)
        {
        }

        // DELETE api/pacientes/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
