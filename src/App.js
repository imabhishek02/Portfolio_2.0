import Navbar from "./components/Navbar/Navbar";
import './App.css';
import Intro from "./components/Intro/Intro";
import Projects from "./components/Projects/services"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Projects/>
    </div>
  );
}

export default App;
