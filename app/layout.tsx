
import BookingPopup from "@/components/common/BookingPopup";
import type { Metadata, Viewport } from "next";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import ChatBot from "@/components/common/ChatBot";
import SplashScreen from "@/components/common/SplashScreen";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://mentorex.in";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "MentorEx | Affordable Online Tutoring UK & Australia",
    template: "%s | MentorEx",
  },

  description:
    "Explore affordable one-to-one online tutoring with MentorEx for students in the UK and Australia. Get personalised Maths, Science, English, GCSE, A-Level, NAPLAN and coding support. Book a free 30-minute demo.",

  applicationName: "MentorEx",

  keywords: [
    "MentorEx",
    "online tutoring",
    "one-to-one online tutoring",
    "best tutoring service in UK",
    "best tutoring in Australia",
    "best online tutoring UK",
    "best online tutoring Australia",
    "lowest price tutoring in UK",
    "lowest price tutoring in Australia",
    "affordable tutoring UK",
    "affordable tutoring Australia",
    "affordable online tutors UK",
    "affordable online tutors Australia",
    "online tutors for GCSE",
    "GCSE Maths tutor online",
    "A-Level tutoring online",
    "NAPLAN tutoring online",
    "online Maths tutor",
    "online Science tutor",
    "online English tutor",
    "online coding classes",
    "online tuition for students",
    "web design Shimla",
    "website design for small businesses",
  ],

  category: "Education",

  alternates: {
    languages: {
      "en-GB": "/online-tutoring-uk",
      "en-AU": "/online-tutoring-australia",
      "x-default": "/",
    },
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "MentorEx",
    locale: "en_GB",
    title:
      "MentorEx | Affordable One-to-One Online Tutoring",
    description:
      "Personalised online tuition for students in the UK and Australia. Explore Maths, Science, English and exam preparation with MentorEx.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MentorEx — An Educated Choice",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "MentorEx | Affordable Online Tutoring",
    description:
      "One-to-one online tuition for students in the UK and Australia. Explore personalised tutoring and book a free demo.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": `${siteUrl}/#organization`,
  name: "MentorEx",
  alternateName: "MentorEx Global Pvt. Ltd.",
  url: siteUrl,
  logo: `${siteUrl}/logos/logo.png`,
  image: `${siteUrl}/og-image.png`,
  description:
    "MentorEx provides personalised online tutoring for students, including Maths, Science, English, programming, coding and exam preparation. The company also provides website design services for small businesses.",
  email: "contact@mentorex.in",
  telephone: "+91-7018424491",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Shimla",
    addressRegion: "Himachal Pradesh",
    postalCode: "171006",
    addressCountry: "IN",
  },
  areaServed: [
    {
      "@type": "Country",
      name: "United Kingdom",
    },
    {
      "@type": "Country",
      name: "Australia",
    },
    {
      "@type": "Country",
      name: "United States",
    },
    {
      "@type": "Country",
      name: "Canada",
    },
  ],
  sameAs: [
    "https://www.instagram.com/mentorex.global",
  ],
  knowsAbout: [
    "Online tutoring",
    "GCSE preparation",
    "A-Level preparation",
    "NAPLAN preparation",
    "Mathematics tutoring",
    "Science tutoring",
    "English tutoring",
    "Computer science",
    "Coding education",
  ],
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
      <body
        className="min-h-full flex flex-col"
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />

        {children}

        <BookingPopup />
        <WhatsAppButton />
        <SplashScreen />
        <ChatBot />
      </body>
    </html>
  );
}
