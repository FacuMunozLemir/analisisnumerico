import React from "react";
import { Link } from "react-router-dom";
import "./ejemplos.css";

function Ejemplos() {
  return (
    <div className="ejemplosContainer">
      <h2>Unidades</h2>
      <p>
        En esta sección podrán observar algunos ejemplos para entender mejor los
        conceptos escenciales de la materia
      </p>
      <div className="cardsContainer">
        <Link
          className="ejemplo1 ejemploCard"
          to={"/ejemplos/redondeotruncamiento"}
        >
          <img src="./img/ejemplo1redondeo.jpg" alt="imagen de ejemplo" />
          <div className="letrasEjemplo">
            <h4>Truncamiento y Redondeo</h4>
          </div>
        </Link>
        <Link className="ejemplo2 ejemploCard" to={"/ejemplos/errores"}>
          <img src="./img/ejemplo1redondeo.jpg" alt="imagen de ejemplo" />
          <div className="letrasEjemplo">
            <h4>Error Absoluto, relativo y porcentual</h4>
          </div>
        </Link>
        <Link className="ejemplo3 ejemploCard" to={"/ejemplos/raicesreales"}>
          <img src="./img/ejemplo1redondeo.jpg" alt="imagen de ejemplo" />
          <div className="letrasEjemplo">
            <h4>Raices reales</h4>
          </div>
        </Link>
        <Link className="ejemplo4 ejemploCard">
          <img src="./img/ejemplo1redondeo.jpg" alt="imagen de ejemplo" />
          <div className="letrasEjemplo">
            <h4>Sistemas de ecuaciones</h4>
          </div>
        </Link>
        <Link className="ejemplo5 ejemploCard">
          <img src="./img/ejemplo1redondeo.jpg" alt="imagen de ejemplo" />
          <div className="letrasEjemplo">
            <h4>Programacion lineal</h4>
          </div>
        </Link>
        <Link className="ejemplo6 ejemploCard">
          <img src="./img/ejemplo1redondeo.jpg" alt="imagen de ejemplo" />
          <div className="letrasEjemplo">
            <h4>Ajustes de Curva</h4>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Ejemplos;
