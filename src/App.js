import Navbar from "./components/Navbar/Navbar";
import './App.css';
import Intro from "./components/Intro/Intro";
import Projects from "./components/Projects/services"
import Experience from "./components/Experience/Experience"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Projects/>
      <Experience/>
    </div>
  );
}

export default App;
