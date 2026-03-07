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
  description: "B.Tech CSE Student | Founder & IGL @ GOAT ESPORTS ORGANISATION | C, Python, C# | Certified Learner",
  keywords: ["Vedant Shukla", "Portfolio", "B.Tech CSE", "GOAT ESPORTS", "Software Developer", "Python", "C#", "Machine Learning"],
  authors: [{ name: "Vedant Shukla" }],
  openGraph: {
    title: "Vedant Shukla - Personal Portfolio",
    description: "B.Tech CSE Student | Founder & IGL @ GOAT ESPORTS ORGANISATION | C, Python, C# | Certified Learner",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vedant Shukla - Personal Portfolio",
    description: "B.Tech CSE Student | Founder & IGL @ GOAT ESPORTS ORGANISATION",
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
