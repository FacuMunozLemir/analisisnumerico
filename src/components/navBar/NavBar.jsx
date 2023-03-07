import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";

function NavBar() {
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
        </div>
    </div>
  )
}

export default NavBar;