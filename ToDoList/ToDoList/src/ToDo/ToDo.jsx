import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ToDo.css';
import { Fecha } from '../Componentes/Fecha/Fecha.jsx';
import { Notas } from '../Componentes/NotasImport/Notas.jsx';
import { Boton } from '../Componentes/Boton/BotonLila.jsx';
import { Tarea } from '../Componentes/Tarea/Tarea.jsx';
import { BotonConfig } from '../Componentes/BotonConfig/BotonConfig.jsx';

export function ToDo() {
    const [tareas, setTareas] = useState([]);
    const [modifiedTasks, setModifiedTasks] = useState({});

    useEffect(() => {
        // Aquí podrías cargar las tareas iniciales desde el backend al montar el componente
        fetch('http://localhost:3000/api/tasks')
            .then(response => response.json())
            .then(data => setTareas(data))
            .catch(error => console.error("Error fetching tasks:", error));
    }, []);

    const agregarTarea = () => {
        const nuevaTareaFrontend = {
            texto: "Nueva Tarea", // Valor inicial
            completado: false,
            hora: "00:00",
            periodo: "AM"
        };

        fetch('http://localhost:3000/api/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(nuevaTareaFrontend),
        })
            .then(response => response.json())
            .then(dataDesdeBackend => {
                console.log('Tarea creada en el backend:', dataDesdeBackend);
                setTareas((prevTareas) => [...prevTareas, dataDesdeBackend]); // Añade la tarea completa (con id del backend) al estado
            })
            .catch((error) => {
                console.error('Error al crear tarea:', error);
            });

        console.log("Tarea enviada al backend (frontend):", nuevaTareaFrontend);
    };

    const eliminarTarea = (id) => {
        setTareas((prevTareas) => prevTareas.filter((tarea) => tarea.id !== id));
        // Aquí podrías llamar a la API para eliminar la tarea del backend
        fetch(`http://localhost:3000/api/tasks/${id}`, { method: 'DELETE' })
            .then(response => {
                if (response.ok) {
                    console.log(`Tarea con ID ${id} eliminada del backend.`);
                } else {
                    console.error(`Error al eliminar tarea con ID ${id} del backend.`);
                }
            })
            .catch(error => console.error("Error deleting task:", error));
    };

    const handleTaskChange = (id, taskData) => {
        setModifiedTasks(prev => ({ ...prev, [id]: taskData }));
    };

    const guardarTareas = () => {
        console.log("Tareas modificadas a guardar:", modifiedTasks);
        // Aquí iría la lógica para enviar las tareas modificadas al backend
        Object.keys(modifiedTasks).forEach(taskId => {
            const updatedTaskData = modifiedTasks[taskId];
            fetch(`http://localhost:3000/api/tasks/${taskId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedTaskData),
            })
                .then(response => response.json())
                .then(data => {
                    console.log(`Tarea con ID ${taskId} actualizada en el backend:`, data);
                    // Opcional: actualizar el estado local 'tareas' con la respuesta del backend
                    setTareas(prevTareas =>
                        prevTareas.map(tarea =>
                            tarea.id === taskId ? { ...tarea, ...data } : tarea
                        )
                    );
                    // Limpiar la tarea modificada del estado de modifiedTasks
                    setModifiedTasks(prev => {
                        const newState = { ...prev };
                        delete newState[taskId];
                        return newState;
                    });
                })
                .catch(error => console.error(`Error al actualizar la tarea con ID ${taskId}:`, error));
        });
    };

    return (
        <main className='ContToDo'>
            <section className='ContToDo-list'>
                <div className='Botones'>
                    <Boton children="Crear Nueva Tarea" onClick={agregarTarea} />
                    <Boton children="Guardar Tareas" onClick={guardarTareas} />
                    <BotonConfig />
                </div>
                <div className='ToDoCuadro-Tarea'>
                    {tareas.map((tarea) => (
                        <Tarea
                            key={tarea.id}
                            id={tarea.id}
                            remove={eliminarTarea}
                            onTaskChange={handleTaskChange}
                        // Puedes pasar las propiedades iniciales de la tarea aquí si las cargas del backend
                        // initialTexto={tarea.texto}
                        // initialHora={tarea.hora}
                        // initialPeriodo={tarea.periodo}
                        // initialCompletado={tarea.completado}
                        />
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