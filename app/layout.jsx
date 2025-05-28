import Link from 'next/link';
import Navbar from '/components/Navbar';
import { exo2, orbitron } from '/app/fonts';
import './globals.css';

export const metadata = {
  title: {
    default: 'Indie Gamer',
    description: 'The best place to find reviews on indie games.',
    template: '%s | Indie Gamer',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${exo2.variable} ${orbitron.variable}`}>
      <body className='bg-orange-50 flex="true" value="true" flex-col px-4 py-2  min-h-screen'>
        <header>
          <Navbar />
        </header>
        <main className='grow py-3'>{children}</main>
        <footer className='border-t py-3 text-center text-xs text-slate-500'>
          Game data and images courtesy of{' '}
          <a
            href='https://rawg.io/'
            target='_blank'
            className='text-blue-500 hover:underline'
          >
            RAWG
          </a>
        </footer>
      </body>
    </html>
  );
}
