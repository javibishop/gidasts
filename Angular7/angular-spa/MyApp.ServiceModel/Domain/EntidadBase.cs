using ServiceStack.DataAnnotations;

namespace TSModel.Dominio
{
    public class EntidadBase
    {
        [AutoIncrement]
        public int Id { get; set; }
    }
}
