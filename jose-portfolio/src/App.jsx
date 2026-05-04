import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import Projects from "./components/Projects.jsx";
import ProjectDetails from "./components/ProjectDetails.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:name" element={<ProjectDetails />} />
      </Routes>
    </>
  );
};

export default App;
