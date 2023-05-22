import React, { useState } from "react";
import { faVideo, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./sectioncontacto.css";

function SectionContacto() {
  const logoYouTube = <FontAwesomeIcon icon={faPlay} />;
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [numero, setNumero] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const mailtoLink = `mailto:analisisnumericojujuy@gmail.com?subject=Consulta&body=Nombre: ${nombre}%0D%0AEmail: ${email}%0D%0ANúmero: ${numero}%0D%0AMensaje: ${mensaje}`;

    window.location.href = mailtoLink;
  };

  return (
    <div id="contacto" className="sectionContacto">
      <h3>Contacto</h3>
      <h4>Dejanos tu consulta</h4>
      <form
        id="formularioContacto"
        className="contactoContainer"
        onSubmit={handleSubmit}
      >
        <div className="lineaSuperior">
          <div className="contactoIzquierda">
            <input
              name="nombre"
              className="form-control"
              type="text"
              placeholder="Nombre Completo"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
            <input
              name="email"
              className="form-control"
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              name="numero"
              className="form-control"
              type="number"
              placeholder="Teléfono de contacto"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
            />
          </div>
          <div className="contactoDerecha">
            <textarea
              name="mensaje"
              className="form-control"
              placeholder="Tu consulta"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              required
            ></textarea>
          </div>
        </div>
        <div className="lineaInferior">
          <button type="submit" id="btnMail">
            Enviar
          </button>
          {/* ...código existente... */}
        </div>
      </form>
    </div>
  );
  // return (
  //   <div id="contacto" className="sectionContacto">
  //     <h3>Contacto</h3>
  //     <h4>Dejanos tu consulta</h4>
  //     <form
  //       id="formularioContacto"
  //       className="contactoContainer"
  //       action=""
  //       onSubmit={handleSubmit}
  //     >
  //       <div className="lineaSuperior">
  //         <div className="contactoIzquierda">
  //           <input
  //             name="nombre"
  //             className="form-control"
  //             type="text"
  //             placeholder="Nombre Completo"
  //             required
  //           />
  //           <input
  //             name="email"
  //             className="form-control"
  //             type="email"
  //             placeholder="Correo electrónico"
  //             required
  //           />
  //           <input
  //             name="numero"
  //             className="form-control"
  //             type="number"
  //             placeholder="Telefono de contacto"
  //           />
  //         </div>
  //         <div className="contactoDerecha">
  //           <textarea
  //             name="mensaje"
  //             className="form-control"
  //             id=""
  //             placeholder="Tu consulta"
  //             required
  //           ></textarea>
  //         </div>
  //       </div>
  //       <div className="lineaInferior">
  //         <button type="submit" id="btnMail">
  //           Enviar
  //         </button>
  //         <a
  //           href="https://www.youtube.com/channel/UCXd3X_19weqRnp4RnWFS0Rg"
  //           target="_blank"
  //         >
  //           {logoYouTube}
  //           <p>YouTube</p>
  //         </a>
  //       </div>
  //     </form>
  //   </div>
  // );
}

export default SectionContacto;
