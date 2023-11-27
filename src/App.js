import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Dashboard from './Components/Dashboard';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196F3', 
      dark: '#0D47A1', 
    },
    type: 'light', 
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Dashboard />
      </div>
    </ThemeProvider>
  );
};

export default App;
