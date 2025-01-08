import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TechWear Pro - Montres Connectées & Trackers Fitness',
  description: 'Découvrez notre sélection premium de montres connectées et trackers fitness',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <nav className="bg-white shadow-lg">
          {/* Navigation */}
        </nav>
        <main>{children}</main>
        <footer className="bg-gray-100">
          {/* Footer */}
        </footer>
      </body>
    </html>
  )
}