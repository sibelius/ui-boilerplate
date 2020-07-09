import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  ThemeProvider as MuiThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { StylesProvider } from '@material-ui/styles';
import App from './App';

const theme = createMuiTheme();

const GlobalStyle = createGlobalStyle``;

const Root = () => {
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  );
};

export default Root;
