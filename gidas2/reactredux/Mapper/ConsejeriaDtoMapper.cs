using TSModel.Dominio;
using TSModel.Dominio.Consejeria;
using TSModel.NH;
using tswebapi.Dtos;

namespace tswebapi.Mapper
{
    public class ConsejeriaDtoMapper
    {
        private SessionFactory sessionFactory;

        public ConsejeriaDtoMapper(SessionFactory sessionFactory)
        {
            this.sessionFactory = sessionFactory;
        }
        public ConsejeriaDto MapConsejeriaToDto(ConsejeriaDto dto, ConsejeriaEntidad consejeria)
        {
            dto.Id = consejeria.Id;
            dto.FechaIngreso = consejeria.FechaIngreso;
            dto.Numero = consejeria.Numero;
            dto.Observacion = consejeria.Observacion;
            dto.Usuario1 = consejeria.Usuarie1.Nombre;
            dto.Usuario2 = consejeria.Usuarie2.Nombre;
            dto.Usuarie1Id = consejeria.Usuarie1.Id;
            dto.Usuarie2Id = consejeria.Usuarie2.Id;
            dto.UsuariaId = consejeria.Usuaria.Id;
            dto.Usuaria = consejeria.Usuaria.Nombre;
            dto.FechaIngreso = consejeria.FechaIngreso;
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


        public ConsejeriaEntidad MapDtoToConsejeria(ConsejeriaDto dto)
        {
            ConsejeriaEntidad consejeriaEntidad = new ConsejeriaEntidad();
            if(dto.Id > 0)
            {
                consejeriaEntidad = this.sessionFactory.GetEntity<ConsejeriaEntidad>(dto.Id);
            }
            
            consejeriaEntidad.FechaIngreso = dto.FechaIngreso;
            consejeriaEntidad.Numero = dto.Numero;
            consejeriaEntidad.Observacion = dto.Observacion;
            if(dto.Usuarie1Id != consejeriaEntidad.Usuarie1.Id)
            {
                consejeriaEntidad.Usuarie1 = this.sessionFactory.GetEntity<Usuarie>(dto.Usuarie1Id);
            }
            if (dto.Usuarie2Id != consejeriaEntidad.Usuarie2.Id)
            {
                consejeriaEntidad.Usuarie2 = this.sessionFactory.GetEntity<Usuarie>(dto.Usuarie2Id);
            }

            return consejeriaEntidad;
        }

        public Antecedente MapDtoToAntecedente(AntecedenteDto dto)
        {
            Antecedente antecedente = new Antecedente();

            if (dto.Id > 0)
            {
                antecedente = this.sessionFactory.GetEntity<Antecedente>(dto.Id);
            }
            if (dto.ConsejeriaId > 0 && antecedente.Consejeria == null)
            {
                antecedente.Consejeria = this.sessionFactory.GetEntity<ConsejeriaEntidad>(dto.ConsejeriaId);
            }
            antecedente.AbortoEspontaneo = dto.AbortoEspontaneo;
            antecedente.AbortoVoluntario = dto.AbortoVoluntario;
            antecedente.AHEMAC = dto.AHEMAC;
            antecedente.Cesareas = dto.Cesareas;
            antecedente.FalloMAC = dto.FalloMAC;
            antecedente.Gestas = dto.Gestas;
            antecedente.MACACI = dto.MACACI;
            antecedente.MACACO = dto.MACACO;
            antecedente.MACDIU = dto.MACDIU;
            antecedente.MACImplanteHormonal = dto.MACImplanteHormonal;
            antecedente.MACNoUsa = dto.MACNoUsa;
            antecedente.MACPreservativo = dto.MACPreservativo;
            antecedente.NoUsoMAC = dto.NoUsoMAC;
            antecedente.Observaciones = dto.Observaciones;
            antecedente.PartosVaginal = dto.PartosVaginal;

            return antecedente;
        }


        public GestaActual MapDtoToGestaActual(GestaActualDto dto)
        {
            GestaActual gestaActual = new GestaActual();
            if (dto.Id > 0)
            {
                gestaActual = this.sessionFactory.GetEntity<GestaActual>(dto.Id);
            }
            if(dto.ConsejeriaId > 0 && gestaActual.Consejeria == null)
            {
                gestaActual.Consejeria = this.sessionFactory.GetEntity<ConsejeriaEntidad>(dto.ConsejeriaId);
            }
            gestaActual.CausaSaludFisica = dto.CausaSaludFisica;
            gestaActual.CausaSaludPSI = dto.CausaSaludPSI;
            gestaActual.CausaSaludSocial = dto.CausaSaludSocial;
            gestaActual.CausaSinVE = dto.CausaSinVE;
            gestaActual.CausaViolacion = dto.CausaViolacion;
            gestaActual.CUMSPACO = dto.CUMSPACO;
            gestaActual.CUMSPAlergiaMisoDiclo = dto.CUMSPAlergiaMisoDiclo;
            gestaActual.CUMSPDisfuncionHepaticaSevera = dto.CUMSPDisfuncionHepaticaSevera;
            gestaActual.CUMSPEmbarazoEctopico = dto.CUMSPEmbarazoEctopico;
            gestaActual.EGFUM = dto.EGFUM;
            gestaActual.EnteroFecha = dto.EnteroFecha;
            gestaActual.EnteroPorEcografia = dto.EnteroPorEcografia;
            gestaActual.EnteroPorTestOrina = dto.EnteroPorTestOrina;
            gestaActual.EnteroPorTestSangre = dto.EnteroPorTestSangre;
            gestaActual.FactorRiesgoCardiopatia = dto.FactorRiesgoCardiopatia;
            gestaActual.FactorRiesgoCardiovascular = dto.FactorRiesgoCardiovascular;
            gestaActual.FactorRiesgoCorticoterapia = dto.FactorRiesgoCorticoterapia;
            gestaActual.FactorRiesgoDIU = dto.FactorRiesgoDIU;
            gestaActual.FactorRiesgoHb7 = dto.FactorRiesgoHb7;
            gestaActual.FUM = dto.FUM;
            gestaActual.ILE = dto.ILE;
            gestaActual.IntentoSuprimir = dto.IntentoSuprimir;
            gestaActual.IntentoSuprimirObservaciones = dto.IntentoSuprimirObservaciones;
            gestaActual.Lactancia = dto.Lactancia;
            gestaActual.LoComento = dto.LoComento;
            gestaActual.LoComentoAQuien = dto.LoComentoAQuien;

            return gestaActual;
        }

        public Usuaria MapDtoToUsuaria(UsuariaDto dto)
        {
            Usuaria usuaria = new Usuaria();
            if (dto.Id > 0)
            {
                usuaria = this.sessionFactory.GetEntity<Usuaria>(dto.Id);
            }
          
            usuaria.Apellido = dto.Apellido;
            usuaria.ConocePorConocido = dto.ConocePorConocido;
            usuaria.ConocePorInsititucionSalud = dto.ConocePorInsititucionSalud;
            usuaria.ConocePorInsititucionSaludObs = dto.ConocePorInsititucionSaludObs;
            usuaria.ConocePorMedios = dto.ConocePorMedios;
            usuaria.ConocePorOrganizacion = dto.ConocePorOrganizacion;
            usuaria.ConocePorOtro = dto.ConocePorOtro;
            usuaria.ConocePorReferente = dto.ConocePorReferente;
            usuaria.ConocePorUS = dto.ConocePorUS;
            usuaria.ConocePorUsuarioConsejeria = dto.ConocePorUsuarioConsejeria;
            usuaria.Direccion = dto.Direccion;
            usuaria.Edad = dto.Edad;
            usuaria.FechaNacimiento = dto.FechaNacimiento;
            usuaria.NacionalidadId = dto.NacionalidadId;
            usuaria.NivelInstruccion = dto.NivelInstruccion;
            usuaria.NivelInstruccionEstado = dto.NivelInstruccionEstado;
            usuaria.Nombre = dto.Nombre;
            usuaria.ParejaConViviente = dto.ParejaConViviente;
            usuaria.ParejaNoConViviente = dto.ParejaNoConViviente;
            usuaria.SinPareja = dto.SinPareja;
            usuaria.Telefono = dto.Telefono;
            usuaria.UsuarioCentroSalud = dto.UsuarioCentroSalud;
            return usuaria;
        }

        public EstudioComplementario MapDtoToEstudioComplementario(EstudioComplementarioDto dto)
        {
            EstudioComplementario estudioComplementario = new EstudioComplementario();
            if (dto.Id > 0)
            {
                estudioComplementario = this.sessionFactory.GetEntity<EstudioComplementario>(dto.Id);
            }

            estudioComplementario.Eco1Ectopico = dto.Eco1Ectopico;
            estudioComplementario.Eco1EG = dto.Eco1EG;
            estudioComplementario.Eco1Embrion = dto.Eco1Embrion;
            estudioComplementario.Eco1Fecha = dto.Eco1Fecha;
            estudioComplementario.Eco1LFC = dto.Eco1LFC;
            estudioComplementario.Eco1Normoincerto = dto.Eco1Normoincerto;
            estudioComplementario.Eco1Observacion = dto.Eco1Observacion;
            estudioComplementario.Eco1Saco = dto.Eco1Saco;
            estudioComplementario.Eco1Ubicacion = dto.Eco1Ubicacion;

            estudioComplementario.Eco2Ectopico = dto.Eco2Ectopico;
            estudioComplementario.Eco2EG = dto.Eco2EG;
            estudioComplementario.Eco2Embrion = dto.Eco2Embrion;
            estudioComplementario.Eco2Fecha = dto.Eco2Fecha;
            estudioComplementario.Eco2LFC = dto.Eco2LFC;
            estudioComplementario.Eco2Normoincerto = dto.Eco2Normoincerto;
            estudioComplementario.Eco2Observacion = dto.Eco2Observacion;
            estudioComplementario.Eco2Saco = dto.Eco2Saco;
            estudioComplementario.Eco2Ubicacion = dto.Eco2Ubicacion;

            estudioComplementario.LabFecha = dto.LabFecha;
            estudioComplementario.LabGB = dto.LabGB;
            estudioComplementario.LabGR = dto.LabGR;
            estudioComplementario.LabGrupo = dto.LabGrupo;
            estudioComplementario.LabHb = dto.LabHb;
            estudioComplementario.LabHto = dto.LabHto;
            estudioComplementario.LabRh = dto.LabRh;
            return estudioComplementario;
        }

        public EntrevistaPostAborto MapDtoToEntrevistaPostAborto(EntrevistaPostAbortoDto dto)
        {
            EntrevistaPostAborto entrevistaPostAborto = new EntrevistaPostAborto();
            if (dto.Id > 0)
            {
                entrevistaPostAborto = this.sessionFactory.GetEntity<EntrevistaPostAborto>(dto.Id);
            }
            if (dto.ConsejeriaId > 0 && entrevistaPostAborto.Consejeria == null)
            {
                entrevistaPostAborto.Consejeria = this.sessionFactory.GetEntity<ConsejeriaEntidad>(dto.ConsejeriaId);
            }
            entrevistaPostAborto.AccedioPorConocido = dto.AccedioPorConocido;
            entrevistaPostAborto.AccedioPorFarmacia = dto.AccedioPorFarmacia;
            entrevistaPostAborto.AccedioPorInternet = dto.AccedioPorInternet;
            entrevistaPostAborto.AccedioPorOrgSocial = dto.AccedioPorOrgSocial;
            entrevistaPostAborto.ComplicacionHemorragia = dto.ComplicacionHemorragia;
            entrevistaPostAborto.ComplicacionInfeccion = dto.ComplicacionInfeccion;
            entrevistaPostAborto.ComplicacionNo = dto.ComplicacionNo;
            entrevistaPostAborto.ComplicacionOtro = dto.ComplicacionOtro;
            entrevistaPostAborto.ConsejeriaMACACI = dto.ConsejeriaMACACI;
            entrevistaPostAborto.ConsejeriaMACACO = dto.ConsejeriaMACACO;
            entrevistaPostAborto.ConsejeriaMACDIU = dto.ConsejeriaMACDIU;
            entrevistaPostAborto.ConsejeriaMACImplanteHormonal = dto.ConsejeriaMACImplanteHormonal;
            entrevistaPostAborto.ConsejeriaMACNo = dto.ConsejeriaMACNo;
            entrevistaPostAborto.ConsejeriaMACPreservativo = dto.ConsejeriaMACPreservativo;
            entrevistaPostAborto.EcografiaPostAbortoCompleto = dto.EcografiaPostAbortoCompleto;
            entrevistaPostAborto.EcografiaPostAbortoIncompleto = dto.EcografiaPostAbortoIncompleto;
            entrevistaPostAborto.EcografiaPostConductaExpectante = dto.EcografiaPostConductaExpectante;
            entrevistaPostAborto.EcografiaPostDerivacion2Nivel = dto.EcografiaPostDerivacion2Nivel;
            entrevistaPostAborto.EcografiaPostEmbrionViable = dto.EcografiaPostEmbrionViable;
            entrevistaPostAborto.EcografiaPostFecha = dto.EcografiaPostFecha;
            entrevistaPostAborto.EcografiaPostHMR = dto.EcografiaPostHMR;
            entrevistaPostAborto.EcografiaPostNoRealizo = dto.EcografiaPostNoRealizo;
            entrevistaPostAborto.EcografiaPostNuevaConsejeria = dto.EcografiaPostNuevaConsejeria;
            entrevistaPostAborto.EfectoAdversoCafalea = dto.EfectoAdversoCafalea;
            entrevistaPostAborto.EfectoAdversoGastro = dto.EfectoAdversoGastro;
            entrevistaPostAborto.EfectoAdversoNo = dto.EfectoAdversoNo;
            entrevistaPostAborto.EfectoAdversoOtro = dto.EfectoAdversoOtro;
            entrevistaPostAborto.EfectoAdversoTemperatura = dto.EfectoAdversoTemperatura;
            entrevistaPostAborto.Fecha = dto.Fecha;
            entrevistaPostAborto.IndicacionGammaglobulina = dto.IndicacionGammaglobulina;
            entrevistaPostAborto.PresentacionCaja16 = dto.PresentacionCaja16;
            entrevistaPostAborto.PresentacionCaja20 = dto.PresentacionCaja20;
            entrevistaPostAborto.PresentacionSuelto = dto.PresentacionSuelto;
            entrevistaPostAborto.ProcedimientoHecho = dto.ProcedimientoHecho;
            entrevistaPostAborto.ProcedimientoNoAbortoEspontaneo = dto.ProcedimientoNoAbortoEspontaneo;
            entrevistaPostAborto.ProcedimientoNoContinua = dto.ProcedimientoNoContinua;
            entrevistaPostAborto.ProcedimientoNoOtro = dto.ProcedimientoNoOtro;
            entrevistaPostAborto.ProcedimientoObservaciones = dto.ProcedimientoObservaciones;
            entrevistaPostAborto.ProcedimientoSiInformado = dto.ProcedimientoSiInformado;
            entrevistaPostAborto.ProcedimientoSiOtra = dto.ProcedimientoSiOtra;
            entrevistaPostAborto.ProcedimientoSiOtro = dto.ProcedimientoSiOtro;
            entrevistaPostAborto.ProcedimientoSiViaSL = dto.ProcedimientoSiViaSL;
            entrevistaPostAborto.ProcedimientoSiViaV = dto.ProcedimientoSiViaV;
            return entrevistaPostAborto;
        }
    }
}
