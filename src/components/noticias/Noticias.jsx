import React from "react";
import { Link } from "react-router-dom";
import "./noticias.css";

function Noticias(item) {
  return (
    <div className="noticiasCard">
      <h4>{item.titulo}</h4>
      <h5>{item.subtitulo}</h5>
      <p>{item.fecha}</p>
      <p>{item.cuerpo}</p>
      <Link>Noticia completa</Link>
    </div>
  );
}

export default Noticias;
