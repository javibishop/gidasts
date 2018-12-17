using System;

namespace TSModel.Dominio
{
    public abstract class Persona: EntidadBase
    {
        public virtual string Nombre { get; set; }
        public virtual string Apellido { get; set; }
        public virtual int Edad { get; set; }
        public virtual DateTime FechaNacimiento { get; set; }
        public virtual int NacionalidadId { get; set; }
        public virtual string Telefono { get; set; }
        public virtual string Direccion { get; set; }
        //public virtual UsuarioTipo Tipo { get; set; }

        //public enum UsuarioTipo
        //{
        //    Usuaria = 2,
        //    UsuarioSistema = 1
        //}
    }
}
