import type { Metadata } from "next";
import "@/styles/global.scss";
import "swiper/css";
import "swiper/css/navigation";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import LocalizationWrapper from "@/layout/LocalizationWrapper";

const siteUrl = "https://www.agrotep.com";
const siteTitle = "Agrotep";
const siteDescription =
  "ТОВ «Агротеп» — лідер у сфері міжнародних рефрижераторних перевезень. Високоякісні транспортні послуги з 1993 року.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "uk_UA",
    url: siteUrl,
    siteName: siteTitle,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Agrotep — міжнародні рефрижераторні перевезення",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body id="__next">
        <LocalizationWrapper>
          <div style={{ minHeight: "85px", backgroundColor: "#293B5C" }}></div>
          <Header />
          <main>{children}</main>
          <Footer />
        </LocalizationWrapper>
      </body>
    </html>
  );
}
