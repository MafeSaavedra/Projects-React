import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import './Tarea.css';

export function Tarea({ id, remove, onTaskChange }) {
    const [hora, setHora] = useState("00:00");
    const [periodo, setPeriodo] = useState("AM");
    const [input, setInput] = useState("Nueva Tarea");
    const [check, setCheck] = useState(false);

    useEffect(() => {
        // Inicializar el estado si recibimos valores iniciales (si los tuviéramos)
    }, [id]);

    const handleInputChange = (e) => {
        setInput(e.target.value);
        if (onTaskChange) {
            onTaskChange(id, { texto: e.target.value, hora, periodo, completado: check });
        }
    };

    const handleHoraChange = (e) => {
        setHora(e.target.value);
        if (onTaskChange) {
            onTaskChange(id, { texto: input, hora: e.target.value, periodo, completado: check });
        }
    };

    const handlePeriodoChange = (e) => {
        setPeriodo(e.target.value);
        if (onTaskChange) {
            onTaskChange(id, { texto: input, hora, periodo: e.target.value, completado: check });
        }
    };

    const handleCheckChange = (e) => {
        setCheck(e.target.checked);
        if (onTaskChange) {
            onTaskChange(id, { texto: input, hora, periodo, completado: e.target.checked });
        }
    };

    console.log("Renderizando tarea con ID:", id, input);

    return (
        <section className="sectionTarea">
            <div className="TareaCheck">
                <input
                    type="checkbox"
                    checked={check}
                    onChange={handleCheckChange}
                />
            </div>

            <div className="TareaTime">
                <input
                    className="TareaTime-Hora"
                    type="text"
                    value={hora}
                    onChange={handleHoraChange}
                    pattern="(0[1-9]|1[0-2]):[0-5][0-9]"
                />

                <select className="TareaTime-Periodo" value={periodo} onChange={handlePeriodoChange}>
                    <option>AM</option>
                    <option>PM</option>
                </select>
            </div>

            <div className="TareaInputDiv">
                <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    className="TareaInput"
                />
            </div>

            <button className="BotonCerrar" onClick={() => remove(id)}>
                <FontAwesomeIcon icon={faTimesCircle} size="4x" />
            </button>
        </section>
    );
}