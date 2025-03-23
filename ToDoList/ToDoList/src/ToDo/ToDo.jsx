import React from 'react';
import './ToDo.css';
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
                <div><h1>Fechas</h1></div>
                <div><h1>Notas Importantes </h1></div>
            </section>

        </main>
    );
}