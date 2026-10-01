import type { Metadata } from "next";

export const PUBLIC_SITE_ORIGIN = "https://bfmave.github.io";
export const PUBLIC_SITE_BASE_PATH = "/karpelevic";
export const SITE_NAME = "The Karpelevič theorem";
export const SITE_SUBTITLE = "An illustrated geometric proof";

export function publicSiteUrl(pathname: string): string {
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${PUBLIC_SITE_ORIGIN}${PUBLIC_SITE_BASE_PATH}${path}`;
}

type PageMetadataOptions = {
  title: string;
  description: string;
  pathname: string;
  scholarlyLandingPage?: boolean;
};

export function createPageMetadata({
  title,
  description,
  pathname,
  scholarlyLandingPage = false,
}: PageMetadataOptions): Metadata {
  const url = publicSiteUrl(pathname);

  return {
    title: pathname === "/" ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: scholarlyLandingPage ? "website" : "article",
      locale: "en_GB",
      siteName: SITE_NAME,
      title,
      description,
      url,
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
    ...(scholarlyLandingPage
      ? {
          other: {
            citation_title:
              "A structural proof of the Karpelevič theorem",
            citation_author: ["Brecht Verbeken", "Vincent Ginis"],
            citation_publication_date: "2026/09/23",
            citation_pdf_url: publicSiteUrl(
              "/paper/critical-invariant-polygons.pdf",
            ),
          },
        }
      : {}),
  };
}
