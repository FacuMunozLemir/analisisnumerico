import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import Main from "./components/main/Main.jsx";
import SectionCrypto from "./components/sectionCrypto/SectionCrypto";
import NoticiasContainer from "./components/noticiasContainer/NoticiasContainer";
import EnlacesContainer from "./components/enlacesContainer/enlacesContainer";
import SectionContacto from "./components/sectionContacto/SectionContacto";

import Ejemplos from "./components/ejemplos/Ejemplos";
import Truncamiento from "./views/truncamiento/Truncamiento";
import Errores from "./views/errores/Errores";
import RaicesReales from "./views/raicesReales/RaicesReales";
import SistemasEcuaciones from "./views/sistemasEcuaciones/SistemasEcuaciones";
import ProgramacionLineal from "./views/programacionLineal/ProgramacionLineal";
import AjustesDeCurva from "./views/ajustesDeCurva/AjustesDeCurva";
import Proyectos from "./views/proyectos/Proyectos";
import Footer from "./components/footer/Footer";

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
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/ejemplos" element={<Ejemplos />} />
        <Route
          path="/ejemplos/redondeotruncamiento"
          element={<Truncamiento />}
        />
        <Route path="/ejemplos/errores" element={<Errores />} />
        <Route path="/ejemplos/raicesreales" element={<RaicesReales />} />
        <Route
          path="/ejemplos/sistemasdeecuaciones"
          element={<SistemasEcuaciones />}
        />
        <Route
          path="/ejemplos/programacionlineal"
          element={<ProgramacionLineal />}
        />
        <Route path="/ejemplos/ajustesdecurva" element={<AjustesDeCurva />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
