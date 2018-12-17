const requestPacientesType = 'REQUEST_PACIENTES';
const receivePacientesType = 'RECEIVE_PACIENTES';
const initialState = { pacientes: [], isLoading: false };

export const actionCreators = {
  requestPacientes: startDateIndex => async (dispatch, getState) => {    
      if (startDateIndex === getState().pacientes.startDateIndex) {
      // Don't issue a duplicate request (we already have or are loading the requested data)
      return;
    }

      dispatch({ type: requestPacientesType, startDateIndex });

      const url = `api/Pacientes/Get`;
    const response = await fetch(url);
    const pacientes = await response.json();

      dispatch({ type: receivePacientesType, startDateIndex, pacientes });
    },
    viewPaciente: startDateIndex => async (dispatch, getState) => {
        if (startDateIndex === getState().pacientes.startDateIndex) {
            // Don't issue a duplicate request (we already have or are loading the requested data)
            return;
        }

        dispatch({ type: requestPacientesType, startDateIndex });

        const url = `api/Pacientes/Get`;
        const response = await fetch(url);
        const pacientes = await response.json();

        dispatch({ type: receivePacientesType, startDateIndex, pacientes });
    }
};

export const reducer = (state, action) => {
  state = state || initialState;

    if (action.type === requestPacientesType) {
    return {
      ...state,
      startDateIndex: action.startDateIndex,
      isLoading: true
    };
  }

    if (action.type === receivePacientesType) {
    return {
      ...state,
      startDateIndex: action.startDateIndex,
      pacientes: action.pacientes,
      isLoading: false
    };
  }

  return state;
};
