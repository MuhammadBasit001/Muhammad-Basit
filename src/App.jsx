import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from './Resuable/Header';
import Homepage from "./Home/Homepage";
import About from "./Home/About";
import Services from "./Home/Services";
import ProjectsComponent from "./Home/ProjectsComponent";
import Contact from "./Home/Contact";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<ProjectsComponent />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
