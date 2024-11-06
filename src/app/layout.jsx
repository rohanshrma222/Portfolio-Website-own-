import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from 'next-themes'
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function Layout({ children }) {
  return (
    <html  suppressHydrationWarning>
        <head />
      <body>
      <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
