import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import './Tarea.css';

export function Tarea({ id, remove }) {
    const [hora, setHora] = useState("00:00");
    const [periodo, setPeriodo] = useState("AM");
    const [input, setInput] = useState("Nueva Tarea");
    const [check, setCheck] = useState(false);

    console.log("Renderizando tarea con ID:", id); // Verificar que el ID es válido

    return (
        <section className="sectionTarea">
            <div className="TareaCheck">
                <input
                    type="checkbox"
                    checked={check}
                    onChange={(e) => setCheck(e.target.checked)}
                />
            </div>

            <div className="TareaTime">
                <input
                    className="TareaTime-Hora"
                    type="text"
                    value={hora}
                    onChange={(e) => setHora(e.target.value)}
                    pattern="(0[1-9]|1[0-2]):[0-5][0-9]"
                />

                <select className="TareaTime-Periodo" value={periodo} onChange={(e) => setPeriodo(e.target.value)}>
                    <option>AM</option>
                    <option>PM</option>
                </select>
            </div>

            <div className="TareaInputDiv">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="TareaInput"
                />
            </div>

            <button className="BotonCerrar" onClick={() => remove(id)}>
                <FontAwesomeIcon icon={faTimesCircle} size="4x" />
            </button>
        </section>

    );
}
