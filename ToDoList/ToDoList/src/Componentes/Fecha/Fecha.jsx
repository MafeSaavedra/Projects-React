import React, { useEffect, useState } from "react";
import './Fecha.css';
import Gif from '../../assets/Img/Pinguino.gif';

export function Fecha() {
    // DEFINIR VARIABLES POR DEFECTO DEL LOCAL STORAGE
    const [dia, setDia] = useState(() => localStorage.getItem("dia") || "Día");
    const [mes, setMes] = useState(() => localStorage.getItem("mes") || "Mes");

    // GUARDAR Y RENDERIZAR LOS CAMBIOS : Cada vez que dia/mes cambia, guarda su nuevo valor en localStorage
    useEffect(() => {
        localStorage.setItem("dia", dia);
    }, [dia]);

    useEffect(() => {
        localStorage.setItem("mes", mes);
    }, [mes]);

    // DEFINIR EL TRIGGER PARA GUARDAR LOS CAMBIOS 
    const ManejarCambios = (e, setter, defaultValue) => {
        const newValue = e.target.innerText.trim() || defaultValue;
        setter(newValue);
    };

    return (
        <section className="SectionFecha">
            <div className="SectionFecha-Gif">
                <img src={Gif} className="FechaGif" alt="Pinguino animado" />
            </div>
            <div className="SectionFecha-Dia"
                contentEditable suppressContentEditableWarning
                onBlur={(e) => ManejarCambios(e, setDia, "día")}
                onKeyDown={(e) => e.key === "Enter" && e.target.blur()}
            >{dia}</div>

            <div className="SectionFecha-Mes"
                contentEditable suppressContentEditableWarning
                onBlur={(e) => ManejarCambios(e, setMes, "Enero")}
                onKeyDown={(e) => e.key === "Enter" && e.target.blur()}
            >{mes}


            </div>
        </section>
    );
}
