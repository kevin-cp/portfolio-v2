import React from 'react';
import emailjs from 'emailjs-com';
import { Container, Grid, TextField, Button } from '@mui/material';
import './contact.css';

// icons
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_2tdx3gn', 'template_v35qmdq', e.target, 'user_4F82T5nrDlPO9RV0A7F4k')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

return (
  <div className="content">
  <Container className="contact">
    <div className="contact-text">
        <h1>Vous souhaitez me contacter ?</h1>
        <p>Remplissez le formulaire et je vous répondrais au plus vite !</p>
    </div>
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
      <div className="list">
        <ul className="contact-list">
          <li><a><EmailIcon color="primary" fontSize="large" /></a>kevinpeixoto182@gmail.com</li>
          <li><a href="https://github.com/kevin-cp" target="_blank"><GitHubIcon color="primary" fontSize="large" /></a>Github</li>
          <li><a href="https://www.linkedin.com/in/kevin-capitao-peixoto/" target="_blank"><LinkedInIcon color="primary" fontSize="large" /></a>Linkedin</li>
          <li><a href="https://twitter.com/Kev_Cp" target="_blank"><TwitterIcon color="primary" fontSize="large" /></a>Twitter</li>
        </ul>
      </div>
      </Grid>
      <Grid item xs={12} md={8}>
        <div className="contact-form">
          <form onSubmit={sendEmail} className="form">
          <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Nom"
              name="name"
              autoComplete="name"
              autoFocus
              
            />
          <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Adresse Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
          <TextField
            required
            id="outlined-multiline-static"
            label="Votre message"
            name="message"
            multiline
            fullWidth
            rows={4}
          />
           <Button
              type="submit"
              // fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Envoyer
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  </Container>
  </div>
);

};

export default Contact;