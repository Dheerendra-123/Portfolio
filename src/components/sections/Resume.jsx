import React, { useEffect, useRef, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardActions,
  useTheme,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
  Alert,
  IconButton,
  Divider,
  Paper,
  Modal,
  Backdrop,
  Fade
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';
import CloseIcon from '@mui/icons-material/Close';
import VerifiedIcon from '@mui/icons-material/Verified';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import resumeImg from '../../assets/resume.png';
import resumePdf from '../../assets/Resume.pdf';
import pythonCert from '../../assets/certificates/python-iot.jpg';
import isroCert from '../../assets/certificates/isro-urc.jpg';
import djangoCert from '../../assets/certificates/python-django.jpg';
import deloitte from '../../assets/certificates/Deloitte.png'
import Accenture from '../../assets/certificates/Accenture.png'

const Resume = () => {
  const theme = useTheme();
  const sectionRef = useRef(null);
  const [openPreview, setOpenPreview] = useState(false);
  const [openCertificate, setOpenCertificate] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [notification, setNotification] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  // New state for image zoom modal
  const [imageModal, setImageModal] = useState({
    open: false,
    image: null,
    title: ''
  });

  // New state for image zoom level
  const [zoomLevel, setZoomLevel] = useState(1);

  // Education data - Consider moving to a separate data file
  const EDUCATION = [
    {
      degree: 'HighSchool',
      institution: 'Sumitra Public Inter College',
      year: '2019 - 2020',
      description: 'Graduated with 80% from Intermediate with Science Stream'
    },
    {
      degree: 'InterMediate',
      institution: 'Sumitra Public Inter College',
      year: '2020 - 2021',
      description: 'Graduated with 81.8% from Intermediate with Science Stream.'
    },
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'Shri Ram Murti Smarak College of Engineering and Technology, Bareilly',
      year: '2021 - 2025',
      description: 'Currently Pursuing BTech from SRMS CET with Computer Science Affiliated with APJ Abdul Kalam Technical University.'
    },
  ];

  // Enhanced Certifications data with images and detailed descriptions
  const CERTIFICATIONS = [
    {
      id: 1,
      title: 'Python With IoT',
      issuer: 'SoftPro India',
      year: '2023',
      image: pythonCert,
      summary: 'This certification validates my skills in Python programming with a focus on Internet of Things applications. The course covered Python fundamentals, IoT protocols, sensor integration, and real-time data processing.',
      skills: ['Python', 'IoT Protocols', 'Raspberry Pi', 'Sensor Integration', 'MQTT'],
      projectCompleted: 'Home Automation System using Raspberry Pi and various sensors'
    },
    {
      id: 2,
      title: 'ISRO URC Rover Challenge',
      issuer: 'ISRO',
      year: '2025',
      image: isroCert,
      summary: 'Participated in the prestigious ISRO University Rover Challenge where our team designed and built a functional Mars rover prototype. The certification recognizes our achievement in meeting ISRO\'s rigorous engineering standards.',
      skills: ['Robotics', 'Control Systems', 'Mechanical Design', 'Team Collaboration', 'Problem Solving'],
      qualified: 'Qualified Round 1'
    },
    {
      id: 3,
      title: 'Python With Django',
      issuer: 'SoftPro India',
      year: '2024',
      image: djangoCert,
      summary: 'Comprehensive certification in web development using Django framework. This program covered all aspects of Django including models, views, templates, forms, authentication, and REST API development.',
      skills: ['Django', 'REST API', 'Database Design', 'Authentication', 'Web Development'],
      projectCompleted: 'E-commerce platform with user authentication and payment integration'
    },
    {
      id: 4,
      title: 'Technology Job Simulation',
      issuer: 'Deloitte',
      year: '2025',
      image: deloitte,
      skills: ['Project Simulation', 'Remote Collaboration Tools', 'Problem-Solving'],
      summary: 'Completed a virtual job simulation with Deloitte via Forage, gaining hands-on experience with real-world tasks in coding and development. Focused on solving practical business challenges, demonstrating skills in technical problem-solving and software development within a corporate technology environment.',

    },
    {
      id: 5,
      title: 'Technology Job Simulation',
      issuer: 'Accenture ',
      year: '2025',
      image: Accenture,
      skills: ['Agile',
'Analysis',
'debugging code',
'Identification',
'Maturity Level Assessments',
'reading code',
'SSDLC',
'Waterfall'],
      summary: 'Completed the Accenture Software Engineering Virtual Experience Program offered through Forage, which provided valuable insights into real-world software development practices. Throughout the simulation, I worked on tasks such as understanding client requirements, building and refining code, improving code readability, and applying Agile methodologies. The program emphasized collaboration, problem-solving, and the use of industry tools like version control systems. This experience strengthened my practical knowledge of the software development lifecycle and enhanced my ability to deliver efficient, client-focused solutions in a professional setting. via Forage, gaining hands-on experience with real-world tasks in coding and development. Focused on solving practical business challenges, demonstrating skills in technical problem-solving and software development within a corporate technology environment.',

    },
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

  // Open certificate detail dialog
  const handleOpenCertificate = (cert) => {
    setSelectedCertificate(cert);
    setOpenCertificate(true);
  };

  // Close certificate detail dialog
  const handleCloseCertificate = () => {
    setOpenCertificate(false);
  };

  // Close notification
  const handleCloseNotification = () => {
    setNotification(prev => ({ ...prev, open: false }));
  };

  // New function to open image in modal
  const openImageModal = (image, title) => {
    setImageModal({
      open: true,
      image: image,
      title: title
    });
    setZoomLevel(1); // Reset zoom level
  };

  // Close image modal
  const closeImageModal = () => {
    setImageModal({
      ...imageModal,
      open: false
    });
  };

  // Zoom in function
  const zoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.25, 3));
  };

  // Zoom out function
  const zoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.25, 0.5));
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

  // Enhanced Certification card component with view button
  const CertificationCard = ({ cert }) => (
    <Card sx={{
      height: '100%',
      transition: 'transform 0.3s',
      display: 'flex',
      flexDirection: 'column',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
      }
    }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <WorkspacePremiumIcon color="primary" sx={{ mr: 1 }} />
          <Typography variant="h6" component="h4" sx={{ fontWeight: 600 }}>
            {cert.title}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <VerifiedIcon fontSize="small" color="success" sx={{ mr: 1 }} />
          <Typography variant="body2" color="text.secondary">
            {cert.issuer}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <CalendarTodayIcon fontSize="small" color="action" sx={{ mr: 1 }} />
          <Typography variant="body2" color="text.secondary">
            {cert.year}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          startIcon={<VisibilityIcon />}
          onClick={() => handleOpenCertificate(cert)}
          fullWidth
        >
          View Certificate
        </Button>
      </CardActions>
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
      id="resume"
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: 8, textAlign: 'center' }} className="stagger-item">

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

          <Button onClick={togglePreview} startIcon={<CloseIcon />}>
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Certificate View Dialog */}
      <Dialog
        open={openCertificate}
        onClose={handleCloseCertificate}
        maxWidth="md"
        fullWidth
        PaperProps={{
          elevation: 5,
          sx: { borderRadius: 2 }
        }}
      >
        {selectedCertificate && (
          <>
            <DialogTitle sx={{
              pt: 3,
              pb: 2,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <WorkspacePremiumIcon color="primary" sx={{ mr: 2 }} fontSize="large" />
                <Typography variant="h5" component="div" sx={{ fontWeight: 600 }}>
                  {selectedCertificate.title}
                </Typography>
              </Box>
              <IconButton onClick={handleCloseCertificate} aria-label="close">
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <Divider />
            <DialogContent>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  {/* Enhanced certificate image with click to zoom */}
                  <Box
                    sx={{
                      position: 'relative',
                      '&:hover .image-overlay': {
                        opacity: 1
                      },
                      cursor: 'pointer'
                    }}
                    onClick={() => openImageModal(selectedCertificate.image, selectedCertificate.title)}
                  >
                    <Box
                      component="img"
                      src={selectedCertificate.image}
                      alt={selectedCertificate.title}
                      sx={{
                        width: '100%',
                        maxHeight: '40vh',
                        objectFit: 'contain',
                        borderRadius: 1,
                        border: `1px solid ${theme.palette.divider}`,
                        mb: 3
                      }}
                    />
                    <Box
                      className="image-overlay"
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
                        borderRadius: 1,
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          color: 'white',
                          backgroundColor: 'rgba(0,0,0,0.7)',
                          px: 2,
                          py: 1,
                          borderRadius: 2
                        }}
                      >
                        <ZoomInIcon sx={{ mr: 1 }} />
                        <Typography variant="body2" fontWeight="medium">
                          Click to Enlarge
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 2,
                      backgroundColor: theme.palette.background.default,
                      height: '100%'
                    }}
                  >
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, display: 'flex', alignItems: 'center' }}>
                      <VerifiedIcon color="primary" sx={{ mr: 1 }} /> Certificate Details
                    </Typography>
                    <Divider sx={{ mb: 2 }} />

                    <Typography variant="body2" paragraph sx={{ fontWeight: 500 }}>
                      <strong>Issuing Organization:</strong> {selectedCertificate.issuer}
                    </Typography>

                    <Typography variant="body2" paragraph sx={{ fontWeight: 500 }}>
                      <strong>Issued Date:</strong> {selectedCertificate.year}
                    </Typography>


                  </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 2,
                      backgroundColor: theme.palette.background.default,
                      height: '100%'
                    }}
                  >
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                      Skills Acquired
                    </Typography>
                    <Divider sx={{ mb: 2 }} />

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                      {selectedCertificate?.skills.map((skill, idx) => (
                        <Box
                          key={idx}
                          sx={{
                            bgcolor: 'primary.main',
                            color: 'white',
                            px: 1.5,
                            py: 0.5,
                            borderRadius: 2,
                            fontSize: '0.8rem',
                            fontWeight: 500
                          }}
                        >
                          {skill}
                        </Box>
                      ))}
                    </Box>
                  </Paper>
                </Grid>

                <Grid item xs={12}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 2,
                      backgroundColor: theme.palette.background.default
                    }}
                  >
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                      Summary
                    </Typography>
                    <Divider sx={{ mb: 2 }} />
                    <Typography variant="body1" paragraph>
                      {selectedCertificate.summary}
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions sx={{ px: 3, py: 2 }}>
              <Button
                variant="outlined"
                onClick={handleCloseCertificate}
                startIcon={<CloseIcon />}
              >
                Close
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>

      {/* New Image Zoom Modal */}
      <Modal
        open={imageModal.open}
        onClose={closeImageModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Fade in={imageModal.open}>
          <Box
            sx={{
              position: 'relative',
              maxWidth: '95vw',
              maxHeight: '95vh',
              outline: 'none',
              bgcolor: 'background.paper',
              borderRadius: 2,
              boxShadow: 24,
              p: 1,
              overflow: 'hidden'
            }}
          >
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              p: 1,
              borderBottom: `1px solid ${theme.palette.divider}`
            }}>
              <Typography variant="h6" component="h2">
                {imageModal.title}
              </Typography>
              <Box>
                <IconButton onClick={zoomOut} disabled={zoomLevel <= 0.5}>
                  <ZoomOutIcon />
                </IconButton>
                <IconButton onClick={zoomIn} disabled={zoomLevel >= 3}>
                  <ZoomInIcon />
                </IconButton>
                <IconButton onClick={closeImageModal}>
                  <CloseIcon />
                </IconButton>
              </Box>
            </Box>

            <Box
              sx={{
                overflow: 'auto',
                maxHeight: 'calc(95vh - 64px)',
                display: 'flex',
                justifyContent: 'center',
                p: 2
              }}
            >
              {imageModal.image && (
                <Box
                  component="img"
                  src={imageModal.image}
                  alt={imageModal.title}
                  sx={{
                    transform: `scale(${zoomLevel})`,
                    transition: 'transform 0.2s',
                    transformOrigin: 'center',
                    maxWidth: '100%',
                    maxHeight: 'calc(95vh - 100px)',
                    objectFit: 'contain'
                  }}
                />
              )}
            </Box>

            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              p: 1,
              borderTop: `1px solid ${theme.palette.divider}`
            }}>
              <Typography variant="body2" color="text.secondary">
                Zoom: {Math.round(zoomLevel * 100)}%
              </Typography>
            </Box>
          </Box>
        </Fade>
      </Modal>

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