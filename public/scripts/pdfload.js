// Client script to render PDFs in an in-page popup overlay
// with an embedded iframe and publication metadata.

import { getInitials } from './nameinitials.js';

const OVERLAY_ID = 'pdf-overlay';

function ensureOverlay() {
  let overlay = document.getElementById(OVERLAY_ID);
  if (overlay) return overlay;

  overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  overlay.className =
    'fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm';

  overlay.innerHTML = `
    <div class="relative w-[92vw] max-w-4xl h-[82vh] rounded-xl border border-[color:var(--border-subtle)] bg-slate-950/95 shadow-2xl flex flex-col overflow-hidden">
      <header class="flex items-start justify-between gap-3 border-b border-[color:var(--border-subtle)] bg-slate-900/90 px-4 py-2.5">
        <div class="min-w-0">
          <h2
            id="pdf-title"
            class="truncate text-[0.8rem] font-semibold text-[color:var(--text-main)]"
          >
            Publication title
          </h2>
          <p
            id="pdf-course"
            class="mt-0.5 line-clamp-2 text-[0.7rem] text-[color:var(--text-muted)]"
          >
            Course code / subtitle
          </p>
        </div>
        <div class="flex flex-col items-end gap-0.5 text-right text-[0.7rem]">
          <div class="flex items-center gap-2">
            <p id="pdf-date" class="text-[color:var(--text-main)]">
              Date
            </p>
            <button
              type="button"
              class="flex h-6 w-6 items-center justify-center rounded-full border border-[color:var(--border-subtle)] bg-slate-900/80 text-xs text-[color:var(--text-main)] hover:bg-slate-800"
              aria-label="Close"
              data-pdf-close
            >
              ×
            </button>
          </div>
          <div
            id="pdf-authors"
            class="flex max-w-xs flex-wrap justify-end gap-1.5"
          ></div>
        </div>
      </header>
      <main class="flex flex-1 flex-col gap-2 px-3 pb-3 pt-2">
        <section
          id="pdf-description"
          class="text-[0.72rem] leading-relaxed text-[color:var(--text-muted)]"
        >
          Description
        </section>
        <section class="frame-shell flex-1 overflow-hidden rounded-lg border border-[color:var(--border-subtle)] bg-slate-900/80">
          <iframe
            id="pdf-frame"
            class="h-full w-full"
            src=""
            title="PDF preview"
          ></iframe>
        </section>
      </main>
    </div>
  `;

  document.body.appendChild(overlay);

  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
      overlay.classList.add('hidden');
    }
  });

  const closeButton = overlay.querySelector('[data-pdf-close]');
  closeButton && closeButton.addEventListener('click', () => {
    overlay.classList.add('hidden');
  });

  return overlay;
}

function openPdf(url, meta = {}) {
  const overlay = ensureOverlay();
  const frame = overlay.querySelector('#pdf-frame');
  const titleEl = overlay.querySelector('#pdf-title');
  const courseEl = overlay.querySelector('#pdf-course');
  const dateEl = overlay.querySelector('#pdf-date');
  const authorsEl = overlay.querySelector('#pdf-authors');
  const descEl = overlay.querySelector('#pdf-description');

  if (frame) {
    frame.src = url;
  }
  if (titleEl && meta.title) {
    titleEl.textContent = meta.title;
  }
  if (courseEl) {
    courseEl.textContent = meta.course || '';
  }
  if (dateEl) {
    dateEl.textContent = meta.date || '';
  }
  if (authorsEl) {
    authorsEl.textContent = '';
    if (meta.authors) {
      const parts = meta.authors
        .split(',')
        .map((name) => name.trim())
        .filter(Boolean);

      parts.forEach((name) => {
        const initials = getInitials(name);
        if (!initials) return;
        const bubble = document.createElement('span');
        bubble.className =
          'flex h-6 w-6 items-center justify-center rounded-full border border-[color:var(--border-subtle)] bg-slate-900/80 text-[0.65rem] font-semibold text-[color:var(--text-main)]';
        bubble.title = name;
        bubble.textContent = initials;
        authorsEl.appendChild(bubble);
      });
    }
  }
  if (descEl) {
    descEl.textContent = meta.description || '';
  }

  overlay.classList.remove('hidden');
}

function setupPdfLinks() {
  const triggers = document.querySelectorAll('[data-pdf-load]');
  triggers.forEach((trigger) => {
    trigger.addEventListener('click', (event) => {
      event.preventDefault();

      const url = trigger.getAttribute('data-pdf-url');
      if (!url) return;

      const meta = {
        title: trigger.getAttribute('data-pdf-title'),
        course: trigger.getAttribute('data-pdf-course'),
        authors: trigger.getAttribute('data-pdf-authors'),
        description: trigger.getAttribute('data-pdf-description'),
        date: trigger.getAttribute('data-pdf-date'),
      };
      openPdf(url, meta);
    });
  });
}

if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', setupPdfLinks);
  } else {
    setupPdfLinks();
  }
}

