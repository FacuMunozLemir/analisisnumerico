import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NavBar from './components/navBar/NavBar';
import Main from './components/main/Main.jsx';
import SectionCrypto from './components/sectionCrypto/SectionCrypto';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Main />
    <SectionCrypto/>
    <Routes>
      {/* <Route path="/" element={<Main />} /> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
