//import logo from './logo.svg';
import './App.css';
import logo1 from './Weera_Thai.0.jpg'
import logo from './logo.jpg'
import food from './food.jpeg'
//import Reservations from './Reservations.js';
//import About from './About.js';
//import Home from './Home.js';
import React from 'react';
export default function Home() {
    return(
        <div className="App">
        <body>
        <div className='centerimage'>
        <img className="mainimage" src={logo1} alt="weera-thai"/>
        <div className='centertext'>weera thai sea food</div>
        </div>
      <div>
        <h3 className='red back'>WELCOME TO</h3>
        <h1 className='red back bgweera'>Weera Thai</h1>
        <h2 className='red back bglasvegas'>LAS VEGAS</h2>
        <ul className='locationlist'>
          <li className='red'>SAHARA</li>
          <li className='red'>CHINATOWN</li>
          <li className='red'>RAINBOW</li>
        </ul>
      </div>
      <div className="contentdisplay">
        
        <div className='bg'>
        <div className='para'>
          <img src={logo} width="100px" height="100px" alt='logo'/>
          <h4>Weera Thai Seafood is NOW OPEN at Town Square Las Vegas. </h4>
          <p>Come experience our seafood delicacies from Southern Thailand. Our variety of Thai dishes showcase unique flavors and the freshness of our ingredients. We promise that every meal at Weera Thai Seafood will be a memorable one. Come visit us today!Guests can expect the same delicious Thai cuisine in a brand new trend, fresh seafood-focused presentation and a delicious story of Thai encompasses dishes from four distinct regions: the Central, the North, Northeast and the South.</p>
        </div>
        </div>
        <img className='image' src={food} alt="food"/>
      </div>
        </body>
        </div>
    )
    
}
