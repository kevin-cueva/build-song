
import './Navbar.css';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

function Navbar({ items }) {
    return (
        <div>
            <div>
                <div>
                    <nav className="navbar-conteiner">
                        <ul className='prueba'>
                            {items.map((item, index) => (
                                <li key={index}> <Link to ={`/build-song/${item.toLowerCase()}`}>{item} </Link> </li>
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