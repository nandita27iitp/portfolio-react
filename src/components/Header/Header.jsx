import React from "react";
import './Header.css';
/* ReactScroll */
import { Link } from 'react-scroll';

/* React router */
import { NavLink } from 'react-router-dom';

/* DarkMode */
import DarkMode from '../DarkMode/DarkMode';

const Header = () => {
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
          <div
            id="menu-btn"
            className="fas fa-bars"
            onClick={menuDesplegable}
          ></div>
    
          <NavLink className="logo" to="/">
            [--<span>nandita27iitp</span>--]
          </NavLink>
    
          <nav className="navbar">
            <Link to="home" spy={true} offset={-150} href="#home">
              Home
            </Link>
            <Link to="project" spy={true} offset={-150} href="#project">
              Projects
            </Link>
            <Link to="about" spy={true} offset={-150} href="#about">
              About Me
            </Link>
            <Link to="contact" spy={true} offset={-150} href="#contact">
              Contact
            </Link>
            <a href="https://nanditablogs9.wordpress.com/" target="_blank" rel="noreferrer">Blog</a>
          </nav>
          <div className="switch" id="switch">
            <DarkMode />
          </div>
        </header>
      );
}

export default React.memo(Header);