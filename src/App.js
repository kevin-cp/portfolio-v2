import React, { useState, useEffect } from "react";
import IconButton from '@mui/material/IconButton';
import { pink } from '@mui/material/colors';
import { useTranslation } from "react-i18next";
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

// components
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
import France from './assets/france.png';
import Gb from './assets/gb.png';


function App() {
  // for the dark mode
  const storedDarkMode = localStorage.getItem("DARK_MODE");
  const [darkMode, setDarkMode] = useState(storedDarkMode);
  const toggleDarkMode = () => setDarkMode(darkMode ? false : true);
  
  useEffect(() => {
    localStorage.setItem("DARK_MODE", darkMode);
  }, [darkMode]);

  // for the language
  const [langue, setLangue] = React.useState('');

  // Calling t and i18n method from useTranslation hook 
const { t, i18n } = useTranslation();

//Creating a method to change the language onChange from select box
const changeLanguageHandler = (e) => {
  const languageValue = e.target.value
  setLangue(e.target.value);
  i18n.changeLanguage(languageValue);
}


  return (
    <div className="App" data-theme={darkMode ? "dark" : "light"}>
      <div className="top">
        <IconButton className="toggle" onClick={toggleDarkMode}>
        {darkMode ? <LightModeIcon sx={{ color: pink[50] }}  /> : <DarkModeIcon />}
      </IconButton>
       {/* Select box to change language */}
       <FormControl className="select" sx={{ m: 1, minWidth: 120 }}>
       <InputLabel id="language">Langue</InputLabel>
      <Select
          labelId="language"
          id="language-select"
          value={langue}
          defaultValue=""
          label="Langue"
          // autoWidth
          onChange={changeLanguageHandler}
        >
          <MenuItem value={"fr"}><img className="flag" src={France} /> Français</MenuItem>
          <MenuItem value={"en"}><img className="flag" src={Gb} />English</MenuItem>
        </Select>
        </FormControl>
      </div>
      
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
