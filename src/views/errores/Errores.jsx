import React from "react";
import { faFileArchive } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import errores from "../../assets/docs/errores.pdf";
import "../truncamiento/truncamiento.css";

function Errores() {
  const docs = <FontAwesomeIcon icon={faFileArchive} />;

  return (
    <div className="unidadesContainer">
      <h2>Errores: Absoluto, Relativo y Porcentual </h2>
      <div className="definicion unidadSegmento">
        <h3>Definicion</h3>
        <p>
          <b>Error Absoluto:</b>
        </p>
        <br />
        <p>
          El error absoluto es una medida de la diferencia entre el valor
          verdadero y el valor aproximado de un cálculo numérico. Representa la
          magnitud del desvío o la imprecisión en el resultado obtenido. Se
          calcula restando el valor verdadero al valor aproximado. El error
          absoluto puede ser positivo o negativo, dependiendo de si el valor
          aproximado está por encima o por debajo del valor verdadero. Cuanto
          menor sea el valor del error absoluto, mayor será la precisión de la
          aproximación.
        </p>
        <br />
        <p>
          <b>Error Relativo:</b>
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
        <br />
        <p>
          <b>Error Porcentual:</b>
        </p>
        <br />
        <p>
          El error porcentual es una medida del error relativo expresado como un
          porcentaje. Es útil para evaluar y comunicar de manera más intuitiva
          la precisión de un cálculo numérico. Se calcula dividiendo el error
          absoluto entre el valor verdadero y multiplicándolo por 100%. El error
          porcentual indica qué tan lejos está la aproximación del valor
          verdadero en términos porcentuales. Un error porcentual más pequeño
          implica una aproximación más precisa y cercana al valor verdadero.
        </p>
      </div>

      <div className="explicacion unidadSegmento">
        <h3>Explicación</h3>
        <p>
          Estos errores son herramientas importantes en el análisis numérico, ya
          que nos permiten evaluar y comunicar la precisión de nuestros
          cálculos. Nos ayudan a comprender qué tan cerca estamos del valor
          verdadero y cuánta confianza podemos tener en nuestros resultados.
          Además, nos permiten comparar diferentes aproximaciones y elegir la
          más precisa.
        </p>
        <br />
        <p>
          <b>Error Absoluto:</b>
        </p>
        <br />
        <p>
          El error absoluto nos permite cuantificar la diferencia entre el valor
          verdadero y nuestra aproximación. Imagina que estás midiendo la
          longitud de un objeto con una regla y obtienes un resultado de 10
          centímetros, pero el valor verdadero es de 10.5 centímetros. El error
          absoluto en este caso sería de 0.5 centímetros. Nos ayuda a comprender
          cuánto nos hemos alejado del valor correcto. Cuanto más pequeño sea el
          error absoluto, más precisa será nuestra aproximación.
        </p>
        <br />
        <p>
          <b>Error Relativo:</b>
        </p>
        <br />
        <p>
          El error relativo nos ayuda a evaluar la precisión de nuestra
          aproximación en relación al valor verdadero. Para hacerlo, dividimos
          el error absoluto por el valor verdadero. Siguiendo el ejemplo
          anterior, si el error absoluto es de 0.5 centímetros y el valor
          verdadero es de 10.5 centímetros, el error relativo sería de
          aproximadamente 0.0476 (o 4.76%). El error relativo nos permite
          comparar la magnitud del error con respecto al tamaño del valor
          verdadero. Un valor de error relativo más pequeño indica una
          aproximación más precisa.
        </p>
        <br />
        <p>
          <b>Error Porcentual:</b>
        </p>
        <br />
        <p>
          El error porcentual es similar al error relativo, pero se expresa como
          un porcentaje. Es útil porque nos permite comprender fácilmente qué
          tan cerca estamos del valor verdadero en términos porcentuales. Para
          calcular el error porcentual, dividimos el error absoluto por el valor
          verdadero y luego multiplicamos por 100%. Siguiendo el ejemplo
          anterior, si el error absoluto es de 0.5 centímetros y el valor
          verdadero es de 10.5 centímetros, el error porcentual sería
          aproximadamente del 4.76%. Un valor de error porcentual más pequeño
          indica una aproximación más precisa y cercana al valor verdadero.
        </p>
      </div>

      <div className="ejemplo unidadSegmento">
        <h3>Ejemplo</h3>
        <p>
          Toca en el icono para ver un ejemplo desarrollado con su
          interpretación
        </p>
        <a href={errores} target="_blank">
          {docs}
        </a>
        <br />
      </div>
    </div>
  );
}

export default Errores;
