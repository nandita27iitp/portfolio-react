import React from "react";
import "./AboutPage.css";

/* Component */
import HeaderPage from "../../components/Header/HeaderPage";
import Footer from "../../components/Footer/Footer";
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

import imgabout from "../../img/nandita.jpeg";
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
              <img src={imgabout} alt="my-self" className="about-img" />
            </div>
            <div className="about-info">
              <p> Hi, </p>
              <p>
                I am Nandita Gupta, currently pursuing a B.Tech in Metallurgical
                and Materials Engineering at the esteemed Indian Institute of
                Technology (IIT), Patna.
              </p>
              <p>
                {" "}
                Over the course of my academic journey, a fervent enthusiasm for
                software development and coding has taken root within me. My
                commitment is driven by an unwavering aspiration to perpetually
                evolve and provide optimal outcomes. The fascination for
                software development ignited during my school years. I embarked
                on my coding journey in the ninth grade and have been honing my
                skills ever since. Proficiency in an array of programming
                languages, including C/C++, Python, HTML, CSS, and JavaScript,
                rests within my repertoire. Furthermore, I possess familiarity
                with various software development frameworks and tools such as
                React, Node.js, Visual Studio Code, and Figma. My penchant
                extends to web development and design, with numerous projects in
                these domains.
              </p>
              <div className="hide parrafo-active">
                <p>
                  Characterizing myself as self-taught, I am dedicated to a
                  continuous learning process. I eagerly anticipate delving into
                  machine learning, data science, neural networks, and even game
                  development. Beyond technical competence, I embody a highly
                  motivated and result-oriented disposition. A relentless
                  pursuit of knowledge and a willingness to go the extra mile
                  are inherent traits.
                </p>
                <p>
                  In addition to technical aptitude, I possess exceptional
                  communication and interpersonal skills, facilitating seamless
                  collaboration with peers, stakeholders, and clients. My faith
                  in the potential of teamwork is unshakable, recognizing its
                  pivotal role in realizing shared successes. I am a natural
                  leader, readily stepping into roles that guide my team toward
                  collective goals. My professional journey underscores the
                  significance of integrity and ethical conduct. The values of
                  transparency, professionalism, and exceeding expectations
                  resonate profoundly with me. Contributing to my community is a
                  deeply ingrained commitment. Through active participation in
                  college activities, I harness my skills to drive positive
                  change in the college ecosystem.
                </p>

                <p>
                  Beyond academics, I am a confluence of diverse hobbies, dance,
                  painting, writing which I occasionally share on social media
                  platforms. A personal blog serves as a platform for my
                  creative expressions, featuring writings, poems, and
                  reflections. Reflecting on my academic trajectory, a
                  consistent pattern of excellence emerges, with top ranks
                  maintained throughout. An accomplishment worth noting is my
                  distinction as State Topper (Allahabad Region) in the 10th
                  Board examinations. I was also among the select 100 students
                  nationwide invited by the Honorable Prime Minister, Narendra
                  Modi, to commemorate Republic Day in 2019. The philosophy I
                  embrace asserts that success is a journey, not a destination.{" "}
                </p>
                <p>
                  I extend my gratitude for your time in acquainting yourself
                  with my profile. Should collaboration be of interest, I am
                  enthusiastic about the prospect of joining forces on
                  forthcoming technical projects.
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
              <div
                className="columns col-skill"
                data-aos="fade-left"
                data-aos-delay="650"
              >
                <h4>Programming Languages</h4>
                <div className="skill">
                  <div>
                    <img
                      alt="C"
                      className="icons-skils"
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"
                    />
                    <h5>C</h5>
                  </div>
                  <div>
                    <img
                      alt="C++"
                      className="icons-skils"
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
                    />
                    <h5>C++</h5>
                  </div>
                  <div>
                    <img
                      alt="Python"
                      className="icons-skils"
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                    />
                    <h5>Python</h5>
                  </div>
                  <div>
                    <img
                      alt="Java"
                      className="icons-skils"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                    />
                    <h5>Java</h5>
                  </div>
                </div>
                <h4>Front-End</h4>
                <div className="skill">
                  <div>
                    <img
                      alt="HTML"
                      className="icons-skils"
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
                    />
                    <h5>HTML</h5>
                  </div>
                  <div>
                    <img
                      alt="CSS"
                      className="icons-skils"
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
                    />
                    <h5>CSS</h5>
                  </div>
                  <div>
                    <img
                      alt="Js"
                      className="icons-skils"
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
                    />
                    <h5>JavaScript</h5>
                  </div>
                  <div>
                    <img
                      alt="Bootstrap"
                      className="icons-skils"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                    />
                    <h5>Bootstrap</h5>
                  </div>
                  <div>
                    <img
                      alt="Tailwindcss"
                      className="icons-skils"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                    />
                    <h5>Tailwindcss</h5>
                  </div>
                  <div>
                    <img
                      alt="React"
                      className="icons-skils"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    />
                    <h5>React.js</h5>
                  </div>
                </div>
                <h4>Back-End</h4>
                <div className="skill">
                  <div>
                    <img
                      alt="Nodejs"
                      className="icons-skils"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                    />
                    <h5>NodeJs</h5>
                  </div>
                  <div>
                    <img
                      alt="express"
                      className="icons-skils"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                    />
                    <h5>Express</h5>
                  </div>
                  <div>
                    <img
                      alt="mongodb"
                      className="icons-skils"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg"
                    />
                    <h5>MongodDB</h5>
                  </div>
                  <div>
                    <img
                      alt="MySQL"
                      className="icons-skils"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg"
                    />
                    <h5>MySQL</h5>
                  </div>
                </div>
                <h4>Tools</h4>
                <div className="skill">
                  <div>
                    <img
                      alt="figma"
                      className="icons-skils"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                      title="Figma"
                    />
                    <h5>Figma</h5>
                  </div>

                  <div>
                    <img
                      alt="Visual Studio Code"
                      className="icons-skils"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Visual_Studio_Code_1.18_icon.svg/1200px-Visual_Studio_Code_1.18_icon.svg.png"
                      title="Visual Studio Code"
                    />
                    <h5>VS Code</h5>
                  </div>
                  <div>
                    <img
                      alt="git"
                      className="icons-skils"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                      title="Git"
                    />
                    <h5>Git</h5>
                  </div>
                  <div>
                    <img
                      alt="github"
                      className="icons-skils"
                      src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/github/github-original.svg"
                      title="Github"
                    />
                    <h5>Github</h5>
                  </div>
                  <div>
                    <img
                      alt="gcp"
                      className="icons-skils"
                      src="  https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/googlecloud/googlecloud-original.svg"
                      title="Google Cloud"
                    />
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
