import './App.css';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Banner from './components/Banner';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Banner />
      <Contact />
    </div>
  );
}

export default App;
