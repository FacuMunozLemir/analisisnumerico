import "./calculadora.css";



function Calculadora() {



    function handlerInput(evt){
    let numeroEscrito = evt.target.value;
    console.log(numeroEscrito);
    let numeroTotal = numeroEscrito * 7000000;
    document.querySelector('#resultado').value = numeroTotal;
    }



  return (
    <div className="calculadoraContainer">
            
            <div className="primerLinea">
                <p>Esta casilla representa a los Bitcoin --></p>
                <input type="number" placeholder='Ingrese un número decimal' onChange={handlerInput}/>
            </div>
           
            <div className="segundaLinea">
                <p>Esta representa su valor en pesos --></p>
                <input type="number" placeholder='Esperando valor' id='resultado' readOnly/>
            </div>
    </div>
  )
}

export default Calculadora