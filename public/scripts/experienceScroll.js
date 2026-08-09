const STORAGE_KEY = 'experience-scroll-positions';

function readPositions() {
  try {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
  } catch {
    return {};
  }
}

function saveScrollPosition() {
  const scrollArea = document.querySelector('.scroll-y-area');
  if (!scrollArea) return;

  try {
    const positions = readPositions();
    positions[window.location.pathname] = scrollArea.scrollTop;
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(positions));
  } catch {
    // Ignore unavailable storage.
  }
}

function restoreScrollPosition() {
  const scrollArea = document.querySelector('.scroll-y-area');
  if (!scrollArea) return;

  const positions = readPositions();
  const scrollTop = positions[window.location.pathname];
  if (!Number.isFinite(scrollTop)) return;

  requestAnimationFrame(() => {
    scrollArea.scrollTop = scrollTop;
  });
}

function setupExperienceScroll() {
  const scrollArea = document.querySelector('.scroll-y-area');
  if (!scrollArea) return;

  if (scrollArea.dataset.scrollPersistenceSetup !== 'true') {
    scrollArea.dataset.scrollPersistenceSetup = 'true';
    scrollArea.addEventListener('scroll', saveScrollPosition, { passive: true });
  }

  restoreScrollPosition();
}

document.addEventListener('astro:before-swap', saveScrollPosition);
document.addEventListener('astro:page-load', setupExperienceScroll);
window.addEventListener('pagehide', saveScrollPosition);

if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', setupExperienceScroll);
} else {
  setupExperienceScroll();
}
