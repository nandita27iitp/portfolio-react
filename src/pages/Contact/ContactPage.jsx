import React from "react";
import "../../pages/Contact/ContactPage.css";
/* TypedJs */
import Typical from "react-typical";

import HeaderPage from "../../components/Header/HeaderPage";
import Footer from "../../components/Footer/Footer";
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

const Contact = () => {
  return (
    <div>
      <HeaderPage />

      <ParticleBackground />
      <main>
      <section className="contact" id="contact-me">
        <h3 className="title" data-aos="fade-left" data-aos-delay="300">
            Contact me by:
            <Typical
                className="site-contact"
                loop={Infinity}
                wrapper="b"
                steps={[
                    ' Gmail', 1500,
                    ' Instagram', 1500,
                    ' Linkedin', 1500,
                    ' Github', 1500,
                    ' Twitter', 1500,
                    ' Blog', 1500,
                    ' Facebook', 1500,
                    ' WhatsApp', 1500
                ]}
            />

        </h3>

        <div className="icons">
            <a href="mailto:nandita27iitp@gmail.com" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
                <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab fas fa-envelope"></span>
                </div>
                <div className="text">
                    Gmail
                </div>
            </a>
            
            <a href="https://instagram.com/_nan_dita27_" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
                <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab fa-instagram"></span>
                </div>
                <div className="text">
                    Instagram
                </div>
            </a>
            <a href="https://www.linkedin.com/in/nandita-gupta-906343222/" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
                <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab fa-linkedin-in"></span>
                </div>
                <div className="text">
                    Linkedin
                </div>
            </a>
            <a href="https://github.com/nandita27iitp/" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
                <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab fa-github-square"></span>
                </div>
                <div className="text">
                    GitHub
                </div>
            </a>
            <a href="https://twitter.com/n_and_it_a_27" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
                <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab fa-twitter"></span>
                </div>
                <div className="text">
                    Twitter
                </div>
            </a>
            <a href="https://nanditablogs9.wordpress.com/" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
                <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab fa-wordpress"></span>
                </div>
                <div className="text">
                    Blog
                </div>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100070728071906" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
                <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab fa-facebook"></span>
                </div>
                <div className="text">
                    Facebook
                </div>
            </a>
            <a href="https://api.whatsapp.com/send?phone=9548567623" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
                <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab fa-whatsapp"></span>
                </div>
                <div className="text">
                    WhatsApp
                </div>
            </a>
            <a href="https://linktr.ee/nandita27iitp" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
                <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="linktext">Link</span>
                </div>
                <div className="text">
                    Linktree
                </div>
            </a>
        </div>

        <h3 className="connect" data-aos="fade-left" data-aos-delay="300">Let's Connect!!</h3>
    </section>
      </main>

      <ScrollToTop />

      <Footer />
    </div>
  );
};

export default React.memo(Contact);
