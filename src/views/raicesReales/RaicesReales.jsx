import React from "react";
import { faFileArchive } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import raices from "../../assets/docs/raicesreales.pdf";
import "../truncamiento/truncamiento.css";

function RaicesReales() {
  const docs = <FontAwesomeIcon icon={faFileArchive} />;

  return (
    <div className="unidadesContainer">
      <h2>Raices Reales </h2>
      <div className="definicion unidadSegmento">
        <h3>Definición</h3>
        <p>
          <b>Raices Reales:</b>
        </p>
        <br />
        <p>
          En el análisis numérico, las raíces reales se refieren a los valores
          numéricos que satisfacen una ecuación en forma de f(x) = 0, donde f(x)
          es una función real. Una raíz real es un valor de x para el cual la
          función se anula y toma el valor de cero. En otras palabras, es el
          punto en el que la gráfica de la función cruza el eje x.
        </p>
        <br />
        <p>
          En el análisis numérico, es común encontrarse con ecuaciones no
          lineales o polinomiales complicadas que no tienen soluciones
          analíticas exactas. En estos casos, los métodos numéricos se utilizan
          para encontrar aproximaciones de las raíces reales. Estos métodos
          implican iteraciones sucesivas para acercarse cada vez más al valor
          exacto de la raíz.
        </p>
        <br />
        <p>
          Es importante tener en cuenta que una ecuación puede tener múltiples
          raíces reales, y algunas de ellas pueden ser repetidas. Además,
          existen casos en los que una ecuación no tiene raíces reales, sino que
          solo tiene raíces complejas o imaginarias.
        </p>
        <br />
        <p>
          El análisis numérico proporciona diversas técnicas y algoritmos, como
          el método de bisección, el método de Newton-Raphson o el método de la
          secante, que permiten encontrar y aproximar las raíces reales de
          ecuaciones no lineales o polinomiales. Estas aproximaciones de las
          raíces reales son fundamentales en muchos campos, como la física, la
          ingeniería y la economía, donde se requiere una solución numérica
          precisa para tomar decisiones o realizar predicciones.
        </p>
      </div>

      <div className="explicacion unidadSegmento">
        <h3>Explicación</h3>
        <p>
          En muchas ocasiones, las ecuaciones no lineales o polinomiales no
          tienen soluciones analíticas exactas, lo que significa que no se
          pueden expresar de manera algebraica de forma simple. En estos casos,
          el análisis numérico nos proporciona métodos y algoritmos para
          encontrar aproximaciones de las raíces reales.
        </p>
        <br />
        <p>
          Estos métodos numéricos utilizan iteraciones sucesivas para acercarse
          cada vez más al valor exacto de la raíz. Algunos ejemplos comunes de
          estos métodos son el método de bisección, el método de Newton-Raphson
          y el método de la secante. Estas técnicas permiten encontrar raíces
          reales y proporcionan aproximaciones cada vez más precisas a medida
          que se realizan más iteraciones.
        </p>
        <br />
        <p>
          Es importante destacar que una ecuación puede tener múltiples raíces
          reales, y algunas de ellas pueden ser repetidas.
        </p>
        <br />
      </div>

      <div className="ejemplo unidadSegmento">
        <h3>Ejemplo</h3>
        <p>
          Para este ejemplo los invitamos a usar la herramienta "Graficadora de
          funciones" de la sección <b>enlaces de interes</b>. O también pueden
          acceder a ella haciendo click{" "}
          <a target="_blank" href="https://es.symbolab.com/graphing-calculator">
            aquí
          </a>
          .
          <br />
          <br />
          Toca en el icono para ver un ejemplo desarrollado con su
          interpretación
        </p>
        <a className="documentosAgregados" href={raices} target="_blank">
          {docs}
        </a>
        <br />
      </div>
    </div>
  );
}

export default RaicesReales;
