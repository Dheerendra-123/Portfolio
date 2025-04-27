// import React, { useEffect, useRef } from 'react';
// import { Box, Container, Typography, Grid, Card, CardContent, useTheme } from '@mui/material';
// import CodeIcon from '@mui/icons-material/Code';
// import WebIcon from '@mui/icons-material/Web';
// import StorageIcon from '@mui/icons-material/Storage';
// import SpeedIcon from '@mui/icons-material/Speed';
// import myimg from '../../assets/Dheerendra.jpg'

// const About = () => {
//   const theme = useTheme();
//   const sectionRef = useRef(null);
  
//   useEffect(() => {
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
    
//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   const services = [
//     {
//       title: 'Frontend Development',
//       description: 'Creating responsive and intuitive user interfaces with modern JavaScript frameworks',
//       icon: <WebIcon fontSize="large" sx={{ color: theme.palette.primary.main }} />
//     },
//     {
//       title: 'Backend Development',
//       description: 'Building robust server-side applications and RESTful APIs',
//       icon: <CodeIcon fontSize="large" sx={{ color: theme.palette.primary.main }} />
//     },
//     {
//       title: 'Database Design',
//       description: 'Designing efficient database structures for optimal data management',
//       icon: <StorageIcon fontSize="large" sx={{ color: theme.palette.primary.main }} />
//     },
//     {
//       title: 'Performance Optimization',
//       description: 'Enhancing application speed and efficiency for better user experience',
//       icon: <SpeedIcon fontSize="large" sx={{ color: theme.palette.primary.main }} />
//     }
//   ];

//   return (
//     <Box 
//       ref={sectionRef}
//       sx={{ 
//         py: 12,
//         background: theme.palette.background.default,
//       }}
//       className="section-padding"
//     >
//       <Container maxWidth="lg">
//         <Box sx={{ mb: 8, textAlign: 'center' }} className="stagger-item">
//           <Typography variant="h6" component="p" color="primary" gutterBottom>
//             ABOUT ME
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
//             Who I Am
//           </Typography>
//           <Typography 
//             variant="body1" 
//             sx={{ 
//               maxWidth: '800px', 
//               mx: 'auto',
//               mb: 4
//             }}
//           >
//             I am a passionate Full Stack Web Developer with a strong focus on creating modern, 
//             responsive, and user-friendly applications. I enjoy working with cutting-edge technologies 
//             and delivering clean, efficient code.
//           </Typography>
//         </Box>

//         <Grid container spacing={3}>
//           <Grid item xs={12} md={6} className="stagger-item">
//             <Box sx={{ height: '100%' }}>
//               <Typography variant="h4" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
//                 My Journey
//               </Typography>
//               <Typography variant="body1" paragraph>
//                 I began my journey in web development with a curiosity about how websites work. What started 
//                 as a hobby quickly evolved into a passion for creating digital experiences that solve 
//                 real-world problems.
//               </Typography>
//               <Typography variant="body1" paragraph>
//                 As a fresh graduate, I am eager to apply my skills in real-world projects and continue 
//                 learning new technologies. I believe in the power of clean code, responsive design, and 
//                 intuitive user experiences.
//               </Typography>
//               <Typography variant="body1">
//                 I am constantly exploring new technologies and frameworks to enhance my skill set. My goal 
//                 is to create web applications that not only look great but also provide exceptional 
//                 functionality and user experience.
//               </Typography>
//             </Box>
//           </Grid>
          
//           <Grid item xs={12} md={6} className="stagger-item">
//             <Box
//               component="img"
//               src={myimg}
//               alt="About Dheerendra"
//               sx={{
//                 height:"80%",
//                 width: '80%',
                
//                 borderRadius: 3,
//                 boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
//               }}
//             />
//           </Grid>
//         </Grid>

//         <Box sx={{ mt: 12 }}>
//           <Typography 
//             variant="h3" 
//             component="h3" 
//             align="center" 
//             gutterBottom
//             sx={{ fontWeight: 600, mb: 6 }}
//             className="stagger-item"
//           >
//             What I Do
//           </Typography>
          
//           <Grid container spacing={4}>
//             {services.map((service, index) => (
//               <Grid item xs={12} sm={6} md={3} key={index} className="stagger-item">
//                 <Card 
//                   sx={{ 
//                     height: '100%',
//                     transition: 'transform 0.3s, box-shadow 0.3s',
//                     '&:hover': {
//                       transform: 'translateY(-10px)',
//                       boxShadow: '0 12px 30px rgba(0, 0, 0, 0.15)',
//                     }
//                   }}
//                 >
//                   <CardContent sx={{ textAlign: 'center', p: 4 }}>
//                     <Box sx={{ mb: 2 }}>
//                       {service.icon}
//                     </Box>
//                     <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
//                       {service.title}
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                       {service.description}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default About;


import React, { useEffect, useRef } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, useTheme, Divider } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';
import StorageIcon from '@mui/icons-material/Storage';
import SpeedIcon from '@mui/icons-material/Speed';
import myimg from '../../assets/Dheerendra.jpg'

const About = () => {
  const theme = useTheme();
  const sectionRef = useRef(null);
  
  useEffect(() => {
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
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services = [
    {
      title: 'Frontend Development',
      description: 'Creating responsive and intuitive user interfaces with modern JavaScript frameworks',
      icon: <WebIcon fontSize="large" sx={{ color: theme.palette.primary.main }} />
    },
    {
      title: 'Backend Development',
      description: 'Building robust server-side applications and RESTful APIs',
      icon: <CodeIcon fontSize="large" sx={{ color: theme.palette.primary.main }} />
    },
    {
      title: 'Database Design',
      description: 'Designing efficient database structures for optimal data management',
      icon: <StorageIcon fontSize="large" sx={{ color: theme.palette.primary.main }} />
    },
    {
      title: 'Performance Optimization',
      description: 'Enhancing application speed and efficiency for better user experience',
      icon: <SpeedIcon fontSize="large" sx={{ color: theme.palette.primary.main }} />
    }
  ];

  return (
    <Box 
      ref={sectionRef}
      sx={{ 
        py: 12,
        background: theme.palette.background.default,
      }}
      className="section-padding"
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: 8, textAlign: 'center' }} className="stagger-item">
          <Typography variant="h6" component="p" color="primary" gutterBottom>
            ABOUT ME
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
            Who I Am
          </Typography>
          <Divider sx={{ width: '80px', height: '4px', mx: 'auto', mb: 4, backgroundColor: theme.palette.primary.main }} />
          <Typography 
            variant="body1" 
            sx={{ 
              maxWidth: '800px', 
              mx: 'auto',
              mb: 4
            }}
          >
            I am a passionate Full Stack Web Developer with a strong focus on creating modern, 
            responsive, and user-friendly applications. I enjoy working with cutting-edge technologies 
            and delivering clean, efficient code.
          </Typography>
        </Box>

        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={6} className="stagger-item">
            <Box 
              sx={{ 
                p: { xs: 0, md: 3 },
                borderLeft: { xs: 'none', md: `4px solid ${theme.palette.primary.main}` },
              }}
            >
              <Typography 
                variant="h4" 
                component="h3" 
                gutterBottom 
                sx={{ 
                  fontWeight: 600,
                  position: 'relative',
                  display: 'inline-block',
                  mb: 3,
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -8,
                    left: 0,
                    width: '60px',
                    height: '3px',
                    backgroundColor: theme.palette.primary.main,
                  }
                }}
              >
                My Journey
              </Typography>
              <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                I began my journey in web development with a curiosity about how websites work. What started 
                as a hobby quickly evolved into a passion for creating digital experiences that solve 
                real-world problems.
              </Typography>
              <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                As a fresh graduate, I am eager to apply my skills in real-world projects and continue 
                learning new technologies. I believe in the power of clean code, responsive design, and 
                intuitive user experiences.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                I am constantly exploring new technologies and frameworks to enhance my skill set. My goal 
                is to create web applications that not only look great but also provide exceptional 
                functionality and user experience.
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6} className="stagger-item" sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                maxWidth: '400px',
                '&:before': {
                  content: '""',
                  position: 'absolute',
                  top: 20,
                  left: 20,
                  right: -20,
                  bottom: -20,
                  border: `2px solid ${theme.palette.primary.main}`,
                  zIndex: 0,
                  borderRadius: 3,
                }
              }}
            >
              <Box
                component="img"
                src={myimg}
                alt="About Dheerendra"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 3,
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                  position: 'relative',
                  zIndex: 1,
                  transition: 'transform 0.3s, filter 0.3s',
                  filter: 'contrast(1.05) brightness(1.05)',
                  '&:hover': {
                    transform: 'scale(1.02)',
                    filter: 'contrast(1.1) brightness(1.1)',
                  }
                }}
              />
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ mt: 16, mb: 6 }}>
          <Typography 
            variant="h3" 
            component="h3" 
            align="center" 
            gutterBottom
            sx={{ fontWeight: 600, mb: 2 }}
            className="stagger-item"
          >
            What I Do
          </Typography>
          <Divider sx={{ width: '80px', height: '4px', mx: 'auto', mb: 6, backgroundColor: theme.palette.primary.main }} />
          
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={3} key={index} className="stagger-item">
                <Card 
                  sx={{ 
                    height: '100%',
                    borderRadius: 3,
                    overflow: 'hidden',
                    position: 'relative',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: '0 12px 30px rgba(0, 0, 0, 0.15)',
                      '& .service-icon-wrapper': {
                        backgroundColor: theme.palette.primary.main,
                        '& svg': {
                          color: '#fff !important'
                        }
                      }
                    },
                    '&:before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '5px',
                      height: '30%',
                      backgroundColor: theme.palette.primary.main,
                    }
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box 
                      className="service-icon-wrapper"
                      sx={{ 
                        mb: 3, 
                        width: 70, 
                        height: 70, 
                        borderRadius: '50%', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        backgroundColor: `${theme.palette.primary.main}15`, 
                        transition: 'background-color 0.3s',
                      }}
                    >
                      {service.icon}
                    </Box>
                    <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default About;