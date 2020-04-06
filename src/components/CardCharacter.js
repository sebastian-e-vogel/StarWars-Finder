import React from "react";
import "./styles.css";

const CardCharacter = props => {
  const { name, eyeColor, height, mass } = props;

  return (
    <div className="containerCard">
      <div class="box">
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
                <p> {props.films}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCharacter;
