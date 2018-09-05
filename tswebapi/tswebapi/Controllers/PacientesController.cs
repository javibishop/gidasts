using Microsoft.AspNetCore.Mvc;
using NHibernate;
using System.Collections.Generic;
using TSModel.Dominio.Consejeria;

namespace tswebapi.Controllers
{
    [Route("api/[controller]")]
    public class PacientesController : Controller
    {
        ISession session;

        public PacientesController(ISession session)
        {
            this.session = session;
        }

        // GET api/pacientes
        [HttpGet]
        public IEnumerable<Usuaria> Get()
        {
            var usuarias = session.QueryOver<Usuaria>().List();
            return usuarias;
        }

        // GET api/pacientes/5
        [HttpGet("{id}")]
        public Usuaria Get(int id)
        {
            return this.session.Get<Usuaria>(id);
        }

        // POST api/pacientes
        [HttpPost]
        public void Post([FromBody]Usuaria value)
        {
        }

        // PUT api/pacientes/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]Usuaria value)
        {
        }

        // DELETE api/pacientes/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
