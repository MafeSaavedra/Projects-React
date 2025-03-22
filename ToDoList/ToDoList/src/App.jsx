import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PagPrincipal } from "./PagPrincipal/PagPrincipal";

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<PagPrincipal />} />
        </Routes>
      </main>
      <div>
      </div>
    </Router>
  );
}

export default App;
