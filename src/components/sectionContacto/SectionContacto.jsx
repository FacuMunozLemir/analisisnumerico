import React from "react";
import { faVideo, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./sectioncontacto.css";

function SectionContacto() {
  const logoYouTube = <FontAwesomeIcon icon={faPlay} />;
  return (
    <div id="contacto" className="sectionContacto">
      <h3>Contacto</h3>
      <h4>Dejanos tu consulta</h4>
      <form className="contactoContainer">
        <div className="lineaSuperior">
          <div className="contactoIzquierda">
            <input type="text" placeholder="Nombre Completo" />
            <input type="email" placeholder="Correo electrónico" />
            <input type="number" placeholder="Telefono de contacto" />
          </div>
          <div className="contactoDerecha">
            <textarea name="" id="" placeholder="Tu consulta"></textarea>
          </div>
        </div>
        <div className="lineaInferior">
          <button>Enviar</button>
          <a
            href="https://www.youtube.com/channel/UCXd3X_19weqRnp4RnWFS0Rg"
            target="_blank"
          >
            {logoYouTube}
            <p>YouTube</p>
          </a>
        </div>
      </form>
    </div>
  );
}

export default SectionContacto;
