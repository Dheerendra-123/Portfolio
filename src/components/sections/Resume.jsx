import React, { useEffect, useRef, useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Grid,
  Card,
  CardContent,
  useTheme,
  Dialog,
  DialogContent,
  DialogActions,
  Snackbar,
  Alert
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';
import CloseIcon from '@mui/icons-material/Close';
import resumeImg from '../../assets/resume.png';
import resumePdf from '../../assets/Resume.pdf'; 

const Resume = () => {
  const theme = useTheme();
  const sectionRef = useRef(null);
  const [openPreview, setOpenPreview] = useState(false);
  const [notification, setNotification] = useState({
    open: false,
    message: '',
    severity: 'success'
  });
  
  // Education data - Consider moving to a separate data file
  const EDUCATION = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'University Name',
      year: '2019 - 2023',
      description: 'Graduated with honors in Computer Science and Engineering with a focus on web development technologies and data structures.'
    },
    {
      degree: 'Full Stack Web Development Bootcamp',
      institution: 'Coding Academy',
      year: '2023',
      description: 'Intensive full-stack web development program covering modern JavaScript frameworks, backend technologies, and database management.'
    }
  ];
  
  // Certifications data - Consider moving to a separate data file
  const CERTIFICATIONS = [
    {
      title: 'React - The Complete Guide',
      issuer: 'Udemy',
      year: '2023'
    },
    {
      title: 'MongoDB Developer Certification',
      issuer: 'MongoDB University',
      year: '2023'
    },
    {
      title: 'AWS Certified Developer - Associate',
      issuer: 'Amazon Web Services',
      year: '2023'
    },
    {
      title: 'TypeScript for Professionals',
      issuer: 'Udemy',
      year: '2023'
    }
  ];

  // Handle resume download
  const handleDownload = () => {
    try {
      // Create an anchor element and set properties
      const link = document.createElement('a');
      link.href = resumePdf;
      link.download = 'My_Resume.pdf';
      
      // Append to body, click and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setNotification({
        open: true,
        message: 'Resume downloaded successfully!',
        severity: 'success'
      });
    } catch (error) {
      setNotification({
        open: true,
        message: 'Download failed. Please try again.',
        severity: 'error'
      });
      console.error('Download error:', error);
    }
  };

  // Toggle resume preview dialog
  const togglePreview = () => {
    setOpenPreview(prev => !prev);
  };

  // Close notification
  const handleCloseNotification = () => {
    setNotification(prev => ({ ...prev, open: false }));
  };

  useEffect(() => {
    // Animation observer setup
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const elements = document.querySelectorAll('.stagger-item');
          elements.forEach((el, i) => {
            setTimeout(() => {
              el.classList.add('animate');
            }, i * 100);
          });
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    // Cleanup function for observer
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Education item component for better readability
  const EducationItem = ({ item }) => (
    <Box 
      sx={{ 
        mb: 4,
        position: 'relative',
        pl: 4,
        '&::before': {
          content: '""',
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '2px',
          bgcolor: 'primary.main',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          left: '-6px',
          top: '8px',
          width: '14px',
          height: '14px',
          borderRadius: '50%',
          bgcolor: 'primary.main',
        }
      }}
    >
      <Typography
        variant="body2"
        sx={{
          display: 'inline-block',
          bgcolor: 'primary.main',
          color: 'white',
          px: 1.5,
          py: 0.5,
          borderRadius: 1,
          mb: 1,
          fontWeight: 500,
        }}
      >
        {item.year}
      </Typography>
      <Typography variant="h6" component="h4" gutterBottom sx={{ fontWeight: 600 }}>
        {item.degree}
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom>
        {item.institution}
      </Typography>
      <Typography variant="body2">
        {item.description}
      </Typography>
    </Box>
  );

  // Certification item component for better readability
  const CertificationCard = ({ cert }) => (
    <Card sx={{ 
      mb: 2,
      height: '100%',
      transition: 'transform 0.3s',
      '&:hover': {
        transform: 'translateY(-5px)',
      }
    }}>
      <CardContent>
        <Typography variant="h6" component="h4" gutterBottom sx={{ fontWeight: 600 }}>
          {cert.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {cert.issuer} • {cert.year}
        </Typography>
      </CardContent>
    </Card>
  );

  return (
    <Box 
      ref={sectionRef}
      sx={{ 
        py: 12,
        background: `linear-gradient(180deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
      }}
      className="section-padding"
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: 8, textAlign: 'center' }} className="stagger-item">
          <Typography variant="h6" component="p" color="primary" gutterBottom>
            MY RESUME
          </Typography>
          <Typography 
            variant="h2" 
            component="h2" 
            gutterBottom
            sx={{ 
              fontWeight: 700,
              fontSize: { xs: '2rem', md: '3rem' },
              mb: 2
            }}
          >
            Education & Certifications
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              maxWidth: '800px', 
              mx: 'auto',
              mb: 4
            }}
          >
            Here's a summary of my educational background and professional certifications.
            Download my complete resume for more detailed information.
          </Typography>
        </Box>

        <Grid container spacing={6}>
          <Grid item xs={12} md={7} className="stagger-item">
            <Typography 
              variant="h4" 
              component="h3" 
              gutterBottom 
              sx={{ 
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                mb: 3
              }}
            >
              <SchoolIcon color="primary" /> Education
            </Typography>
            
            <Box sx={{ mt: 3 }}>
              {EDUCATION.map((item, index) => (
                <EducationItem key={index} item={item} />
              ))}
            </Box>
            
            <Typography 
              variant="h4" 
              component="h3" 
              gutterBottom 
              sx={{ 
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                mb: 3,
                mt: 6
              }}
            >
              <StarIcon color="primary" /> Certifications
            </Typography>
            
            <Grid container spacing={2}>
              {CERTIFICATIONS.map((cert, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <CertificationCard cert={cert} />
                </Grid>
              ))}
            </Grid>
          </Grid>
          
          <Grid item xs={12} md={5} className="stagger-item">
            <Box sx={{ 
              mb: 4,
              p: 4,
              bgcolor: 'background.paper',
              borderRadius: 3,
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              textAlign: 'center'
            }}>
              <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                Download Resume
              </Typography>
              <Typography variant="body2" paragraph>
                For a complete overview of my skills, education, and projects, please download my detailed resume.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<DownloadIcon />}
                onClick={handleDownload}
                sx={{ mt: 2 }}
              >
                Download PDF
              </Button>
            </Box>
            
            <Box 
              className="resume-container"
              sx={{
                position: 'relative',
                borderRadius: 3,
                overflow: 'hidden',
                '&:hover .resume-overlay': {
                  opacity: 1
                }
              }}
            >
              <Box
                component="img"
                src={resumeImg}
                alt="Resume Preview"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 3,
                  border: `1px solid ${theme.palette.divider}`,
                  transition: 'transform 0.3s',
                }}
              />
              <Box 
                className="resume-overlay"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(0,0,0,0.5)',
                  opacity: 0,
                  transition: 'opacity 0.3s',
                  borderRadius: 3,
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<VisibilityIcon />}
                  onClick={togglePreview}
                >
                  View Resume
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Resume Preview Dialog */}
      <Dialog
        open={openPreview}
        onClose={togglePreview}
        maxWidth="md"
        fullWidth
      >
        <DialogContent sx={{ p: 1 }}>
          <Box
            component="iframe"
            src={resumePdf}
            sx={{
              width: '100%',
              height: '80vh',
              border: 'none',
            }}
            title="Resume Preview"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDownload} startIcon={<DownloadIcon />} color="primary">
            Download
          </Button>
          <Button onClick={togglePreview} startIcon={<CloseIcon />}>
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Success/Error Notification */}
      <Snackbar 
        open={notification.open} 
        autoHideDuration={4000} 
        onClose={handleCloseNotification}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseNotification} 
          severity={notification.severity}
          variant="filled"
        >
          {notification.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Resume;