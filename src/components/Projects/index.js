import React from 'react';
import { Container } from '@mui/material';
import './projects.scss';

// import images
import Portfolio from '../../assets/Portfolio.png';
import Nexus from '../../assets/Nexus.png';

const Projects = () => (
  <div className="projects">
  <h1>Mes projets</h1>
  <p>Ici vous trouverez les projets que j'ai réalisé.</p>
    <Container className="wrapper">
    <div class="card-container">
    <div class="post">
        <div class="header_post">
            <img src={Nexus} alt=""/>
        </div>

        <div class="body_post">
            <div class="post_content">

                <h2>Le Nexus</h2>
                <p>Projet de fin de formation réailisé en équipe avec React et Symfony.</p>

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
                <p>Le site que vous visitez actuellement.</p>  
            </div>
        </div>
    </div>
</div>
  </Container>
  </div>
);

export default Projects;