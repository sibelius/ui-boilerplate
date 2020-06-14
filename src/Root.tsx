import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider as MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import App from './App';

const theme = createMuiTheme();

const Root = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </MuiThemeProvider>
  )
}

export default Root;