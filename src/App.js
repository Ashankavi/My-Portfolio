import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Project from "./Components/Project";
import About from "./Components/About";
import Services from "./Components/Services";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";

function App() {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Education/>
      <Skills/>
      <Project/>
      <Contact/>

    </div>
  );
}

export default App;
