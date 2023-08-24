import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Certificates from "./components/Certificates/Certificates";
import ContactDetails from "./components/ContactMe/ContactDetails";
import ContactEmail from "./components/ContactMe/ContactEmail";
import Education from "./components/Education/Education";
import Home from "./components/Home/Home";
import Menu from "./components/Menu/Menu";
import ProjBE from "./components/Projects/BE/ProjBE";
import ProjCDAC from "./components/Projects/CDAC/ProjCDAC";
import Projects from "./components/Projects/Projects";
import ProjQuad from "./components/Projects/Quad/ProjQuad";
import ProjSAE from "./components/Projects/Supra/ProjSAE";
import Welcome from "./components/Welcome/Welcome";
import TechSkills from "./components/Technical Skills/TechSkills";
import "./App.css";
import Extra from "./components/Extra/Extra";
import HorizontalMenu from "./components/Menu/HorizontalMenu";
import { useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import AboutMe from "./components/About/AboutMe";
import {Helmet} from "react-helmet";

function App() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour in place of 'smooth' */
    });
  }, []);

  return (
    <div className="App gradient container-fluid">
      <Helmet>
                <meta charSet="utf-8" />
                <title>Rushi</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Rushi" />
            </Helmet>
      <div className="row display">
        {/* <div className="col-md-3 center">
          <Menu />
        </div> */}
        <div className="col-lg-12 d-flex align-self-center center">
          <ScrollToTop />
          <Routes basename="/portfolio">
            <Route path="/" element={<AboutMe />} />
            <Route path="/education" element={<Education />} />
            <Route path="/more" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/contact" element={<ContactDetails />} />
            <Route path="/sendEmail" element={<ContactEmail />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projcdac" element={<ProjCDAC />} />
            <Route path="/projbe" element={<ProjBE />} />
            <Route path="/projsae" element={<ProjSAE />} />
            <Route path="/projquad" element={<ProjQuad />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/techskills" element={<TechSkills />} />
            <Route path="/extras" element={<Extra />} />
            <Route path="*" exact={true} element={<Welcome />} />
          </Routes>
        </div>
      </div>
      <div className="row container-fluid">
        <div className="col-lg-12 d-flex align-self-center">
          <HorizontalMenu />
        </div>
      </div>
    </div>
  );
}

export default App;
