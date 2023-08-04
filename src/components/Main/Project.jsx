import React from "react";
import "../../pages/Project/ProjectPage.css";
import { Link } from "react-router-dom";
import { ButtomGet } from "../ButtomGet/ButtomGet";

/* Swiper */
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";

/* Img */
const projectImg = require.context("../../img", true);

const Project = () => {
  return (
    <section className="project" id="project">
      <h2 className="heading">Projects</h2>
      <div
        className="project-site"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <Swiper
          spaceBetween={30}
          loop={true}
          grabCursor={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="project-slider mySwiper"
        >
          <SwiperSlide className="caja">
            <img src={projectImg(`./netflix_clone.png`)} alt="project" />
            <div className="content-pg">
              <h3>Netflix Clone</h3>
              <p>MERN Stack Website inspired from Netflix</p>
              <p className="tecnologias">
                React.js
                <span> -</span> Express.js
                <span> -</span> Redux-Toolkit
                <span> -</span> MongoDB
                <span> -</span> Node.js
                <span> -</span> Firebase
              </p>
              <a
                href="https://github.com/nandita27iitp/netflixclone"
                className="custom-btn btn-codigo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repository
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="caja">
            <img src={projectImg(`./movies_app.png`)} alt="project" />
            <div className="content-pg">
              <h3>OMDb Movies App</h3>
              <p>A React.js website that displays movie information from
                the OMDb API.</p>
              <p className="tecnologias">
                HTML5
                <span> -</span> CSS
                <span> -</span> JavaScript
                <span> -</span> React.js
                <span> -</span> REST API
              </p>
              <a
                href="https://github.com/nandita27iitp/movies-app"
                className="custom-btn btn-codigo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repository
              </a>
            </div>
          </SwiperSlide>
        
        </Swiper>
        <div className="swiper-pagination"></div>
      </div>
      <div className="portafolio-btn">
        <Link to="/project-site">
          <ButtomGet />
        </Link>
      </div>
    </section>
  );
};
export default React.memo(Project);
