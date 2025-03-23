import React from 'react';
import './ToDo.css';
import { Fecha } from '../Componentes/Fecha/Fecha.jsx';
import { Notas } from '../Componentes/NotasImport/Notas.jsx';

export function ToDo() {
    return (
        <main className='ContToDo'>
            <section className='ContToDo-list'>
                <div>
                    <h1>Tareas</h1>
                </div>
                <div></div>
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
