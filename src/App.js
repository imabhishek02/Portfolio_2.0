import Navbar from "./components/Navbar/Navbar";
import './App.css';
import Intro from "./components/Intro/Intro";
import Projects from "./components/Projects/services"
import Experience from "./components/Experience/Experience"
import Works from "./components/Works/Works"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Projects/>
      <Experience/>
      <Works/>
    </div>
  );
}

export default App;
