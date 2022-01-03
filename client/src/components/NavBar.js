import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom"
import { NavBarData } from "./NavBarData";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{backgroundColor: "#fff"}}>
      <Container maxWidth="xl" sx={{backgroundColor: "#fff", color: "#000"}}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex', fontFamily: "Lobster", fontSize: "2rem" } }}
          >
            Artrate
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {NavBarData.map((element, idx) => (
                <MenuItem key={element.title} onClick={handleCloseNavMenu}>
                  <Link to={element.path}>
                    {element.icon}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Mobile View */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, fontFamily: "Lobster", fontSize: "2rem"  }}
          >
            Artrate
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', flexDirection: "row-reverse"  } }}>
            {NavBarData.map((element, idx) => (
              <Link to={element.path} key={element.title}>
                <Button
                  key={"button_" + element.title}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block', color: "#000" }}
                >
                  {element.icon}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default NavBar;