import "./Navbar.css";



import logoImage from './img/logohome.svg'; // Importa la imagen por defecto

export function Navbar({ logo = logoImage }) { // Usa logoImage como valor por defecto
    return (
        <nav className="nbr">
            <div className="nbr-content">
                <div className="cnt-logo">
                    <img className="logo" src={logo} alt="logo" />
                </div>
            </div>
            <div className="links">
                <ul className="navbar-links">
                    <li><a href="/home.jsx">Inicio</a></li>
                    <li><a href="#about">Acerca</a></li>
                    <li><a href="#services">Servicios</a></li>
                    <li><a href="#contact">Contacto</a></li>
                </ul>
            </div>
        </nav>
    );
}
