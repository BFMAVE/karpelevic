import type { ReactNode } from "react";

export function ReaderFigureCaption({ takeaway, status, children }: { takeaway: string; status: string; children: ReactNode }) {
  return <figcaption>
    <p className="reader-caption-takeaway">{takeaway}</p>
    <p className="reader-caption-status"><strong>Scope:</strong> {status}</p>
    <details className="reader-caption-details"><summary>Coordinates and checks</summary><div>{children}</div></details>
  </figcaption>;
}
