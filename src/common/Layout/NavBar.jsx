import React, { useState } from "react";
import "./NavBar.css";
import { Container, AppBar, Toolbar, Box, Typography, IconButton, Menu, MenuItem } from "@mui/material";
import logoMuni from "../../assets/Logo-completo-muni.png";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';

export const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" className="navbar">
      <Container maxWidth="xl">
        <Toolbar className="navbar-toolbar">
          {/* Logo */}
          <Box className="navbar-logo-container">
            <a href="/" className="navbar-logo-link">
              <img src={logoMuni} alt="Logo Municipalidad" className="navbar-logo" />
            </a>
          </Box>

          {/* Título de Eventos */}
          <Box className="navbar-title-container">
            <Typography variant="h6" className="navbar-title">Eventos</Typography>
          </Box>

          {/* Sección de Logueo */}
          <Box className="navbar-user-info">
            <Typography variant="h6" className="navbar-user-name">
              Bienvenido, Usuario
            </Typography>

            {/* Icono de cuenta (usuario) */}
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleMenuOpen}
              aria-label="account of current user"
            >
              <AccountCircleIcon />
            </IconButton>

            {/* Menú desplegable */}
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleMenuClose}>Perfil</MenuItem>
              <MenuItem onClick={handleMenuClose}>Cerrar sesión</MenuItem>
            </Menu>

            {/* Menú móvil */}
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
              className="navbar-menu-icon"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
