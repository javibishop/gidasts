using ServiceStack.DataAnnotations;

namespace TSModel.Dominio
{
    [Alias("Paises")]
    public class Pais
    {
        [AutoIncrement]
        public int Id { get; set; }
        public string Nombre { get; set; }
    }
}
