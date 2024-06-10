import { dir } from 'i18next';
import { Inter as FontSans } from 'next/font/google';
import { detectLanguage } from '../i18n';
import { ReactQueryProvider } from './reactQueryProvider';

import { cn } from '@/lib/utils';
import { Toaster } from 'sonner';
import { ThemeProvider } from './themeProvider';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const lng = detectLanguage();
  return (
    <html lang={lng} dir={dir(lng)} suppressHydrationWarning={true}>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <ReactQueryProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div vaul-drawer-wrapper="">
              <div className="relative flex min-h-screen flex-col bg-background">
                {children}
              </div>
            </div>
            <Toaster
              richColors
              closeButton
              toastOptions={{
                classNames: {
                  // closeButton: 'bg-lime-900',
                },
              }}
            />
          </ThemeProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
