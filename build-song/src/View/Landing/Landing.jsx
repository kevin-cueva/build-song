// src/View/Landing/Landing.jsx
import './Landing.css';
import HeaderPrimario from '../../Components/HeaderPrimario/HeaderPrimario';

export default function Landing() {
  return (
    <div>
      <div className='conteiner-landing'>
        <div className="Landing">
          <div className="overlay"></div>
            <div className="content">
              <HeaderPrimario/>
              <div className='content-build'>
                <div>
                  <div className='first-text'>
                  <p>This is how <strong>we</strong></p>
                  </div>
                  <div className='big-build'>
                    BUILD
                  </div>
                  <div className='experiences'>
                    <div> <strong>experiences</strong> </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div className='prueba'>
        Hola
      </div>
    </div>
    
  );
}
