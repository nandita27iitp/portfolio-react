import React from "react";
import Codeforces from "../../img/codeforces.png";
import Codechef from "../../img/codechef.png";
import Leetcode from "../../img/leetcode.png";
import Hackerrank from "../../img/hackerrank.png";
import "./Content.css";
import ParticleHeaderBg from "../ParticlesBg/ParticlesHeader/ParticleHeaderBg";

/* ReactScroll */
import { Link } from "react-scroll";

const Content = () => (
  <div className="content">
    <ParticleHeaderBg />
    <section className="intro" id="intro">
      <div className="title">
        <p data-aos="fade-up" data-aos-delay="600">
          Hello!
        </p>
        <h1 className="name" data-aos="fade-up" data-aos-delay="800">
          I am Nandita Gupta
        </h1>
        <p data-aos="fade-up" data-aos-delay="1000">
          A passionate Programmer and a Web Developer
        </p>

        <div className="wrapper">
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1600"
          >
            <div className="icon">
              <img src={Codeforces} alt="codeforces" />
            </div>
          </a>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1600"
          >
            <div className="icon">
              <img src={Codechef} alt="codechef" />
            </div>
          </a>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1600"
          >
            <div className="icon">
              <img src={Leetcode} alt="leetcode" />
            </div>
          </a>

          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1600"
          >
            <div className="icon">
              <img src={Hackerrank} alt="hackerrank" />
            </div>
          </a>
          
        </div>

        <Link to="project" href="#project">
          <div className="scroll-down"></div>
        </Link>
      </div>
    </section>
  </div>
);

export default Content;
