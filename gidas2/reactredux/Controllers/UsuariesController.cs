using Microsoft.AspNetCore.Mvc;
using NHibernate;
using System.Collections.Generic;
using System.Linq;
using NHibernate.Criterion;
using tswebapi.Dtos;
using TSModel.Dominio;
using TSModel.Dominio.Consejeria;

namespace tswebapi.Controllers
{
    [Route("api/[controller]")]
    public class UsuariesController : Controller
    {
        ISession session;

        public UsuariesController(ISession session)
        {
            this.session = session;
        }

        // GET api/pacientes
        [HttpGet("[action]")]
        public List<Usuarie> Get()
        {
            Usuarie ussuaria = new Usuarie();
            ussuaria.Apellido = "cardenas";
            ussuaria.Direccion = "la pasppp";
            ussuaria.Edad = 22;
            ussuaria.FechaNacimiento = System.DateTime.Now;
            ussuaria.Nombre = "pedra";
            ussuaria.Telefono = "333333";

            this.session.Save(ussuaria);

            var usuarias = session.CreateCriteria<Usuarie>().List<Usuarie>().ToList();
            return usuarias;
        }

        // GET api/pacientes/5
        [HttpGet("{id}")]
        public Usuarie Get(int id)
        {
            var criteria = session.CreateCriteria<Usuarie>();
            criteria.Add(Restrictions.Eq("Id", id));
            var result = criteria.UniqueResult<Usuarie>();
            return result;
        }

        // POST api/pacientes
        [HttpPost]
        public void Post([FromBody]UsuariaDto value)
        {
            UsuariaDto ussuaria = new UsuariaDto();
            ussuaria.Apellido = "cardenas";
            ussuaria.Direccion = "la pasppp";
            ussuaria.Edad = 22;
            ussuaria.FechaNacimiento = System.DateTime.Now;
            ussuaria.Nombre = "pedra";
            ussuaria.Telefono = "333333";

            this.session.Save(ussuaria);
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
