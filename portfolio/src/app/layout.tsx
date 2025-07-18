

import './globals.css';
import { ReactNode } from 'react';
// import Header from '../Components/Header';
import Footer from '../Components/Footer';
// layout.tsx
import Header from '../Components/Header';
import CursorTrail from '../Components/CursorTrail'
import ClientWrapper from '@/Components/ClientWrapper';
import { Toaster } from 'react-hot-toast';
import FloatingParticlesBackground from '@/Components/FloatingParticle';



export const metadata = {
  title: 'Harshal.dev',
  description: 'Harshal.dev',
};



export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black">

        <ClientWrapper/>
        <Toaster />
        <CursorTrail />
        <Header />
        <FloatingParticlesBackground />
        <main className="min-h-screen max-w-6xl mx-auto p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
