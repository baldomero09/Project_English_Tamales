import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Button, Drawer, List, ListItem, ListItemText, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled, useTheme } from '@mui/material/styles';
import logo from '../../assets/images/logo.png';
import './nav.css';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: 'inherit',
  marginRight: theme.spacing(2),
}));

const LogoLink = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  color: 'inherit',
}));

const LogoImage = styled('img')({
  height: '90px',
  width: '90px',
  marginRight: '16px',
  marginTop: '5px',
});

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar position="static" className='navbar'>
        <StyledToolbar>
          <LogoLink to="/">
            <LogoImage src={logo} alt="My App Logo" />
          </LogoLink>
          {isMobile ? (
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          ) : (
            <div>
              <Button color="inherit" component={StyledLink} to="/" className='link'>Home</Button>
              <Button color="inherit" component={StyledLink} to="/about" className='link'>Member's</Button>
              <Button color="inherit" component={StyledLink} to="/store" className='link'>Store</Button>
              <Button color="inherit" component={StyledLink} to="/contact" className='link'>Contact</Button>
            </div>
          )}
        </StyledToolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List className='drawer'>
          <ListItem button component={StyledLink} to="/" onClick={toggleDrawer(false)}>
            <ListItemText primary="Home" className='link' />
          </ListItem>
          <ListItem button component={StyledLink} to="/about" onClick={toggleDrawer(false)}>
            <ListItemText primary="Member's" className='link' />
          </ListItem>
          <ListItem button component={StyledLink} to="/store" onClick={toggleDrawer(false)}>
            <ListItemText primary="Store" className='link' />
          </ListItem>
          <ListItem button component={StyledLink} to="/contact" onClick={toggleDrawer(false)}>
            <ListItemText primary="Contact" className='link' />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
