import { Link } from 'react-router-dom';
import Reservations from './Reservations';
import About from './About';
import Home from './Home';

export default function Navbar() {
return(
    <nav>
        <Link to="/reservations">Reservation</Link>
        <Link to="/About">About</Link>
        <Link to="/Home">Home</Link>
    </nav>
)

}