const newConsejeria = 'NEW_CONCEJERIA';
const initNewConsejeria = 'INIT_NEW_CONCEJERIA';

const getConsejeriaRequest = 'GET_CONCEJERIA_RUEQUES';
const getConsejeriaFailure = 'GET_CONCEJERIA_FAILURE';
const getConsejeriaSuccess = 'GET_CONCEJERIA_SUCCESS';

const saveConsejeriaRequest = 'SAVE_CONCEJERIA_RUEQUES';
const saveConsejeriaFailure = 'SAVE_CONCEJERIA_FAILURE';
const saveConsejeriaSuccess = 'SAVE_CONCEJERIA_SUCCESS';
const afterConsejeria = 'AFTER_SAVE_CONCEJERIA';

const editConsejeria = 'EDIT_CONCEJERIA';
const receiveConsejeria = 'RECIVE_CONCEJERIAS';

const changeStateBeforeUsuaria = 'ChangeStateBeforeUsuaria';
const changingStateUsuaria = 'ChangingStateUsuaria';
const changeStateAfterUsuaria = 'ChangeStateAfterUsuaria';

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
        "gestas": false,
        "partosVaginal": false,
        "cesareas": false,
        "abortoEspontaneo": false,
        "abortoVoluntario": false,
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
        "fUM": "",
        "eGFUM": "",
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
    "gestaActualDto": {
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
    }
};
const initialState = {
    consejeria: initState, isLoading: false, isChanging: false
};

export const actionCreators = {
    newConsejeria: id => async (dispatch, getState) => {
        if (id <= 0) {
            // no hay id
            return;
        }

        dispatch({ type: initNewConsejeria, getState });
    },

    editConsejeria: id => async (dispatch, getState) => {    
        if (id <= 0) {
            // no hay id
            return;
        }

        dispatch({ type: getConsejeriaRequest, id });

        const url = `api/Consejerias/GetCompleta?id=` + id;
        const response = await fetch(url);
        const consejeria = await response.json();

        dispatch({ type: getConsejeriaSuccess, id, consejeria });
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

    hola:id =>  async (dispatch, getState) => {
        dispatch({ type: 'hola', id });
    },

    //saveConsejeria: id => async (dispatch) => {

    //    const url = `api/Consejerias/Post`;
    //    const settings = {
    //        method: 'POST',
    //        headers: {
    //            Accept: 'application/json',
    //            'Content-Type': 'application/json',
    //        }
    //    };

    //    const response = await fetch(url, settings);
    //    const consejeria = await response.json();

    //    dispatch({ type: saveConsejeriaRequest, consejeria });
    //}
};

export const reducer = (state, action) => {
  state = state || initialState;

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
            state.consejeria.entrevistaDto[action.valor.target.id] = action.valor.target.checked;
        } else {
            state.consejeria.entrevistaDto[action.valor.target.id] = action.valor.target.value;
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

    if (action.type === 'hola') {
        return {
            ...state,
            consejeria: state.consejeria,
            isLoading: true
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
            isLoading: false
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

    if (action.type === saveConsejeriaRequest) {
        return {
            ...state,
            consejeria: {},
            isLoading: false
        };
    }
    if (action.type === saveConsejeriaFailure) {
        return {
            ...state,
            consejeria: {},
            isLoading: false
        };
    }
    if (action.type === saveConsejeriaSuccess) {
        return {
            ...state,
            consejeria: {},
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
