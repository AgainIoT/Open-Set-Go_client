import { Metadata } from "next";
import { authors } from "./authors";
import { mainPageKeywords } from "./keywords";
import { Robots } from "next/dist/lib/metadata/types/metadata-types";

/** Metadata commonly used on all pages */
const constMetadata: Metadata = {
  metadataBase: new URL("https://www.open-set-go.com"),
  description: `Best option to open your project, set it open-source friendly, and go programming. Mange your opensource project with Open-Source Project Management Platform, "Open-Set-Go"`,
  applicationName: "Open-Set-Go",
  authors,
  generator: "Next.js",
  keywords: mainPageKeywords,
  referrer: "origin-when-cross-origin",
  creator: "Team AgainIoT",
  publisher: "Netlify",
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "32" }],
    apple: "/favicon/apple-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/favicon/apple-icon-precomposed.png",
    },
  },
  openGraph: {
    type: "website",
    url: "https://www.open-set-go.com",
    title: "Open-Set-Go",
    description: `Open-Source Project Management Platform ,"Open-Set-Go"`,
    siteName: "Open-Set-Go",
    images: "https://open-set-go.com/favicon/logo.svg",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    description: `Open-Source Project Management Platform ,"Open-Set-Go"`,
    images: "https://open-set-go.com/favicon/logo.svg",
    title: "Open-Set-Go",
  },
  // alternates: { // if i18n add, this will need!
  //   canonical: "/",
  //   languages: {
  //     ko: "/ko",
  //   },
  // },
  // verification: {}, // didn't need anymore
};

/** getMetadata from src/constants/metadata.ts */
const getMetadata = (setMetadata: remainMetadata): Metadata => {
  const { title } = setMetadata;

  const metadata: Metadata = {
    ...constMetadata,
    title,
  };

  return metadata;
};

/** Metadata that varies from page to page */
type remainMetadata = {
  title: string;
  robots?: Robots;
};

export { getMetadata };
