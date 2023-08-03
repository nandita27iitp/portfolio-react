import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Dna } from "react-loader-spinner";

/* Pages */
import Home from "./pages/Home/HomePage";
import About from "./pages/About/AboutPage";
import ProjectApp from "./pages/Project/ProjectApp";
import ProjectUIUX from "./pages/Project/ProjectUIUX";
import Project from "./pages/Project/ProjectPage";
import Contact from "./pages/Contact/ContactPage";

/*Components*/
import RouterScrollTop from "./components/ScrollToTop/RouterScrollTop";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <>
      <RouterScrollTop />
      {loading ? (
        <div className="loading-pag">
          <div className="loader">
            <Dna
              visible={true}
              height="180"
              width="180"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
            />
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route exact path="/project-site" element={<Project />}></Route>
          <Route exact path="/project/app" element={<ProjectApp />}></Route>
          <Route exact path="/project/uiux" element={<ProjectUIUX />}></Route>
          <Route exact path="/about-me" element={<About />}></Route>
          <Route exact path="/contact-me" element={<Contact />}></Route>
        </Routes>
      )}
    </>
  );
}

export default App;
