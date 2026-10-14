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
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

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
  title: "diprajray.com",
  description: "Building modern digital products that look great, perform fast, and solve real business problems.",
};

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
      <body className="min-h-full flex flex-col">

        <Navbar />

        <main className="pt-34">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
