// app/layout.tsx
import BookingPopup from "@/components/common/BookingPopup";
import type { Metadata } from "next";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import ChatBot from "@/components/common/ChatBot";
import SplashScreen from "@/components/common/SplashScreen";

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
  title: "Mentorex | One-to-One Online Tuition in Australia & UK",
  description: "Personalised one-to-one online tuition for Maths, Science, English, Programming, AI & Machine Learning, and languages — from Kindergarten to university level.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
  lang="en"
  suppressHydrationWarning
  className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
>
<body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
        <BookingPopup />
        <WhatsAppButton />
                <SplashScreen />

        <ChatBot />
      </body>
    </html>
  );
}