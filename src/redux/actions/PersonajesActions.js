export const FETCH_ITEM_REQ = "FETCH_ITEM_REQ";
export const FETCH_ITEM_ERROR = "FETCH_ITEM_ERROR";
export const FETCH_PJ_SUCCESS = "FETCH_PJ_SUCCESS";
export const SELECT_CHARACTER = "SELECT_CHARACTER";
export const FETCH_MORE_CHARACTERS = "FETCH_MORE_CHARACTERS";

export const getCharacters = dispatch => {
  dispatch({ type: FETCH_ITEM_REQ });

  fetch("https://swapi.co/api/people/")
    .then(res => res.json())
    .then(personajes => {
      dispatch({
        type: FETCH_PJ_SUCCESS,
        payload: {
          personajes
        }
      });
    })
    .catch(error => {
      dispatch({
        type: FETCH_ITEM_ERROR,
        payload: error.toString()
      });
    });
};

export const selectCharacter = id => {
  return {
    type: SELECT_CHARACTER,
    payload: {
      id
    }
  };
};

export const getMoreCharacters = page => dispatch => {
  dispatch({ type: FETCH_ITEM_REQ });

  fetch(page)
    .then(res => res.json())
    .then(personajes => {
      dispatch({
        type: FETCH_MORE_CHARACTERS,
        payload: {
          ...personajes
        }
      });
    });
};
