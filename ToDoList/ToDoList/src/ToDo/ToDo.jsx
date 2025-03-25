import React from 'react';
import axios from 'axios';
import './ToDo.css';
import { Fecha } from '../Componentes/Fecha/Fecha.jsx';
import { Notas } from '../Componentes/NotasImport/Notas.jsx';
import { Boton } from '../Componentes/Boton/BotonLila.jsx';
import { BotonConfig } from '../Componentes/BotonConfig/BotonConfig.jsx';

export function ToDo() {
    /*
        // Inicializamos la variable de estado que almacenará un arreglo con las tareas
        // y la función setTareas para actualizar el estado.
        const [tareas, setTareas] = useState([]);
    
        // Cargamos las tareas del servidor utilizando axios
        useEffect(() => {
            axios.get('http://localhost:5000') // Hacemos una petición GET al servidor
                .then(response => setTareas(response.data)) // Si la petición es exitosa, guardamos las tareas en el estado
                .catch(error => console.error("Error: No se pudo obtener las tareas", error)); // Si hay un error, lo mostramos en la consola
        }, []); // El segundo argumento vacío [] indica que este efecto solo se ejecuta una vez al montar el componente
    */

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
