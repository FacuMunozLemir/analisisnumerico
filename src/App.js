import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import Main from "./components/main/Main.jsx";
import SectionCrypto from "./components/sectionCrypto/SectionCrypto";
import NoticiasContainer from "./components/noticiasContainer/NoticiasContainer";
import EnlacesContainer from "./components/enlacesContainer/enlacesContainer";
import SectionContacto from "./components/sectionContacto/SectionContacto";

// import EventosContainer from "./components/pageEventos/eventosContainer";
import Ejemplos from "./components/ejemplos/Ejemplos";
import Truncamiento from "./views/truncamiento/Truncamiento";
import Errores from "./views/errores/Errores";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={[
            <Main />,
            <SectionCrypto />,
            <NoticiasContainer />,
            <EnlacesContainer />,
            <SectionContacto />,
          ]}
        />
        <Route path="/ejemplos" element={<Ejemplos />} />
        <Route
          path="/ejemplos/redondeotruncamiento"
          element={<Truncamiento />}
        />
        <Route path="/ejemplos/errores" element={<Errores />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
