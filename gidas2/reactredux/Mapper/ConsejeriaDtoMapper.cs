using System;
using System.Collections.Generic;
using tswebapi.Dtos;
using TSModel.Dominio.Consejeria;

namespace tswebapi.Mapper
{
    public class ConsejeriaDtoMapper
    {
        public ConsejeriaDto MapConsejeriaToDto(ConsejeriaDto dto, ConsejeriaEntidad consejeria)
        {
            dto.Id = consejeria.Id;
            dto.FechaIngreso = consejeria.FechaIngreso;
            dto.Numero = consejeria.Numero;
            dto.Observacion = consejeria.Observacion;
            dto.Usuario1 = consejeria.Usuarie1.Nombre;
            dto.Usuario2 = consejeria.Usuarie2.Nombre;

            return dto;
        }

        public AntecedenteDto MapAntecedenteToDto(AntecedenteDto dto, Antecedente antecedente)
        {
            dto.Id = antecedente.Id;
            dto.ConsejeriaId = antecedente.Consejeria.Id;
            dto.AbortoEspontaneo = antecedente.AbortoEspontaneo;
            dto.AbortoVoluntario = antecedente.AbortoVoluntario;
            dto.AHEMAC = antecedente.AHEMAC;
            dto.Cesareas = antecedente.Cesareas;
            dto.FalloMAC = antecedente.FalloMAC;
            dto.Gestas = antecedente.Gestas;
            dto.MACACI = antecedente.MACACI;
            dto.MACACO = antecedente.MACACO;
            dto.MACDIU = antecedente.MACDIU;
            dto.MACImplanteHormonal = antecedente.MACImplanteHormonal;
            dto.MACNoUsa = antecedente.MACNoUsa;
            dto.MACPreservativo = antecedente.MACPreservativo;
            dto.NoUsoMAC = antecedente.NoUsoMAC;
            dto.Observaciones = antecedente.Observaciones;
            dto.PartosVaginal = antecedente.PartosVaginal;

            return dto;
        }


        public GestaActualDto MapGestaActualToDto(GestaActualDto dto, GestaActual gestaActual)
        {
            dto.Id = gestaActual.Id;
            dto.ConsejeriaId = gestaActual.Consejeria.Id;
            dto.CausaSaludFisica = gestaActual.CausaSaludFisica;
            dto.CausaSaludPSI = gestaActual.CausaSaludPSI;
            dto.CausaSaludSocial = gestaActual.CausaSaludSocial;
            dto.CausaSinVE = gestaActual.CausaSinVE;
            dto.CausaViolacion = gestaActual.CausaViolacion;
            dto.CUMSPACO = gestaActual.CUMSPACO;
            dto.CUMSPAlergiaMisoDiclo = gestaActual.CUMSPAlergiaMisoDiclo;
            dto.CUMSPDisfuncionHepaticaSevera = gestaActual.CUMSPDisfuncionHepaticaSevera;
            dto.CUMSPEmbarazoEctopico = gestaActual.CUMSPEmbarazoEctopico;
            dto.EGFUM = gestaActual.EGFUM;
            dto.EnteroFecha = gestaActual.EnteroFecha;
            dto.EnteroPorEcografia = gestaActual.EnteroPorEcografia;
            dto.EnteroPorTestOrina = gestaActual.EnteroPorTestOrina;
            dto.EnteroPorTestSangre = gestaActual.EnteroPorTestSangre;
            dto.FactorRiesgoCardiopatia = gestaActual.FactorRiesgoCardiopatia;
            dto.FactorRiesgoCardiovascular = gestaActual.FactorRiesgoCardiovascular;
            dto.FactorRiesgoCorticoterapia = gestaActual.FactorRiesgoCorticoterapia;
            dto.FactorRiesgoDIU = gestaActual.FactorRiesgoDIU;
            dto.FactorRiesgoHb7 = gestaActual.FactorRiesgoHb7;
            dto.FUM = gestaActual.FUM;
            dto.ILE = gestaActual.ILE;
            dto.IntentoSuprimir = gestaActual.IntentoSuprimir;
            dto.IntentoSuprimirObservaciones = gestaActual.IntentoSuprimirObservaciones;
            dto.Lactancia = gestaActual.Lactancia;
            dto.LoComento = gestaActual.LoComento;
            dto.LoComentoAQuien = gestaActual.LoComentoAQuien;

            return dto;
        }

        public UsuariaDto MapUsuariaToDto(UsuariaDto dto, Usuaria usuaria)
        {
            dto.Id = usuaria.Id;
            dto.Apellido = usuaria.Apellido;
            dto.ConocePorConocido = usuaria.ConocePorConocido;
            dto.ConocePorInsititucionSalud = usuaria.ConocePorInsititucionSalud;
            dto.ConocePorInsititucionSaludObs = usuaria.ConocePorInsititucionSaludObs;
            dto.ConocePorMedios = usuaria.ConocePorMedios;
            dto.ConocePorOrganizacion = usuaria.ConocePorOrganizacion;
            dto.ConocePorOtro = usuaria.ConocePorOtro;
            dto.ConocePorReferente = usuaria.ConocePorReferente;
            dto.ConocePorUS = usuaria.ConocePorUS;
            dto.ConocePorUsuarioConsejeria = usuaria.ConocePorUsuarioConsejeria;
            dto.Direccion = usuaria.Direccion;
            dto.Edad = usuaria.Edad;
            dto.FechaNacimiento = usuaria.FechaNacimiento;
            dto.NacionalidadId = usuaria.NacionalidadId;
            dto.NivelInstruccion = usuaria.NivelInstruccion;
            dto.NivelInstruccionEstado = usuaria.NivelInstruccionEstado;
            dto.Nombre = usuaria.Nombre;
            dto.ParejaConViviente = usuaria.ParejaConViviente;
            dto.ParejaNoConViviente = usuaria.ParejaNoConViviente;
            dto.SinPareja = usuaria.SinPareja;
            dto.Telefono = usuaria.Telefono;
            dto.UsuarioCentroSalud = usuaria.UsuarioCentroSalud;
            return dto;
        }
    }
}
