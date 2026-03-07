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
  description: "20-year-old tech enthusiast from Lucknow, currently based in Bangalore. Passionate about hackathons, ideathons, workshops, and building innovative projects while learning and collaborating with teams in C, Python, C#, Machine Learning, and Cybersecurity",
  keywords: ["Vedant Shukla", "Portfolio", "B.Tech CSE", "Tech Enthusiast", "Hackathon", "Bangalore", "Lucknow", "Python", "C#", "Machine Learning", "Cybersecurity"],
  authors: [{ name: "Vedant Shukla" }],
  openGraph: {
    title: "Vedant Shukla - Personal Portfolio",
    description: "20-year-old tech enthusiast from Lucknow, currently based in Bangalore. Passionate about hackathons and building innovative projects",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vedant Shukla - Personal Portfolio",
    description: "Tech enthusiast from Lucknow, currently in Bangalore, passionate about hackathons and innovation",
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
