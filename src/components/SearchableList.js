/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import {
  selectCharacter,
  getMoreCharacters
} from "../redux/actions/PersonajesActions";
import { selectFilm } from "../redux/actions/PeliculasActions";
import "./styles.css";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import SearchIcon from "@material-ui/icons/Search";
import ReactLoading from "react-loading";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    position: "relative",
    overflow: "auto",
    maxHeight: 536,
    height: 400
  },
  listSection: {
    backgroundColor: "inherit"
  },
  ul: {
    backgroundColor: "inherit",
    padding: 0
  }
}));

function SearchableList(props) {
  const [inputText, setInputText] = useState("");
  const [scrollTop, setScrollTop] = useState(0);
  const classes = useStyles();
  const { selectedSection } = props.state.sections;
  const { next } = props.state.personajes.listPersonajes;
  const { loading } = props.state.personajes;
  const charactersResults = props.state.personajes.listPersonajes.results;
  const filmsResults = props.state.peliculas.listPeliculas.results;
  const infiniteScroll = useRef();

  if (!charactersResults || !filmsResults) {
    return (
      <div className="SearchableList">
        <div className="SearchBar">
          <div className="TextSectionSelected">
            <h4> {selectedSection.toUpperCase()} </h4>
          </div>
          <div className="inputWithIcon">
            <SearchIcon className="icon" />
            <input
              placeholder="Buscar"
              onChange={e => setInputText(e.target.value)}
            />
          </div>
        </div>
        <div className="Loader">
          <ReactLoading type="spin" color="black" height={25} width={25} />
        </div>
      </div>
    );
  } else if (selectedSection === "personajes") {
    let filteredCharacters = charactersResults.filter(character => {
      return (
        character.name.toLowerCase().indexOf(inputText.toLowerCase()) !== -1
      );
    });

    function handleSelectCharacter(characterUrl) {
      let characterId = charactersResults.findIndex(
        character => character.url === characterUrl
      );
      props.selectCharacter(characterId);
    }
    const loadMoreCharacters = () => {
      props.getMoreCharacters(next);
    };
    const onScroll = () => {
      const scrollList = infiniteScroll.current.scrollTop;
      setScrollTop(scrollList);
     let childtHight = infiniteScroll.current.firstElementChild.offsetHeight * charactersResults.length
     let parentHight = infiniteScroll.current.offsetHeight
      if (
        scrollTop + parentHight > childtHight - 60
           && next && !loading
      ) {
        loadMoreCharacters();
      }
    };

    return (
      <div className="SearchableList">
        <div className="SearchBar">
          <div className="TextSectionSelected">
            <h4> {selectedSection.toUpperCase()} </h4>
          </div>
          <div className="inputWithIcon">
            <SearchIcon className="icon" />
            <input
              placeholder="Buscar"
              onChange={e => setInputText(e.target.value)}
            />
          </div>
        </div>
        <List
          ref={infiniteScroll}
          component="nav"
          className={classes.root}
          onScroll={onScroll}
        >
          {filteredCharacters.map(character => (
            <ListItem key={character.url} button onClick={() => handleSelectCharacter(character.url)}>
              <ListItemText inset primary={character.name} />
            </ListItem>
          ))}
          {loading && ( 
            <div className="Loader">
            <ReactLoading type="spin" color="#A9A9A9" height={30} width={30} />
            </div>
          )}
        </List>
      </div>
    );
  }
  let filteredFilms = filmsResults.filter(film => {
    return film.title.toLowerCase().indexOf(inputText.toLowerCase()) !== -1;
  });
  function handleSelectFilm(filmUrl) {
    let filmId = filmsResults.findIndex(film => film.url === filmUrl);
    props.selectFilm(filmId);
  }
  return (
    <div className="SearchableList">
      <div className="SearchBar">
        <div className="TextSectionSelected">
          <h4> {selectedSection.toUpperCase()} </h4>
        </div>
        <div className="inputWithIcon">
          <SearchIcon className="icon" />
          <input
            placeholder="Buscar"
            onChange={e => setInputText(e.target.value)}
          />
        </div>
      </div>
      <List component="nav" className={classes.root}>
        {filteredFilms.map(film => (
          <ListItem key={film.url} button onClick={() => handleSelectFilm(film.url)}>
            <ListItemText inset primary={film.title} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectCharacter: characterId => dispatch(selectCharacter(characterId)),
    getMoreCharacters: nextPage => dispatch(getMoreCharacters(nextPage)),
    selectFilm: filmId => dispatch(selectFilm(filmId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchableList);
