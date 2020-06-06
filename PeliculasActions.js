export const FETCH_PELICULAS_REQ = "FETCH_PELICULAS_REQ";
export const FETCH_PELICULAS_ERROR = "FETCH_PELICULAS_ERROR";
export const FETCH_PELICULAS_SUCCESS = "FETCH_PELICULAS_SUCCESS";
export const SELECT_FILM = "SELECT_FILM";

export const getFilms = dispatch => {
  dispatch({ type: FETCH_PELICULAS_REQ });

  fetch("https://swapi.dev/api/films/")
    .then(res => res.json())
    .then(peliculas => {
      dispatch({
        type: FETCH_PELICULAS_SUCCESS,
        payload: {
          peliculas
        }
      });
    })
    .catch(error => {
      dispatch({
        type: FETCH_PELICULAS_ERROR,
        payload: error.toString()
      });
    });
};

export const selectFilm = id => {
  return {
    type: SELECT_FILM,
    payload: {
      id
    }
  };
};
