import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import Main from "./components/main/Main.jsx";
import SectionCrypto from "./components/sectionCrypto/SectionCrypto";
import NoticiasContainer from "./components/noticiasContainer/NoticiasContainer";
import EnlacesContainer from "./components/enlacesContainer/enlacesContainer";
import SectionContacto from "./components/sectionContacto/SectionContacto";
import EventosContainer from "./components/pageEventos/eventosContainer";

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
        <Route path="/eventos" element={<EventosContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
