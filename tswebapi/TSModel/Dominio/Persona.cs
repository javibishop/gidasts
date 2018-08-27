using System;

namespace TSModel.Dominio
{
    public class Persona
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public int Edad { get; set; }
        public DateTime FechaNacimiento { get; set; }
        public int NacionalidadId { get; set; }
        public string Telefono { get; set; }
        public string Direccion { get; set; }
    }
}
