import React from "react";
import { Link } from "react-router-dom";
import Calculadora from "../calculadora/Calculadora";
import "./sectioncrypto.css";

function SectionCrypto() {
  return (
    <div className="sectionCrypto">
      <div className="ejemploIzquierda">
        <h3>Pero con un ejemplo lo vamos a entender mejor.</h3>
        <p>
          Creo que todos escuchamos el termino "crypto monedas" ¿verdad? ¿Sabías
          que el valor de <b>1 Bitcoin</b> es de más de <b>20.000 dolares</b>?
          Eso quiere decir que 1 Bitcoin equivale a más de{" "}
          <b>SIETE MILLONES DE PESOS</b>. Woow ya empezamos a notar como un
          número chico se transforma en uno grande. Pero, ¿que hay de las
          posiciones decimales? Claro que tienen un valor y por eso vamos usar
          esta calculadora en tiempo real para demostrar que toda posición
          decimal tiene un valor, y como un número en una posición decimal
          "lejana" puede significar una gran diferencia en nuestro bolsillo.
        </p>
        <Link to={"/unidades"}>Ir a las unidades</Link>
      </div>
      <div className="ejemploDerecha">
        <h3>Ingresa un valor con decimales y mira la magia</h3>
        <img src="./img/bitcoin.png" alt="imagen bitcoin" />
        <p>
          Aquí podemos ver como un número decimal muy pequeño, puede hacer una
          GRAN diferencia dependiendo del <b>contexto</b>
        </p>
        <Calculadora />
      </div>
    </div>
  );
}

export default SectionCrypto;
