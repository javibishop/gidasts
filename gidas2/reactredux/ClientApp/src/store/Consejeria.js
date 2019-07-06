const newConsejeria = 'NEW_CONSEJERIA';
const initNewConsejeria = 'INIT_NEW_CONSEJERIA';
const getConsejeriaId = 'GET_CONSEJERIA_ID';
const getConsejeriaRequest = 'GET_CONSEJERIA_RUEQUEST';
const getConsejeriaFailure = 'GET_CONSEJERIA_FAILURE';
const getConsejeriaSuccess = 'GET_CONSEJERIA_SUCCESS';

const getUsuariesRequest = 'GET_USUARIES_RUEQUEST';
const getUsuariesSuccess = 'GET_USUARIES_SUCCESS';

const saveUsuariaRequest = 'SAVE_USUARIA_RUEQUEST';
const saveUsuariaFailure = 'SAVE_USUARIA_FAILURE';
const saveUsuariaSuccess = 'SAVE_USUARIA_SUCCESS';

const saveAntecedenteRequest = 'SAVE_ANTECEDENTE_RUEQUEST';
const saveAntecedenteFailure = 'SAVE_ANTECEDENTE_FAILURE';
const saveAntecedenteSuccess = 'SAVE_ANTECEDENTE_SUCCESS';

const saveGestaActualRequest = 'SAVE_GESTAACTUAL_RUEQUEST';
const saveGestaActualFailure = 'SAVE_GESTAACTUAL_FAILURE';
const saveGestaActualSuccess = 'SAVE_GESTAACTUAL_SUCCESS';

const saveEstudioComplementarioRequest = 'SAVE_ESTUDIOCOMPLEMENTARIO_RUEQUEST';
const saveEstudioComplementarioFailure = 'SAVE_ESTUDIOCOMPLEMENTARIO_FAILURE';
const saveEstudioComplementarioSuccess = 'SAVE_ESTUDIOCOMPLEMENTARIO_SUCCESS';

const saveEntrevistaRequest = 'SAVE_ENTREVISTA_RUEQUEST';
const saveEntrevistaFailure = 'SAVE_ENTREVISTA_FAILURE';
const saveEntrevistaSuccess = 'SAVE_ENTREVISTA_SUCCESS';

const afterConsejeria = 'AFTER_SAVE_CONSEJERIA';
const editConsejeria = 'EDIT_CONSEJERIA';
const receiveConsejeria = 'RECIVE_CONSEJERIAS';

const changeStateBeforeUsuaria = 'ChangeStateBeforeUsuaria';
const changingStateUsuaria = 'ChangingStateUsuaria';
const changeStateAfterUsuaria = 'ChangeStateAfterUsuaria';

const changeStateBeforeConsejeria = 'ChangeStateBeforeConsejeria';
const changingStateConsejeria = 'ChangingStateConsejeria';
const changeStateAfterConsejeria = 'ChangeStateAfterConsejeria';

const changeStateBeforeAntecedente = 'ChangeStateBeforeAntecedente';
const changingStateAntecedente = 'ChangingStateAntecedente';
const changeStateAfterAntecedente = 'ChangeStateAfterAntecedente';

const changeStateBeforeGestaActual = 'ChangeStateBeforeGestaActual';
const changingStateGestaActual = 'ChangingStateGestaActual';
const changeStateAfterGestaActual = 'ChangeStateAfterGestaActual';

const changeStateBeforeEstudioComplementario = 'ChangeStateBeforeEstudioComplementario';
const changingStateEstudioComplementario = 'ChangingStateEstudioComplementario';
const changeStateAfterEstudioComplementario = 'ChangeStateAfterEstudioComplementario';

const changeStateBeforeEntrevista = 'ChangeStateBeforeEntrevista';
const changingStateEntrevista = 'ChangingStateEntrevista';
const changeStateAfterEntrevista = 'ChangeStateAfterEntrevista';
const redirectEdit = 'RedirectEdit';

const initState = {
    "consejeriaDto": {
        "id": 0,
        "numero": 0,
        "fechaIngreso": new Date(),
        "usuariaId": 0,
        "usuarie1Id": 0,
        "usuarie2Id": 0,
        "observaciones": "",
    },
    "usuariaDto": {
        "usuarioCentroSalud": false,
        "parejaConViviente": false,
        "parejaNoConViviente": false,
        "sinPareja": false,
        "conocePorConocido": false,
        "conocePorUS": false,
        "conocePorOrganizacion": false,
        "conocePorMedios": false,
        "conocePorUsuarioConsejeria": false,
        "conocePorInsititucionSalud": false,
        "conocePorInsititucionSaludObs": null,
        "conocePorOtro": null,
        "nivelInstruccion": 0,
        "nivelInstruccionEstado": 0,
        "nombre": "",
        "apellido": "",
        "edad": 0,
        "fechaNacimiento": new Date(),
        "nacionalidadId": 0,
        "telefono": "",
        "direccion": "",
        "discriminator": null,
        "tipo": 0,
        "id": 0
    },
    "antecedenteDto": {
        "id": 0,
        "consejariaId": 0,
        "gestas": 0,
        "partosVaginal": 0,
        "cesareas": 0,
        "abortoEspontaneo": 0,
        "abortoVoluntario": 0,
        "mACNoUsa": false,
        "mACACO": false,
        "mACACI": false,
        "mACDIU": false,
        "mACPreservativo": false,
        "mACImplanteHormonal": false,
        "falloMAC": false,
        "noUsoMAC": false,
        "aHEMAC": false,
        "observaciones": ""
    },
    "gestaActualDto": {
        "id": 0,
        "consejariaId": 0,
        "enteroPorTestOrina": false,
        "enteroPorTestSangre": false,
        "enteroPorEcografia": false,
        "enteroFecha": new Date(),
        "fUM": new Date(),
        "eGFUM": new Date(),
        "intentoSuprimir": false,
        "intentoSuprimirObservaciones": "",
        "lactancia": false,
        "loComento": false,
        "loComentoAQuien": "",
        "iLE": false,
        "causaViolacion": false,
        "causaSaludFisica": false,
        "causaSaludPSI": false,
        "causaSaludSocial": false,
        "causaSinVE": false,
        "cUMSPACO": false,
        "cUMSPDisfuncionHepaticaSevera": false,
        "cUMSPEmbarazoEctopico": false,
        "cUMSPAlergiaMisoDiclo": false,
        "factorRiesgoHb7": false,
        "factorRiesgoCardiopatia": false,
        "factorRiesgoDIU": false,
        "factorRiesgoCardiovascular": false,
        "factorRiesgoCorticoterapia": false
    },
    "estudioComplementarioDto": {
        "eco1Observacion": "",
        "eco1Fecha": new Date(),
        "eco1EG": "",
        "eco1LFC": false,
        "eco1Embrion": false,
        "eco1Saco": false,
        "eco1Ubicacion": "",
        "eco1Normoincerto": false,
        "eco1Ectopico": false,
        "eco2Observacion": "",
        "eco2Fecha": new Date(),
        "eco2EG": false,
        "eco2LFC": false,
        "eco2Embrion": false,
        "eco2Saco": false,
        "eco2Ubicacion": "",
        "eco2Normoincerto": false,
        "eco2Ectopico": false,
        "labFecha": new Date(),
        "labGB": "",
        "labGR": "",
        "labHb": "",
        "labHto": "",
        "labGrupo": "",
        "labRh": ""
    },
    "entrevistaPostAbortoDto": {
        "procedimientoObservaciones": "",
        "fecha": new Date(),
        "procedimientoHecho": false,
        "procedimientoNoContinua": false,
        "procedimientoNoAbortoEspontaneo": false,
        "procedimientoNoOtro": "",
        "procedimientoSiInformado": false,
        "procedimientoSiOtra": false,
        "procedimientoSiViaV": false,
        "procedimientoSiViaSL": false,
        "procedimientoSiOtro": "",
        "accedioPorFarmacia": false,
        "accedioPorConocido": false,
        "accedioPorInternet": false,
        "accedioPorOrgSocial": false,
        "presentacionSuelto": false,
        "presentacionCaja20": false,
        "presentacionCaja16": false,
        "efectoAdversoNo": false,
        "efectoAdversoGastro": false,
        "efectoAdversoTemperatura": false,
        "efectoAdversoCafalea": false,
        "efectoAdversoOtro": "",
        "complicacionNo": false,
        "complicacionHemorragia": false,
        "complicacionInfeccion": false,
        "complicacionOtro": "",
        "indicacionGammaglobulina": false,
        "ecografiaPostFecha": new Date(),
        "ecografiaPostNoRealizo": false,
        "ecografiaPostAbortoCompleto": false,
        "ecografiaPostHMR": false,
        "ecografiaPostAbortoIncompleto": false,
        "ecografiaPostEmbrionViable": false,
        "ecografiaPostNuevaConsejeria": false,
        "ecografiaPostDerivacion2Nivel": false,
        "ecografiaPostConductaExpectante": false,
        "consejeriaMACNo": false,
        "consejeriaMACACO": false,
        "consejeriaMACACI": false,
        "consejeriaMACDIU": false,
        "consejeriaMACPreservativo": false,
        "consejeriaMACImplanteHormonal": false
    }
    
};
const initialState = {
    consejeria: initState, usuaries : [], isLoading: false, isChanging: false, redirectEdit:false
};

export const actionCreators = {
    loadUsuaries : () => async (dispatch, getState) => {

        dispatch({ type: getUsuariesRequest });

        const url = `api/Usuaries/GetForCombo`;
        const response = await fetch(url);
        const usuaries = await response.json();

        dispatch({ type: getUsuariesSuccess, usuaries });
    },

    setRedirecting: value => (dispatch, getState) => {
        dispatch({ type: 'SetRedirect', value});
    },

    newConsejeria: id => async (dispatch, getState) => {
        if (id <= 0) {
            // no hay id
            return;
        }

        dispatch({ type: initNewConsejeria, getState });
    },

    editConsejeria: id => async (dispatch, getState) => {
        if (id <= 0) {
            dispatch({ type: initNewConsejeria, getState });
            return;
        }
        dispatch({ type: getConsejeriaRequest, id });

        const url = `api/Consejerias/GetCompleta?id=` + id;
        const response = await fetch(url);
        const consejeria = await response.json();

        dispatch({ type: getConsejeriaSuccess, id, consejeria });
    },

    /*try - catch async
     * https://medium.com/@kkomaz/react-to-async-await-553c43f243e2
     * model binding mvc core.
     * https://andrewlock.net/model-binding-json-posts-in-asp-net-core/
     */

    saveUsuaria: usuariaDto => async (dispatch) => {
        const url = `api/Consejerias/PostUsuaria`;
        const settings = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json;',
            },

            body: JSON.stringify(usuariaDto)
        };

        dispatch({ type: saveUsuariaRequest });

        try {
            const response = await fetch(url, settings);
            const consejeria = await response.json();
            dispatch({ type: saveUsuariaSuccess, consejeria });
           
        } catch (error) {
            dispatch({ type: saveUsuariaFailure});
        }
    },

    saveAntecedente: antecedenteDto => async (dispatch) => {
        const url = `api/Consejerias/PostAntecedente`;
        const settings = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json;',
            },
            body: JSON.stringify(antecedenteDto)
        };

        dispatch({ type: saveAntecedenteRequest });

        try {
            const response = await fetch(url, settings);
            const consejeria = await response.json();
            dispatch({ type: saveAntecedenteSuccess, consejeria });
			
        } catch (error) {
            dispatch({ type: saveAntecedenteFailure });
        }
    },

    saveGestaActual: gestaActualDto => async (dispatch) => {
        const url = `api/Consejerias/PostGestaActual`;


        const settings = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json;',
            },
            body: JSON.stringify(gestaActualDto)
        };

        dispatch({ type: saveGestaActualRequest });

        try {
            const response = await fetch(url, settings);
            const consejeria = await response.json();
            dispatch({ type: saveGestaActualSuccess, consejeria });
        } catch (error) {
            dispatch({ type: saveGestaActualFailure });
        }
    },

    saveEstudioComplementario: estudioComplementarioDto => async (dispatch) => {
        const url = `api/Consejerias/PostEstudioComplementario`;
        const settings = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json;',
            },
            body: JSON.stringify(estudioComplementarioDto)
        };

        dispatch({ type: saveEstudioComplementarioRequest });

        try {
            const response = await fetch(url, settings);
            const consejeria = await response.json();
            dispatch({ type: saveEstudioComplementarioSuccess, consejeria });
        } catch (error) {
            dispatch({ type: saveEstudioComplementarioFailure });
        }
    },

    saveEntrevista: entrevistaPostAbortoDto => async (dispatch) => {
        const url = `api/Consejerias/PostEntrevistaPostAborto`;
        const settings = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json;',
            },
            body: JSON.stringify(entrevistaPostAbortoDto)
        };

        dispatch({ type: saveEntrevistaRequest });

        try {
            const response = await fetch(url, settings);
            const consejeria = await response.json();
            dispatch({ type: saveEntrevistaSuccess, consejeria });
        } catch (error) {
            dispatch({ type: saveEntrevistaFailure });
        }
    },
      
    handleChangeConsjeria: valor => (dispatch, getState) => {
        dispatch({ type: changeStateBeforeConsejeria, valor });
        dispatch({ type: changingStateConsejeria, valor });
        dispatch({ type: changeStateAfterConsejeria, valor });
    },

    handleChangeUsuaria: valor => (dispatch, getState) => {
        dispatch({ type: changeStateBeforeUsuaria, valor });
        dispatch({ type: changingStateUsuaria, valor });
        dispatch({ type: changeStateAfterUsuaria, valor });
    },

    handleChangeAntecedente: valor => (dispatch, getState) => {
        dispatch({ type: changeStateBeforeAntecedente, valor });
        dispatch({ type: changingStateAntecedente, valor });
        dispatch({ type: changeStateAfterAntecedente, valor });
    },

    handleChangeGestaActual: valor => (dispatch, getState) => {
        dispatch({ type: changeStateBeforeGestaActual, valor });
        dispatch({ type: changingStateGestaActual, valor });
        dispatch({ type: changeStateAfterGestaActual, valor });
    },

    handleChangeEstudioComplementario: valor => (dispatch, getState) => {
        dispatch({ type: changeStateBeforeEstudioComplementario, valor });
        dispatch({ type: changingStateEstudioComplementario, valor });
        dispatch({ type: changeStateAfterEstudioComplementario, valor });
    },

    handleChangeEntrevista: valor => (dispatch, getState) => {
        dispatch({ type: changeStateBeforeEntrevista, valor });
        dispatch({ type: changingStateEntrevista, valor });
        dispatch({ type: changeStateAfterEntrevista, valor });
    },

    handleChangeConsjeriaFecha: (valor, name) => (dispatch, getState) => {
        dispatch({ type: 'handleChangeConsjeriaFecha', valor, name });
    },
    handleChangeGestaActualFecha: (valor, name) => (dispatch, getState) => {
        dispatch({ type: 'handleChangeGestaActualFecha', valor, name });
    },

    handleChangeEstudioComplementarioFecha: (valor, name) => (dispatch, getState) => {
        dispatch({ type: 'handleChangeEstudioComplementarioFecha', valor, name });
    },

    handleChangeEntrevistaPostFecha: (valor, name) => (dispatch, getState) => {
        dispatch({ type: 'handleChangeEntrevistaPostFecha', valor, name });
    }
};

export const reducer = (state, action) => {
  state = state || initialState;

    if (action.type === getConsejeriaId) {
        return {
            idConsejeria: state.consejeria.consejeriaDto.id
        };
    }

    if (action.type === changeStateBeforeConsejeria) {
        return {
            ...state,
            isChanging: true
        };
    }

    
    if (action.type === 'handleChangeConsjeriaFecha') {

        state.consejeria.usuariaDto[action.name.target.firstChild.ownerDocument.activeElement.id] = action.valor;

        return {
            ...state,
            isChanging: true,
            consejeria: state.consejeria
        }
    }
    if (action.type === 'handleChangeGestaActualFecha') {

        state.consejeria.gestaActualDto[action.name.target.firstChild.ownerDocument.activeElement.id] = action.valor;

        return {
            ...state,
            isChanging: true,
            consejeria: state.consejeria
        }
    }

    if (action.type === 'handleChangeEstudioComplementarioFecha') {

        state.consejeria.estudioComplementarioDto[action.name.target.firstChild.ownerDocument.activeElement.id] = action.valor;

        return {
            ...state,
            isChanging: true,
            consejeria: state.consejeria
        }
    }

    if (action.type === 'handleChangeEntrevistaPostFecha') {

        state.consejeria.entrevistaPostAbortoDto[action.name.target.firstChild.ownerDocument.activeElement.id] = action.valor;

        return {
            ...state,
            isChanging: true,
            consejeria: state.consejeria
        }
    }
    
    if (action.type === changingStateConsejeria) {
        if (action.valor.target.type === "checkbox") {
            state.consejeria.consejeriaDto[action.valor.target.id] = action.valor.target.checked;
        } else {
            state.consejeria.consejeriaDto[action.valor.target.id] = action.valor.target.value;
        }

        return {
            ...state,
            isChanging: true,
            consejeria: state.consejeria
        }
    }
    if (action.type === changeStateAfterConsejeria) {
        return {
            ...state,
            consejeria: state.consejeria,
            isChanging: false
        };
    }

    if (action.type === changeStateBeforeUsuaria) {
        return {
            ...state,
            isChanging: true
        };
    }
    if (action.type === changingStateUsuaria) {
        if (action.valor.target.type === "checkbox") {
            state.consejeria.usuariaDto[action.valor.target.id] = action.valor.target.checked;
        } else {
            state.consejeria.usuariaDto[action.valor.target.id] = action.valor.target.value;
        }
        
        return {
            ...state,
            isChanging: true,
            consejeria: state.consejeria
        }
    }
    if (action.type === changeStateAfterUsuaria) { 
        return {
            ...state,
            consejeria: state.consejeria,
            isChanging: false
        };
    }

    if (action.type === changeStateBeforeAntecedente) {
        return {
            ...state,
            isChanging: true
        };
    }
    if (action.type === changingStateAntecedente) {
        if (action.valor.target.type === "checkbox") {
            state.consejeria.antecedenteDto[action.valor.target.id] = action.valor.target.checked;
        } else {
            state.consejeria.antecedenteDto[action.valor.target.id] = action.valor.target.value;
        }

        return {
            ...state,
            isChanging: true,
            consejeria: state.consejeria
        }
    }
    if (action.type === changeStateAfterAntecedente) {
        return {
            ...state,
            consejeria: state.consejeria,
            isChanging: false
        };
    }

    if (action.type === changeStateBeforeGestaActual) {
        return {
            ...state,
            isChanging: true
        };
    }
    if (action.type === changingStateGestaActual) {
        if (action.valor.target.type === "checkbox") {
            state.consejeria.gestaActualDto[action.valor.target.id] = action.valor.target.checked;
        } else {
            state.consejeria.gestaActualDto[action.valor.target.id] = action.valor.target.value;
        }

        return {
            ...state,
            isChanging: true,
            consejeria: state.consejeria
        }
    }
    if (action.type === changeStateAfterGestaActual) {
        return {
            ...state,
            consejeria: state.consejeria,
            isChanging: false
        };
    }

    if (action.type === changeStateBeforeEstudioComplementario) {
        return {
            ...state,
            isChanging: true
        };
    }
    if (action.type === changingStateEstudioComplementario) {
        if (action.valor.target.type === "checkbox") {
            state.consejeria.estudioComplementarioDto[action.valor.target.id] = action.valor.target.checked;
        } else {
            state.consejeria.estudioComplementarioDto[action.valor.target.id] = action.valor.target.value;
        }

        return {
            ...state,
            isChanging: true,
            consejeria: state.consejeria
        }
    }
    if (action.type === changeStateAfterEstudioComplementario) {
        return {
            ...state,
            consejeria: state.consejeria,
            isChanging: false
        };
    }

    if (action.type === changeStateBeforeEntrevista) {
        return {
            ...state,
            isChanging: true
        };
    }
    if (action.type === changingStateEntrevista) {
        if (action.valor.target.type === "checkbox") {
            state.consejeria.entrevistaPostAbortoDto[action.valor.target.id] = action.valor.target.checked;
        } else {
            state.consejeria.entrevistaPostAbortoDto[action.valor.target.id] = action.valor.target.value;
        }

        return {
            ...state,
            isChanging: true,
            consejeria: state.consejeria
        }
    }
    if (action.type === changeStateAfterEntrevista) {
        return {
            ...state,
            consejeria: state.consejeria,
            isChanging: false
        };
    }

    if (action.type === getUsuariesRequest) {
        return {
            ...state,
            isLoading: true
        };
    }
    if (action.type === getUsuariesSuccess) {
        return {
            ...state,
            usuaries: action.usuaries,
            isLoading: false
        };
    }

    if (action.type === getConsejeriaRequest) {
        return {
            ...state,
            isLoading: true
        };
    }
    if (action.type === getConsejeriaSuccess) {
        return {
            ...state,
            consejeria: action.consejeria,
            isLoading: false,
            redirectEdit: false
        };
    }

    if (action.type === 'SetRedirect') {
        return {
            ...state,
            consejeria: action.consejeria,
            redirectEdit: action.value
        };
    }

    

    if (action.type === newConsejeria) {
        return {
            ...state,
            isLoading: true
        };
    }

    if (action.type === initNewConsejeria) {
        return {
            ...state,
            consejeria: initialState.consejeria,
            isLoading: false
        };
    }

    if (action.type === saveUsuariaRequest) {
        return {
            ...state,
            isLoading: false
        };
    }
    if (action.type === saveUsuariaFailure) {
        return {
            ...state,
            isLoading: false
        };
    }
    if (action.type === saveUsuariaSuccess) {
        return {
            ...state,
            consejeria: action.consejeria,
            isLoading: false
        };
    }

    if (action.type === redirectEdit) {
        return {
            ...state,
            consejeria: action.consejeria,
            redirectEdit : true
        };
    }

    if (action.type === saveGestaActualRequest) {
        return {
            ...state,
            isLoading: false
        };
    }
    if (action.type === saveGestaActualFailure) {
        return {
            ...state,
            isLoading: false
        };
    }
    if (action.type === saveGestaActualSuccess) {
        return {
            ...state,
            consejeria: action.consejeria,
            isLoading: false
        };
    }

    if (action.type === saveAntecedenteRequest) {
        return {
            ...state,
            isLoading: false
        };
    }
    if (action.type === saveAntecedenteFailure) {
        return {
            ...state,
            isLoading: false
        };
    }
    if (action.type === saveAntecedenteSuccess) {
        return {
            ...state,
            consejeria: action.consejeria,
            isLoading: false
        };
    }

    if (action.type === saveEntrevistaRequest) {
        return {
            ...state,
            isLoading: false
        };
    }
    if (action.type === saveEntrevistaFailure) {
        return {
            ...state,
            isLoading: false
        };
    }
    if (action.type === saveEntrevistaSuccess) {
        return {
            ...state,
            consejeria: action.consejeria,
            isLoading: false
        };
    }

    if (action.type === afterConsejeria) {
        return {
            ...state,
            consejeria: {},
            isLoading: false
        };
    }

    if (action.type === receiveConsejeria) {
    return {
      ...state,
      id: action.id,
      consejeria: action.consejeria,
      isLoading: false
    };
  }

  return state;
};
