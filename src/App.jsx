import './App.css';
import About from './components/about';
import Home from './components/home';
import Navbar from './components/navbar';
import Skills from './components/skills';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
    </div>
  );
}

export default App;
