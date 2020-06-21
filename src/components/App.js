import React, { useState } from 'react';
import background from '../salmon.jpeg';
import '../styles/index.css';
import Navbar from './Navbar';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import themeObj from '../styles/theme.json';
import { Container, Box } from '@material-ui/core';

const theme = createMuiTheme(themeObj);

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Typography variant="h6" color="inherit">
          <Navbar />
          <img src={background} className="header" alt="salmon dish" />
        </Typography>
      </ThemeProvider>
    </div>
  );
}

export default App;
