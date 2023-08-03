import React from 'react';
import './Footer.css';
import { SiLinktree } from "react-icons/si";

const Footer = () =>{
    // Fecha
    let fecha = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="site-footer">
                <div className="copyright">
                    <p>
                    Page created by nandita27iitp
                    </p>
                    <p>&copy; {fecha}. All Rights Reserved.</p>
                </div>
                <div className="redes-sociales">
                    <a href="https://www.linkedin.com/in/nandita-gupta-906343222/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/nandita27iitp" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                    <a href="https://www.instagram.com/_nan_dita27_/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                    <a href="https://linktr.ee/nandita27iitp" target="_blank" rel="noopener noreferrer"><SiLinktree /></a>
                </div>
            </div>
        </footer>
    )
};

export default React.memo(Footer);