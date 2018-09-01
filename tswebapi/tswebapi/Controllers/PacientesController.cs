using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using TSModel.Dominio;
using TSModel;
using System.Linq;
using TSModel.Dominio.Consejeria;

namespace tswebapi.Controllers
{
    [Route("api/[controller]")]
    public class PacientesController : Controller
    {
        private List<Usuaria> pacientes = new List<Usuaria>();
        //private readonly TsModelo _context;

        public PacientesController()
        {
            //this._context = context;

            //pacientes.Add(new Paciente { Id = 1, Apellido = "Cruz", Edad = 55, FechaNacimiento = new System.DateTime(), Nombre = "Celia" });
            //pacientes.Add(new Paciente { Id = 2, Apellido = "Juana", Edad = 55, FechaNacimiento = new System.DateTime(), Nombre = "Molina" });
            //pacientes.Add(new Paciente { Id = 3, Apellido = "Cruz", Edad = 55, FechaNacimiento = new System.DateTime(), Nombre = "Celia" });
            //pacientes.Add(new Paciente { Id = 4, Apellido = "Cruz", Edad = 55, FechaNacimiento = new System.DateTime(), Nombre = "Celia" });
            //pacientes.Add(new Paciente { Id = 5, Apellido = "Cruz", Edad = 55, FechaNacimiento = new System.DateTime(), Nombre = "Celia" });
        }

        // GET api/pacientes
        [HttpGet]
        public IEnumerable<Usuaria> Get()
        {
            return null;

            //return this._context.Pacientes.ToList();
        }

        // GET api/pacientes/5
        [HttpGet("{id}")]
        public Usuaria Get(int id)
        {
            return this.pacientes.Find(p => p.Id == id);
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
