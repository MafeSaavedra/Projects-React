
import './Menu.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';

export function Menu() {
    const location = useLocation();
    const getColor = (path) => {
        return location.pathname == path ? "#b37bc6" : "#558ac9";
    };
    return (
        <section className='Contenedor-Navbar'>
            {/* Se activara en color violeta cuando este en PagPrincipal*/}
            <Link to="/"><div>
                <FontAwesomeIcon icon={faCircle} size="2x" color={getColor("/")} title="Inicio" />
            </div>
            </Link>

            <Link to="/ToDo">
                {/* Se activara en color violeta cuando este en ToDoList*/}
                <div>
                    <FontAwesomeIcon icon={faCircle} size="2x" color={getColor("/ToDo")} title="Tareas" />
                </div>
            </Link>

            <Link>
                {/* Se activara en color violeta cuando este en Resumen*/}
                <div>
                    <FontAwesomeIcon icon={faCircle} size="2x" color="#558ac9" title="Resumen" />
                </div>
            </Link>



        </section>
    );

}