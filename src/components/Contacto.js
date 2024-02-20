// Contacto.js
import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const contactoContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '40px',
  marginTop: '40px',
  background: '#2C3E50', // Fondo oscuro combinado con colores existentes
  borderRadius: '10px',
  boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)', // Sombra ligera
};

const contactoTitleStyle = {
  color: '#ECF0F1', // Color principal similar al AppBar y al Drawer
  marginBottom: '20px',
};

const contactoInfoStyle = {
  color: '#ECF0F1', // Color principal similar al AppBar y al Drawer
  marginTop: '20px',
};

const iconStyle = {
  fontSize: '40px',
  marginRight: '10px',
};

const Contacto = () => {
  return (
    <Container maxWidth="md" style={contactoContainerStyle} id="contacto">
      <Typography variant="h3" align="center" style={contactoTitleStyle} gutterBottom>
        Contáctame
      </Typography>
      <Grid container spacing={3} style={contactoInfoStyle}>
        <Grid item xs={12} md={4}>
          <Box display="flex" alignItems="center">
            <EmailIcon style={iconStyle} />
            <Typography variant="h6">correo@example.com</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box display="flex" alignItems="center">
            <PhoneIcon style={iconStyle} />
            <Typography variant="h6">+123 456 789</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box display="flex" alignItems="center">
            <LocationOnIcon style={iconStyle} />
            <Typography variant="h6">Ciudad, País</Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contacto;
