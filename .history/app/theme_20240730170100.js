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
  },
})