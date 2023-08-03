import React from "react";
import "./AboutPage.css";

/* Componet */
import HeaderPage from "../../components/Header/HeaderPage";
import Footer from "../../components/Footer/Footer";
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import cv from "../../cv/cv.pdf";

/* Img */
import imgabout from "../../img/home.jpg";
import Github from "./Github";

const About = () => {
  function readMore() {
    let btnHide = document.querySelector("#btn-hide");
    let parrafoActive = document.querySelector(".parrafo-active");

    parrafoActive.classList.toggle("show");

    if (parrafoActive.classList.contains("show")) {
      btnHide.innerHTML = "↑";
    } else {
      btnHide.innerHTML = "Read more";
    }
  }

  return (
    <div>
      <HeaderPage />

      <ParticleBackground />

      <main>
        <section className="about-section" id="about-me">
          <div className="about-container">
            <div className="about-img-container">
              <img src={imgabout} alt="" className="about-img" />

              <a
                href={cv}
                target="_blank"
                rel="noopener noreferrer"
                download="cv.pdf"
                className="btn-codigo cv buttonDownload"
              >
                Download CV
              </a>
            </div>
            <div className="about-info">
              <p>
                Hello, I am Nandita Gupta. A Junior Year B.Tech UG, studying at
                Indian Institute of Technology(IIT), Patna. I am a passionate
                Programmer, Web Developer and a UI/UX Designer. I enjoy working
                on interesting projects and design challenges. I am proficient
                in C, C++, Python programming languages and also familiar with
                different frameworks like React, node.js etc. Currently, I am
                exploring AI/DS field.
              </p>

              <div className="hide parrafo-active">
                <p>
                  I consider myself a self-taught person since I like to be
                  constantly learning day by day, both new technologies and new
                  development methods that help me polish and raise my level of
                  learning.
                </p>

                <p>
                  I have experience working as a freelance web designer and
                  developer, which gave me the opportunity to work on many
                  interesting projects, adapting to the client's needs and
                  budget, which allowed me to improve my skills and knowledge;
                  Additionally, I have also had the opportunity to be part of
                  some online and face-to-face courses that helped me enrich my
                  skills and learn a little more about this beautiful world of
                  web development.
                </p>
              </div>

              <div className="btn-info">
                <div
                  className="custom-btn btn-codigo"
                  id="btn-hide"
                  onClick={readMore}
                >
                  <span>Read more</span>
                </div>
              </div>
            </div>
          </div>

          <div className="skill-seccion">
            <h1 className="heading">Skills</h1>
            <div className="row container">
            <div className="columns col-skill" data-aos="fade-left" data-aos-delay="650">
                <h4>Programming Languages</h4>
                <div className="skill">
                    <div>
                        <img alt="C" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" />
                        <h5>C</h5>
                    </div>
                    <div>
                        <img alt="C++" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" />
                        <h5>C++</h5>
                    </div>
                    <div>
                        <img alt="Python" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" />
                        <h5>Python</h5>
                    </div>
                    <div>
                        <img alt="Java" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
                        <h5>Java</h5>
                    </div>
                </div>
                <h4>Front-End</h4>
                <div className="skill">
                    <div>
                        <img alt="HTML" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" />
                        <h5>HTML</h5>
                    </div>
                    <div>
                        <img alt="CSS" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" />
                        <h5>CSS</h5>
                    </div>
                    <div>
                        <img alt="Js" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" />
                        <h5>JavaScript</h5>
                    </div>
                    <div>
                        <img alt="Bootstrap" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
                        <h5>Bootstrap</h5>
                    </div>
                    <div>
                        <img alt="Tailwindcss" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
                        <h5>Tailwindcss</h5>
                    </div>
                    <div>
                        <img alt="React" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                        <h5>React.js</h5>
                    </div>
                </div>
                <h4>Back-End</h4>
                <div className="skill">
                    <div>
                        <img alt="Nodejs" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                        <h5>NodeJs</h5>
                    </div>
                    <div>
                        <img alt="express" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
                        <h5>Express</h5>
                    </div>
                    <div>
                        <img alt="mongodb" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" />
                        <h5>MongodDB</h5>
                    </div>
                    <div>
                        <img alt="MySQL" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg" />
                        <h5>MySQL</h5>
                    </div>
                </div>
                <h4>
                Tools
                </h4>
                <div className="skill">
                    <div>
                        <img alt="figma" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" title="Figma" />
                        <h5>Figma</h5>
                    </div>
                    
                    <div>
                        <img alt="Visual Studio Code" className="icons-skils" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Visual_Studio_Code_1.18_icon.svg/1200px-Visual_Studio_Code_1.18_icon.svg.png" title="Visual Studio Code" />
                        <h5>VS Code</h5></div>
                    <div>
                        <img alt="git" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" title="Git" />
                        <h5>Git</h5>
                    </div>
                    <div>
                        <img alt="github" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/github/github-original.svg" title="Github" />
                        <h5>Github</h5>
                    </div>
                    <div>
                        <img alt="gcp" className="icons-skils" src="  https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/googlecloud/googlecloud-original.svg" title="Google Cloud" />
                        <h5>Google Cloud</h5>
                    </div>
                  </div>
                </div>
            </div>
          </div>

          <Github />
        </section>
      </main>

      <ScrollToTop />

      <Footer />
    </div>
  );
};
export default React.memo(About);
