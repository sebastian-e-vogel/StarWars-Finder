import React from "react";
import "./styles.css";
import { connect } from "react-redux";
import CardFilm from "./CardFilm";
import CardCharacter from "./CardCharacter";
import languajeMap from "./LanguajeMap";


function ViewItem(props) {
  const charactersResults = props.state.personajes.listPersonajes.results;
  const filmsResults = props.state.peliculas.listPeliculas.results;
  const { selectedCharacter } = props.state.personajes;
  const { selectedFilm } = props.state.peliculas;
  const { selectedSection } = props.state.sections;



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
          url={charactersResults[selectedCharacter].url}
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
          films={charactersResults[selectedCharacter].films}
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

export default connect(mapStateToProps)(ViewItem);
