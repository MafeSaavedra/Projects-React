import React from "react";
import './BotonLila.css';
export function Boton({ children }) {
    return (
        <div className="divBoton-Lila">
            <button className="Boton-Lila">{children}</button>
        </div>
    );
}