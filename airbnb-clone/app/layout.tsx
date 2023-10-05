import './globals.css'

import { Nunito } from "next/font/google";
import RegisterModal from '@/app/components/modals/RegisterModal';
import Navbar from './components/navbar/navbar';
import ClientOnly from './components/ClientOnly';
import ToasterProvider from './providers/ToasterProvider';
 
export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
}

const font = Nunito({
  subsets: ["latin"],
}) 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal isOpen/>
        <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
