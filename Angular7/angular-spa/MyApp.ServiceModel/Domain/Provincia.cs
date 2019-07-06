using ServiceStack.DataAnnotations;

namespace TSModel.Dominio
{
    [Alias("Provincias")]
    public class Provincia
    {
        [AutoIncrement]
        public int Id { get; set; }
        public string Nombre { get; set; }
    }
}
