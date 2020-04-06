/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import SearchableList from "./SearchableList";
import { getCharacters } from "../redux/actions/PersonajesActions";
import { getFilms } from "../redux/actions/PeliculasActions";
import { connect } from "react-redux";

function PreLoad(props) {
  useEffect(() => {
    props.getCharacters();
    props.getFilms();
  }, []);

  return <SearchableList />;
}

const mapStateToProps = state => {
  return {
    state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getFilms: () => dispatch(getFilms),
    getCharacters: () => dispatch(getCharacters)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PreLoad);
