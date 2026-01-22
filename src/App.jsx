import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

function App() {
    return (
        <div className="font-sans text-gray-100 bg-gray-900 min-h-screen">
            <Hero />
            <About />
            <WorkExperience />
            <Projects />
            <Skills />
            <Certifications />
            <Contact />
        </div>
    );
}

export default App;
