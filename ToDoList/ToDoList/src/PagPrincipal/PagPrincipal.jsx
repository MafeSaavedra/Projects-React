import React from 'react';
import './PagPrincipal.css';
import Gif from '../Img/Pinguino.gif';

export function PagPrincipal() {
    return (
        <section className='ContenedorPrincipal'>
            <div>
                <h1>LISTO </h1>
            </div>
            <div>

                <img src={Gif} />

            </div>
        </section>
    );
}