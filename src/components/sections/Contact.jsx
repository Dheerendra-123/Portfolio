import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  TextField, 
  Button, 
  Card,
  CardContent,
  useTheme,
  IconButton,
  Snackbar,
  Alert
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Instagram } from '@mui/icons-material';

const Contact = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validate()) {
      setLoading(true);
      
      try {
        // In a real implementation, you would use web3forms
        // Here's how the API call would look:
        
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            access_key: 'ea276b08-a33d-432d-ae2e-4297e0e4f461',
            ...formData
          }),
        });
        
        const data = await response.json();
        
        if (data.success) {
          setSnackbar({
            open: true,
            message: 'Message sent successfully!',
            severity: 'success'
          });
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
          });
        } else {
          throw new Error('Something went wrong');
        }
        
        
        // For now, we'll just simulate a successful submission
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setSnackbar({
          open: true,
          message: 'Message sent successfully!',
          severity: 'success'
        });
        
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } catch (error) {
        setSnackbar({
          open: true,
          message: 'Failed to send message. Please try again.',
          severity: 'error'
        });
      } finally {
        setLoading(false);
      }
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const contactInfo = [
    {
      icon: <LocationOnIcon fontSize="large" color="primary" />,
      title: 'Location',
      details: 'Sitaput,UP India'
    },
    {
      icon: <EmailIcon fontSize="large" color="primary" />,
      title: 'Email',
      details: 'dheerendradixit321@gmail.com'
    },
    {
      icon: <PhoneIcon fontSize="large" color="primary" />,
      title: 'Phone',
      details: '+91 7060918053'
    }
  ];

  return (
    <Box 
      sx={{ 
        py: 12,
        background: theme.palette.background.default,
      }}
      className="section-padding"
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: 8, textAlign: 'center' }} className="stagger-item">
          <Typography variant="h6" component="p" color="primary" gutterBottom>
            GET IN TOUCH
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
            Contact Me
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              maxWidth: '800px', 
              mx: 'auto',
              mb: 4
            }}
          >
            Feel free to reach out to me for any questions, project inquiries, or just to say hello.
            I'll do my best to get back to you as soon as possible.
          </Typography>
        </Box>

        <Grid container spacing={6}>
          <Grid item xs={12} md={5} className="stagger-item">
            <Box>
              <Typography variant="h4" component="h3" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
                Contact Information
              </Typography>
              
              {contactInfo.map((info, index) => (
                <Box 
                  key={index} 
                  sx={{ 
                    display: 'flex', 
                    mb: 4,
                    alignItems: 'center'
                  }}
                >
                  <Box sx={{ mr: 2 }}>
                    {info.icon}
                  </Box>
                  <Box>
                    <Typography variant="h6" component="h4" sx={{ fontWeight: 600 }}>
                      {info.title}
                    </Typography>
                    <Typography variant="body1">
                      {info.details}
                    </Typography>
                  </Box>
                </Box>
              ))}
              
              <Box sx={{ mt: 6 }}>
                <Typography variant="h6" component="h4" sx={{ fontWeight: 600, mb: 2 }}>
                  Follow Me
                </Typography>
                <Box>
                  <IconButton 
                    color="primary" 
                    href="https://github.com/Dheerendra-123" 
                    target="_blank"
                    aria-label="GitHub"
                    sx={{ mr: 1 }}
                  >
                    <GitHubIcon />
                  </IconButton>
                  <IconButton 
                    color="primary" 
                    href="https://www.linkedin.com/in/dheerendra-dixit-459a03244/" 
                    target="_blank"
                    aria-label="LinkedIn"
                    sx={{ mr: 1 }}
                  >
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton 
                    color="primary" 
                    href="https://www.instagram.com/dheerendra_dixit123" 
                    target="_blank"
                    aria-label="Instagram"
                  >
                    <Instagram />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={7} className="stagger-item">
            <Card sx={{ 
              p: { xs: 2, md: 3 },
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              borderRadius: 3
            }}>
              <CardContent>
                <Typography variant="h4" component="h3" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                  Send Me a Message
                </Typography>
                
                <Box 
                  component="form" 
                  onSubmit={handleSubmit}
                  className="contact-form"
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        name="name"
                        label="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        error={!!errors.name}
                        helperText={errors.name}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        name="email"
                        label="Email Address"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={!!errors.email}
                        helperText={errors.email}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name="subject"
                        label="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        error={!!errors.subject}
                        helperText={errors.subject}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name="message"
                        label="Your Message"
                        multiline
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        error={!!errors.message}
                        helperText={errors.message}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        endIcon={<SendIcon />}
                        disabled={loading}
                        sx={{ px: 4, py: 1.5 }}
                      >
                        {loading ? 'Sending...' : 'Send Message'}
                      </Button>
                    </Grid>

                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity} 
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;