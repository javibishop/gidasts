using System;

namespace tswebapi.Dtos
{
    public class AntecedenteDto
    {
        public int Id { get; set; }
        public int ConsejeriaId { get; set; }
        public  bool Gestas { get; set; }
        public  bool PartosVaginal { get; set; }
        public  bool Cesareas { get; set; }
        public  bool AbortoEspontaneo { get; set; }
        public  bool AbortoVoluntario { get; set; }
        public  bool MACNoUsa { get; set; }
        public  bool MACACO { get; set; }
        public  bool MACACI { get; set; }
        public  bool MACDIU { get; set; }
        public  bool MACPreservativo { get; set; }
        public  bool MACImplanteHormonal { get; set; }
        public  bool FalloMAC { get; set; }
        public  bool NoUsoMAC { get; set; }
        public  bool AHEMAC { get; set; }
        public  string Observaciones { get; set; }
    }
}
