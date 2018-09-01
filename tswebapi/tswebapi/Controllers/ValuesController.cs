using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using NHibernate;
using TSModel.Dominio;
using TSModel.Dominio.Consejeria;

namespace tswebapi.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        ISession session;
        public ValuesController(ISession session)
        {
            this.session = session;
        }
        
        // GET api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            session.QueryOver<Usuaria>().List();

            //Usuaria u = new Usuaria();
            //u.Apellido = "Juana";
            //u.Edad = 5;
            //u.FechaNacimiento = DateTime.Now;
            //u.NacionalidadId = 1;
            //u.Nombre = "Pablo";
            //u.Telefono = "222";
            //u.Tipo = Persona.UsuarioTipo.Usuaria;

            //this.session.SaveOrUpdate(u);

            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
