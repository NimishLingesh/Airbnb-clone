import './globals.css'

import { Nunito } from "next/font/google";
import RegisterModal from '@/app/components/modals/RegisterModal';
import LoginModal from './components/modals/LoginModal';
import RentModal from './components/modals/RentModal';
import Navbar from './components/navbar/Navbar';
import ClientOnly from './components/ClientOnly';
import ToasterProvider from './providers/ToasterProvider';

import getCurrentUser from './actions/getCurrentUSer';

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
}

const font = Nunito({
  subsets: ["latin"],
}) 

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RentModal />
          <RegisterModal/>
          <LoginModal />
        <Navbar currentUser={currentUser}/>
        </ClientOnly>
        <div className="pb-20 pt-28">
          {children}
        </div>
      </body>
    </html>
  )
}
