import React from "react";
import "../truncamiento/truncamiento.css";

function Proyectos() {
  return (
    <div className="unidadesContainer">
      <h2>Proyectos de la cátedra </h2>
      <div className="definicion unidadSegmento">
        <h3>Proyectos</h3>

        <p>
          Esta es una sección especial destinada a mostrar los diferentes
          proyectos realizados para la cátedra por diferentes alumnos
        </p>
        <br />
        <p>
          El error relativo es una medida relativa de la precisión de un cálculo
          numérico. Se calcula dividiendo el error absoluto entre el valor
          verdadero y se expresa generalmente como un valor decimal o
          porcentual. El error relativo permite comparar la magnitud del error
          con respecto al tamaño del valor verdadero. Proporciona una forma de
          evaluar la exactitud relativa de una aproximación y es particularmente
          útil cuando se trabaja con números de diferentes magnitudes. Un error
          relativo más pequeño indica una aproximación más precisa.
        </p>
      </div>

      <div className="explicacion unidadSegmento">
        <p>
          El siguiente video forma parte de un proyecto donde se resuleve un
          sistema de ecuaciones que normalmente tiene su campo en el áre de la
          ingeniería eléctrica, y en esta ocasión lo estaremos resolviendo desde
          el análisis numérico, utilizando el método de eliminación gaussiana.
        </p>
        <br />
        <br />
        <iframe
          src="https://www.youtube.com/embed/_c4zArsKlAU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Proyectos;
