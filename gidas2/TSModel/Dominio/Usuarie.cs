namespace TSModel.Dominio
{
    public class Usuarie : Persona
    {
        public virtual string UserName{ get; set; }
        public virtual string Password { get; set; }
    }
}
