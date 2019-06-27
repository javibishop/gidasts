using ServiceStack.DataAnnotations;

namespace MyApp.ServiceModel.Domain
{
    [Alias("Alumnos")]
    public class Alumno
    {
        [AutoIncrement]
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public int SexoId { get; set; }
        public int PerfilId { get; set; }
        public bool Activo { get; set; }
    }
}
