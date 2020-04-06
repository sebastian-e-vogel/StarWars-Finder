import React from "react";
import "./styles.css";
import { connect } from "react-redux";
import CardFilm from "./CardFilm";
import CardCharacter from "./CardCharacter";
import { selectFilm } from "../redux/actions/PeliculasActions";
import { selectSection } from "../redux/actions/SelectSectionActions";
import languajeMap from "./LanguajeMap";

function ViewItem(props) {
  const charactersResults = props.state.personajes.listPersonajes.results;
  const filmsResults = props.state.peliculas.listPeliculas.results;
  const { selectedCharacter } = props.state.personajes;
  const { selectedFilm } = props.state.peliculas;
  const { selectedSection } = props.state.sections;

  const getFilmId = filmUrl =>
    filmsResults.findIndex(film => film.url === filmUrl);

  const showFilm = filmUrl => {
    props.selectSection("peliculas");
    props.selectFilm(getFilmId(filmUrl));
  };

  const translate = wordToTranslate => languajeMap[wordToTranslate];

  if (!charactersResults || !filmsResults) {
    return (
      <div className="listCardItem">
        <CardCharacter name="" eyeColor="" height="" mass="" films="" />
      </div>
    );
  } else if (selectedSection === "personajes") {
    return (
      <div className="listCardItem">
        <CardCharacter
          name={charactersResults[selectedCharacter].name}
          eyeColor={translate(charactersResults[selectedCharacter].eye_color)}
          height={
            charactersResults[selectedCharacter].height === "unknown"
              ? "Desconocida"
              : `${charactersResults[selectedCharacter].height} cm`
          }
          mass={
            charactersResults[selectedCharacter].mass === "unknown"
              ? "Desconocido"
              : `${charactersResults[selectedCharacter].mass} kg`
          } 
          films={charactersResults[selectedCharacter].films.map(filmUrl => {
            return (
              <p className="card-film" onClick={() => showFilm(filmUrl)}>
                {filmsResults[getFilmId(filmUrl)].title}
              </p>
            );
          })}
        />
      </div>
    );
  }
  return (
    <div className="listCardItem">
      <CardFilm
        title={filmsResults[selectedFilm].title}
        director={filmsResults[selectedFilm].director}
        producer={filmsResults[selectedFilm].producer}
        relaseDate={filmsResults[selectedFilm].release_date
          .split("-")
          .reverse()
          .join("/")}
      />
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
    selectSection: section => dispatch(selectSection(section)),
    selectFilm: id => dispatch(selectFilm(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewItem);
