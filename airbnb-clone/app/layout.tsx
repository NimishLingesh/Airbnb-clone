import './globals.css'

import { Nunito } from "next/font/google";
import Navbar from './components/navbar/navbar';
 
export const metadata: Metadata = {
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
        <Navbar></Navbar>
        {children}</body>
    </html>
  )
}
