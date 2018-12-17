const requestConsejeriasType = 'REQUEST_CONCEJERIAS';
const receiveConsejeriasType = 'RECEIVE_CONCEJERIAS';
const initialState = { consejerias: [], isLoading: false };

export const actionCreators = {
  requestConsejerias: startDateIndex => async (dispatch, getState) => {    
      if (startDateIndex === getState().consejerias.startDateIndex) {
      // Don't issue a duplicate request (we already have or are loading the requested data)
      return;
    }

      dispatch({ type: requestConsejeriasType, startDateIndex });

      const url = `api/Consejerias/Get`;
    const response = await fetch(url);
    const consejerias = await response.json();

      dispatch({ type: receiveConsejeriasType, startDateIndex, consejerias });
    },
    viewPaciente: startDateIndex => async (dispatch, getState) => {
        if (startDateIndex === getState().consejerias.startDateIndex) {
            // Don't issue a duplicate request (we already have or are loading the requested data)
            return;
        }

        dispatch({ type: requestConsejeriasType, startDateIndex });

        const url = `api/Consejerias/Get`;
        const response = await fetch(url);
        const consejerias = await response.json();

        dispatch({ type: receiveConsejeriasType, startDateIndex, consejerias });
    }
};

export const reducer = (state, action) => {
  state = state || initialState;

    if (action.type === requestConsejeriasType) {
    return {
      ...state,
      startDateIndex: action.startDateIndex,
      isLoading: true
    };
  }

    if (action.type === receiveConsejeriasType) {
    return {
      ...state,
      startDateIndex: action.startDateIndex,
      consejerias: action.consejerias,
      isLoading: false
    };
  }

  return state;
};
