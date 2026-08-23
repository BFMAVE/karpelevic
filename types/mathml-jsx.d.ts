import type { HTMLAttributes } from "react";

/* eslint-disable @typescript-eslint/no-empty-object-type -- ambient JSX interface merging requires interfaces */

interface KarpelevicMathMLAttributes<
  T extends MathMLElement = MathMLElement,
> extends HTMLAttributes<T> {
  accent?: boolean | "true" | "false";
  columnalign?: string;
  display?: "block" | "inline";
  encoding?: string;
  mathvariant?: string;
  rowspacing?: string;
  stretchy?: boolean | "true" | "false";
  width?: number | string;
  xmlns?: string;
}

interface KarpelevicMathMLIntrinsicElements {
  annotation: KarpelevicMathMLAttributes;
  math: KarpelevicMathMLAttributes;
  mfrac: KarpelevicMathMLAttributes;
  mi: KarpelevicMathMLAttributes;
  mn: KarpelevicMathMLAttributes;
  mo: KarpelevicMathMLAttributes;
  mover: KarpelevicMathMLAttributes;
  mrow: KarpelevicMathMLAttributes;
  mspace: KarpelevicMathMLAttributes;
  msqrt: KarpelevicMathMLAttributes;
  msub: KarpelevicMathMLAttributes;
  msup: KarpelevicMathMLAttributes;
  mtable: KarpelevicMathMLAttributes;
  mtd: KarpelevicMathMLAttributes;
  mtext: KarpelevicMathMLAttributes;
  mtr: KarpelevicMathMLAttributes;
  munder: KarpelevicMathMLAttributes;
  munderover: KarpelevicMathMLAttributes;
  semantics: KarpelevicMathMLAttributes;
}

declare module "react/jsx-runtime" {
  namespace JSX {
    interface IntrinsicElements extends KarpelevicMathMLIntrinsicElements {}
  }
}

declare module "react/jsx-dev-runtime" {
  namespace JSX {
    interface IntrinsicElements extends KarpelevicMathMLIntrinsicElements {}
  }
}

export {};
