import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import Layout from './components/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ cursor: 'auto' }}
          >
            <Layout />
          </motion.div>
        </AnimatePresence>
      </Router>
    </ThemeProvider>
  );
}

export default App;