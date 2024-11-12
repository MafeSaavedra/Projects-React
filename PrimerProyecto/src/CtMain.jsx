import React from 'react';
import './CtMain.css';
import { Cd } from './Cd.jsx';
import Reactlogo from './img/REACT.svg';

export function CtMain({ Imagen1 = Reactlogo }) {
    return (
        <section className="Contenedor-First">
            <div className="Welcome-page">
                <img className='React-logo' src={Imagen1} alt="React" />
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
            <div className='Welcome-page'>
                <div className="cd-React">
                    <Cd name="Natalia" username="natalia09" avatar="https://unavatar.io/readcv/elenatorro" />
                </div>
                <div className="cd-React">
                    <Cd name="Camila" username="Camis9" avatar="https://unavatar.io/onlyfans/amandaribas" />
                </div>
            </div>

        </section >
    );
}
