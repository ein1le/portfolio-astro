// Small hover PDF preview for buttons with `data-pdf-preview-url`.
// Plain JS version served from /public so it works in production without bundling.

const PREVIEW_ID = 'pdf-preview';
const PREVIEW_WIDTH = 260; // px
const PREVIEW_FALLBACK_HEIGHT = 260; // used before image has a measured height
const PREVIEW_MARGIN = 12; // distance above cursor

function ensurePreview() {
  let container = document.getElementById(PREVIEW_ID);
  if (container) return container;

  container = document.createElement('div');
  container.id = PREVIEW_ID;
  Object.assign(container.style, {
    position: 'fixed',
    width: `${PREVIEW_WIDTH}px`,
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
    height: 'auto',
    maxHeight: '360px',
    objectFit: 'contain',
    display: 'block',
  });

  const frame = document.createElement('iframe');
  frame.id = 'pdf-preview-frame';
  frame.title = 'Document preview';
  Object.assign(frame.style, {
    width: '100%',
    height: '360px',
    border: 'none',
    display: 'none',
  });

  container.appendChild(img);
  container.appendChild(frame);
  document.body.appendChild(container);

  return container;
}

function positionPreview(x, y) {
  const container = ensurePreview();
  const width = PREVIEW_WIDTH;
  const height =
    container.offsetHeight && container.offsetHeight > 0
      ? container.offsetHeight
      : PREVIEW_FALLBACK_HEIGHT;

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
  const frame = container.querySelector('#pdf-preview-frame');
  const isPdf = /\.pdf(?:$|[?#])/i.test(url);

  if (img instanceof HTMLImageElement) {
    img.style.display = isPdf ? 'none' : 'block';
    if (!isPdf && img.dataset.previewUrl !== url) {
      img.src = url;
      img.dataset.previewUrl = url;
    }
  }
  if (frame instanceof HTMLIFrameElement) {
    frame.style.display = isPdf ? 'block' : 'none';
    if (isPdf && frame.dataset.previewUrl !== url) {
      frame.src = url;
      frame.dataset.previewUrl = url;
    }
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
  if (window.__pdfPreviewSetup) return;
  window.__pdfPreviewSetup = true;

  const getTrigger = (target) =>
    target instanceof Element ? target.closest('[data-pdf-preview-url]') : null;

  const showFromEvent = (event) => {
    const trigger = getTrigger(event.target);
    const url = trigger?.getAttribute('data-pdf-preview-url');
    if (url) showPreview(url, event.clientX, event.clientY);
  };

  document.addEventListener('mousemove', showFromEvent);
  document.addEventListener('mouseover', showFromEvent);
  document.addEventListener('mouseout', (event) => {
    const trigger = getTrigger(event.target);
    if (trigger && !trigger.contains(event.relatedTarget)) hidePreview();
  });
  document.addEventListener('focusin', (event) => {
    const trigger = getTrigger(event.target);
    const url = trigger?.getAttribute('data-pdf-preview-url');
    if (!url || !trigger) return;
    const rect = trigger.getBoundingClientRect();
    showPreview(url, rect.left + rect.width / 2, rect.top);
  });
  document.addEventListener('focusout', hidePreview);
}

if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', setupPdfPreview);
  } else {
    setupPdfPreview();
  }
}
