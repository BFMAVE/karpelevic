import { execFileSync } from "node:child_process";

const buildTimestamp = new Date(
  process.env.SOURCE_DATE_EPOCH
    ? Number(process.env.SOURCE_DATE_EPOCH) * 1000
    : Date.now(),
).toISOString();

function isIsoDate(value: string): boolean {
  return !Number.isNaN(Date.parse(value));
}

export function getPageTimestamp(
  sourceFile: string | readonly string[],
): string {
  const sourceFiles =
    typeof sourceFile === "string" ? [sourceFile] : [...sourceFile];

  try {
    const timestamp = execFileSync(
      "git",
      ["log", "-1", "--format=%cI", "--", ...sourceFiles],
      {
        cwd: process.cwd(),
        encoding: "utf8",
        stdio: ["ignore", "pipe", "ignore"],
      },
    ).trim();

    if (timestamp && isIsoDate(timestamp)) {
      return new Date(timestamp).toISOString();
    }
  } catch {
    // A source archive or first local draft may not include Git history.
  }

  return buildTimestamp;
}

export function getBuildTimestamp(): string {
  return buildTimestamp;
}

export function getBuildRevision(): string {
  try {
    const revision = execFileSync(
      "git",
      ["rev-parse", "--short=12", "HEAD"],
      {
        cwd: process.cwd(),
        encoding: "utf8",
        stdio: ["ignore", "pipe", "ignore"],
      },
    ).trim();
    if (/^[0-9a-f]{7,40}$/i.test(revision)) return revision;
  } catch {
    // Source archives need not include Git metadata.
  }
  return "source archive";
}

export function formatDate(timestamp: string): string {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(timestamp));
}
