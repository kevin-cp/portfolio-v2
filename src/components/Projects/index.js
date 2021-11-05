import React from 'react';
import { Container } from '@mui/material';
import { useTranslation } from "react-i18next";
import './projects.scss';

// import images
import Portfolio from '../../assets/Portfolio.png';
import Nexus from '../../assets/Nexus.png';

const Projects = () => { 
    const { t, i18n } = useTranslation();

    return (
  <div className="projects">
  <h1>{t('projects')}</h1>
  <p>{t('projects_text')}</p>
    <Container className="wrapper">
    <div class="card-container">
    <div class="post">
        <div class="header_post">
            <img src={Nexus} alt=""/>
        </div>

        <div class="body_post">
            <div class="post_content">

                <h2>Le Nexus</h2>
                <p>{t('nexus')}</p>

                <div class="container_infos">
                    <div class="postedBy">
                        <span><a className="project-link" href="http://lenexus.surge.sh/login" target="_blank">Voir</a></span>
                        
                    </div>

                </div>
            </div>
        </div>
    </div>

    <div class="post">
        <div class="header_post">
            <img src={Portfolio} alt=""/>
        </div>

        <div class="body_post">
            <div class="post_content">

                <h2>Mon portfolio</h2>
                <p>{t('portfolio')}</p>  
            </div>
        </div>
    </div>
</div>
  </Container>
  </div>
)
    };

export default Projects;