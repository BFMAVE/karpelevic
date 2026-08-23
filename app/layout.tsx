import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Source_Serif_4,
} from "next/font/google";
import { sitePath } from "./lib/site-path";
import "./globals.css";

const displaySerif = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  fallback: ["Georgia", "Times New Roman"],
  preload: false,
});

const readingSerif = Source_Serif_4({
  variable: "--font-reading",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  fallback: ["Georgia", "Times New Roman"],
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bfmave.github.io/karpelevic/"),
  title: {
    default: "Critical Invariant Polygons",
    template: "%s · Critical Invariant Polygons",
  },
  description:
    "A scholarly companion to Critical Invariant Polygons and the Farey–Ito Boundary of Stochastic Spectra.",
  authors: [{ name: "Brecht Verbeken" }, { name: "Vincent Ginis" }],
  creator: "Brecht Verbeken",
  publisher: "Brecht Verbeken and Vincent Ginis",
  robots: { index: true, follow: true },
  icons: {
    icon: sitePath("/favicon.svg"),
    shortcut: sitePath("/favicon.svg"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${displaySerif.variable} ${readingSerif.variable}`}>
        {children}
      </body>
    </html>
  );
}
