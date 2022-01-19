import { useState } from "react";
import "./App.scss";
import About from "./components/About";
// import Blogs from "./components/Blogs";
import Count from "./components/Count";
import Education from "./components/Education";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Nav from "./components/Nav";
// import ProcessofWork from "./components/ProcessofWork";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <About />
      <Count />
      <Education />

      <Services />
      {/* <ProcessofWork /> */}

      <Projects />
      {/* <Blogs /> */}
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
