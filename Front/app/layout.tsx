import { ThemeProvider } from "./theme-provider";
import { Inter } from "next/font/google";
import { dir } from 'i18next';
import { detectLanguage } from '../i18n'

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const lng = detectLanguage()
  return (
    <html lang={lng} dir={dir(lng)}>

      <body className={`${inter.className} bg-background`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
