import '@/styles/globals.css';
import { NextAuthProvider } from 'src/nextAuthProvider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <NextAuthProvider>
        <body>{children}</body>
      </NextAuthProvider>
    </html>
  );
}
