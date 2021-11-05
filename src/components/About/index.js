import React from "react";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Profile from '../../assets/profile.jpg';
import { useTranslation } from "react-i18next";

import './about.scss'

const About = () => {
  const { t, i18n } = useTranslation();

  return (
  <Container className="about"> 
    <h1>{t('welcome_to_my_website')}</h1>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
        <div className="presentation">
           <p>{t('text_presentation1')}</p>
           <p>{t('text_presentation2')}</p>
           <p>{t('text_presentation3')}</p>
        </div>
        
      </Grid>
      <Grid item xs={12} md={4}>
        <div className="picture">
          <img className="profile-picture" src={Profile} alt="profil"></img>
        </div>  
      </Grid>
      </Grid>
      <div className="competences">
        <h3>{t('tech')}</h3>
          <ul className="tech-list">
            <li className="li-item">HTML</li>
            <li className="li-item">CSS</li>
            <li className="li-item">Javascript</li>
            <li className="li-item">PHP</li>
            <li className="li-item">Lumen</li>
            <li className="li-item">Insomnia</li>
            <li className="li-item">React/Redux</li>
            <li className="li-item">Bootstrap</li>
            <li className="li-item">Bulma</li>
            <li className="li-item">Responsive</li>
          </ul>
      <h3>{t('language')}</h3>
    <ul className="language-list">
      <li className="li-item">{t('french')}</li>
      <li className="li-item">{t('portuguese')}</li>
      <li className="li-item">{t('english')}</li>
    </ul>  
  </div>  
  </Container>
)
};

export default About;