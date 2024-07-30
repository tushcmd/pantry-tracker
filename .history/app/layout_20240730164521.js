import { DM_Sans } from 'next/font/google'
import { Space_Mono } from 'next/font/google'
import "./globals.css";

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

export const metadata = {
  title: "Pantry Tracker App",
  description: "Track your pantry - better",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body 
        className={cn(
          'antialiased',
          fontHeading.variable,
          fontBody.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}
