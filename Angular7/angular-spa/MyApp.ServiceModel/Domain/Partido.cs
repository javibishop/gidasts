using ServiceStack.DataAnnotations;

namespace TSModel.Dominio
{
    [Alias("Partidos")]
    public class Partido
    {
        [AutoIncrement]
        public int Id { get; set; }
        [References(typeof(Provincia))]
        public int ProvinciaId { get; set; }
        public string Nombre { get; set; }
        public string Codigo { get; set; }
    }
}
