import "./globals.css";
import theme from './theme.js';
import { ThemeProvider } from '@mui/material/styles';



export const metadata = {
  title: "Pantry Tracker App",
  description: "Track your pantry - better",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
