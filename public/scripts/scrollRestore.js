const SCROLL_KEY = 'global-shell-scroll-y';

function restoreScroll() {
  if (typeof window === 'undefined') return;

  try {
    const raw = window.sessionStorage.getItem(SCROLL_KEY);
    if (!raw) return;
    const y = parseInt(raw, 10);
    if (!Number.isFinite(y)) return;

    window.sessionStorage.removeItem(SCROLL_KEY);
    window.scrollTo(0, y);
  } catch {
    // ignore storage errors
  }
}

if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', restoreScroll);
  } else {
    restoreScroll();
  }
}
