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
  return (
    <div className="navBarContainer">
      <div className="logo">
        <p>LOGO</p>
      </div>
      <div className="navegacion">
        <Link to={"/"}>Inicio</Link>
        <Link to={"/"}>Cátedra</Link>
        <Link to={"/"}>Noticias</Link>
        <Link to={"/"}>Enlaces de Interes</Link>
        <Link to={"/"}>Eventos</Link>
        <Link to={"/"}>Biblioteca</Link>
        <Link to={"/"}>Contacto</Link>
        <Link to={"/"}>Iniciar Sesión</Link>
      </div>
      <div className="hamburguesa" onClick={handlerNav}>
        <div className="linea l1"></div>
        <div className="linea l2"></div>
        <div className="linea l3"></div>
      </div>
    </div>
  );
}

export default NavBar;
