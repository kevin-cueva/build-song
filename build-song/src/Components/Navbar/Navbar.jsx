
import './Navbar.css';
import PropTypes from 'prop-types';


function Navbar({ items }) {
    return (
        <div>
            <div>
                <div>
                    <nav className="navbar-conteiner">
                        <ul className='prueba'>
                            {items.map((item, index) => (
                                <li key={index}><a>{item}</a></li>
                            ))}
                        </ul>
                    </nav>
                </div>

            </div>

        </div>
    );
}
Navbar.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string)
  }
export default Navbar;