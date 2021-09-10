import React from 'react';
import './Home.css'
import logo from '../../img/frykea-logo.png'

function Home() {
    return (
        <div className="navbar">
            <img className='logo' src={logo} alt='Fry-Kea'>

            </img>
            <div className="contact-info">
                <h3 className="grey">Mon-Mon: 9:00:000 AM - 173:0</h3>
                <h3 className="white">Call Us: 000-Never</h3>
            </div>
        </div>
    )
}

export default Home;