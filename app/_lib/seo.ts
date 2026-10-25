import type { Metadata } from "next";

const DEFAULT_SITE_URL = "http://www.diprajray.site/";

function normalizeSiteUrl(url?: string) {
  if (!url) return DEFAULT_SITE_URL;

  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url.replace(/\/$/, "");
  }

  return `https://${url.replace(/\/$/, "")}`;
}

export const siteUrl = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL ??
    process.env.VERCEL_URL
);

export const siteConfig = {
  name: "Dipraj Ray",
  title: "Dipraj Ray | Full Stack Developer",
  description:
    "Portfolio of Dipraj Ray, a full stack developer from India building fast, scalable web applications and SaaS products with React, Next.js, Node.js, TypeScript, PostgreSQL and AWS.",
  siteUrl,
  locale: "en_IN",
  image: "/diprajray.jpg",
  logo: "/_lib/favicon.ico",
  linkedIn: "https://www.linkedin.com/in/dipraj-ray/",
  github: "https://github.com/Rays-Code",
  email: "raydipraj.official@gmail.com",
  keywords: [
    "Dipraj Ray",
    "Dipraj Ray full stack developer",
    "Dipraj Ray portfolio",
    "Dipraj Ray software engineer",
    "full stack developer India",
    "Next.js developer India",
    "React developer India",
    "Node.js developer",
    "TypeScript developer",
    "freelance full stack developer India",
    "freelance web developer India",
    "SaaS developer",
    "AWS deployment",
    "PostgreSQL developer",
    "Figma to code",
  ],
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.siteUrl).toString();
}

type SeoInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

export function createMetadata({
  title,
  description,
  path = "/",
  keywords = [],
}: SeoInput): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
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
      title,
      description,
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
}

export function createPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    image: absoluteUrl(siteConfig.image),
    email: siteConfig.email,
    jobTitle: "Full Stack Developer",
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Birla Institute of Technology & Science (BITS), Pilani",
      },
    ],
    sameAs: [siteConfig.linkedIn, siteConfig.github].filter(Boolean),
    knowsAbout: [
      "Full Stack Development",
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "REST API Design",
      "PostgreSQL",
      "MongoDB",
      "AWS",
      "Tailwind CSS",
    ],
  };
}

export function createWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    description: siteConfig.description,
  };
}