// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ClerkProvider } from '@clerk/nextjs';

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "Adik0.dev",
  description: "👋 Hii.. I am Adik0.dev full name is Aditya Kumar Gupta a 16y/o web developer & cybersecurity enthusiast!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Optional: Avoid flash of incorrect theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex flex-col h-screen antialiased overflow-hidden bg-white dark:bg-black text-black dark:text-white`}
      >
        <Navbar />
        <div className="flex-1 overflow-y-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
