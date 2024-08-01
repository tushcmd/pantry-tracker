'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    
    primary: {
      main: '#acd452', // Main primary color
      contrastText: '#253600', // Text color on primary
    },
    secondary: {
      main: '#c2caaa', // Main secondary color
      contrastText: '#2c331c', // Text color on secondary
    },
    text: {
      primary: '#e4e2db', // Primary text color
      secondary: '#e4e2db', // Secondary text color
    },
    background: {
      default: '#1b1c17', // Default background color
      paper: '#1b1c17', // Background color for paper components
    },
    error: {
      main: '#ffb4a9', // Main error color
      contrastText: '#680003', // Text color on error
    },
    success: {
      main: '#79dd72', // Main success color
      contrastText: '#003a03', // Text color on success
    },
    info: {
      main: '#0062a2', // Main info color
      contrastText: '#ffffff', // Text color on info
    },
    warning: {
      main: '#606200', // Main warning color
      contrastText: '#ffffff', // Text color on warning
    },
    divider: '#909284', // Color for dividers
    upvote: {
      main: '#acd452', // Main color for upvote
      contrastText: '#253600', // Text color on upvote
    },
    downvote: {
      main: '#ffb4a9', // Main color for downvote
      contrastText: '#680003', // Text color on downvote
    },
    containerPrimary: {
      main: '#374e00', // Main color for primary containers
      contrastText: '#c8f16c', // Text color on primary containers
    },
    containerSecondary: {
      main: '#3d4a36', // Main color for secondary containers
      contrastText: '#d8e8cb', // Text color on secondary containers
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#1b1c17',
          color: '#e4e2db',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '0rem', // Equivalent to --radius: 0rem
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#1b1c17', // card background
          color: '#e4e2db', // card foreground
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderColor: '#909284', // input border color
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
    borderRadius: 0, // Equivalent to --radius: 0rem
  },
});

export default theme;
