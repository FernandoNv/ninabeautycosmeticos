import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nina Beauty Cosméticos",
  description: "Loja focada em produtos de beleza",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          antialiased light 
          [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:bg-pink-100
  [&::-webkit-scrollbar-thumb]:bg-pink-300
  dark:[&::-webkit-scrollbar-track]:bg-pink-700
  dark:[&::-webkit-scrollbar-thumb]:bg-pink-500`}
      >
        {children}
      </body>
    </html>
  );
}
