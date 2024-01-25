import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import About from './pages/About';
import './../fonts.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 450,
      md: 600,
      lg: 900,
      xl: 1200,
    },
  },
});


const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          {/* <Route path="/services" component={Services} />
            <Route path="/contact" component={Contact} /> */}
        </Routes>
        <Footer/>
      </Router>
      </ThemeProvider>
  );
};

export default App;
