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
});

const readingSerif = Source_Serif_4({
  variable: "--font-reading",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Critical Invariant Polygons",
    template: "%s · Critical Invariant Polygons",
  },
  description:
    "A scholarly companion to Critical Invariant Polygons and the Farey–Ito Boundary of Stochastic Spectra.",
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
