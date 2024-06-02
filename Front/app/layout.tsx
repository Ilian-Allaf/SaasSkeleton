import { ThemeProvider } from "./themeProvider";
import { dir } from 'i18next';
import { detectLanguage } from '../i18n'
import { ReactQueryProvider } from './reactQueryProvider';
import { Inter as FontSans } from "next/font/google"
 
import { cn } from "@/lib/utils"
import { Toaster } from "sonner";
 
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const lng = detectLanguage()
  return (
    <ReactQueryProvider>
        <html lang={lng} dir={dir(lng)}>
          <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div vaul-drawer-wrapper="">
              <div className="relative flex min-h-screen flex-col bg-background">
                {children}
              </div>
            </div>
            <Toaster richColors closeButton 
            toastOptions={{
              classNames: {
                // closeButton: 'bg-lime-900',
              },
            }}
            />
            </ThemeProvider>
          </body>
        </html>
    </ReactQueryProvider>
  )
}
