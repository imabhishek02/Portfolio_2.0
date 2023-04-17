import Navbar from "./components/Navbar/Navbar";
import './App.css';
import Intro from "./components/Intro/Intro";
import Projects from "./components/Projects/services"
import Experience from "./components/Experience/Experience"
import Works from "./components/Works/Works"
import Portfolio from "./components/Portfolio/Portfolio"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Projects/>
      <Experience/>
      <Works/>
      <Portfolio/>
    </div>
  );
}

export default App;
