import Provider from '@/components/Provider';
import '@/styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang='en'>
      <body>
        <Provider>
          <main lang="en">
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
