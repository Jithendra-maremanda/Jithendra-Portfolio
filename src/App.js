import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import SocialLinks from './Components/SocialLinks';
import Timeline from './Components/Timeline';
import './App.css';
import Footer from './Components/Footer';
import Projects from './Components/Projects';
function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Timeline/>
        <Projects/>
      <Skills />
      <Contact />
      <SocialLinks />
      <Footer/>
    </div>
  );
}

export default App;