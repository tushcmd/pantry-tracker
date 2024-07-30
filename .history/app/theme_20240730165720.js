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
    mode: 'dark',
  },
})