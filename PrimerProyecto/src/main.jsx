import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.jsx';
import { Navbar } from './Navbar.jsx'; // Importa el componente Navbar
import './main.css';

const root = createRoot(document.getElementById('root'));

const Saludo = ({ text }) => {
  return <h1 className='saludo'>{text}</h1>;
};

root.render(
  <>
    <Navbar />
    <Saludo text="Este es mi primer proyecto con React" />
    <Saludo text="Soy Mafe Saavedra" />
    <App />
  </>
);
