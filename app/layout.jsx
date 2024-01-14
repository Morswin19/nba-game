import './globals.css'
import Navbar from './components/Navbar'

export const metadata = {
  title: 'NBA Player Stats Game',
  description: 'Game to showe your knowledge about NBA Basketball',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='min-h-screen'>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
