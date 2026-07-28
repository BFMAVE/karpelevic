import { execFileSync } from "node:child_process";

const buildTimestamp = new Date(
  process.env.SOURCE_DATE_EPOCH
    ? Number(process.env.SOURCE_DATE_EPOCH) * 1000
    : Date.now(),
).toISOString();

function isIsoDate(value: string): boolean {
  return !Number.isNaN(Date.parse(value));
}

export function getPageTimestamp(sourceFile: string): string {
  try {
    const timestamp = execFileSync(
      "git",
      ["log", "-1", "--format=%cI", "--", sourceFile],
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

export function formatDate(timestamp: string): string {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(timestamp));
}
