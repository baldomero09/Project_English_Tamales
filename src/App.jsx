import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar/NavComponent';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import theme from './theme';
import Store from './pages/Store';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/store" element={<Store />}/>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
