import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PagPrincipal } from "./PagPrincipal/PagPrincipal";
import { ToDo } from './ToDo/ToDo.jsx';
import { Menu } from "../src/BarraMenu/Menu.jsx";
import { ScrrollArriba } from './Componentes/ScrollArriba.jsx';

function App() {
  return (
    <Router>
      <ScrrollArriba />
      <header>
        <Menu />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<PagPrincipal />} />
          <Route path="/ToDo" element={<ToDo />} />
        </Routes>
      </main>
      <div>
      </div>
    </Router>
  );
}

export default App;
