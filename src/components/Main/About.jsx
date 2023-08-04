import React from 'react';
import '../../pages/About/AboutPage.css'
import { Link } from 'react-router-dom';
import imgabout from "../../img/nandita2.jpg"
import { ButtomGet } from '../ButtomGet/ButtomGet';

const About = () => (
    <section className="about" id="about">
        <h2 className="heading">
        About me
        </h2>

        <div className="row container">
            <div className="columns" data-aos="fade-right" data-aos-delay="300">
                <h4>
                I'm Nandita Gupta, a Competitive Programmer and a MERN Stack Developer.
                </h4>
                <p>
                I am currently doing B.Tech in Metallurgical and Materials Engineering from Indian Institute of Technology(IIT), Patna. I am a passionate Programmer, MERN Stack Developer and a UI/UX Designer. I enjoy working on interesting projects and design challenges. I am proficient in C, C++, Python and also familiar with different frameworks like React.js, Node.js etc.
                Characterizing myself as self-taught, I am dedicated to a
                  continuous learning process.
                </p>

                <div className="about-img-container">
              <img src={imgabout} alt="my-self" className="about-img2" />
            </div>
                <div className="mas-info">
                    <div className='mas-info-btn'>
                    <Link to="/about-me">
                        <ButtomGet/>
                    </Link>
                    </div>
                </div>
            </div>
            <div className="columns col-skill" data-aos="fade-left" data-aos-delay="650">
                <h3>Skills</h3>
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
    </section>
);

export default React.memo(About);