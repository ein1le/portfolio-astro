// Utility to derive 2-letter initials from a full name string.

export function getInitials(name) {
  if (!name) return '';

  const parts = name
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  if (parts.length === 0) return '';

  const first = parts[0];
  let secondSource;

  if (parts.length === 1) {
    secondSource = parts[0];
  } else if (parts.length <= 3) {
    secondSource = parts[1];
  } else {
    secondSource = parts[parts.length - 1];
  }

  const firstInitial = first.charAt(0).toUpperCase();
  const secondInitial = secondSource ? secondSource.charAt(0).toUpperCase() : '';

  return `${firstInitial}${secondInitial}`.slice(0, 2);
}

