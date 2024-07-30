 import { createTheme } from '@mui/material';
 import { DM_Sans } from 'next/font/google'
 import { Space_Mono } from 'next/font/google'


 const fontHeading = DM_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    display: 'swap',
    variable: '--font-heading',
  })
  
  const fontBody = Space_Mono({
    subsets: ['latin'],
    weight: ['400', '700'],
    display: 'swap',
    variable: '--font-body',
  })
 
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
          backgroundColor: hslToHex(36, 46, 82), // card background
          color: hslToHex(36, 45, 20), // card foreground
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderColor: hslToHex(36, 45, 60), // input border color
        },
      },
    },
  },
  typography: {
    fontFamily: 'your-body-font, sans-serif', // Replace with your actual body font
    h1: { fontFamily: 'your-heading-font, sans-serif' },
    h2: { fontFamily: 'your-heading-font, sans-serif' },
    h3: { fontFamily: 'your-heading-font, sans-serif' },
    h4: { fontFamily: 'your-heading-font, sans-serif' },
    h5: { fontFamily: 'your-heading-font, sans-serif' },
    h6: { fontFamily: 'your-heading-font, sans-serif' },
  },
  shape: {
    borderRadius: 0, // --radius: 0rem;
  }
});