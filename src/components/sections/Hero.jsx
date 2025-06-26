import React, { useEffect, useRef, useState } from 'react';
import { Box, Container, Typography, Button, Grid, IconButton, Tooltip, Stack, useMediaQuery, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Typed from 'typed.js';
import myimg from '../../assets/Dheerendra.jpg';

const Hero = () => {
  const typedRef = useRef(null);
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMdScreen = useMediaQuery(theme.breakpoints.up('md'));
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });
  
  // Social media links - Consider moving to a config file
  const SOCIAL_LINKS = [
    {
      name: 'GitHub',
      icon: <GitHubIcon />,
      url: 'https://github.com/Dheerendra-123',
      color: '#ffffff'
    },
    {
      name: 'LinkedIn',
      icon: <LinkedInIcon />,
      url: 'https://www.linkedin.com/in/dheerendra-dixit-459a03244/',
      color: '#0077B5'
    },
    {
      name: 'Instagram',
      icon: <InstagramIcon />,
      url: 'https://www.instagram.com/dheerendra_dixit123/',
      color: '#E1306C'
    }
  ];
  
  useEffect(() => {
    // Handle window resize
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    
    // Initialize typed.js
    const typed = new Typed(typedRef.current, {
      strings: ['Full Stack Developer', 'Frontend Developer', 'Software Engineer', 'MERN Stack Developer'],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
    });
    
    // Cleanup function
    return () => {
      typed.destroy();
      window.removeEventListener('resize', handleResize);
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
        py: { xs: 8, sm: 4, md: 0 }, // Add padding for smaller screens
      }}
    >
      {/* Animated background elements - Reduce amount on mobile */}
      {[...Array(isXsScreen ? 10 : 20)].map((_, index) => (
        <Box
          key={index}
          component={motion.div}
          sx={{
            position: 'absolute',
            width: Math.random() * (isXsScreen ? 10 : 20) + (isXsScreen ? 5 : 10),
            height: Math.random() * (isXsScreen ? 10 : 20) + (isXsScreen ? 5 : 10),
            background: 'rgba(156, 39, 176, 0.3)',
            borderRadius: '50%',
            filter: 'blur(8px)',
            opacity: isXsScreen ? 0.5 : 0.7,
          }}
          animate={{
            x: [
              Math.random() * (windowSize.width || 1000), 
              Math.random() * (windowSize.width || 1000)
            ],
            y: [
              Math.random() * (windowSize.height || 800), 
              Math.random() * (windowSize.height || 800)
            ],
          }}
          transition={{
            duration: Math.random() * 50 + (isXsScreen ? 30 : 50),
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      ))}

      <Container maxWidth="lg">
        <Grid 
          container 
          spacing={{ xs: 2, sm: 3, md: 4 }} 
          alignItems="center"
          justifyContent="center"
          direction={{ xs: 'column-reverse', md: 'row' }}
        >
          {/* Mobile profile image (visible only on small and medium screens) */}
          <Grid 
            item 
            xs={12} 
            sx={{ 
              display: { xs: 'flex', md: 'none' },
              justifyContent: 'center',
              mb: { xs: 2, sm: 3 },
              mt: { xs: 1, sm: 2 },
              order: { xs: 1, md: 2 }
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
                  width: { xs: '150px', sm: '180px' },
                  height: { xs: '150px', sm: '180px' },
                  borderRadius: '50%',
                  border: '5px solid rgba(156, 39, 176, 0.3)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />
            </motion.div>
          </Grid>

          {/* Text content */}
          <Grid 
            item 
            xs={12} 
            md={7} 
            sx={{ 
              order: { xs: 2, md: 1 },
              px: { xs: 2, sm: 3, md: 4 } 
            }}
          >
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography 
                  variant="h6" 
                  sx={{ 
                    mb: { xs: 1, md: 2 }, 
                    color: 'primary.main', 
                    fontWeight: 600,
                    fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' }
                  }}
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
                    mb: { xs: 0.5, md: 1 },
                    fontWeight: 800,
                    fontSize: { xs: '1.8rem', sm: '2.2rem', md: '3rem', lg: '4rem' },
                    lineHeight: { xs: 1.2, md: 1.1 }
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
                    mb: { xs: 2, md: 3 },
                    color: 'secondary.main',
                    fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.7rem', lg: '2rem' }
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
                  sx={{ 
                    mb: { xs: 3, md: 4 }, 
                    maxWidth: '600px', 
                    mx: { xs: 'auto', md: 0 },
                    fontSize: { xs: '0.9rem', sm: '1rem', md: '1rem' },
                    px: { xs: 1, sm: 0 }
                  }}
                >
                  Passionate about creating modern web applications with cutting-edge technologies.
                  Focused on delivering clean code and exceptional user experiences.
                </Typography>
              </motion.div>

              {/* Social Media Links */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <Stack 
                  direction="row" 
                  spacing={{ xs: 1, sm: 2 }} 
                  justifyContent={{ xs: 'center', md: 'flex-start' }}
                  mb={{ xs: 2, md: 3 }}
                >
                  {SOCIAL_LINKS.map((social, index) => (
                    <Tooltip key={index} title={`Connect on ${social.name}`} arrow placement="top">
                      <IconButton
                        aria-label={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: 'white',
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          transition: 'all 0.3s ease',
                          fontSize: { xs: '1.2rem', md: '1.5rem' },
                          padding: { xs: 1, md: 1.5 },
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
                </Stack>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Stack 
                  direction={{ xs: 'column', sm: 'row' }} 
                  spacing={{ xs: 2, sm: 2, md: 2 }}
                  justifyContent={{ xs: 'center', md: 'flex-start' }}
                >
                  <Button 
                    variant="contained" 
                    color="primary" 
                    size={isXsScreen ? "medium" : "large"}
                    onClick={() => scrollToSection('about')}
                    sx={{ 
                      px: { xs: 2, md: 3 }, 
                      py: { xs: 1.2, md: 1.5 },
                      boxShadow: '0 8px 20px rgba(156, 39, 176, 0.3)',
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        boxShadow: '0 12px 28px rgba(156, 39, 176, 0.4)',
                      },
                      transition: 'all 0.3s ease',
                      fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' }
                    }}
                  >
                    Explore My Work
                  </Button>
                  
                  <Button 
                    variant="outlined" 
                    color="primary" 
                    size={isXsScreen ? "medium" : "large"}
                    onClick={() => scrollToSection('contact')}
                    sx={{ 
                      px: { xs: 2, md: 3 }, 
                      py: { xs: 1.2, md: 1.5 },
                      borderWidth: '2px',
                      '&:hover': {
                        borderWidth: '2px',
                        transform: 'translateY(-3px)',
                      },
                      transition: 'all 0.3s ease',
                      fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' }
                    }}
                  >
                    Get In Touch
                  </Button>
                </Stack>
              </motion.div>
            </Box>
          </Grid>
          
          {/* Desktop profile image */}
          <Grid 
            item 
            xs={12} 
            md={5} 
            sx={{ 
              display: { xs: 'none', md: 'block' },
              order: { xs: 1, md: 2 }
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
                  width: { md: '80%', lg: '90%' },
                  maxWidth: '400px',
                  borderRadius: '50%',
                  border: '5px solid rgba(156, 39, 176, 0.3)',
                  mx: 'auto',
                  display: 'block',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  aspectRatio: '1/1'
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
      
      {/* Scroll down indicator */}
      <Box
        sx={{
          position: 'absolute',
          bottom: { xs: 10, md: 30 },
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
          display: { xs: 'none', sm: 'block' } // Hide on extra small screens
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
            <ArrowDownwardIcon sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }} />
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Hero;