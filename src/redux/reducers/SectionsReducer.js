import { SELECT_SECCION } from "../actions/SelectSectionActions";

const initialState = {
  selectedSection: "personajes"
};
function sections(state = initialState, action) {
  switch (action.type) {
    case SELECT_SECCION:
      return {
        ...state,
        selectedSection: action.payload.selectedSection
      };

    default:
      return state;
  }
}

export default sections;
