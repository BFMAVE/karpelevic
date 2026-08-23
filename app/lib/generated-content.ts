export function requiredGeneratedHtml(
  collection: Readonly<Record<string, unknown>>,
  itemNumber: number,
  collectionName: string,
): string {
  const key = String(itemNumber);
  const value = collection[key];

  if (typeof value !== "string") {
    throw new Error(
      `${collectionName} has no generated HTML for item ${itemNumber}`,
    );
  }

  return value;
}
