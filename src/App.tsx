import "./App.scss";
import Nav from "../src/components/Nav/Nav";
import Header from "./components/Header/Header";
import ProjectSection from "./components/ProjectSection/ProjectSection";
import Socials from "./components/Socials/Socials";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from "./components/About/About";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Nav navActionIndex={0} />
        <Routes>
          <Route path="/portfolio-michaela" element={<Header />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<ProjectSection />} />
          <Route path="/socials" element={<Socials />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
