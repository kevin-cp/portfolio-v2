import React from 'react';
import { Container, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import ResumeImg from '../../assets/resume.png';
import './resume.css';


const Resume = () => {
  const { t, i18n } = useTranslation();

  return (
  <Container className="resume">
    <h1>{t('resume_title')}</h1>
    <div className="image">
      <img src={ResumeImg} alt="resume" />
    </div>
    <div className="resume_button">
        <Button variant="contained"><Link to="/">Home</Link></Button>
      </div>
  </Container>
)
  };

export default Resume;