import React, { useEffect, useState } from "react";
import { getEnlaces } from "../../services/mockApi";
import EnlacesList from "../enlacesList/EnlacesList";
import "./enlacescontainer.css";

function EnlacesContainer() {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  useEffect(() => {
    getEnlaces().then((respuestaDatos) => {
      setData(respuestaDatos);
    });

    // getItems(0).then((respuestaDatos) => setData1(respuestaDatos));
  }, [data]);
  return (
    <div id="enlaces" className="enlacesContainer">
      <h3>Enlaces de interés</h3>
      <div className="filaEnlaces">
        <EnlacesList props={data} />
      </div>
    </div>
  );
}

export default EnlacesContainer;
