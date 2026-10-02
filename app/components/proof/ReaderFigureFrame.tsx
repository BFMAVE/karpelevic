import type { ReactNode } from "react";

export function ReaderFigureFrame({ children, defaultView = "enlarge" }: { children: ReactNode; defaultView?: "fit" | "enlarge" }) {
  return <div className="reader-figure-frame" data-figure-frame data-figure-view={defaultView}>
    <div className="reader-figure-view-controls" role="group" aria-label="Diagram size" hidden data-figure-controls>
      <button type="button" data-figure-view-button="fit" aria-pressed={defaultView === "fit"}>Fit diagram</button>
      <button type="button" data-figure-view-button="enlarge" aria-pressed={defaultView === "enlarge"}>Enlarge labels</button>
      <span>Fit to see the whole relationship; enlarge to read its labels.</span>
    </div>
    {children}
  </div>;
}
