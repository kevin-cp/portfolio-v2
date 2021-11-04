import React from "react";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import './header.css';

const Header = () => (
  <div className="header">
    <button><DarkModeIcon /></button>
    <h1>Hello World !</h1>
  </div>
);

export default Header;