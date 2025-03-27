import React from "react";
import './Resumen.css';

export function Resumen({ cantidadEnter }) {
    return (
        <section>
            <div></div>
            <div>    <h1>Tareas Pendientes</h1>
                <p>Cantidad de Enter: {cantidadEnter}</p></div>
            <div></div>

        </section>
    );
}
