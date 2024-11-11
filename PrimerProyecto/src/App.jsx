import './App.css';
import './main.css';

import { CtMain } from './CtMain.jsx'; // Importa correctamente el componente Main
import { Navbar } from './Navbar.jsx';
import { Footer } from './Footer.jsx';

export function App() {
    return (
        <>
            <div className="Content-pagina">
                <header>
                    <Navbar />
                </header>
                <main>
                    <CtMain /> {/* Usa el componente Main correctamente */}
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        </>
    );
}
