import React from "react";
import Enlaces from "../enlaces/Enlaces";

function EnlacesList({ props }) {
  return props.map((item) => (
    <Enlaces
      key={item.id}
      id={item.id}
      text={item.texto}
      enlace={item.enlace}
    />
  ));
}

export default EnlacesList;
