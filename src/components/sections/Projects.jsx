import React, { useEffect, useRef } from 'react';
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
  useTheme
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import todo from '../../assets/todo.png'
import tomatomeal from '../../assets/tomatomeal.png'
import lostandfound from '../../assets/lostandfound.png'
import pokemon from '../../assets/pokemon.png'
import textutils from '../../assets/textutils.png'
import tic_tac from '../../assets/tic-tac-toe.png'
import worldatlas from '../../assets/worldatlas.png'
import braintumor from '../../assets/braintumor.png'
import objectdetection from '../../assets/objectdetection.png'

const Projects = () => {
  const theme = useTheme();
  const sectionRef = useRef(null);
  
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
      title: 'Tic-Tac-Toe Game',
      description: 'An interactive implementation of the classic Tic-Tac-Toe game with a clean interface, score tracking, and options for playing against another player or AI opponent.',
      image: tic_tac,
      technologies: ['Material ui','React'],
      github: 'https://github.com/Dheerendra-123/Tic-Tac',
      demo: 'https://tic-tac-toe.dheerendra.in'
    },
    {
      title: 'Tomato Meal',
      description: 'A food delivery platform showcasing restaurant menus, order processing, and delivery tracking functionality with a responsive design.',
      image: tomatomeal,
      technologies: ['React', 'CSS3','Context API' ],
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
      technologies: ['React', 'CSS3','API'],
      github: 'https://github.com/Dheerendra-123/WorldAtlas',
      demo: 'https://worldatlas.dheerendra.in'
    },{
      title: 'Brain Tumor Classification',
      description: 'An educational application providing information about countries worldwide, including demographics, geography, flags, and interactive maps.',
      image: braintumor,
      technologies: ['python','AI','ML','Tkinter'],
      github: 'https://github.com/Dheerendra-123/BrainTumorClassificationAndDetection',
    },
    {
      title: 'Todo List App',
      description: 'A task management application featuring task creation, categorization, due dates, priority levels, and completion tracking with a clean, intuitive interface.',
      image: todo,
      technologies: ['React','LocalStorage','MAterial UI'],
      github: 'https://github.com/Dheerendra-123/Todo-List',
      demo: 'https://todo.dheerendra.in'
    },
    ,{
      title: 'Object Detection',
      description: 'An educational application providing information about countries worldwide, including demographics, geography, flags, and interactive maps.',
      image: objectdetection,
      technologies: ['python','AI','ML','OpenCv'],
      github: 'https://github.com/Dheerendra-123/ObjectDetection',
    },
    {
      title: 'Text Utils',
      description: 'A text manipulation tool offering various functions like case conversion, character counting, extra space removal, and text formatting options.',
      image: textutils,
      technologies: ['React', 'Material UI'],
      github: 'https://github.com/Dheerendra-123/Text-Utils',
      demo: 'https://textutils.dheerendra.in'
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
                <CardMedia
                  component="img"
                  height="180"
                  image={project.image}
                  alt={project.title}
                />
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
                  <Button 
                    size="small" 
                    startIcon={<GitHubIcon />}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </Button>
                  <Button 
                    size="small" 
                    startIcon={<LaunchIcon />}
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ ml: 'auto' }}
                  >
                    Live Demo
                  </Button>
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
     
    </Box>
  );
};

export default Projects;