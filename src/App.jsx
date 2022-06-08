import { useRef } from 'react';
import './App.css';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Home from './components/home//home';
import Navbar from './components/navbar/navbar';
import Skills from './components/skills/skills';
import Works from './components/works/works';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const worksRef = useRef(null);
  const contactRef = useRef(null);
  

  const scrollEvent = (text) => {

    switch(text){
      case 'Home':
        homeRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'About':
        aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'Skills':
        skillsRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'Myworks':
        worksRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'Contact':
        contactRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
    }
  }

  return (
    <div className="App">
      <Navbar scrollEvent={scrollEvent}/>
      <Home ref={homeRef}/>
      <About ref={aboutRef}/>
      <Skills ref={skillsRef}/>
      <Works ref={worksRef}/>
      <Contact ref={contactRef}/>
    </div>
  );
}

export default App;

