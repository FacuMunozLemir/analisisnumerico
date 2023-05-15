import React from "react";
import "./main.css";

function Main() {
  return (
    <div className="main">
      <div className="banner">
        <img src="./img/portada.jpg" alt="imagen de portada" />
        <div className="letrasBanner">
          <h1>Análisis Numérico</h1>
        </div>
      </div>
      <div className="semiHero">
        <h2>Bienvenidos a la catedra</h2>
        <div className="texto">
          <div className="textoIzquierda">
            <img src="./img/calculadoraAmico.png" alt="" />
          </div>
          <div className="textoDerecha">
            <h3>Donde conoceremos un poco más sobre los números</h3>
            <p>
              Es esencial que aprendamos la importancia que tienen los{" "}
              <b>números</b> sin importar la posición que ocupen. Todos nos
              damos cuenta cuando hay un número grande ¿verdad? Pero... ¿sabías
              que los números que se encuentran en posiciones decimales muy
              pequeñas también tienen un valor que, dependiendo del contexto,
              pueden significar mucho para nosotros?{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
