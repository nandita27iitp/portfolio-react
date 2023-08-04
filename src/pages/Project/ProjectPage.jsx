import React, { useState } from "react";
import "./ProjectPage.css";
import restapi from "../../img/rest-api-icon.png";

/* Modal */
import Modal from "./Modal";

/* React router */
import { NavLink } from "react-router-dom";

/* Componet */
import HeaderPage from "../../components/Header/HeaderPage";
import Footer from "../../components/Footer/Footer";
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

/* Img */
const proyectsImg = require.context("../../img", true);

const Project = () => {
  const [estadoModal5, cambiarEstadoModal5] = useState(false);
  const [estadoModal3, cambiarEstadoModal3] = useState(false);

  return (
    <div>
      <HeaderPage />

      <ParticleBackground />

      <main>
        <section className="proyectos mas-proyect" id="project-site">
          <h1 className="heading" data-section="Nav" data-value="projects">
            Projects
          </h1>
          <nav className="navbar nav-proj">
            <NavLink to="/project-site" offset={-150} duration={500}>
              Websites
            </NavLink>
            <NavLink to="/project/uiux" offset={-150} duration={500}>
              UI/UX
            </NavLink>
          </nav>
        </section>

        <section className="projects__grid paginas-web">
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal3(!estadoModal3)}>
              <img
                src={proyectsImg(`./netflix_clone.png`)}
                alt=""
                className="projects__img"
              />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal5(!estadoModal5)}>
              <img
                src={proyectsImg(`./movies_app.png`)}
                alt=""
                className="projects__img"
              />
            </a>
          </div>
        </section>
        <h1 style={{ color: "#f40373" }}>More to come!!</h1>
      </main>

      <Modal estado={estadoModal3} cambiarEstado={cambiarEstadoModal3}>
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview">
              <img src={proyectsImg(`./netflix_clone2.png`)} alt="" />
            </div>
            <div className="eins-modal-text">
              <h1>Netflix Clone</h1>
              <p>
                This is a Netflix Clone inspired from Netflix Platform and built
                utilizing the MERN Stack.
              </p>
              <p>
                User data is securely stored in a MongoDB Database, while the
                TMDB free API facilitates real-time access to trending, new,
                blockbuster, and diverse genre movies. Additionally, users can
                create accounts, granting them access to a wide array of movies
                and TV shows, and the option to curate a personalized list of
                favorites.
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span>{" "}
                <a
                  href="https://github.com/nandita27iitp/netflixclone"
                  target="_blank" rel="noreferrer"
                >
                  https://github.com/nandita27iitp/netflixclone
                </a>
              </div>
              <div className="eins-modal-text-3">
                <span>Used technology:</span>
                <div className="eins-modal-tec">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg"
                    alt=""
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                    alt=""
                    style={{ backgroundColor: "white" }}
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                    alt=""
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    alt=""
                  />
                  <img
                    src="https://img.icons8.com/?size=512&id=87330&format=png"
                    alt=""
                  />
                  <img
                    src="https://img.icons8.com/?size=512&id=jD-fJzVguBmw&format=png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal estado={estadoModal5} cambiarEstado={cambiarEstadoModal5}>
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview">
              <img src={proyectsImg(`./movies_app2.png`)} alt="" />
            </div>
            <div className="eins-modal-text">
              <h1>OMDb Movies App</h1>
              <p>
                This is a React.js website that displays movie information from
                the OMDb API.
              </p>
              <p>
                On clicking on a movie poster, the movie title, release year,
                rating, poster image, overview, and other details are displayed
                on another page called by the movie poster’s ID, which is passed
                as a parameter to the page’s URL.
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span>{" "}
                <a
                  href="https://github.com/nandita27iitp/movies-app"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://github.com/nandita27iitp/movies-app
                </a>
              </div>
              <div className="eins-modal-text-3">
                <span>Used technology:</span>
                <div className="eins-modal-tec">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
                    alt=""
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    alt=""
                  />
                  <img
                    src={restapi}
                    alt=""
                    style={{ backgroundColor: "white" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <ScrollToTop />

      <Footer />
    </div>
  );
};
export default Project;
