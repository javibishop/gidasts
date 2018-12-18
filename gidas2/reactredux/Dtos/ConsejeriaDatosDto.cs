using tswebapi.Dtos;

namespace reactredux.Dtos
{
    public class ConsejeriaDatosDto
    {
        public GestaActualDto GestaActualDto { get; set; }
        public ConsejeriaDto ConsejeriaDto { get; set; }
        public UsuariaDto UsuariaDto { get; set; }
        public AntecedenteDto AntecedenteDto { get; set; }
        public EstudioComplementarioDto EstudioComplementarioDto { get; set; }
        public EntrevistaPostAbortoDto EntrevistaPostAbortoDto { get; set; }
    }
}
