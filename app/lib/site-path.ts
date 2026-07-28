const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(
  /\/$/,
  "",
);

export function sitePath(path: string): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${configuredBasePath ?? ""}${normalizedPath}`;
}
