import '../globals.css';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Logo from './assets/Logo.png';
import { getPages } from '@/sanity/sanity-utils';

export const metadata: Metadata = {
  title: 'Andrew-Portfolio',
  description: 'Portfolio website of Andrew Monthero - Product designer',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Get all of the pages

  const pages = await getPages();

  return (
    <html lang='en'>
      <body className='bg-gradient-to-tr from-indigo-950 to-slate-950  overflow-x-hidden'>
        <header className='sticky top-0 p-[1.6rem] bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 z-50  flex justify-between items-center'>
          <Link href='/'>
            <Image src={Logo} alt='andrew_logo' width={60} height={60} />
          </Link>
          <div className='flex items-center gap-5'>
            {pages.map(page => (
              <Link
                key={page._id}
                href={`/${page.slug}`}
                className='text-white hover:underline'
              >
                {page.title}
              </Link>
            ))}
          </div>
        </header>
        <main className='p-[1.2rem] lg:max-w-screen-xl mx-auto'>
          {children}
        </main>
      </body>
    </html>
  );
}
