import React from "react";
import './Header.css';

/* React router */
import { NavLink } from 'react-router-dom';

/* DarkMode */
import DarkMode from '../DarkMode/DarkMode';


const HeaderPage = () => {
    // Menu desplegable
    const menuDesplegable = () => {
        let navbar = document.querySelector('.navbar');
        navbar.classList.toggle("activar");

        window.onscroll = () => {
            if (window.scrollY > 0) {
                document.querySelector(".site-header").classList.add("activar")
            } else document.querySelector(".site-header").classList.remove("activar")

            navbar.classList.remove("activar")
        }
    }

    return (
        <header className="site-header">
            <div id="menu-btn" className="fas fa-bars" onClick={menuDesplegable}></div>

            <NavLink className="logo" to="/" >
                <p>[--(<span>nandita27iitp</span>)--]</p>
            </NavLink>

            <nav className="navbar">
                <NavLink to="/" offset={-150} duration={500}>
                   Home
                </NavLink>
                <NavLink to="/project-site" offset={-150} duration={500}>
                    Projects
                </NavLink>
                <NavLink to="/about-me" offset={-150} duration={500}>
                    About Me
                </NavLink>
                <NavLink to="/contact-me" offset={-150} duration={500}>
                    Contact
                </NavLink>
                <a href="https://nanditablogs9.wordpress.com/" target="_blank" offset={-150} duration={500} rel="noreferrer">
                    Blog
                </a>
            </nav>
            <div className="switch" id="switch">
                <DarkMode />
            </div>
        </header>
    )
}

export default React.memo(HeaderPage);