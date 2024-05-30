
import './App.scss'
import Nav from "../src/components/Nav/Nav";
import Header from './components/Header/Header';
import ProjectSection from './components/ProjectSection/ProjectSection';
import Socials from './components/Socials/Socials';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import About from './components/About/About';

const App = () => {
 
  return(
    <div className='app'>
      <BrowserRouter>
    <Nav navActionIndex={0} />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<ProjectSection />}/>
        <Route path="/socials" element={<Socials/>} />
      </Routes>
        
    </BrowserRouter>
    </div>
    
    
  );
}

export default App
