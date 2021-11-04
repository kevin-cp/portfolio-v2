import React from 'react';
import './footer.css';

// icons
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => (
  <div className="footer">
    <div className="text">
      <p>© 2021 Portfolio, Kevin Capitao Peixoto -- Junior Full-Stack Developer</p>
    </div>
    <div className="socials">
          <a href="https://github.com/kevin-cp" target="_blank"><GitHubIcon fontSize="large" /></a>
          <a href="https://www.linkedin.com/in/kevin-capitao-peixoto/" target="_blank"><LinkedInIcon fontSize="large" /></a>
          <a href="https://twitter.com/Kev_Cp" target="_blank"><TwitterIcon fontSize="large" /></a> 
    </div>
  </div>
);

export default Footer;