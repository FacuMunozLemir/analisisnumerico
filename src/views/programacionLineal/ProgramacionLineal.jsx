import React from "react";
import { faFileArchive } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import programacion from "../../assets/docs/programacionlineal.pdf";
import "../truncamiento/truncamiento.css";

function ProgramacionLineal() {
  const docs = <FontAwesomeIcon icon={faFileArchive} />;

  return (
    <div className="unidadesContainer">
      <h2>Programación Lineal</h2>
      <div className="definicion unidadSegmento">
        <h3>Definición</h3>
        <p>
          <b>Programación Lineal:</b>
        </p>
        <br />
        <p>
          En el análisis numérico, la programación lineal es una técnica
          matemática utilizada para maximizar o minimizar una función lineal
          sujeta a un conjunto de restricciones lineales. Se aplica ampliamente
          en la optimización de recursos limitados y la toma de decisiones en
          situaciones donde se busca alcanzar el mejor resultado posible.
        </p>
        <br />
        <p>
          Se basa en la formulación de un modelo matemático que describe el
          problema en términos de variables de decisión, una función objetivo
          lineal y restricciones lineales. Las variables de decisión representan
          las cantidades o decisiones que se deben determinar, la función
          objetivo lineal especifica el objetivo a maximizar o minimizar, y las
          restricciones lineales establecen las limitaciones o condiciones que
          deben cumplirse.
        </p>
        <br />
        <p>
          El objetivo de la programación lineal es encontrar los valores óptimos
          de las variables de decisión que maximicen o minimicen la función
          objetivo, respetando las restricciones impuestas. Estos valores
          óptimos representan la solución óptima del problema de programación
          lineal y proporcionan una guía para tomar decisiones informadas y
          eficientes.
        </p>
        <br />
        <p>
          Los métodos y algoritmos utilizados en la programación lineal se basan
          en técnicas de optimización y álgebra lineal, como el
          <b>método simplex</b> , el <b>método de las dos fases</b> y el{" "}
          <b>método de puntos interiores</b> . Estos métodos permiten resolver
          problemas de programación lineal de manera eficiente y obtener
          soluciones óptimas.
        </p>
      </div>

      <div className="explicacion unidadSegmento">
        <h3>Explicación</h3>
        <p>
          En resumen, la programación lineal es una técnica matemática utilizada
          en el análisis numérico para maximizar o minimizar una función lineal
          sujeta a restricciones lineales. Permite encontrar soluciones óptimas
          en situaciones donde se busca utilizar eficientemente los recursos
          disponibles y tomar decisiones informadas basadas en un modelo
          matemático bien definido.
        </p>
      </div>

      <div className="ejemplo unidadSegmento">
        <h3>Ejemplo</h3>
        <p>
          Para este ejemplo los invitamos a utilizar la herramienta "SOLVER" que
          forma parte del conjunto de herramientas de Excel. Podemos encontrar
          como configurarlo en la sección <b>enlaces de interes</b>. O haciendo
          click{" "}
          <a
            target="_blank"
            href="https://www.youtube.com/watch?v=ZN0upz1Wciw&ab_channel=ElT%C3%ADoTech"
          >
            aquí
          </a>
          <br />
          <br />
          Tambien pueden acceder en la misma sección de "enlaces" al video de
          "Cómo utilizar solver" una vez que ya lo hayan activado/configurado en
          su PC. También pueden encontrar dicho video haciendo click{" "}
          <a
            target="_blank"
            href="https://www.youtube.com/watch?v=dLw8ZrWT8pc&ab_channel=SergioAlejandroCampos-EXCELeINFO"
          >
            aquí
          </a>
          <br />
          <br />
          Toca en el icono para ver un ejemplo desarrollado.
        </p>
        <a className="documentosAgregados" href={programacion} target="_blank">
          {docs}
        </a>
        <br />
      </div>
    </div>
  );
}

export default ProgramacionLineal;
