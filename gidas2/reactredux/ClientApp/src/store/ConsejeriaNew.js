const initNewConsejeria = 'INIT_NEW_CONSEJERIA';

const getUsuariesRequest = 'GET_USUARIES_RUEQUEST';
const getUsuariesSuccess = 'GET_USUARIES_SUCCESS';

const saveConsejeriaNewRequest = 'saveConsejeriaNewRequest';
const saveConsejeriaNewFailure = 'saveConsejeriaNewFailure';
const saveConsejeriaNewSuccess = 'saveConsejeriaNewSuccess';

const changeStateBeforeConsejeriaNew = 'ChangeStateBeforeConsejeriaNew';
const changingStateConsejeriaNew = 'ChangingStateConsejeriaNew';
const changeStateAfterConsejeriaNew = 'ChangeStateAfterConsejeriaNew';

const redirectEdit = 'RedirectEdit';

const initState = {
        "id": 0,
        "numero": 0,
        "fechaIngreso": new Date(),
        "usuariaId": 0,
        "usuarie1Id": 0,
        "usuarie2Id": 0,
        "observaciones": "",
        "nivelInstruccion": 0,
        "nivelInstruccionEstado": 0,
        "nombre": "",
        "apellido": "",
        "edad": 0,
        "fechaNacimiento": new Date(),
        "nacionalidadId": 0,
        "telefono": "",
        "direccion": ""
};
const initialState = {
    consejeriaNew: initState, usuaries: [], isLoading: false, isChanging: false, redirectEdit: false, idConsejeria: 0
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
        dispatch({ type: initNewConsejeria, getState });
    },

    saveConsejeriaNew: consejeriaNew => async (dispatch) => {
        const url = `api/Consejerias/PostConsejeriaNew`;
        const settings = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json;',
            },

            body: JSON.stringify(consejeriaNew)
        };

        dispatch({ type: saveConsejeriaNewRequest });

        try {
            const response = await fetch(url, settings);
            const id = await response.json();
            dispatch({ type: saveConsejeriaNewSuccess, id });
            //si id == 0 hacer redirect a edicion.
            //if (consejeriaNew.id == 0)
            //    props.history.push(`/consejeria/${consejeria.consejeriaDto.id}`);
            //    dispatch({ type: 'RedirectEdit', consejeria });
        } catch (error) {
            dispatch({ type: saveConsejeriaNewFailure});
        }
    },

      
    handleChangeConsejeriaNew: valor => (dispatch, getState) => {
        dispatch({ type: changeStateBeforeConsejeriaNew, valor });
        dispatch({ type: changingStateConsejeriaNew, valor });
        dispatch({ type: changeStateAfterConsejeriaNew, valor });
    },
};

export const reducer = (state, action) => {
  state = state || initialState;

    if (action.type === saveConsejeriaNewSuccess) {
        return {
            ...state,
            idConsejeria: action.id,
            isLoading: false,
            redirectEdit: true
        };
    }

    if (action.type === initNewConsejeria) {
        return {
            ...state,
            consejeriaNew: initialState,
            isLoading: false
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


    if (action.type === changeStateBeforeConsejeriaNew) {
        return {
            ...state,
            isChanging: true
        };
    }
   

    if (action.type === changeStateBeforeConsejeriaNew) {
        return {
            ...state,
            isChanging: true
        };
    }
    if (action.type === changingStateConsejeriaNew) {
        if (action.valor.target.type === "checkbox") {
            state.consejeriaNew[action.valor.target.id] = action.valor.target.checked;
        } else {
            state.consejeriaNew[action.valor.target.id] = action.valor.target.value;
        }
        
        return {
            ...state,
            isChanging: true,
            consejeriaNew: state.consejeriaNew
        }
    }
    if (action.type === changeStateAfterConsejeriaNew) { 
        return {
            ...state,
            consejeriaNew: state.consejeriaNew,
            isChanging: false
        };
    }
  return state;
};
