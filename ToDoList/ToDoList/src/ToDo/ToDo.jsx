import React, { useState } from 'react';
import axios from 'axios';
import './ToDo.css';
import { Fecha } from '../Componentes/Fecha/Fecha.jsx';
import { Notas } from '../Componentes/NotasImport/Notas.jsx';
import { Boton } from '../Componentes/Boton/BotonLila.jsx';
import { Tarea } from '../Componentes/Tarea/Tarea.jsx';
import { BotonConfig } from '../Componentes/BotonConfig/BotonConfig.jsx';

export function ToDo() {
    const [tareas, setTareas] = useState([]);

    /* FUNCIÓN PARA AGREGAR NUEVAS TAREAS */
    const agregarTarea = () => {
        const nuevaTarea = { id: Date.now() }; // Genera un ID único con timestamp
        setTareas((prevTareas) => [...prevTareas, nuevaTarea]);
        console.log("Tarea Creada:", nuevaTarea);
    };

    /* FUNCIÓN PARA ELIMINAR UNA TAREA */
    const eliminarTarea = (id) => {
        setTareas((prevTareas) => {
            const nuevasTareas = prevTareas.filter((tarea) => tarea.id !== id);
            console.log("Tarea eliminada, ID:", id);
            return nuevasTareas;
        });
    };

    return (
        <main className='ContToDo'>
            <section className='ContToDo-list'>
                <div className='Botones'>
                    <Boton children="Crear Nueva Tarea" onClick={agregarTarea} />
                    <BotonConfig />
                </div>
                <div className='ToDoCuadro-Tarea'>
                    {tareas.map((tarea) => (
                        <Tarea key={tarea.id} id={tarea.id} remove={eliminarTarea} />
                    ))}
                </div>
            </section>

            <section className='ContToDo-notas'>
                <div className='ConToDo-Fecha'>
                    <Fecha />
                </div>
                <div className='ConToDo-notasimportantes'>
                    <Notas />
                </div>
            </section>
        </main>
    );
}
