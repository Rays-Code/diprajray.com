import type { Metadata } from "next";
import {
  Inter,
  Istok_Web,
  Cormorant_Upright,
  Cormorant_Garamond,
  Rancho,
  Poppins,
  Space_Grotesk,
  Hanken_Grotesk,
  Geist_Mono,
  IBM_Plex_Mono,
  JetBrains_Mono,
  Google_Sans_Code,
} from "next/font/google";
import Script from "next/script";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import {
  absoluteUrl,
  createPersonSchema,
  createWebsiteSchema,
  siteConfig,
} from "./_lib/seo";

const inter = Inter({
  variable: "--font-inter-variable",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const istokWeb = Istok_Web({
  variable: "--font-istok-web-variable",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const cormorantUpright = Cormorant_Upright({
  variable: "--font-cormorant-upright-variable",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond-variable",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const rancho = Rancho({
  variable: "--font-rancho-variable",
  subsets: ["latin"],
  weight: "400",
});

const poppins = Poppins({
  variable: "--font-poppins-variable",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk-variable",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk-variable",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono-variable",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono-variable",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono-variable",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const satoshi = localFont({
  src: "../public/fonts/Satoshi-Variable.otf",
  variable: "--font-satoshi-variable",
  fallback: ["Arial", "sans-serif"],
  display: "swap",
});

const googleSansCode = Google_Sans_Code({
  variable: "--font-google-sans-code-variable",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.title,
    template: "%s | Dipraj Ray",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name, url: siteConfig.siteUrl }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: siteConfig.siteUrl,
  },
  category: "technology",
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
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: absoluteUrl(siteConfig.image),
        width: 1200,
        height: 630,
        alt: "Dipraj Ray, Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [absoluteUrl(siteConfig.image)],
  },
  icons: {
    icon: [
      { url: siteConfig.logo },
      { url: siteConfig.logo, sizes: "32x32", type: "image/png" },
      { url: siteConfig.logo, sizes: "16x16", type: "image/png" },
    ],
    shortcut: siteConfig.logo,
    apple: siteConfig.logo,
  },
};


const toJsonLd = (data: object) =>
  JSON.stringify(data).replace(/</g, "\\u003c");

const GA_ID = "G-9QEQ5XFR0J";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`
        ${inter.variable}
        ${istokWeb.variable}
        ${cormorantUpright.variable}
        ${cormorantGaramond.variable}
        ${rancho.variable}
        ${poppins.variable}
        ${spaceGrotesk.variable}
        ${hankenGrotesk.variable}
        ${geistMono.variable}
        ${ibmPlexMono.variable}
        ${jetbrainsMono.variable}
        ${satoshi.variable}
        ${googleSansCode.variable}
        h-full
        antialiased
        `}
    >
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: toJsonLd(createPersonSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: toJsonLd(createWebsiteSchema()) }}
        />

        <Navbar />

        <main className="pt-34">{children}</main>

        <Footer />
      </body>
    </html>
  );
}