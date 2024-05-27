
import './HeaderPrimario.css';
import { useEffect } from 'react';
import { useState } from 'react';



function HeaderPrimario() {
    const usePracticas = useState(0);
useEffect(()=>{
    let liElement1 = document.getElementById('header-practicas')
    let liElement2 = document.getElementById('header-comunidad')
    const handleMouseEnter = (id) => {
        return ()=> {
            console.log(`El mouse está sobre el elemento ${id}`);
        };
    };

    const handleMouseLeave = (id) => {
        return ()=> {
        console.log(`El mouse ha salido del elemento ${id})`);
        };
    };

    if (liElement1) {
        liElement1.addEventListener('mouseenter', handleMouseEnter(liElement1));
        liElement1.addEventListener('mouseleave', handleMouseLeave(liElement1));
    }
    if(liElement2){
        liElement2.addEventListener('mouseenter', handleMouseEnter(liElement2));
        liElement2.addEventListener('mouseleave', handleMouseLeave(liElement2));
    }
},[usePracticas]);
    return(
        <div>
<header className="header">
      <div className="header-content">
       <div className='accenture-song'>
         <strong>Accenture</strong> Song
       </div>
       <div className='div-nav'>
        <nav>
        <ul>
          <li ><a href="#home" className="home-color">Home</a></li>
          <li><a href="#practicas" id='header-practicas'>Practicas</a></li>
          <li><a href="#comunidad" id='header-comunidad'>Comunidad</a></li>
        </ul>
        </nav>
       </div>
      </div>
        </header>
        </div>
    );
    
}

export default HeaderPrimario;