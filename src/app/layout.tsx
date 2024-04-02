import type { Metadata } from "next";
import "./globals.css";
import { roobert } from "@/fonts/fonts";

export const metadata: Metadata = {
  title: "PCP Claims | Mis Sold Car Finance Claims ",
  description:
    "See if you're eligible for mis-sold car finance compensation with Claim your PCP! ",
  keywords: "PCP claim, PCP Claim check",
  robots: "follow, index",
  openGraph: {
    title: "PCP Claims | Mis Sold Car Finance Claims ",
    description:
      "See if you're eligible for mis-sold car finance compensation with Claim your PCP! ",
    images: [
      { url: "https://carfinancesolicitors.co.uk/images/opengraph.png" },
    ],
    url: "https://carfinancesolicitors.co.uk",
    siteName: "PCP Claims | Mis Sold Car Finance Claims ",
    locale: "en-GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="canonical" href="https://carfinancesolicitors.co.uk" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${roobert.className}`}>{children}</body>
    </html>
  );
}
