import React from "react";
import { selectFilm } from "../redux/actions/PeliculasActions";
import { selectSection } from "../redux/actions/SelectSectionActions";
import { connect } from "react-redux";
import ReactLoading from "react-loading";
import "./styles.css";

const CardCharacter = props => {
  const { name, eyeColor, height, mass, films } = props;
  const filmsResults = props.state.peliculas.listPeliculas.results;

  const getFilmId = filmUrl =>
    filmsResults.findIndex(film => film.url === filmUrl);

  const showFilm = filmUrl => {
    props.selectSection("peliculas");
    props.selectFilm(getFilmId(filmUrl));
  };

  return (
    <div className="containerCard">
      <div className="box">
        <div className="box__header">
          <h3>Nombre</h3>
          <h1>{name}</h1>
        </div>

        <div className="box__body">
          <div className="box__body_infos">
            <ul>
              <li>
                <span>Color de ojos</span>
                <p>{eyeColor}</p>
              </li>
              <li>
                <span>Altura</span>
                <p>{height}</p>
              </li>
              <li>
                <span>Peso</span>
                <p>{mass}</p>
              </li>
              <li>
                <span>Peliculas</span>
                <div>
                  {" "}
                  {films.length > 0 ? (
                    films.map(filmUrl => {
                      return (
                        <div key={filmUrl}>
                          <p
                            className="card-film"
                            onClick={() => showFilm(filmUrl)}
                          >
                            {filmsResults[getFilmId(filmUrl)].title}
                          </p>
                        </div>
                      );
                    })
                  ) : (
                    <div className="Loader">
                      <ReactLoading
                        type="spin"
                        color="#A9A9A9"
                        height={30}
                        width={30}
                      />
                    </div>
                  )}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

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

export default connect(mapStateToProps, mapDispatchToProps)(CardCharacter);
