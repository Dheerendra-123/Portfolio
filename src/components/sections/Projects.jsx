import React, { useEffect, useRef, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Chip,
  useTheme,
  Modal,
  IconButton,
  Backdrop
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import CloseIcon from '@mui/icons-material/Close';
import VisibilityIcon from '@mui/icons-material/Visibility';
import todo from '../../assets/todo.png'
import tomatomeal from '../../assets/tomatomeal.png'
import lostandfound from '../../assets/lostandfound.png'
import pokemon from '../../assets/pokemon.png'
import textutils from '../../assets/textutils.png'
import tic_tac from '../../assets/tic-tac-toe.png'
import worldatlas from '../../assets/worldatlas.png'
import braintumor from '../../assets/braintumor.png'
import objectdetection from '../../assets/objectdetection.png'
import aiAssistantImage from '../../assets/aiAssistantImage.png'
import faceDetection from '../../assets/faceDetection.png'
import notepad from '../../assets/notepad.png'
import bookish from '../../assets/bookish.png'
import dateParser from '../../assets/PyPI.png'
import ide from '../../assets/ide.png'
import idec from '../../assets/idec.png'
import npm from '../../assets/npm.png'

const Projects = () => {
  const theme = useTheme();
  const sectionRef = useRef(null);
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpenModal = (image) => {
    setSelectedImage(image);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const projects = [
    {
      title: 'Lost and Found Center',
      description: 'A web platform connecting people who have lost items with those who have found them. Features user authentication, item listings, and communication tools.',
      image: lostandfound,
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/Dheerendra-123/LostAndFoundCenter',
      demo: 'https://lostandfound.dheerendra.in'
    },
    {
      title: 'Bookish Second hand book Selling Website',
      description: "A web platform for buying, selling, and exchanging second-hand books. Features user authentication, book listings with detailed descriptions, wishlist and cart management.",
      image: bookish,
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/Dheerendra-123/Book_Selling-_Website',
      demo: 'https://bookish.dheerendra.in'
    },
    {
      title: 'npm react-media-query-kit',
      description: "A lightweight and powerful React hook-based utility for responsive design. Easily detect screen types like mobile, tablet, desktop, large desktop, and TV without writing manual media queries or complex CSS logic.",
      image: npm,
      technologies: ['React', 'javascript', 'CI/CD', 'YML'],
      github: 'https://github.com/Dheerendra-123/react-media-kit',
      demo: 'https://www.npmjs.com/package/react-media-query-kit?activeTab=readme'
    },
    {
      title: 'Python IDE',
      description: "A modern, lightweight, and customizable Python IDE built with PyQt5. It includes multi-tab editing, syntax highlighting, auto bracket closing, intelligent autocompletion, an integrated terminal, and a file explorer — all packed into a sleek UI.",
      image: ide,
      technologies: ['Python', 'PyQt5', 'Jedi', 'QSyntaxHighlighter'],
      github: 'https://github.com/Dheerendra-123/PythonIDE',
      DownloadEXE: 'https://github.com/Dheerendra-123/PythonIDE/releases/tag/v1.1.0'
    },
    {
      title: 'C/C++ Code Editor',
      description: "A modern, lightweight, and customizable C/C++ Code Editor built with PyQt5. It includes multi-tab editing, syntax highlighting, auto bracket closing, custom and intelligent autocompletion, an integrated terminal, and a file explorer — all packed into a sleek UI.",
      image: idec,
      technologies: ['Python', 'PyQt5', 'QProcess', 'QThread', 'QSyntaxHighlighter'],
      github: 'https://github.com/Dheerendra-123/C-CPP_Editor',
      DownloadEXE: 'https://github.com/Dheerendra-123/C-CPP_Editor/releases/tag/v1.0.0'
    },
    {
      title: 'Human Date Parser',
      description: 'A simple and lightweight Python library to convert natural language date phrases like "tomorrow", "in 2 weeks", or "last Monday" into Python datetime objects — works offline with no API needed.',
      image: dateParser,
      technologies: ['Python', 'NLP', 'dateparser'],
      github: 'https://github.com/Dheerendra-123/Human_Date_Parser_PY_Library',
      demo: 'https://pypi.org/project/human-date-parser/'
    },
    {
      title: 'Tic-Tac-Toe Game',
      description: 'An interactive implementation of the classic Tic-Tac-Toe game with a clean interface, score tracking, and options for playing against another player or AI opponent.',
      image: tic_tac,
      technologies: ['Material ui', 'React', 'AI'],
      github: 'https://github.com/Dheerendra-123/Tic-Tac',
      demo: 'https://tic-tac-toe.dheerendra.in'
    },

    {
      title: 'Tomato Meal',
      description: 'A food delivery platform showcasing restaurant menus, order processing, and delivery tracking functionality with a responsive design.',
      image: tomatomeal,
      technologies: ['React', 'CSS3', 'Context API'],
      github: 'https://github.com/Dheerendra-123/Food-Delivery-Website',
      demo: 'https://tomatomeal.dheerendra.in'
    },
    {
      title: 'Pokemon',
      description: 'An interactive Pokemon database application that allows users to search, filter, and learn about different Pokemon, their abilities, and evolution chains.',
      image: pokemon,
      technologies: ['React', 'Tailwind CSS', 'Pokemon API'],
      github: 'https://github.com/Dheerendra-123/pokemon',
      demo: 'pokemon.dheerendra.in'
    },
    {
      title: 'World Atlas',
      description: 'An educational application providing information about countries worldwide, including demographics, geography, flags, and interactive maps.',
      image: worldatlas,
      technologies: ['React', 'CSS3', 'REST API'],
      github: 'https://github.com/Dheerendra-123/WorldAtlas',
      demo: 'https://worldatlas.dheerendra.in'
    },
    {
      title: 'Brain Tumor Classification',
      description: 'A deep learning-based application built with Python and Tkinter to classify and detect brain tumors from MRI scans using machine learning models.',
      image: braintumor,
      technologies: ['python', 'AI', 'ML', 'Tkinter'],
      github: 'https://github.com/Dheerendra-123/BrainTumorClassificationAndDetection',
    },
    {
      title: 'Todo List App',
      description: 'A task management application featuring task creation, categorization, due dates, priority levels, and completion tracking with a clean, intuitive interface.',
      image: todo,
      technologies: ['React', 'LocalStorage', 'MAterial UI'],
      github: 'https://github.com/Dheerendra-123/Todo-List',
      demo: 'https://todo.dheerendra.in'
    },
    {
      title: 'Object Detection',
      description: 'A computer vision project that uses AI and machine learning to detect and label objects in real-time using OpenCV and Python.',
      image: objectdetection,
      technologies: ['python', 'AI', 'ML', 'OpenCv'],
      github: 'https://github.com/Dheerendra-123/ObjectDetection',
    },
    {
      title: 'Text Utils',
      description: 'A text manipulation tool offering various functions like case conversion, character counting, extra space removal, and text formatting options.',
      image: textutils,
      technologies: ['React', 'Material UI'],
      github: 'https://github.com/Dheerendra-123/Text-Utils',
      demo: 'https://textutils.dheerendra.in'
    },
    {
      title: 'AI Assistant',
      description: 'A multifunctional AI assistant built with Python, integrating APIs like WolframAlpha, Google, NASA, Wikipedia, and YouTube. Features include speech recognition, web and desktop automation, real-time translation, dictionary lookup, web scraping, color detection, and interactive custom games for user engagement.',
      image: aiAssistantImage,
      technologies: ['Python', 'APIs', 'Speech Recognition', 'Web Automation', 'Destop Automation'],
      github: 'https://github.com/Dheerendra-123/AI_Assistant',
    },
    {
      title: 'Face Detection',
      description: 'A real-time face detection system using Python and OpenCV. Utilizes Haar cascades to detect faces via webcam feed, with support for capturing frames, marking faces, and saving detected data.',
      image: faceDetection,
      technologies: ['Python', 'OpenCV'],
      github: 'https://github.com/Dheerendra-123/faceDetection',

    },
    {
      title: 'Notepad App',
      description: 'A lightweight text editor built with Python and PyQt5. Offers basic file operations (open, save, save as), text formatting, search functionality, and a user-friendly GUI similar to the default Windows Notepad.',
      image: notepad,
      technologies: ['Python', 'PyQt5'],
      github: 'https://github.com/Dheerendra-123/PyQt5_GUI_Projects/tree/main/TextEditor',
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const elements = document.querySelectorAll('.project-card');
          elements.forEach((el, i) => {
            setTimeout(() => {
              el.style.opacity = '1';
              el.style.transform = 'translateY(0)';
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
            MY PROJECTS
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
            Recent Work
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: '800px',
              mx: 'auto',
              mb: 4
            }}
          >
            Here are some of the projects I've built that demonstrate my skills and experience.
            Each project is briefly described with links to code repositories and live demos.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                className="project-card"
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  opacity: 0,
                  transform: 'translateY(30px)',
                  transition: 'opacity 0.5s, transform 0.5s',
                }}
              >
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    height="180"
                    image={project.image}
                    alt={project.title}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'rgba(0, 0, 0, 0.5)',
                      opacity: 0,
                      transition: 'opacity 0.3s',
                      '&:hover': {
                        opacity: 1
                      }
                    }}
                  >
                    <Button
                      variant="contained"
                      startIcon={<VisibilityIcon />}
                      onClick={() => handleOpenModal(project.image)}
                      sx={{
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        color: theme.palette.primary.main,
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 1)'
                        }
                      }}
                    >
                      View Image
                    </Button>
                  </Box>
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {project.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 2 }}>
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <Chip
                        key={i}
                        label={tech}
                        size="small"
                        sx={{ mr: 0.5, mb: 0.5 }}
                      />
                    ))}
                    {project.technologies.length > 3 && (
                      <Chip
                        label={`+${project.technologies.length - 3}`}
                        size="small"
                        variant="outlined"
                        sx={{ mr: 0.5, mb: 0.5 }}
                      />
                    )}
                  </Box>
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <Button
                      size="small"
                      startIcon={<GitHubIcon />}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </Button>

                    {(project.demo || project.DownloadEXE) && (
                      <Button
                        size="small"
                        startIcon={<LaunchIcon />}
                        href={project.demo || project.DownloadEXE}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.demo ? 'Live Demo' : 'Download Exe'}
                      </Button>
                    )}
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* View More Projects Button */}
        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<GitHubIcon />}
            href="https://github.com/Dheerendra-123?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              px: 4,
              py: 1.5,
              fontWeight: 600,
              borderRadius: 2,
              boxShadow: 2,
              '&:hover': {
                boxShadow: 4,
                transform: 'translateY(-2px)',
                transition: 'transform 0.3s, box-shadow 0.3s'
              }
            }}
          >
            View More Projects on GitHub
          </Button>
        </Box>
      </Container>

      {/* Full Image Modal */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
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
        <Box
          sx={{
            position: 'relative',
            maxWidth: '90vw',
            maxHeight: '90vh',
            outline: 'none',
            p: 1,
            borderRadius: 2,
            bgcolor: 'background.paper',
            boxShadow: 24,
          }}
        >
          <IconButton
            aria-label="close"
            onClick={handleCloseModal}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: 'white',
              bgcolor: 'rgba(0, 0, 0, 0.5)',
              '&:hover': {
                bgcolor: 'rgba(0, 0, 0, 0.7)',
              },
              zIndex: 1,
            }}
          >
            <CloseIcon />
          </IconButton>
          <img
            src={selectedImage}
            alt="Project Full View"
            style={{
              maxWidth: '100%',
              maxHeight: '85vh',
              objectFit: 'contain',
              display: 'block',
            }}
          />
        </Box>
      </Modal>
    </Box>
  );
};

export default Projects;