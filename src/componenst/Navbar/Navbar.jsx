import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <>
        <nav className="nav-wrapper">
            <div className="nav-content">
                <img className="logo" src="./assets/images/logo/.svg" alt="" />

                <ul>
                    <li>
                        <a className="menu-item">Home</a>
                    </li>
                </ul>

                <ul>
                    <li>
                        <a className="menu-item">Skills</a>
                    </li>
                </ul>

                <ul>
                    <li>
                        <a className="menu-item">Work Experience</a>
                    </li>
                </ul>

                <ul>
                    <li>
                        <a className="menu-item">Contact Me</a>
                    </li>

                    <button className="contact-btn" onClick={() => {}}>
                        Hire Me
                    </button>

                </ul>
            
            </div>
        </nav>
        </>
    )
}

export default Navbar