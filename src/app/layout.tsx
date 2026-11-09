import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Providers } from "@/components/Providers";
import { site } from "@/lib/site";
import "./globals.css";

const anuphan = localFont({
  src: "./fonts/Anuphan-Variable.woff2",
  variable: "--font-anuphan",
  weight: "100 700",
  display: "block",
  preload: true,
});

const mitr = localFont({
  src: [
    { path: "./fonts/Mitr-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Mitr-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Mitr-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "./fonts/Mitr-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-mitr",
  display: "block",
  preload: true,
});

export const metadata: Metadata = {
  title: `${site.name} | ${site.tagline}`,
  description: site.description,
  icons: {
    icon: site.logoSrc,
    apple: site.logoSrc,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={`${anuphan.variable} ${mitr.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="preload"
          href={site.heroPosterSrc}
          as="image"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href={site.logoNobgSrc}
          as="image"
          fetchPriority="high"
        />
      </head>
      <body className="flex min-h-full flex-col overflow-x-hidden font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
