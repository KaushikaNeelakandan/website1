//import react from 'react';
import App from './App.js';
import { BrowserRouter, Router , Route, Link, Routes } from 'react-router-dom';
import logo from './logo.jpg'
import Home from './Home.jsx';
import Reservations from './Reservations.js';
import About from './About.js';
import Contact from './Contact.js';
import Order from './Order.js';
//import Navbar from './Navbar.js';
export default function Navigation() {

    return(
      <div>
        <BrowserRouter>
        <ul className='navlink'>
        <li><Link to="/"><img src={logo} width="100px" height="100px" alt="logo"/></Link></li>
    
        <li><Link className='navlinks' to="/reservations">Reservation</Link></li>
        <li>Menus</li>
        <li>Hours & Locations</li>
        <li>Gallery</li>
        <li>Press</li>
        <li>join our team</li>
        <li><Link className='navlinks' to="/contact">contact</Link></li>
        <li><Link className='navlinks' to="/about">About</Link></li>
        <li className='orderonline'><Link className='navlinks' to="/order">Order Online</Link></li>
      </ul> 
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/order" element={<Order />} />
      </Routes>
      </BrowserRouter>  
      </div>
    )
}