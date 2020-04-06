import {
  FETCH_PELICULAS_REQ,
  FETCH_PELICULAS_SUCCESS,
  FETCH_PELICULAS_ERROR,
  SELECT_FILM
} from "../actions/PeliculasActions";

const initialState = {
  listPeliculas: {},
  loading: false,
  error: null,
  selectedFilm: 0
};

function peliculas(state = initialState, action) {
  switch (action.type) {
    case FETCH_PELICULAS_REQ:
      return {
        ...state,
        loading: true
      };

    case FETCH_PELICULAS_SUCCESS:
      return {
        ...state,
        loading: false,
        listPeliculas: action.payload.peliculas
      };

    case FETCH_PELICULAS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };

    case SELECT_FILM:
      return {
        ...state,
        selectedFilm: action.payload.id
      };

    default:
      return state;
  }
}

export default peliculas;
