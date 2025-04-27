// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ClerkProvider, SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Adik0.dev",
  description: "👋 Hii.. I am Adik0.dev full name is Aditya Kumar Gupta a 16y/o web developer & cybersecurity enthusiast!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex flex-col h-screen antialiased overflow-hidden`}
      >
        <Navbar />
        <div className="flex-1 overflow-y-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

