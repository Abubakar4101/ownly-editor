import React, {lazy} from 'react';
import Routes from './routes';
import {BrowserRouter} from 'react-router-dom';
import {CssBaseline, ThemeProvider} from '@mui/material';
import themeSettings from './theme/ThemeSettings';
import RTL from './theme/RTL';
import INIT_STATE from 'shared/globalTheme/themeConfig';
import './App.css';
function App() {
  // eslint-disable-next-line new-cap
  const theme = themeSettings();

  return (
    <>
      <ThemeProvider theme={theme}>
        <RTL direction={INIT_STATE.activeDir}>
          <CssBaseline />
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </RTL>
      </ThemeProvider>
    </>
  );
}

export default App;
