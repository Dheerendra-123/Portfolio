// import React, { useEffect, useRef, useState } from 'react';
// import { 
//   Box, 
//   Container, 
//   Typography, 
//   Button, 
//   Grid,
//   Card,
//   CardContent,
//   useTheme,
//   Dialog,
//   DialogContent,
//   DialogActions,
//   Snackbar,
//   Alert
// } from '@mui/material';
// import DownloadIcon from '@mui/icons-material/Download';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import SchoolIcon from '@mui/icons-material/School';
// import StarIcon from '@mui/icons-material/Star';
// import CloseIcon from '@mui/icons-material/Close';
// import resumeImg from '../../assets/resume.png';
// import resumePdf from '../../assets/Resume.pdf'; 

// const Resume = () => {
//   const theme = useTheme();
//   const sectionRef = useRef(null);
//   const [openPreview, setOpenPreview] = useState(false);
//   const [notification, setNotification] = useState({
//     open: false,
//     message: '',
//     severity: 'success'
//   });
  
//   // Education data - Consider moving to a separate data file
//   const EDUCATION = [
//     {
//       degree: 'HighSchool',
//       institution: 'Sumitra Public Inter COllege',
//       year: '2019 - 2020',
//       description: 'Graduated with 80% from Intermediate with Science Stream'
//     },
//     {
//       degree: 'InterMediate',
//       institution: 'Sumitra Public Inter COllege',
//       year: '2020 - 2021',
//       description: 'Graduated with 81.8% from Intermediate with Science Stream.'
//     },
//     {
//       degree: 'Bachelor of Technology in Computer Science',
//       institution: 'Shri Ram Murti Smarak College of Engineering and Technology, Bareilly',
//       year: '2021 - 2025',
//       description: 'Curretly Pursuing Btech from SRMS CET with Cumputer Science Affilated with APJ Abdul Kalam Technical University.'
//     },
  
//   ];
  
//   // Certifications data - Consider moving to a separate data file
//   const CERTIFICATIONS = [
//     {
//       title: 'Python-With IOT',
//       issuer: 'SoftPro India',
//       year: '2023'
//     },
//     {
//       title: 'ISRO URC Rover Challange',
//       issuer: 'ISRO',
//       year: '2025'
//     },
//     {
//       title: 'Python With Django',
//       issuer: 'SoftPro India',
//       year: '2024'
//     },

//   ];

//   // Handle resume download
//   const handleDownload = () => {
//     try {
//       // Create an anchor element and set properties
//       const link = document.createElement('a');
//       link.href = resumePdf;
//       link.download = 'My_Resume.pdf';
      
//       // Append to body, click and remove
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
      
//       setNotification({
//         open: true,
//         message: 'Resume downloaded successfully!',
//         severity: 'success'
//       });
//     } catch (error) {
//       setNotification({
//         open: true,
//         message: 'Download failed. Please try again.',
//         severity: 'error'
//       });
//       console.error('Download error:', error);
//     }
//   };

//   // Toggle resume preview dialog
//   const togglePreview = () => {
//     setOpenPreview(prev => !prev);
//   };

//   // Close notification
//   const handleCloseNotification = () => {
//     setNotification(prev => ({ ...prev, open: false }));
//   };

//   useEffect(() => {
//     // Animation observer setup
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           const elements = document.querySelectorAll('.stagger-item');
//           elements.forEach((el, i) => {
//             setTimeout(() => {
//               el.classList.add('animate');
//             }, i * 100);
//           });
//         }
//       },
//       { threshold: 0.1 }
//     );
    
//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }
    
//     // Cleanup function for observer
//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   // Education item component for better readability
//   const EducationItem = ({ item }) => (
//     <Box 
//       sx={{ 
//         mb: 4,
//         position: 'relative',
//         pl: 4,
//         '&::before': {
//           content: '""',
//           position: 'absolute',
//           left: 0,
//           top: 0,
//           bottom: 0,
//           width: '2px',
//           bgcolor: 'primary.main',
//         },
//         '&::after': {
//           content: '""',
//           position: 'absolute',
//           left: '-6px',
//           top: '8px',
//           width: '14px',
//           height: '14px',
//           borderRadius: '50%',
//           bgcolor: 'primary.main',
//         }
//       }}
//     >
//       <Typography
//         variant="body2"
//         sx={{
//           display: 'inline-block',
//           bgcolor: 'primary.main',
//           color: 'white',
//           px: 1.5,
//           py: 0.5,
//           borderRadius: 1,
//           mb: 1,
//           fontWeight: 500,
//         }}
//       >
//         {item.year}
//       </Typography>
//       <Typography variant="h6" component="h4" gutterBottom sx={{ fontWeight: 600 }}>
//         {item.degree}
//       </Typography>
//       <Typography variant="body1" color="text.secondary" gutterBottom>
//         {item.institution}
//       </Typography>
//       <Typography variant="body2">
//         {item.description}
//       </Typography>
//     </Box>
//   );

//   // Certification item component for better readability
//   const CertificationCard = ({ cert }) => (
//     <Card sx={{ 
//       mb: 2,
//       height: '100%',
//       transition: 'transform 0.3s',
//       '&:hover': {
//         transform: 'translateY(-5px)',
//       }
//     }}>
//       <CardContent>
//         <Typography variant="h6" component="h4" gutterBottom sx={{ fontWeight: 600 }}>
//           {cert.title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           {cert.issuer} • {cert.year}
//         </Typography>
//       </CardContent>
//     </Card>
//   );

//   return (
//     <Box 
//       ref={sectionRef}
//       sx={{ 
//         py: 12,
//         background: `linear-gradient(180deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
//       }}
//       className="section-padding"
//     >
//       <Container maxWidth="lg">
//         <Box sx={{ mb: 8, textAlign: 'center' }} className="stagger-item">
//           <Typography variant="h6" component="p" color="primary" gutterBottom>
//             MY RESUME
//           </Typography>
//           <Typography 
//             variant="h2" 
//             component="h2" 
//             gutterBottom
//             sx={{ 
//               fontWeight: 700,
//               fontSize: { xs: '2rem', md: '3rem' },
//               mb: 2
//             }}
//           >
//             Education & Certifications
//           </Typography>
//           <Typography 
//             variant="body1" 
//             sx={{ 
//               maxWidth: '800px', 
//               mx: 'auto',
//               mb: 4
//             }}
//           >
//             Here's a summary of my educational background and professional certifications.
//             Download my complete resume for more detailed information.
//           </Typography>
//         </Box>

//         <Grid container spacing={6}>
//           <Grid item xs={12} md={7} className="stagger-item">
//             <Typography 
//               variant="h4" 
//               component="h3" 
//               gutterBottom 
//               sx={{ 
//                 fontWeight: 600,
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: 1,
//                 mb: 3
//               }}
//             >
//               <SchoolIcon color="primary" /> Education
//             </Typography>
            
//             <Box sx={{ mt: 3 }}>
//               {EDUCATION.map((item, index) => (
//                 <EducationItem key={index} item={item} />
//               ))}
//             </Box>
            
//             <Typography 
//               variant="h4" 
//               component="h3" 
//               gutterBottom 
//               sx={{ 
//                 fontWeight: 600,
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: 1,
//                 mb: 3,
//                 mt: 6
//               }}
//             >
//               <StarIcon color="primary" /> Certifications
//             </Typography>
            
//             <Grid container spacing={2}>
//               {CERTIFICATIONS.map((cert, index) => (
//                 <Grid item xs={12} sm={6} key={index}>
//                   <CertificationCard cert={cert} />
//                 </Grid>
//               ))}
//             </Grid>
//           </Grid>
          
//           <Grid item xs={12} md={5} className="stagger-item">
//             <Box sx={{ 
//               mb: 4,
//               p: 4,
//               bgcolor: 'background.paper',
//               borderRadius: 3,
//               boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
//               textAlign: 'center'
//             }}>
//               <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
//                 Download Resume
//               </Typography>
//               <Typography variant="body2" paragraph>
//                 For a complete overview of my skills, education, and projects, please download my detailed resume.
//               </Typography>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 size="large"
//                 startIcon={<DownloadIcon />}
//                 onClick={handleDownload}
//                 sx={{ mt: 2 }}
//               >
//                 Download PDF
//               </Button>
//             </Box>
            
//             <Box 
//               className="resume-container"
//               sx={{
//                 position: 'relative',
//                 borderRadius: 3,
//                 overflow: 'hidden',
//                 '&:hover .resume-overlay': {
//                   opacity: 1
//                 }
//               }}
//             >
//               <Box
//                 component="img"
//                 src={resumeImg}
//                 alt="Resume Preview"
//                 sx={{
//                   width: '100%',
//                   height: 'auto',
//                   borderRadius: 3,
//                   border: `1px solid ${theme.palette.divider}`,
//                   transition: 'transform 0.3s',
//                 }}
//               />
//               <Box 
//                 className="resume-overlay"
//                 sx={{
//                   position: 'absolute',
//                   top: 0,
//                   left: 0,
//                   right: 0,
//                   bottom: 0,
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   background: 'rgba(0,0,0,0.5)',
//                   opacity: 0,
//                   transition: 'opacity 0.3s',
//                   borderRadius: 3,
//                 }}
//               >
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   startIcon={<VisibilityIcon />}
//                   onClick={togglePreview}
//                 >
//                   View Resume
//                 </Button>
//               </Box>
//             </Box>
//           </Grid>
//         </Grid>
//       </Container>

//       {/* Resume Preview Dialog */}
//       <Dialog
//         open={openPreview}
//         onClose={togglePreview}
//         maxWidth="md"
//         fullWidth
//       >
//         <DialogContent sx={{ p: 1 }}>
//           <Box
//             component="iframe"
//             src={resumePdf}
//             sx={{
//               width: '100%',
//               height: '80vh',
//               border: 'none',
//             }}
//             title="Resume Preview"
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleDownload} startIcon={<DownloadIcon />} color="primary">
//             Download
//           </Button>
//           <Button onClick={togglePreview} startIcon={<CloseIcon />}>
//             Close
//           </Button>
//         </DialogActions>
//       </Dialog>

//       {/* Success/Error Notification */}
//       <Snackbar 
//         open={notification.open} 
//         autoHideDuration={4000} 
//         onClose={handleCloseNotification}
//         anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
//       >
//         <Alert 
//           onClose={handleCloseNotification} 
//           severity={notification.severity}
//           variant="filled"
//         >
//           {notification.message}
//         </Alert>
//       </Snackbar>
//     </Box>
//   );
// };

// export default Resume; 

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
  Paper
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';
import CloseIcon from '@mui/icons-material/Close';
import VerifiedIcon from '@mui/icons-material/Verified';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import resumeImg from '../../assets/resume.png';
import resumePdf from '../../assets/Resume.pdf'; 
// Import certificate images (these should be your actual certificate images)
import pythonCert from '../../assets/certificates/python-iot.jpg'; 
import isroCert from '../../assets/certificates/isro-urc.jpg';
import djangoCert from '../../assets/certificates/python-django.jpg';

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
                    
                    <Typography variant="body2" paragraph sx={{ fontWeight: 500 }}>
                      <strong>Credential ID:</strong> CERT-{selectedCertificate.id}-{selectedCertificate.year.replace(/\s/g, '')}
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
                      {selectedCertificate.skills.map((skill, idx) => (
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
              {/* Optional: Add download certificate button if you have downloadable versions */}
            
            </DialogActions>
          </>
        )}
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