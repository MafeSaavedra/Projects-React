import React from 'react';
import './ToDo.css';
import { Fecha } from '../Componentes/Fecha/Fecha.jsx';
import { Notas } from '../Componentes/NotasImport/Notas.jsx';
import { Boton } from '../Componentes/Boton/BotonLila.jsx';
import { BotonConfig } from '../Componentes/BotonConfig/BotonConfig.jsx';

export function ToDo() {
    return (
        <main className='ContToDo'>
            <section className='ContToDo-list'>
                <div className='Botones'>
                    <Boton children="Crear Nueva Tarea" />
                    <Boton children="Seleccionar Todo" />
                    <BotonConfig />

                    <h1>Tareas</h1>
                </div>
                <div className='CRUD'>
                    {/* Aqui va el componente de todo lista con la opcion de check (compleete)
                   la tarea y el boton de eliminar  */}
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
