import React from "react";
import { Link } from "react-router-dom";
import "./noticias.css";

function Noticias(item) {
  return (
    <div className="noticiasCard">
      <h4>{item.titulo}</h4>
      <h5>{item.subtitulo}</h5>
      <p className="txtCuerpo">{item.cuerpo}</p>
      <p className="txtFecha">{item.fecha}</p>
      <div className="noticiasBtn">
        <Link>Noticia completa</Link>
      </div>
    </div>
  );
}

export default Noticias;
