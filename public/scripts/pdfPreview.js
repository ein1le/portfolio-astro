// Small hover PDF preview for buttons with `data-pdf-preview-url`.
// Plain JS version served from /public so it works in production without bundling.

const PREVIEW_ID = 'pdf-preview';
const PREVIEW_WIDTH = 220; // px
const PREVIEW_HEIGHT = 310; // ~ A4 aspect ratio
const PREVIEW_MARGIN = 12; // distance above cursor

function ensurePreview() {
  let container = document.getElementById(PREVIEW_ID);
  if (container) return container;

  container = document.createElement('div');
  container.id = PREVIEW_ID;
  Object.assign(container.style, {
    position: 'fixed',
    width: `${PREVIEW_WIDTH}px`,
    height: `${PREVIEW_HEIGHT}px`,
    backgroundColor: '#020617',
    borderRadius: '0.75rem',
    border: '1px solid rgba(148,163,184,0.4)',
    boxShadow: '0 18px 40px rgba(15,23,42,0.9)',
    overflow: 'hidden',
    zIndex: '60',
    display: 'none',
    pointerEvents: 'none',
  });

  const img = document.createElement('img');
  img.id = 'pdf-preview-image';
  img.alt = 'Document preview';
  Object.assign(img.style, {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  });

  container.appendChild(img);
  document.body.appendChild(container);

  return container;
}

function positionPreview(x, y) {
  const container = ensurePreview();
  const width = PREVIEW_WIDTH;
  const height = PREVIEW_HEIGHT;

  let left = x - width / 2;
  let top = y - height - PREVIEW_MARGIN;

  const maxLeft = window.innerWidth - width - 8;
  if (left < 8) left = 8;
  if (left > maxLeft) left = maxLeft;

  if (top < 8) top = 8;

  container.style.left = `${left}px`;
  container.style.top = `${top}px`;
}

function showPreview(url, x, y) {
  const container = ensurePreview();
  const img = container.querySelector('#pdf-preview-image');
  if (img && img.src !== url) {
    img.src = url;
  }
  positionPreview(x, y);
  container.style.display = 'block';
}

function hidePreview() {
  const container = document.getElementById(PREVIEW_ID);
  if (container) {
    container.style.display = 'none';
  }
}

function setupPdfPreview() {
  const triggers = document.querySelectorAll('[data-pdf-preview-url]');
  if (!triggers.length) return;

  triggers.forEach((trigger) => {
    const getUrl = () => trigger.getAttribute('data-pdf-preview-url');

    trigger.addEventListener('mousemove', (event) => {
      const url = getUrl();
      if (!url) return;
      showPreview(url, event.clientX, event.clientY);
    });

    trigger.addEventListener('mouseenter', (event) => {
      const url = getUrl();
      if (!url) return;
      const e = event;
      showPreview(url, e.clientX, e.clientY);
    });

    trigger.addEventListener('mouseleave', () => {
      hidePreview();
    });

    trigger.addEventListener('focus', () => {
      const url = getUrl();
      if (!url) return;
      const rect = trigger.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const topY = rect.top;
      showPreview(url, centerX, topY);
    });

    trigger.addEventListener('blur', () => {
      hidePreview();
    });
  });
}

if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', setupPdfPreview);
  } else {
    setupPdfPreview();
  }
}

