const requestConsejerias = 'REQUEST_CONCEJERIAS';
const receiveConsejerias = 'RECEIVE_CONCEJERIAS';
const getSearchText = 'GET_SEARCHTEXT';
const changeSearchText = 'CHANGE_SEARCH';
const initialState = { consejerias: [], searchText: '', isLoading: false };

export const actionCreators = {
  requestConsejerias: startDateIndex => async (dispatch, getState) => {    
      if (startDateIndex === getState().consejerias.startDateIndex) {
      // Don't issue a duplicate request (we already have or are loading the requested data)
      return;
    }
      
      dispatch({ type: requestConsejerias, startDateIndex });

      const url = `api/Consejerias/Get`;
    const response = await fetch(url);
    const consejerias = await response.json();

      dispatch({ type: receiveConsejerias, startDateIndex, consejerias });
    },
    
    handleSearch: searchText => async (dispatch, getState) => {
        const startDateIndex = 0;
        let url = `api/Consejerias/Get`;
        if (getState().consejerias.searchText !== '')
            url = `api/Consejerias/SearchConsejeria/?searchText=` + getState().consejerias.searchText;

        dispatch({ type: requestConsejerias, startDateIndex });

        const response = await fetch(url);
        const consejerias = await response.json();

        dispatch({ type: receiveConsejerias, startDateIndex, consejerias });
    },
    handleChangeSearch: valor => (dispatch, getState) => {
        dispatch({ type: changeSearchText, valor });
    }
    
};

export const reducer = (state, action) => {
  state = state || initialState;
    if (action.type === changeSearchText) {
        return {
            ...state,
            searchText: action.valor.target.value
        }
    }

    if (action.type === requestConsejerias) {
    return {
      ...state,
      startDateIndex: action.startDateIndex,
      isLoading: true
    };
  }

    if (action.type === receiveConsejerias) {
    return {
      ...state,
      startDateIndex: action.startDateIndex,
      consejerias: action.consejerias,
      isLoading: false
        };

    if (action.type === getSearchText) {
        return {
            ...state,
            searchText: action.searchText,
            isLoading: true
        };
    }
        
  }

  return state;
};
