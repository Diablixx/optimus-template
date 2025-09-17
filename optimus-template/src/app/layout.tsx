import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Optimus - Solutions Marketing Digital & E-commerce",
  description: "Développez votre présence en ligne avec nos solutions marketing digital innovantes. SEO, content marketing, e-commerce et stratégies personnalisées pour votre croissance.",
  keywords: "marketing digital, SEO, e-commerce, formation, content marketing, France",
  authors: [{ name: "Optimus" }],
  creator: "Optimus",
  publisher: "Optimus",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.className} antialiased`} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
