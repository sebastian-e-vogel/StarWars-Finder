export const SELECT_SECCION = "SELECT_SECCION";

export const selectSection = sectionName => ({
  type: SELECT_SECCION,
  payload: {
    selectedSection: sectionName
  }
});
