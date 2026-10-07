const STORAGE_KEY = 'experience-scroll-positions';
const DESKTOP_QUERY = '(min-width: 768px)';

if (typeof window !== 'undefined' && !window.__experienceScrollPersistenceSetup) {
  window.__experienceScrollPersistenceSetup = true;

  let positions = null;
  let activeScrollArea = null;
  let writeFrameId = 0;

  const readPositions = () => {
    if (positions) return positions;

    try {
      positions = JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
    } catch {
      positions = {};
    }

    return positions;
  };

  const writePositions = () => {
    writeFrameId = 0;

    try {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(readPositions()));
    } catch {
      // Ignore unavailable storage.
    }
  };

  const scheduleWrite = () => {
    if (!writeFrameId) writeFrameId = window.requestAnimationFrame(writePositions);
  };

  const getScrollPosition = () => {
    if (window.matchMedia(DESKTOP_QUERY).matches && activeScrollArea) {
      return activeScrollArea.scrollTop;
    }

    return window.scrollY || document.documentElement.scrollTop || 0;
  };

  const saveScrollPosition = () => {
    readPositions()[window.location.pathname] = getScrollPosition();
    scheduleWrite();
  };

  const flushScrollPosition = () => {
    saveScrollPosition();
    if (writeFrameId) window.cancelAnimationFrame(writeFrameId);
    writePositions();
  };

  const restoreScrollPosition = () => {
    const scrollTop = readPositions()[window.location.pathname];
    if (!Number.isFinite(scrollTop)) return;

    window.requestAnimationFrame(() => {
      if (window.matchMedia(DESKTOP_QUERY).matches && activeScrollArea) {
        activeScrollArea.scrollTop = scrollTop;
      } else {
        window.scrollTo(0, scrollTop);
      }
    });
  };

  const setupExperienceScroll = () => {
    const nextScrollArea = document.querySelector('.scroll-y-area');

    if (activeScrollArea !== nextScrollArea) {
      activeScrollArea?.removeEventListener('scroll', saveScrollPosition);
      activeScrollArea = nextScrollArea;
      activeScrollArea?.addEventListener('scroll', saveScrollPosition, { passive: true });
    }

    restoreScrollPosition();
  };

  document.addEventListener('astro:before-swap', flushScrollPosition);
  document.addEventListener('astro:page-load', setupExperienceScroll);
  window.addEventListener('pagehide', flushScrollPosition);
}
