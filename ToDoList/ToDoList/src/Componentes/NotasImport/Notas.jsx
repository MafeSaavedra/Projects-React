import React, { useState, useEffect } from "react";
import "./Notas.css";

export function Notas() {
    const [texto, setTexto] = useState(() => {
        return localStorage.getItem("texto") || "Escribe Aquí..";
    });

    // Guardar cambios en localStorage
    useEffect(() => {
        localStorage.setItem("texto", texto);
    }, [texto]);

    // Manejar cambios en el textarea
    const manejarCambioDeTexto = (e) => {
        setTexto(e.target.value);
    };

    return (
        <section className="ContenedorNotas">
            <div className="Notas-titulo">
                <h1>Notas Importantes</h1>
            </div>
            <textarea
                className="Notas-entrada"
                placeholder="Escribe aquí..."
                value={texto}
                onChange={manejarCambioDeTexto}
                rows="20" // Puedes ajustar el tamaño
            />
        </section>
    );
}

