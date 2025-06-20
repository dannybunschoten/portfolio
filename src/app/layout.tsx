import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { Footer } from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Danny Bunschoten | Full-Stack Developer & Computer Science Master's Student",
  description:
    "Experienced full-stack developer and Computer Science Master's student at TU Delft. Specializing in React, TypeScript, Node.js, and cloud infrastructure. Building scalable web applications with modern technologies.",
  keywords: [
    "Danny Bunschoten",
    "Full-Stack Developer",
    "Software Engineer",
    "React Developer",
    "TypeScript",
    "Node.js",
    "TU Delft",
    "Computer Science",
    "Web Development",
    "Azure",
    "Frontend",
    "Backend",
  ],
  authors: [{ name: "Danny Bunschoten" }],
  creator: "Danny Bunschoten",
  publisher: "Danny Bunschoten",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-dvh`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
