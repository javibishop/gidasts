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

        public EstudioComplementarioDto MapEstudioComplementarioDto(EstudioComplementarioDto dto, EstudioComplementario estudioComplementario)
        {
            dto.Id = estudioComplementario.Id;
            dto.ConsejeriaId = estudioComplementario.Consejeria.Id;
            dto.Eco1Ectopico = estudioComplementario.Eco1Ectopico;
            dto.Eco1EG = estudioComplementario.Eco1EG;
            dto.Eco1Embrion = estudioComplementario.Eco1Embrion;
            dto.Eco1Fecha = estudioComplementario.Eco1Fecha;
            dto.Eco1LFC = estudioComplementario.Eco1LFC;
            dto.Eco1Normoincerto = estudioComplementario.Eco1Normoincerto;
            dto.Eco1Observacion = estudioComplementario.Eco1Observacion;
            dto.Eco1Saco = estudioComplementario.Eco1Saco;
            dto.Eco1Ubicacion = estudioComplementario.Eco1Ubicacion;

            dto.Eco2Ectopico = estudioComplementario.Eco2Ectopico;
            dto.Eco2EG = estudioComplementario.Eco2EG;
            dto.Eco2Embrion = estudioComplementario.Eco2Embrion;
            dto.Eco2Fecha = estudioComplementario.Eco2Fecha;
            dto.Eco2LFC = estudioComplementario.Eco2LFC;
            dto.Eco2Normoincerto = estudioComplementario.Eco2Normoincerto;
            dto.Eco2Observacion = estudioComplementario.Eco2Observacion;
            dto.Eco2Saco = estudioComplementario.Eco2Saco;
            dto.Eco2Ubicacion = estudioComplementario.Eco2Ubicacion;

            dto.LabFecha = estudioComplementario.LabFecha;
            dto.LabGB = estudioComplementario.LabGB;
            dto.LabGR = estudioComplementario.LabGR;
            dto.LabGrupo = estudioComplementario.LabGrupo;
            dto.LabHb = estudioComplementario.LabHb;
            dto.LabHto = estudioComplementario.LabHto;
            dto.LabRh = estudioComplementario.LabRh;
            return dto;
        }

        public EntrevistaPostAbortoDto MapEntrevistaPostAbortoDto(EntrevistaPostAbortoDto dto, EntrevistaPostAborto entrevistaPostAborto)
        {
            dto.Id = entrevistaPostAborto.Id;
            dto.ConsejeriaId = entrevistaPostAborto.Consejeria.Id;
            dto.AccedioPorConocido = entrevistaPostAborto.AccedioPorConocido;
            dto.AccedioPorFarmacia = entrevistaPostAborto.AccedioPorFarmacia;
            dto.AccedioPorInternet = entrevistaPostAborto.AccedioPorInternet;
            dto.AccedioPorOrgSocial = entrevistaPostAborto.AccedioPorOrgSocial;
            dto.ComplicacionHemorragia = entrevistaPostAborto.ComplicacionHemorragia;
            dto.ComplicacionInfeccion = entrevistaPostAborto.ComplicacionInfeccion;
            dto.ComplicacionNo = entrevistaPostAborto.ComplicacionNo;
            dto.ComplicacionOtro = entrevistaPostAborto.ComplicacionOtro;
            dto.ConsejeriaMACACI = entrevistaPostAborto.ConsejeriaMACACI;
            dto.ConsejeriaMACACO = entrevistaPostAborto.ConsejeriaMACACO;
            dto.ConsejeriaMACDIU = entrevistaPostAborto.ConsejeriaMACDIU;
            dto.ConsejeriaMACImplanteHormonal = entrevistaPostAborto.ConsejeriaMACImplanteHormonal;
            dto.ConsejeriaMACNo = entrevistaPostAborto.ConsejeriaMACNo;
            dto.ConsejeriaMACPreservativo = entrevistaPostAborto.ConsejeriaMACPreservativo;
            dto.EcografiaPostAbortoCompleto = entrevistaPostAborto.EcografiaPostAbortoCompleto;
            dto.EcografiaPostAbortoIncompleto = entrevistaPostAborto.EcografiaPostAbortoIncompleto;
            dto.EcografiaPostConductaExpectante = entrevistaPostAborto.EcografiaPostConductaExpectante;
            dto.EcografiaPostDerivacion2Nivel = entrevistaPostAborto.EcografiaPostDerivacion2Nivel;
            dto.EcografiaPostEmbrionViable = entrevistaPostAborto.EcografiaPostEmbrionViable;
            dto.EcografiaPostFecha = entrevistaPostAborto.EcografiaPostFecha;
            dto.EcografiaPostHMR = entrevistaPostAborto.EcografiaPostHMR;
            dto.EcografiaPostNoRealizo = entrevistaPostAborto.EcografiaPostNoRealizo;
            dto.EcografiaPostNuevaConsejeria = entrevistaPostAborto.EcografiaPostNuevaConsejeria;
            dto.EfectoAdversoCafalea = entrevistaPostAborto.EfectoAdversoCafalea;
            dto.EfectoAdversoGastro = entrevistaPostAborto.EfectoAdversoGastro;

            dto.EfectoAdversoNo = entrevistaPostAborto.EfectoAdversoNo;
            dto.EfectoAdversoOtro = entrevistaPostAborto.EfectoAdversoOtro;
            dto.EfectoAdversoTemperatura = entrevistaPostAborto.EfectoAdversoTemperatura;
            dto.Fecha = entrevistaPostAborto.Fecha;
            dto.IndicacionGammaglobulina = entrevistaPostAborto.IndicacionGammaglobulina;
            dto.PresentacionCaja16 = entrevistaPostAborto.PresentacionCaja16;
            dto.PresentacionCaja20 = entrevistaPostAborto.PresentacionCaja20;
            dto.PresentacionSuelto = entrevistaPostAborto.PresentacionSuelto;
            dto.ProcedimientoHecho = entrevistaPostAborto.ProcedimientoHecho;
            dto.ProcedimientoNoAbortoEspontaneo = entrevistaPostAborto.ProcedimientoNoAbortoEspontaneo;
            dto.ProcedimientoNoContinua = entrevistaPostAborto.ProcedimientoNoContinua;
            dto.ProcedimientoNoOtro = entrevistaPostAborto.ProcedimientoNoOtro;
            dto.ProcedimientoObservaciones = entrevistaPostAborto.ProcedimientoObservaciones;
            dto.ProcedimientoSiInformado = entrevistaPostAborto.ProcedimientoSiInformado;
            dto.ProcedimientoSiOtra = entrevistaPostAborto.ProcedimientoSiOtra;
            dto.ProcedimientoSiOtro = entrevistaPostAborto.ProcedimientoSiOtro;
            dto.ProcedimientoSiViaSL = entrevistaPostAborto.ProcedimientoSiViaSL;
            dto.ProcedimientoSiViaV = entrevistaPostAborto.ProcedimientoSiViaV;
            return dto;
        }

        
    }
}
