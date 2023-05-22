import React from "react";
import { faFileArchive } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ajustes from "../../assets/docs/ajustesdecurva.pdf";
import "../truncamiento/truncamiento.css";

function AjustesDeCurva() {
  const docs = <FontAwesomeIcon icon={faFileArchive} />;

  return (
    <div className="unidadesContainer">
      <h2>Ajustes de Curva</h2>
      <div className="definicion unidadSegmento">
        <h3>Definición</h3>
        <p>
          <b>Ajustes de curva:</b>
        </p>
        <br />
        <p>
          En el análisis numérico, los ajustes de curva se refieren a técnicas y
          métodos utilizados para encontrar una función o curva que se ajuste de
          manera óptima a un conjunto de datos observados o experimentales. El
          objetivo es encontrar una representación matemática que se aproxime lo
          más posible a los puntos de datos, permitiendo el análisis, la
          interpretación y la extrapolación de los datos disponibles.
        </p>
        <br />
        <p>
          El proceso de ajuste de curva implica seleccionar una función o modelo
          matemático que describa la relación entre las variables independientes
          y dependientes de los datos. Este modelo puede ser lineal, polinomial,
          exponencial, logarítmico u otra forma funcional, dependiendo de la
          naturaleza de los datos y la relación esperada.
        </p>
        <br />
        <p>
          Para encontrar los parámetros óptimos del modelo de ajuste de curva,
          se utiliza un enfoque de optimización numérica. Esto implica ajustar
          los parámetros de la función elegida de tal manera que la función se
          ajuste de manera óptima a los datos observados. Los métodos más
          comunes utilizados en el análisis numérico para realizar ajustes de
          curva son el método de mínimos cuadrados y el método de regresión no
          lineal.
        </p>
        <br />
        <p>
          <b>El método de mínimos cuadrados</b> busca minimizar la suma de los
          cuadrados de las diferencias entre los valores observados y los
          valores predichos por el modelo. Esto proporciona una medida de la
          calidad del ajuste y permite encontrar los valores óptimos de los
          parámetros del modelo.
        </p>
        <br />
        <p>
          <b>El método de regresión no lineal</b> por otro lado, se utiliza
          cuando el modelo de ajuste de curva es no lineal en los parámetros.
          Este método utiliza técnicas iterativas para encontrar los valores
          óptimos de los parámetros mediante ajustes sucesivos hasta que se
          alcance la convergencia.
        </p>
      </div>

      <div className="explicacion unidadSegmento">
        <h3>Explicación</h3>
        <p>
          En resumen, el ajuste de curva en el análisis numérico se refiere al
          proceso de encontrar una función matemática que se ajuste de manera
          óptima a un conjunto de datos. Esto se logra mediante la selección de
          un modelo matemático y la optimización de sus parámetros utilizando
          métodos numéricos como el método de mínimos cuadrados o la regresión
          no lineal. El ajuste de curva permite el análisis, la interpretación y
          la extrapolación de los datos observados en diversos campos de
          estudio.
        </p>
      </div>

      <div className="ejemplo unidadSegmento">
        <h3>Ejemplo</h3>
        <p>Toca en el icono para ver un ejemplo desarrollado.</p>
        <a className="documentosAgregados" href={ajustes} target="_blank">
          {docs}
        </a>
        <br />
      </div>
    </div>
  );
}

export default AjustesDeCurva;
