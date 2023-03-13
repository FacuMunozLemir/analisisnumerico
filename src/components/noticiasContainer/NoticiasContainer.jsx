import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NoticiasList from "../noticiasList/NoticiasList";
import getItems from "../../services/mockApi";
import "./noticiascontainer.css";

function NoticiasContainer() {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  useEffect(() => {
    getItems().then((respuestaDatos) => {
      setData(respuestaDatos.slice(0, 6));
    });

    // getItems(0).then((respuestaDatos) => setData1(respuestaDatos));
  }, [data]);

  return (
    <div id="noticias" className="noticiasContainer">
      <h3>Noticias recientes</h3>
      <div className="primeraFila">
        <NoticiasList props={data} />
      </div>
      <div className="segundaFila">
        <Link>Ver todas las noticias</Link>
      </div>
    </div>
  );
}

export default NoticiasContainer;
