import React, { useState } from "react";
import { Link } from "react-router-dom";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./navbar.css";
function NavBar() {
  const burguer = <FontAwesomeIcon icon={faBars} />;
  const usuario = <FontAwesomeIcon icon={faUser} />;
  const [burguers, setBurguers] = useState("1");
  function handlerNav() {
    if (burguers === "1") {
      document.querySelector("#burguer").className = "itemsNavExpandida";
      setBurguers("2");
    } else {
      document.querySelector("#burguer").className = "itemsNav";
      setBurguers("1");
    }
  }
  return (
    <div className="navBar">
      <div className="navSuperior">
        <p>- Mejorando con ciencia -</p>
      </div>
      <div className="navInferior">
        <div className="items">
          <div className="burguer" onClick={handlerNav}>
            {burguer}
          </div>
          <div id="burguer" className="itemsNav">
            <Link to={"/"} onClick={handlerNav}>
              Inicio
            </Link>
            <a href="/#noticias" onClick={handlerNav}>
              Noticias
            </a>
            <a href="/#enlaces" onClick={handlerNav}>
              Enlaces
            </a>
            <Link to={"/ejemplos"} onClick={handlerNav}>
              Ejemplos
            </Link>
            {/* <Link to={"/"} onClick={handlerNav}>
              Biblioteca
            </Link> */}
            <a href="/#contacto" onClick={handlerNav}>
              Contacto
            </a>
          </div>
        </div>
        <div className="logo">
          <img src="./img/logoProfesorAizama.png" alt="logo amarre" />
        </div>
        <div className="carrito">
          <Link>{usuario}</Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
