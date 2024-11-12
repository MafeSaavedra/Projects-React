import { useState } from 'react';
import "./Navbar.css";
import logoImage from './img/LOGOREACT.svg';

export function Navbar({ logo = logoImage }) {
    const [estadoInicial, setEstadoInicial] = useState(false);

    const toggleMenu = () => {
        setEstadoInicial(!estadoInicial);
    };

    return (
        <nav className="nbr">
            <div className="nbr-content">
                <div className="cnt-logo">
                    <img className="logo" src={logo} alt="logo" />
                </div>
                <div className="hamburger" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
            <div className={`links ${estadoInicial ? "active" : ""}`}>
                <ul className="navbar-links">
                    <li><a href="/home.jsx">Inicio</a></li>
                    <li><a href="/about.jsx">Acerca</a></li>
                    <li><a href="#services">Servicios</a></li>
                    <li><a href="#contact">Contacto</a></li>
                </ul>
            </div>
        </nav>
    );
}
