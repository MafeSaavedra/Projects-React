import React, { useState, useEffect } from "react";
import { Resumen } from '../../PagResumen/Resumen';
import "./Notas.css";

export function Notas() {


    //Guardar el conteo de enter en un estado
    const [contenter, setConenter] = useState((0));


    const [texto, setTexto] = useState(() => {
        return localStorage.getItem("texto") || "Escribe Aquí..";
    });

    // Guardar cambios en localStorage
    useEffect(() => {
        localStorage.setItem("texto", texto);
    }, [texto]);

    // Función para contar la cantidad de "Enter"
    const contarEnters = (texto) => {
        return texto.split("\n").length - 1;
    };

    // Manejar cambios en el textarea
    const manejarCambioDeTexto = (e) => {
        const nuevoTexto = e.target.value;
        setTexto(nuevoTexto);

        // Obtener y mostrar la cantidad de "Enter"
        const cantidadEnters = contarEnters(nuevoTexto);
        setConenter(cantidadEnters);
        console.log("Cantidad de Enter:", cantidadEnters);
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
            <Resumen cantidadEnter={contenter} />
        </section>

    );
}
