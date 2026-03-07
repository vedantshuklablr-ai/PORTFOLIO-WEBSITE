import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/theme-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vedant Shukla - Personal Portfolio",
  description: "20-year-old tech enthusiast from Lucknow, passionate about building innovative solutions, participating in hackathons, and exploring new technologies in C, Python, C#, Machine Learning, and Cybersecurity",
  keywords: ["Vedant Shukla", "Portfolio", "B.Tech CSE", "Tech Enthusiast", "Hackathon", "Python", "C#", "Machine Learning", "Cybersecurity", "Lucknow"],
  authors: [{ name: "Vedant Shukla" }],
  openGraph: {
    title: "Vedant Shukla - Personal Portfolio",
    description: "20-year-old tech enthusiast from Lucknow, passionate about building innovative solutions and exploring new technologies",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vedant Shukla - Personal Portfolio",
    description: "Tech enthusiast passionate about building innovative solutions and participating in hackathons",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
