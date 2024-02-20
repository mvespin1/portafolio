// Proyectos.js
import React from 'react';
import { Container, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';

const proyectosContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '40px',
  marginTop: '40px',
  background: '#2C3E50', // Fondo más oscuro combinado con colores existentes
  borderRadius: '10px',
  boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)', // Sombra ligera
};

const proyectoCardStyle = {
  marginBottom: '20px',
  width: '100%',
  background: '#ECF0F1', // Color de fondo similar al AppBar y al Drawer
};

const proyectoTitleStyle = {
  color: '#2C3E50', // Color principal similar al AppBar
  marginBottom: '10px',
};

const proyectoDescriptionStyle = {
  color: '#7F8C8D', // Color secundario similar al texto del Drawer
  marginBottom: '10px',
};

const proyectoButtonStyle = {
  background: '#ECF0F1', // Fondo claro para resaltar en el fondo oscuro
  color: '#2C3E50', // Texto oscuro para destacar en el fondo claro
};

const Proyectos = () => {
  const proyectos = [
    {
      titulo: 'Proyecto 1',
      descripcion: 'Descripción del Proyecto 1. Puedes agregar más detalles aquí.',
      imagen: 'url de la imagen',
      enlace: 'enlace a más detalles',
    },
    {
      titulo: 'Proyecto 2',
      descripcion: 'Descripción del Proyecto 2. Puedes agregar más detalles aquí.',
      imagen: 'url de la imagen',
      enlace: 'enlace a más detalles',
    },
    // Agrega más proyectos según sea necesario
  ];

  return (
    <Container maxWidth="md" style={proyectosContainerStyle} id="proyectos">
      <Typography variant="h3" align="center" style={{ color: '#ECF0F1' }} gutterBottom>
        Mis Proyectos
      </Typography>
      {proyectos.map((proyecto, index) => (
        <Card key={index} style={proyectoCardStyle}>
          <CardMedia
            component="img"
            height="140"
            image={proyecto.imagen}
            alt={proyecto.titulo}
          />
          <CardContent>
            <Typography variant="h5" component="div" style={proyectoTitleStyle}>
              {proyecto.titulo}
            </Typography>
            <Typography style={proyectoDescriptionStyle} paragraph>
              {proyecto.descripcion}
            </Typography>
            <Button variant="contained" style={proyectoButtonStyle} href={proyecto.enlace} target="_blank">
              Ver Detalles
            </Button>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default Proyectos;
