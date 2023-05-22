import React from "react";
import "./truncamiento.css";
import TablaValores from "../../components/tablaValores/TablaValores";

function Truncamiento() {
  return (
    <div className="unidadesContainer">
      <h2>Truncamiento y Redondeo</h2>
      <div className="definicion unidadSegmento">
        <h3>Definición</h3>
        <p>
          En el análisis numérico, el truncamiento y el redondeo son dos
          técnicas utilizadas para reducir el número de cifras decimales en un
          resultado de cálculo. Ambas técnicas se utilizan cuando se realizan
          cálculos con números que tienen más cifras decimales de las necesarias
          o deseadas, y se usan para evitar errores en los resultados finales.
        </p>
        <br />
        <p>
          El truncamiento se refiere a la eliminación de las cifras decimales
          que no son necesarias en un número, lo que puede llevar a que el
          resultado final sea menos preciso. Por ejemplo, si tenemos el número
          3.14159265 y queremos truncarlo a dos decimales, el resultado sería
          3.14, ya que se eliminan las cifras decimales a partir del tercer
          decimal.
        </p>
        <br />
        <p>
          Por otro lado, el redondeo implica cambiar un número a la cifra más
          cercana, lo que puede dar lugar a resultados más precisos. El redondeo
          se realiza siguiendo un conjunto de reglas que dependen del número que
          se está redondeando y de la cifra decimal a la que se quiere
          redondear. Por ejemplo, si tenemos el número 3.14159265 y queremos
          redondearlo a dos decimales, el resultado dependerá de la tercera
          cifra decimal: si esta es menor o igual a 5, el número se redondea
          hacia abajo y el resultado es 3.14; si es mayor que 5, el número se
          redondea hacia arriba y el resultado es 3.15.
        </p>
        <br />
        <p>
          Es importante tener en cuenta que tanto el truncamiento como el
          redondeo pueden introducir errores en los cálculos, ya que se eliminan
          o se modifican cifras que podrían ser importantes para los resultados.
          Por lo tanto, es fundamental elegir el método adecuado para cada
          situación y tener en cuenta los posibles errores que puedan surgir.
        </p>
      </div>

      <div className="explicacion unidadSegmento">
        <h3>Explicación</h3>
        <p>
          El truncamiento y el redondeo son dos técnicas que se utilizan para
          simplificar los resultados de cálculos que implican números con un
          gran número de cifras decimales.
        </p>
      </div>

      <div className="ejemplo unidadSegmento">
        <h3>Ejemplo</h3>
        <p>
          Podemos utilizar el mismo ejemplo de las crypto monedas que mostramos
          en el inicio, pero ahora nos concentremos en los distintos valores
        </p>
        <br />
        <p>
          Para este ejemplo vamos a tomar 3 puntos de la historia. El 1 de abril
          del 2022 (con el precio del BTC en 45.000usd). Luego el 1 de marzo del
          2023 (con el precio del BTC en 22.300usd). Y finalmente el 1 de Abril
          del 2023 (con el precio del BTC en 28475). Y lo vamos a comparar a
          pesos argentinos considerando que 1 uds son $450 pesos.
        </p>
        <br />
        <TablaValores />
      </div>
    </div>
  );
}

export default Truncamiento;
