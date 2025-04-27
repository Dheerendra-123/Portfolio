import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Link, 
  IconButton, 
  Grid 
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        bgcolor: 'background.paper',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" className="gradient-text" gutterBottom>
              Dheerendra Vikram Dixit
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Full Stack Web Developer building modern, responsive, and user-friendly applications.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} sx={{ textAlign: { md: 'right' } }}>
            <Box sx={{ mt: 2 }}>
              <IconButton 
                color="primary" 
                component={Link} 
                href="https://github.com/dheerendradixit" 
                target="_blank"
                aria-label="GitHub"
              >
                <GitHubIcon />
              </IconButton>
              <IconButton 
                color="primary" 
                component={Link} 
                href="https://linkedin.com/in/dheerendradixit" 
                target="_blank"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton 
                color="primary" 
                component={Link} 
                href="https://twitter.com/dheerendradixit" 
                target="_blank"
                aria-label="Twitter"
              >
                <TwitterIcon />
              </IconButton>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              © {new Date().getFullYear()} Dheerendra Vikram Dixit. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;