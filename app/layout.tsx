import type { Metadata } from "next";
import { Inter, Archivo_Black } from "next/font/google";
import { SiteLayout } from "@/components/layout/site-layout";
import { siteConfig } from "@/data/site";
import "@/styles/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

/** The deck's display face. One weight only. */
const archivoBlack = Archivo_Black({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.title} — ${siteConfig.role}`,
    template: `%s · ${siteConfig.title}`,
  },
  description: siteConfig.description,
  authors: [{ name: siteConfig.fullName }],
  creator: siteConfig.fullName,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.title,
    title: `${siteConfig.title} — ${siteConfig.role}`,
    description: siteConfig.description,
    images: [
      {
        url: "/images/portrait.png",
        width: 424,
        height: 1199,
        alt: siteConfig.fullName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.title} — ${siteConfig.role}`,
    description: siteConfig.description,
    images: ["/images/portrait.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      // Tells Next.js the smooth scrolling in globals.css is intentional.
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${archivoBlack.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">
        {/* Scroll-reveal blocks are server-rendered at opacity 0 and are
            animated in by JavaScript. Without it they would never appear, so
            force them visible. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
