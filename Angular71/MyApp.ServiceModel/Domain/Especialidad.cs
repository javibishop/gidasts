using ServiceStack.DataAnnotations;

namespace TSModel.Dominio
{
    [Alias("Especialidades")]
    public class Especialidad: EntidadBase
    {
        public string Nombre { get; set; }
    }
}
