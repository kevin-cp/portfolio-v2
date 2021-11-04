import React, { useState, useEffect } from "react";
import IconButton from '@mui/material/IconButton';
import { pink } from '@mui/material/colors';

import './App.css';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Banner from './components/Banner';
import Footer from './components/Footer';

// icons
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

function App() {
  const storedDarkMode = localStorage.getItem("DARK_MODE");
  const [darkMode, setDarkMode] = useState(storedDarkMode);
  const toggleDarkMode = () => setDarkMode(darkMode ? false : true);

  useEffect(() => {
    localStorage.setItem("DARK_MODE", darkMode);
  }, [darkMode]);

  return (
    <div className="App" data-theme={darkMode ? "dark" : "light"}>
      <IconButton className="toggle" onClick={toggleDarkMode}>
        {darkMode ? <LightModeIcon sx={{ color: pink[50] }}  /> : <DarkModeIcon />}
      </IconButton>
      <Header />
      <About />
      <Projects />
      <Banner />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
