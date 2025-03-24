import React from "react";
import './BotonConfig.css';;
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function BotonConfig() {
    return (
        <div className="divBoton-Lila">
            <button className="Boton-Lila">
                <FontAwesomeIcon icon={faGear} />
            </button>
        </div>
    );
}