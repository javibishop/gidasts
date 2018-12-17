namespace TSModel.Dominio.Consejeria
{
    public class Antecedente : EntidadBase
    {
        public virtual  ConsejeriaEntidad Consejeria { get; set; }
        public virtual  bool Gestas { get; set; }
        public virtual  bool PartosVaginal { get; set; }
        public virtual  bool Cesareas { get; set; }
        public virtual  bool AbortoEspontaneo { get; set; }
        public virtual  bool AbortoVoluntario { get; set; }
        //MAC = Metodos anticonceptivos.
        public virtual  bool MACNoUsa { get; set; }
        /// <summary>
        /// Antic oral.
        /// </summary>
        public virtual  bool MACACO { get; set; }
        /// <summary>
        /// Antic inyectable
        /// </summary>
        public virtual  bool MACACI { get; set; }
        /// <summary>
        /// Antic diu, disp uterino.
        /// </summary>
        public virtual  bool MACDIU { get; set; }
        /// <summary>
        /// Antic preserv.
        /// </summary>
        public virtual  bool MACPreservativo { get; set; }
        /// <summary>
        /// Antic chip sub dermico.
        /// </summary>
        public virtual  bool MACImplanteHormonal { get; set; }
        /// <summary>
        /// Fallo el metodo
        /// </summary>
        public virtual  bool FalloMAC { get; set; }
        /// <summary>
        /// No uso
        /// </summary>
        public virtual  bool NoUsoMAC { get; set; }
        /// <summary>
        /// anticoncepción hormonal de emergencia 
        /// </summary>
        public virtual  bool AHEMAC { get; set; }

        public virtual  string Observaciones { get; set; }
    }
}
