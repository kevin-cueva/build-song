import './HeaderPrimario.css';
import {  useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";


function HeaderPrimario() {
    const [touchNav, setTouchNav] = useState(false);
    const [listaNav, setListaNav] = useState([]);

    // Crear las listas completas
    const practicas = [
        "D&DP",
        "Commerce",
        "Marketing"
    ];

    const comunidad = [
        "Advisory",
        "Technology",
        "Next",
        "Create",
        "Ecosystem"
    ];

    // Crear una lista principal que contiene las dos listas anteriores
    const listas = [
        { titulo: "Practicas", items: practicas },
        { titulo: "Comunidad", items: comunidad }
    ];

    const handleMouseClick = (items) => {
        return () => {
            console.log("Click")
            //Cabia el subNavbar pero no lo oculta
            if (touchNav == true && JSON.stringify(listaNav) !== JSON.stringify(items)) {
                setListaNav(items);
            }
            else if (touchNav == true && JSON.stringify(listaNav) === JSON.stringify(items)) {
                setTouchNav(prevTouchNav => !prevTouchNav); // Alternar el estado de touchNav
            }
            else{
                setTouchNav(prevTouchNav => !prevTouchNav); // Alternar el estado de touchNav
            }
            setListaNav(items)
        };
    };

    return (
        <div className='headerPrimario-contenedor'>
            <header className="header">
                <div className="header-content">
                    <div className='accenture-song'>
                        <strong>Accenture</strong> Song
                    </div>
                    <div className='div-nav'>
                        <nav>
                            <ul>
                                <li><a href="#home" className="home-color">Home</a></li>
                                <li onClick={handleMouseClick(listas[0].items)}><a href="#practicas" id='header-practicas'>Practicas{""}
                                {JSON.stringify(listaNav) == JSON.stringify(listas[0].items) && touchNav ?
                                     <FontAwesomeIcon className='headerPrimario-icon-checvroun' icon={faChevronUp} /> : 
                                     <FontAwesomeIcon className='headerPrimario-icon-checvroun' icon={faChevronDown} />}</a></li>
                                <li onClick={handleMouseClick(listas[1].items)}><a href="#comunidad" id='header-comunidad'>Comunidad{""}  
                                     {JSON.stringify(listaNav) == JSON.stringify(listas[1].items) && touchNav ?
                                     <FontAwesomeIcon className='headerPrimario-icon-checvroun' icon={faChevronUp} /> : 
                                     <FontAwesomeIcon className='headerPrimario-icon-checvroun' icon={faChevronDown} />}</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
            {touchNav && <Navbar items={listaNav} />}
        </div>
    );
}

export default HeaderPrimario;
