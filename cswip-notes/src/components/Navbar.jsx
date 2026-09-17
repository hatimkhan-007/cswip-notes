import React from 'react'
import './Navbar.css'
import logoUrl from '../assets/logo.jpeg'

function Navbar() {
return (
    <div className='navbar'>
            <div className="logo-div">
                    <img src={logoUrl} alt="Nexora logo - stylized icon representing the Nexora brand" />
                    <h1>Nexora</h1>
            </div>
            <nav className='navigation-bar'> 
                    <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">Features</a></li>
                            <li><a href="/">Pricing</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/contact">Contact</a></li>
                    </ul>
            </nav>
            <div className="btn">
                    <button className='btn btn-primary'>Login</button>
                    <button className='btn btn-secondary'>Get Started</button>
            </div>
    </div>
)
}

export default Navbar