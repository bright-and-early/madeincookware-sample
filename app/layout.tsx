import type { Metadata } from 'next';
import '@/styles/globals.css';
import { TailwindScreenSize } from '../components/dev/tailwind-screen-size';
import { Toaster } from '@/components/ui/sonner';

export const metadata: Metadata = {
  title: 'Sample',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}

        {process.env.NODE_ENV === 'development' ? <TailwindScreenSize /> : null}

        <Toaster />
      </body>
    </html>
  );
}
