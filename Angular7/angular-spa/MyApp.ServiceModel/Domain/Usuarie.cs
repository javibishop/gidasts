using ServiceStack.DataAnnotations;
using System;

namespace TSModel.Dominio
{
    [Alias("Usuaries")]
    public class Usuarie : EntidadBase
    {
        public string UserName{ get; set; }
        public string Password { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public int Edad { get; set; }
        public int NacionalidadId { get; set; }
        [References(typeof(Especialidad))]
        public int EspecialidadId { get; set; }
        public string Telefono { get; set; }
        public string Direccion { get; set; }

        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
    }
}
