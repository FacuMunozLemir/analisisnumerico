import React from "react";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./enlaces.css";

function Enlaces(item) {
  const link = <FontAwesomeIcon icon={faLink} />;
  return (
    <div className="enlacesCard">
      {link}
      <a href={item.enlace} target="_blank" className="txtCuerpo">
        {item.text}
      </a>
    </div>
  );
}

export default Enlaces;
