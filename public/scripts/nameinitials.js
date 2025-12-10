// Utility to derive 2-letter initials from a full name string.

export function getInitials(name) {
  if (!name) return '';

  const parts = name
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  if (parts.length === 0) return '';

  const firstInitial = parts[0].charAt(0).toUpperCase();

  // If there's only a single word, return a single initial
  if (parts.length === 1) {
    return firstInitial;
  }

  const secondSource =
    parts.length <= 3 ? parts[1] : parts[parts.length - 1];

  const secondInitial = secondSource
    ? secondSource.charAt(0).toUpperCase()
    : '';

  return `${firstInitial}${secondInitial}`.slice(0, 2);
}
