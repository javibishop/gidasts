using ServiceStack.DataAnnotations;

namespace TSModel.Dominio
{
    [Alias("Localidades")]
    public class Localidad 
    {
        [AutoIncrement]
        public int Id { get; set; }  
		public string Nombre { get; set; }
        public string CP { get; set; }
        [References(typeof(Provincia))]
        public int ProvinciaId { get; set; }
        [References(typeof(Pais))]
        public int PaisId { get; set; }

        [Ignore]
        public string PaisNombre { get; set; }
        [Ignore]
        public string ProvinciaNombre { get; set; }
    }
}
