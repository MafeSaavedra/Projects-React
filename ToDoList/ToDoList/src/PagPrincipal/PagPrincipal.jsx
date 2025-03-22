import React from 'react';
import './PagPrincipal.css';
import Gif from '../Img/Pinguino.gif';
import Check from '../Img/Check-logo.png';


export function PagPrincipal() {
    return (
        <section className='ContenedorFondo'>
            <section className='ContenedorPrincipal'>
                <div className='Principal-Letras'>
                    <div>
                        <h1>
                            LIST<img src={Check} className="CheckLogo" />
                        </h1>
                    </div>
                    <div>
                        <h1>Para llevar </h1>
                    </div>
                    <div>
                        <h1>TU PRODUCTIVIDAD </h1>
                    </div>
                    <div>
                        <h1>A otro nivel </h1>
                    </div>
                </div>
                <div className='PrincipalGif'>
                    <img src={Gif} />
                </div>
            </section>
        </section>

    );
}