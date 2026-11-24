import type { ReactNode } from "react";

export function ReaderFigureFrame({ children }: { children: ReactNode }) {
  return <div className="reader-figure-frame" data-figure-frame data-figure-view="fit">
    <div className="reader-figure-view-controls" role="group" aria-label="Diagram size" hidden data-figure-controls>
      <button type="button" data-figure-view-button="fit" aria-pressed="true">Fit diagram</button>
      <button type="button" data-figure-view-button="enlarge" aria-pressed="false">Enlarge labels</button>
      <span>When enlarged, scroll sideways or focus the drawing and use the arrow keys.</span>
    </div>
    {children}
  </div>;
}
