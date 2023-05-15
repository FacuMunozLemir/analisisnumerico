import React, { useRef } from "react";
import "./tablavalores.css";

function TablaValores() {
  const txtPesos1Ref = useRef();
  const txtDolar1Ref = useRef();
  const txtPesos2Ref = useRef();
  const txtDolar2Ref = useRef();
  const txtPesos3Ref = useRef();
  const txtDolar3Ref = useRef();

  function handlerInput(evt) {
    let numeroEscrito = evt.target.value;
    console.log(numeroEscrito);
    let dolarTotal = parseFloat(numeroEscrito) * 45000;
    let numeroTotal = parseFloat(numeroEscrito) * 45000 * 450;
    txtDolar1Ref.current.value = dolarTotal;
    txtPesos1Ref.current.value = numeroTotal;
  }
  function handlerInput2(evt) {
    let numeroEscrito = evt.target.value;
    console.log(numeroEscrito);
    let dolarTotal = parseFloat(numeroEscrito) * 22300;
    let numeroTotal = parseFloat(numeroEscrito) * 22300 * 450;
    txtDolar2Ref.current.value = dolarTotal;
    txtPesos2Ref.current.value = numeroTotal;
  }
  function handlerInput3(evt) {
    let numeroEscrito = evt.target.value;
    console.log(numeroEscrito);
    let dolarTotal = parseFloat(numeroEscrito) * 28475;
    let numeroTotal = parseFloat(numeroEscrito) * 28475 * 450;
    txtDolar3Ref.current.value = dolarTotal;
    txtPesos3Ref.current.value = numeroTotal;
  }

  return (
    <div className="tablaValores">
      <div className="titulo">
        <h4>Fecha</h4>
        <h4>Valor en bitcoin</h4>
        <h4>Valor en dolar</h4>
        <h4>Valor en pesos</h4>
      </div>
      <div className="valores fila1">
        <p>1/04/2022</p>
        <input
          className="txtbtc1"
          type="number"
          placeholder="Ingrese un valor"
          onChange={handlerInput}
        />
        <input
          className="txtdolar1"
          type="number"
          ref={txtDolar1Ref}
          readOnly
        />
        <input
          className="txtpesos1"
          type="number"
          ref={txtPesos1Ref}
          readOnly
        />
      </div>
      <div className="valores fila2">
        <p>1/03/2023</p>
        <input
          className="txtbtc2"
          type="number"
          placeholder="Ingrese valor"
          onChange={handlerInput2}
        />
        <input
          className="txtdolar2"
          ref={txtDolar2Ref}
          type="number"
          readOnly
        />
        <input
          className="txtpesos2"
          ref={txtPesos2Ref}
          type="number"
          readOnly
        />
      </div>
      <div className="valores fila3">
        <p>1/04/2023</p>
        <input
          className="txtbtc3"
          type="number"
          placeholder="Ingrese valor"
          onChange={handlerInput3}
        />
        <input
          className="txtdolar3"
          ref={txtDolar3Ref}
          type="number"
          readOnly
        />
        <input
          className="txtpesos3"
          ref={txtPesos3Ref}
          type="number"
          readOnly
        />
      </div>
    </div>
  );
}

export default TablaValores;
