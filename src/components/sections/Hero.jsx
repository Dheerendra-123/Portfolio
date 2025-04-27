import React, { useEffect, useRef } from 'react';
import { Box, Container, Typography, Button, Grid, IconButton, Tooltip, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Typed from 'typed.js';
import myimg from '../../assets/Dheerendra.jpg';

const Hero = () => {
  const typedRef = useRef(null);
  
  // Social media links - Consider moving to a config file
  const SOCIAL_LINKS = [
    {
      name: 'GitHub',
      icon: <GitHubIcon />,
      url: 'https://github.com/your-username',
      color: '#ffffff'
    },
    {
      name: 'LinkedIn',
      icon: <LinkedInIcon />,
      url: 'https://linkedin.com/in/your-profile',
      color: '#0077B5'
    },
    {
      name: 'Instagram',
      icon: <InstagramIcon />,
      url: 'https://instagram.com/your-handle',
      color: '#E1306C'
    }
  ];
  
  useEffect(() => {
    // Initialize typed.js
    const typed = new Typed(typedRef.current, {
      strings: ['Full Stack Developer', 'Frontend Specialist', 'Backend Engineer', 'Web3 Enthusiast'],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
    });
    
    // Cleanup function
    return () => {
      typed.destroy();
    };
  }, []);

  // Smooth scroll to about section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -70; // Header height offset
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, rgba(10, 25, 41, 0.9) 0%, rgba(10, 25, 41, 0.95) 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated background elements */}
      {[...Array(20)].map((_, index) => (
        <Box
          key={index}
          component={motion.div}
          sx={{
            position: 'absolute',
            width: Math.random() * 20 + 10,
            height: Math.random() * 20 + 10,
            background: 'rgba(156, 39, 176, 0.3)',
            borderRadius: '50%',
            filter: 'blur(8px)',
          }}
          animate={{
            x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
            y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
          }}
          transition={{
            duration: Math.random() * 50 + 50,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      ))}

      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography 
                  variant="h6" 
                  sx={{ mb: 2, color: 'primary.main', fontWeight: 600 }}
                >
                  Hello, I'm
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Typography 
                  variant="h1" 
                  component="h1" 
                  sx={{ 
                    mb: 1,
                    fontWeight: 800,
                    fontSize: { xs: '2.5rem', md: '4rem' },
                  }}
                >
                  Dheerendra Vikram Dixit
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Typography 
                  variant="h3" 
                  sx={{ 
                    mb: 3,
                    color: 'secondary.main',
                    fontSize: { xs: '1.5rem', md: '2rem' }
                  }}
                >
                  I'm a <span ref={typedRef}></span>
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Typography 
                  variant="body1" 
                  sx={{ mb: 4, maxWidth: '600px', mx: { xs: 'auto', md: 0 } }}
                >
                  Passionate about creating modern web applications with cutting-edge technologies.
                  Focused on delivering clean code and exceptional user experiences.
                </Typography>
              </motion.div>

              {/* Social Media Links */}
              <Stack mb={3}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                sx={{ 
                  display: 'flex', 
                  mb: 4,
                  justifyContent: { xs: 'center', md: 'flex-start' }
                }}
              >
                {SOCIAL_LINKS.map((social, index) => (
                  <Tooltip key={index} title={`Connect on ${social.name}`} arrow placement="top">
                    <IconButton
                      aria-label={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        mr: 2,
                        color: 'white',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: social.color,
                          transform: 'translateY(-5px)',
                        },
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  </Tooltip>
                ))}
              </motion.div>
              </Stack>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Button 
                  variant="contained" 
                  color="primary" 
                  size="large"
                  onClick={() => scrollToSection('about')}
                  sx={{ 
                    mr: { xs: 0, md: 2 }, 
                    mb: { xs: 2, md: 0 },
                    px: 3, 
                    py: 1.5,
                    boxShadow: '0 8px 20px rgba(156, 39, 176, 0.3)',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      boxShadow: '0 12px 28px rgba(156, 39, 176, 0.4)',
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  Explore My Work
                </Button>
                
                <Button 
                  variant="outlined" 
                  color="primary" 
                  size="large"
                  onClick={() => scrollToSection('contact')}
                  sx={{ 
                    px: 3, 
                    py: 1.5,
                    borderWidth: '2px',
                    '&:hover': {
                      borderWidth: '2px',
                      transform: 'translateY(-3px)',
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  Get In Touch
                </Button>
              </motion.div>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={5} sx={{ display: { xs: 'none', md: 'block' } }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Box
                component="img"
                src={myimg}
                alt="Dheerendra Vikram Dixit"
                sx={{
                  width: '80%',
                  maxWidth: '400px',
                  height: '80%',
                  borderRadius: '50%',
                  border: '5px solid rgba(156, 39, 176, 0.3)',
                  mx: 'auto',
                  display: 'block',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />
            </motion.div>
          </Grid>
        </Grid>

        {/* Mobile profile image (visible only on small screens) */}
        <Box 
          sx={{ 
            display: { xs: 'flex', md: 'none' },
            justifyContent: 'center',
            mt: 4
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Box
              component="img"
              src={myimg}
              alt="Dheerendra Vikram Dixit"
              sx={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                border: '5px solid rgba(156, 39, 176, 0.3)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
          </motion.div>
        </Box>
      </Container>
      
      <Box
        sx={{
          position: 'absolute',
          bottom: 30,
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <Button 
            onClick={() => scrollToSection('about')}
            sx={{ 
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }
            }}
            aria-label="Scroll down"
          >
            <ArrowDownwardIcon />
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Hero;