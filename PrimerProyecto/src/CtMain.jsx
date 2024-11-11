import React from 'react';
import './CtMain.css';
import { Cd } from './Cd.jsx';

export function CtMain() {
    return (
        <section className="Contenedor-First">
            <div className="Welcome-page">
                <h1>Bienvenido a la página principal</h1>
            </div>
            <div className='Welcome-page'>
                <h1>Bienvenido a la página principal</h1>
            </div>
            <div className="Welcome-page">
                <h1>Otra Seccion</h1>
            </div>
            <div className='Welcome-page'>
                <h1>Podria ir imagen </h1>
            </div>
            <div className="cd-React">
                <Cd name="Natalia" username="natalia09" avatar="https://unavatar.io/readcv/elenatorro" />
            </div>
            <div className="cd-React">
                <Cd name="Camila" username="Camis9" avatar="https://unavatar.io/onlyfans/amandaribas" />
            </div>
        </section>
    );
}
