import React from "react";
import Noticias from "../noticias/Noticias";

function NoticiasList({ props }) {
  return props.map((item) => (
    <Noticias
      key={item.id}
      id={item.id}
      titulo={item.titulo}
      fecha={item.fecha}
      subtitulo={item.subtitulo}
      cuerpo={item.cuerpo}
    />
  ));
}

export default NoticiasList;
