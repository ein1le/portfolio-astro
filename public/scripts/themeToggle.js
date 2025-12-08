// Theme toggle handler wired to the ToggleButton in the right sidebar.
// Persists preference in localStorage and toggles a class on <html>.

const STORAGE_KEY = 'ein-theme';

function getInitialTheme() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
  } catch {
    // ignore
  }

  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    return 'light';
  }

  return 'dark';
}

function applyTheme(theme) {
  const root = document.documentElement;
  const isLight = theme === 'light';

  root.classList.toggle('theme-light', isLight);
  root.classList.toggle('theme-dark', !isLight);

  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // ignore
  }

  const toggle = document.querySelector('[data-theme-toggle]');
  if (toggle) {
    toggle.setAttribute('data-state', isLight ? 'on' : 'off');
    toggle.setAttribute('aria-pressed', String(isLight));
  }
}

function setupThemeToggle() {
  const initialTheme = getInitialTheme();
  applyTheme(initialTheme);

  const toggle = document.querySelector('[data-theme-toggle]');
  if (!toggle) return;

  toggle.addEventListener('click', () => {
    const root = document.documentElement;
    const nextTheme = root.classList.contains('theme-light') ? 'dark' : 'light';
    applyTheme(nextTheme);
  });
}

if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', setupThemeToggle);
  } else {
    setupThemeToggle();
  }
}

