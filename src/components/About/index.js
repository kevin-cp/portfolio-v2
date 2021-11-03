import React from "react";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Profile from '../../assets/profile.jpg';
import './about.css'

const About = () => (
  <Container className="about"> 
    <h1>Bienvue sur mon site</h1>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
        <div className="presentation">
           <p>
              Je m'appelle Kevin Capitao Peixoto, j'habite entre Versailles et Nantes.<br/><br /> Après plusieurs années à travailler dans d'autres domaines (notamment la logistique)
              et ayant toujours eu un intérêt pour l'informatique j'ai décidé dans l'aventure du dévelopement web par le biais de l'école O'Clock
              ou j'ai développé des compétences que j'ai mis en pratique par le biais d'un projet de fin de formation en équipe. <br/><br />
              Je suis donc actuellement à la recherche d'un premier poste ou d'un stage. Ainsi, si mon profil vous intéresse,
              je vous laisse utiliser le formulaire de contact ou bien mes liens vers mes différents réseaux sociaux afin de me contacter.
          </p>
        </div>
      </Grid>
      <Grid item xs={4}>
        <div className="picture">
          <img src={Profile} alt="profil"></img>
        </div>  
      </Grid>
      </Grid>
  </Container>
);

export default About;