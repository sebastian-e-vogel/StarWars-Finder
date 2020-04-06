import React from "react";
import "./styles.css";

const CardFilm = props => {
  const { title, director, producer, relaseDate } = props;
  return (
    <div className="containerCard">
      <div class="box">
        <div className="box__header">
          <h3>Titulo</h3>
          <h1> {title}</h1>
        </div>

        <div className="box__body">
          <div className="box__body_infos">
            <ul>
              <li>
                <span>Director</span>
                <p> {director} </p>
              </li>
              <li>
                <span>Productor</span>
                <p>{producer}</p>
              </li>
              <li>
                <span>Fecha de estreno</span>
                <p>{relaseDate}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFilm;
