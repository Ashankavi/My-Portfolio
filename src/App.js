import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Project from "./Components/Project";
import About from "./Components/About";
import Services from "./Components/Services";
import Education from "./Components/Education";

function App() {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Education/>
      <Project/>

    </div>
  );
}

export default App;
