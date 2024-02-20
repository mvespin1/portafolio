import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Container, Drawer, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import Inicio from './components/Inicio';
import Proyectos from './components/Proyectos';
import Contacto from './components/Contacto';

const drawerWidth = 300;

const mainContainerStyle = {
  flexGrow: 1,
  padding: '20px',
  marginLeft: 0,
  transition: 'margin 0.2s',
  background: '#34495E', // Fondo más oscuro que #2C3E50
  minHeight: '100vh', // Altura mínima de la vista
};

const drawerListStyle = {
  background: '#2C3E50',
  height: '100%', // Ajusta el alto del menú para ocupar toda la altura
  width: `${drawerWidth}px`, // Ajusta el ancho del menú
  display: 'flex',
  flexDirection: 'column', // Alinea los elementos verticalmente
};

const listItemStyle = {
  '&:hover': {
    background: '#34495E',
  },
  padding: '16px', // Aumenta el espacio interno de cada elemento
};

const iconStyle = {
  color: '#ECF0F1',
  fontSize: '24px', // Ajusta el tamaño de los iconos
};

const textStyle = {
  color: '#ECF0F1',
  fontSize: '18px', // Ajusta el tamaño del texto
  marginLeft: '10px', // Añade un margen a la izquierda del texto
};

const appBarStyle = {
  background: '#2C3E50',
  height: '95px', // Ajusta la altura de la AppBar
};

const Main = ({ children, open }) => (
  <main
    style={{
      ...mainContainerStyle,
      marginLeft: open ? `${drawerWidth}px` : '0',
    }}
  >
    {children}
  </main>
);

const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const routes = [
    { path: '/', text: 'Inicio', icon: <HomeIcon style={iconStyle} />, component: <Inicio /> },
    { path: '/proyectos', text: 'Proyectos', icon: <CodeIcon style={iconStyle} />, component: <Proyectos /> },
    { path: '/contacto', text: 'Contacto', icon: <ContactMailIcon style={iconStyle} />, component: <Contacto /> },
  ];

  return (
    <div className="App">
      <Router>
        <AppBar position="static" color="primary" sx={appBarStyle}>
          <Toolbar style={{ height: '100%' }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: 'Arial', fontWeight: 'bold', color: '#ECF0F1', display: 'flex', alignItems: 'center' }}>
              Mi Portafolio
            </Typography>
          </Toolbar>
        </AppBar>

        <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose} sx={{ width: drawerWidth }}>
          <List sx={drawerListStyle}>
            {routes.map((route) => (
              <ListItem key={route.text} button component={Link} to={route.path} sx={listItemStyle}>
                <ListItemIcon style={iconStyle}>{route.icon}</ListItemIcon>
                <ListItemText primary={<Typography style={textStyle}>{route.text}</Typography>} />
              </ListItem>
            ))}
          </List>
        </Drawer>

        <Main open={drawerOpen}>
          <Routes>
            {routes.map((route) => (
              <Route key={route.path} path={route.path} element={route.component} />
            ))}
          </Routes>
        </Main>
      </Router>
    </div>
  );
}

export default App;
