import React from "react";
import './BotonLila.css';
export function Boton({ children, OnClick }) {
    return (
        <div className="divBoton-Lila">
            <button OnClick={OnClick} className="Boton-Lila">{children}</button>
        </div>
    );
}