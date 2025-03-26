import React from "react";
import './BotonLila.css';

export function Boton({ children, onClick }) {
    return (
        <div className="divBoton-Lila">
            <button onClick={onClick} className="Boton-Lila">{children}</button>
        </div>
    );
}
