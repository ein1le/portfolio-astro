// Utility to derive 2-letter initials from a full name string.
// Examples:
//   "sophie cook" -> "SC"
//   "Tallulah Jackson-Coombes" -> "TJ"
//
// For names with more than 3 parts, we take the first and last parts.

export function getInitials(name: string): string {
  if (!name) return '';

  const parts = name
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  if (parts.length === 0) return '';

  const first = parts[0];
  let secondSource: string | undefined;

  if (parts.length === 1) {
    secondSource = parts[0];
  } else if (parts.length <= 3) {
    secondSource = parts[1];
  } else {
    // More than 3 parts: use first + last
    secondSource = parts[parts.length - 1];
  }

  const firstInitial = first.charAt(0).toUpperCase();
  const secondInitial = secondSource ? secondSource.charAt(0).toUpperCase() : '';

  return `${firstInitial}${secondInitial}`.slice(0, 2);
}

