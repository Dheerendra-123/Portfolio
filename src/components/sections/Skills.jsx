import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Paper, 
  Chip,
  Divider,
  useTheme
} from '@mui/material';
import WebIcon from '@mui/icons-material/Web';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import BuildIcon from '@mui/icons-material/Build';

const Skills = () => {
  const theme = useTheme();
  
  const frontendSkills = [
    'React.js', 'Next.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 
    'Redux', 'Material UI', 'Tailwind CSS', 'Bootstrap', 'SASS', 'Webpack'
  ];
  
  const backendSkills = [
    'Node.js', 'Express.js', 'NestJS', 'RESTful APIs', 'GraphQL', 
    'Authentication', 'JWT', 'Socket.io', 'Microservices'
  ];
  
  const databaseSkills = [
    'MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Redis', 
    'Mongoose', 'Prisma', 'SQL', 'NoSQL'
  ];
  
  const otherSkills = [
    'Docker', 'GitHub', 'Git', 'ThunderClient', 'Cloudinary', 
    'Vercel', 'Railway', 'AWS', 'CI/CD', 'Jira', 'Figma', 'Responsive Design'
  ];

  const SkillCategory = ({ title, skills, icon, color }) => (
    <Paper
      elevation={0}
      sx={{
        p: 4,
        height: '100%',
        borderRadius: 3,
        backgroundColor: 'background.paper',
        border: `1px solid ${theme.palette.divider}`,
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 12px 30px rgba(0, 0, 0, 0.15)',
        }
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Box sx={{ mr: 2, color }}>
          {icon}
        </Box>
        <Typography variant="h5" component="h3" sx={{ fontWeight: 600 }}>
          {title}
        </Typography>
      </Box>
      <Divider sx={{ mb: 3 }} />
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {skills.map((skill, index) => (
          <Chip
            key={index}
            label={skill}
            variant="outlined"
            sx={{
              m: 0.5,
              fontWeight: 500,
              bgcolor: `${color}10`,
              borderColor: `${color}50`,
              color: color,
            }}
          />
        ))}
      </Box>
    </Paper>
  );

  return (
    <Box 
      sx={{ 
        py: 12,
        background: `linear-gradient(180deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography variant="h6" component="p" color="primary" gutterBottom>
            MY SKILLS
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
            Technical Expertise
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              maxWidth: '800px', 
              mx: 'auto',
              mb: 4
            }}
          >
            I have experience working with a variety of technologies across the full stack development spectrum.
            Here are the key technologies and tools I'm proficient with:
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6} lg={3}>
            <SkillCategory 
              title="Frontend" 
              skills={frontendSkills}
              icon={<WebIcon fontSize="large" />}
              color={theme.palette.primary.main}
            />
          </Grid>
          
          <Grid item xs={12} md={6} lg={3}>
            <SkillCategory 
              title="Backend" 
              skills={backendSkills}
              icon={<CodeIcon fontSize="large" />}
              color={theme.palette.secondary.main}
            />
          </Grid>
          
          <Grid item xs={12} md={6} lg={3}>
            <SkillCategory 
              title="Database" 
              skills={databaseSkills}
              icon={<StorageIcon fontSize="large" />}
              color="#ff9800"
            />
          </Grid>
          
          <Grid item xs={12} md={6} lg={3}>
            <SkillCategory 
              title="Other Tools" 
              skills={otherSkills}
              icon={<BuildIcon fontSize="large" />}
              color="#4caf50"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;