import type { Metadata } from "next";
import { Geist, Geist_Mono,Silkscreen } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const silkscreen = Silkscreen({
  variable: "--font-silkscreen",
  subsets: ["latin"],
  weight: ["400","700"],
});


export const metadata: Metadata = {
  title: "MV Varma | Security & Web Developer",
  description: "Portfolio of MV Varma, a tech enthusiast specializing in full-stack development, Python automation, and cybersecurity logic.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className= "{ scrool-smooth scrool-pt-24 {`${geistSans.variable} ${geistMono.variable} ${Silkscreen.variable} h-full antialiased`}"
    >
      <body className="min-h-full flex flex-col">
        
        {children}</body>
    </html>
  );
}
