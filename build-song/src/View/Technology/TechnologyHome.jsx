
import './TechnologyHome.css';
import  logoAccenture from '../../../public/Svg/Acc_GT_Keyline_Regular_Blk_RGB.svg';
import Chard from './Chard';
export default function TechnologyHome() {
    return (
        <div>
            <div>
                <header className="technologyHome-header">
                    <div className="technologyHome-header-content">
                        <div className='accenture-song'>
                            <strong>Accenture</strong> Song
                        </div>
                        <div>
                            <nav >
                                <ul>
                                    <li><a href="#home" className="home-color">Home</a></li>
                                    <li><a href="">Our Teams</a></li>
                                    <li><a href="">Our work</a></li>
                                    <li><a href="">FAQs</a></li>
                                    <li><a href="">Contacs</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </header>
                <div className='technologyHome-landing'>
                    <div className='technologyHome-conteiner-text-landing'>
                        <div >
                            <h1>We are NOT just a technology <br />or desing team</h1>
                        </div>
                    </div>
                    <div className='technologyHome-conteiner-text-icon'>
                        <div>
                        <img src={logoAccenture} className="technologyHome-logo-accenture"alt="Accenture Logo" />
                        </div>
                    </div>
                </div>
                <div className='technologyHome-conteiner-team-text'> 
                        <h2>We are a multi-disciplinary and experienced and product-oriented team</h2>
                </div>
                <Chard/>    
            </div>
        </div>
    )
}