// Inicio.js
import React from 'react';
import { Container, Typography, Button } from '@mui/material';

const inicioContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '40px',
  marginTop: '40px',
  background: '#2C3E50', // Fondo más oscuro combinado con colores existentes
  borderRadius: '10px',
  boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)', // Sombra ligera
};

const welcomeTextStyle = {
  color: '#ECF0F1', // Texto más claro para destacar en el fondo oscuro
  marginBottom: '20px',
  fontFamily: 'Arial, sans-serif', // Fuente diferente
};

const subTextStyle = {
  color: '#BDC3C7', // Texto secundario en tono más claro
  marginBottom: '20px',
  fontFamily: 'Arial, sans-serif', // Fuente diferente
};

const buttonStyle = {
  background: '#ECF0F1', // Fondo claro para resaltar en el fondo oscuro
  color: '#2C3E50', // Texto oscuro para destacar en el fondo claro
};

const Inicio = () => {
  return (
    <Container maxWidth="sm" style={inicioContainerStyle}>
      <Typography variant="h2" align="center" style={welcomeTextStyle} gutterBottom>
        ¡Bienvenido a Mi Portafolio!
      </Typography>
      <Typography variant="h5" align="center" style={subTextStyle} paragraph>
        Soy MARCO XD, un apasionado desarrollador con experiencia en [Tecnologías].
      </Typography>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
        <Button variant="contained" style={buttonStyle} href="proyectos">
          Ver Proyectos
        </Button>
      </div>
    </Container>
  );
};

export default Inicio;
