
//layout gets spread
//place navbar/footer in layout

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css"; 
import Navbar from "./components/Navbar";
import footer from "./components/Footer";

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

export const metadata: Metadata = {
  title: "Travel app",
  description: "Travel app for camping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/*  show navbar top of main, and footer below it*/}
        <Navbar />
        <main className="relative overflow-hidden">
          {/* hidden removes weird scrolls */}
          {/* wrapped children in main, that way we will know this is main part of page */}

        {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
