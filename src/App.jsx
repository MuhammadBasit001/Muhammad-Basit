import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Resuable/Header'
import Homepage from "./Home/Homepage";
import About from "./Home/About";
import Services from "./Home/Services";
import ProjectsComponent from "./Home/ProjectsComponent";
import Contact from "./Home/Contact";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={  <Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Projects" element={<ProjectsComponent/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;
