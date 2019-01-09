using System;

namespace tswebapi.Dtos
{
    public class UsuariaDto 
    {
        public int Id { get; set; }
        public int ConsejeriaId { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public int Edad { get; set; }
        public DateTime FechaNacimiento { get; set; }
        public int NacionalidadId { get; set; }
        public string Telefono { get; set; }
        public string Direccion { get; set; }
        public string Discriminator { get; set; }

        public bool UsuarioCentroSalud { get; set; }
        public bool ParejaConViviente { get; set; }
        public bool ParejaNoConViviente { get; set; }
        public bool SinPareja { get; set; }

        public bool ConocePorConocido { get; set; }
        public bool ConocePorUS { get; set; }
        public bool ConocePorOrganizacion { get; set; }
        public bool ConocePorMedios { get; set; }
        public bool ConocePorReferente { get; set; }
        public bool ConocePorUsuarioConsejeria { get; set; }
        public bool ConocePorInsititucionSalud { get; set; }
        public string ConocePorInsititucionSaludObs { get; set; }
        public string ConocePorOtro { get; set; }

        public int NivelInstruccion { get; set; }
        public int NivelInstruccionEstado { get; set; }
    }
}
