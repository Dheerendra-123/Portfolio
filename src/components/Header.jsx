import React, { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useScrollTrigger,
  Slide
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Resume', id: 'resume' },
  { label: 'Contact', id: 'contact' },
];

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = ({ activeSection }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setDrawerOpen(false);
    }
  };

  return (
    <HideOnScroll>
      <AppBar position="fixed" elevation={0} className="navbar">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              component="div"
              sx={{ 
                flexGrow: 1, 
                fontWeight: 700,
                fontSize: { xs: '1.2rem', md: '1.5rem' }
              }}
            >
              <span className="gradient-text">Dheerendra</span>
            </Typography>
            
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  sx={{ 
                    mx: 1,
                    color: 'white',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: activeSection === item.id ? '100%' : '0%',
                      height: '3px',
                      bgcolor: 'primary.main',
                      transition: 'width 0.3s ease'
                    },
                    '&:hover::after': {
                      width: '100%'
                    }
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
            
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
        
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={handleDrawerToggle}
          sx={{
            '& .MuiDrawer-paper': { 
              width: 240,
              bgcolor: 'background.paper'
            },
          }}
        >
          <Box sx={{ textAlign: 'right', p: 1 }}>
            <IconButton onClick={handleDrawerToggle} color="inherit">
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {navItems.map((item) => (
              <ListItem 
                button 
                key={item.id} 
                onClick={() => scrollToSection(item.id)}
                sx={{
                  bgcolor: activeSection === item.id ? 'rgba(156, 39, 176, 0.1)' : 'transparent',
                  borderLeft: activeSection === item.id ? '4px solid #9c27b0' : '4px solid transparent',
                }}
              >
                <ListItemText 
                  primary={item.label}
                  primaryTypographyProps={{
                    fontWeight: activeSection === item.id ? 600 : 400
                  }} 
                />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </AppBar>
    </HideOnScroll>
  );
};

export default Header;