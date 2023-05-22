import React from "react";
import { faFileArchive } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import raices from "../../assets/docs/raicesreales.pdf";

import "../truncamiento/truncamiento.css";

function SistemasEcuaciones() {
  const docs = <FontAwesomeIcon icon={faFileArchive} />;

  return (
    <div className="unidadesContainer">
      <h2>Sistemas de Ecuaciones </h2>
      <div className="definicion unidadSegmento">
        <h3>Definición</h3>
        <p>
          <b>Sistemas de ecuaciones:</b>
        </p>
        <br />
        <p>
          En matemáticas, un sistema de ecuaciones es un conjunto de ecuaciones
          que se relacionan entre sí y se resuelven de manera simultánea. Estas
          ecuaciones suelen involucrar múltiples variables y establecen
          condiciones que deben cumplirse de manera conjunta.
        </p>
        <br />
        <p>
          Un sistema de ecuaciones se compone de dos o más ecuaciones, y cada
          ecuación del sistema puede tener sus propias incógnitas. El objetivo
          al resolver un sistema de ecuaciones es encontrar los valores de las
          incógnitas que satisfacen todas las ecuaciones simultáneamente.
        </p>
        <br />
        <p>
          Existen diferentes métodos para resolver sistemas de ecuaciones, como
          el método de eliminación Gaussiana, el método de Gauss-Jordan, el
          método de Newton-Rapshon y el método de Gauss Seidel solo por
          mencionar algunos.
        </p>
        <br />
        <p>
          <b>Metodo de eliminación gaussiana:</b> consiste en transformar el
          sistema de ecuaciones lineales en una forma triangular superior
          utilizando operaciones elementales de fila, como el intercambio de
          filas y la multiplicación de filas por una constante. Una vez que el
          sistema se encuentra en esta forma, se puede resolver fácilmente
          mediante sustitución hacia atrás. La eliminación gaussiana es útil
          cuando el objetivo principal es obtener la solución del sistema.
        </p>
        <br />
        <p>
          <b>Metodo de Gauss-Jordan:</b> es un método de eliminación que se
          utiliza para resolver sistemas de ecuaciones. Mediante operaciones
          elementales de fila, se busca transformar el sistema original en una
          forma escalonada reducida o en una forma triangular.
        </p>
        <br />
        <p>
          <b>Metodo de Gauss-Seidel:</b> es un método iterativo utilizado para
          resolver sistemas de ecuaciones lineales. En lugar de obtener una
          solución directa, el Método de Gauss-Seidel se basa en la iteración
          sucesiva para acercarse a la solución del sistema.
        </p>
        <br />
        <p>
          <b>Metodo de Newton-Raphson:</b> Este método se utiliza para resolver
          sistemas de ecuaciones no lineales. Se basa en la aproximación de las
          soluciones mediante la iteración del método de Newton. En cada
          iteración, se calcula la matriz jacobiana y se utiliza para actualizar
          las variables del sistema.
        </p>
      </div>

      <div className="explicacion unidadSegmento">
        <h3>Explicación</h3>
        <p>
          En resumen, un sistema de ecuaciones es un conjunto de ecuaciones
          relacionadas entre sí que se resuelven de forma simultánea para
          encontrar los valores de las incógnitas que satisfacen todas las
          ecuaciones. Los sistemas de ecuaciones son herramientas fundamentales
          en el análisis matemático y se aplican en numerosos campos para
          modelar y resolver problemas complejos.
        </p>
      </div>

      <div className="ejemplo unidadSegmento">
        <h3>Ejemplo</h3>
        <p>
          Para este ejemplo se grabó un video donde se explica el paso a paso de
          como plantear un sistema de ecuaciones y como resolverlo a través del
          método de eliminación gaussiana.
          <br />
          <br />
          Toca en el icono para ver el video
        </p>
        <a
          className="documentosAgregados"
          href={"https://youtu.be/_c4zArsKlAU"}
          target="_blank"
        >
          {docs}
        </a>
        <br />
      </div>
    </div>
  );
}

export default SistemasEcuaciones;
