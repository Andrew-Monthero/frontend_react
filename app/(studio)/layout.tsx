import type { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Andrew-Portfolio',
  description: 'Portfolio website of Andrew Monthero - Product designer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
