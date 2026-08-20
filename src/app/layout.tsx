import type { Metadata, Viewport } from "next";
import { Anuphan, Mitr } from "next/font/google";
import { Providers } from "@/components/Providers";
import { site } from "@/lib/site";
import "./globals.css";

const anuphan = Anuphan({
  variable: "--font-anuphan",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "block",
  preload: true,
});

const mitr = Mitr({
  variable: "--font-mitr",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
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
