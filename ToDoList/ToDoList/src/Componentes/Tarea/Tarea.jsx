import React, { useState } from "react";
import './Tarea.css';

export function Tarea() {
    const [hora, setHora] = useState => (" 00 : 00");
    const [periodo, setPeriodo] = useState => ("AM");
    const [input, setInput] = useState => ("Nueva Tarea");
    return (
        <section className="sectionTarea">
            <div className="TareaCheck">
                <input type="checkbox" />

            </div>

            <div className="TareaTime">
                <input
                    type="text"
                    value={hora}
                    /* Setea el estado cuando ocurre un cambio Onchange */
                    onChange={(e) => setHora(e.target.value)}
                    pattern="(0[1-9]|1[0-2]):[0-5][0-9]"
                />

                <select value={periodo} onChange={(e) => setPeriodo(e.target.value)}>
                    <option>AM</option>
                    <option>PM</option>
                </select>
            </div>

            <div className="TareaInput">
                <input
                    type="text"
                    value={input}
                    className="TareaInput"
                />
            </div>
        </section>
    );
}