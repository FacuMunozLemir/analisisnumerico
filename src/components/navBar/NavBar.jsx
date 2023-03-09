import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function NavBar() {
  const [nav, setNav] = useState("1");
  function handlerNav() {
    if (nav === "1") {
      document.querySelector(".hamburguesa").className = "hamburguesaCierre";
      document.querySelector(".navegacion").className = "expandida";
      setNav("2");
    } else {
      document.querySelector(".hamburguesaCierre").className = "hamburguesa";
      document.querySelector(".expandida").className = "navegacion";
      setNav("1");
    }
  }

  function handleClick() {
    // let clase = document.querySelector("#navegacion").className;
    // console.log(clase);
    // if (clase == "expandida") {
    //   document.querySelector(".hamburguesaCierre").className = "hamburguesa";
    //   document.querySelector(".expandida").className = "navegacion";
    // }
  }
  return (
    <div className="navBarContainer">
      <div className="logo">
        <img
          src="./img/logoProfesorAizama.png"
          alt="logo del ingeniero Aizama"
        />
      </div>
      <div id="navegacion" className="navegacion">
        <Link to={"/"} onClick={handleClick}>
          Inicio
        </Link>
        <Link to={"/"} onClick={handleClick}>
          Noticias
        </Link>
        <Link to={"/"} onClick={handleClick}>
          Enlaces de Interes
        </Link>
        <Link to={"/"} onClick={handleClick}>
          Eventos
        </Link>
        <Link to={"/"} onClick={handleClick}>
          Biblioteca
        </Link>
        <Link to={"/"} onClick={handleClick}>
          Contacto
        </Link>
        <Link to={"/"} onClick={handleClick}>
          Iniciar Sesión
        </Link>
      </div>
      <div id="hamburguesa" className="hamburguesa" onClick={handlerNav}>
        <div className="linea l1"></div>
        <div className="linea l2"></div>
        <div className="linea l3"></div>
      </div>
    </div>
  );
}

export default NavBar;
