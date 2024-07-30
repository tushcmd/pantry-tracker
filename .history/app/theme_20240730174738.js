import { createTheme } from '@mui/material/styles';

 
const theme = createTheme({
  palette: {
    // mode: 'dark',
    background: {
        default: '#e9e4d5',
        paper: '#ded6c2',
    },
    text: {
        primary: '#3a3121',
        secondary: '#61553b',
    },
    primary: {
        main: '#d3c4a1',
        contrastText: '#2b2519',
    },
    secondary: {
        main: '#d1c7af',
        contrastText: '#61553b',
    },
    error: {
        main: '#d60c0c',
        contrastText: '#fafafa',
    },
    divider: '#b8a57d',
},
components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#e9e4d5',
          color: '#3a3121',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '0rem', // --radius: 0rem;
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#ded6c2', // card background
          color: '#4d4230', // card foreground
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderColor: '#b8a57d', // input border color
        },
      },
    },
  },
  typography: {
    fontFamily: 'var(--font-body), monospace', // Space Mono for body text
    h1: { fontFamily: 'var(--font-heading), sans-serif' },
    h2: { fontFamily: 'var(--font-heading), sans-serif' },
    h3: { fontFamily: 'var(--font-heading), sans-serif' },
    h4: { fontFamily: 'var(--font-heading), sans-serif' },
    h5: { fontFamily: 'var(--font-heading), sans-serif' },
    h6: { fontFamily: 'var(--font-heading), sans-serif' },
    button: { fontFamily: 'var(--font-heading), sans-serif' },
  },
  shape: {
    borderRadius: 0, // --radius: 0rem;
  }
});

export default theme;