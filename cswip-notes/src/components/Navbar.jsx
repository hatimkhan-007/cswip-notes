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
                            <ul><a href="/">Services</a>
                                <li><a href="/">Team Augmentation</a></li>
                                <li><a href="/">MVP Development</a></li>
                                <li><a href="/">App Development</a></li>
                                <li><a href="/">Robotics</a></li>
                                <li><a href="/">AI Transformation</a></li>
                            </ul>
                            <ul>
                                <a href="/">Technologies</a>
                                <li><a href="/">AI/ML Learning</a></li>
                                <li><a href="/">Computer Vision</a></li>
                                <li><a href="/">Blockchain</a></li>
                                <li><a href="/">Stacks</a></li>
                                <li><a href="/">App Development</a></li>
                            </ul>
                            <ul>
                                <a href="/">Customers</a>
                                <li><a href="/">Startups</a></li>
                                <li><a href="/">Saas Companies</a></li>
                                <li><a href="/">App Companies</a></li>
                                <li><a href="/">Marketing Agencies</a></li>
                                <li><a href="/">Enterprises</a></li>
                            </ul>
                            <ul>
                                <a href="/about">Look Inside</a>
                                <li><a href="/about">Blog</a></li>
                                <li><a href="/about">Portfolio</a></li>
                                <li><a href="/about">Careers</a></li>
                            </ul>
                            <ul>
                                <a href="/contact">About Us</a>
                                <li><a href="/contact">History</a></li>
                                <li><a href="/contact">Present</a></li>
                                <li><a href="/contact">Future</a></li>
                                <li><a href="/contact">Why Us</a></li>
                            </ul>
                    </ul>
                    <button className='btn btn-primary'>Contact Us</button>
            </nav>          
    </div>
    )
}

export default Navbar