import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Header from './Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Resume from './sections/Resume';
import Contact from './sections/Contact';
import Footer from './Footer';

const Layout = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'resume', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box>
      <Header activeSection={activeSection} />
      <Box component="main">
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="resume">
          <Resume />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;