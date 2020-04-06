import {
  FETCH_ITEM_REQ,
  FETCH_PJ_SUCCESS,
  FETCH_ITEM_ERROR,
  SELECT_CHARACTER,
  FETCH_MORE_CHARACTERS
} from "../actions/PersonajesActions";

const initialState = {
  listPersonajes: {},
  loading: false,
  error: null,
  selectedCharacter: 0
};

function personajes(state = initialState, action) {
  switch (action.type) {
    case FETCH_ITEM_REQ:
      return {
        ...state,
        loading: true
      };

    case FETCH_PJ_SUCCESS:
      return {
        ...state,
        loading: false,
        listPersonajes: action.payload.personajes
      };

    case FETCH_ITEM_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };

    case SELECT_CHARACTER:
      return {
        ...state,
        selectedCharacter: action.payload.id
      };
    case FETCH_MORE_CHARACTERS:
      return {
        ...state,
        loading: false,
        listPersonajes: {
          ...state.listPersonajes,
          results: [...state.listPersonajes.results, ...action.payload.results],
          next: action.payload.next,
          previous: action.payload.previous
        }
      };

    default:
      return state;
  }
}

export default personajes;
