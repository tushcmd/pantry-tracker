import { createTheme } from '@mui/material/styles';


// Helper function to convert HSL to RGB
function hslToRgb(h, s, l) {
    h /= 360;
    s /= 100;
    l /= 100;
    let r, g, b;
  
    if (s === 0) {
      r = g = b = l; // achromatic
    } else {
      const hue2rgb = (p, q, t) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };
  
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }
  
    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
  }
 
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
          borderColor: hslToHex(36, 45, 60), // input border color
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