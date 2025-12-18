// Layout resize logic:
// - Capture the initial viewport width on page load.
// - When the viewport shrinks below 60% of that width,
//   force the GlobalShell into a stacked view by setting
//   inline flex/column styles (overriding md:grid).
// - When it grows back above that threshold, remove the
//   inline override so the normal 3-panel grid returns.

const setupResizeLayout = () => {
  if (typeof window === 'undefined') return;

  const root = document.getElementById('global-shell-root');
  if (!root) return;

  if (root.dataset.resizeSetup === 'true') return;
  root.dataset.resizeSetup = 'true';
  
  // Use physical screen width as the reference so that
  // "60% of original width" corresponds to ~60% of the
  // monitor width, regardless of how wide the window was
  // when the page first loaded.
  const baseWidth = window.screen?.width || window.innerWidth || root.clientWidth;
  if (!baseWidth) return;

  const updateLayout = () => {
    const currentWidth = window.innerWidth || root.clientWidth || baseWidth;
    const ratio = currentWidth / baseWidth;
    const shouldStack = ratio < 0.6;

    if (shouldStack) {
      // Force stacked flex layout and allow scrolling,
      // even when Tailwind's md: classes would normally
      // lock the shell to h-screen with overflow-hidden.
      root.style.display = 'flex';
      root.style.flexDirection = 'column';
      root.style.height = 'auto';
      root.style.overflow = 'visible';
      root.dataset.layoutMode = 'stack';
    } else {
      // Let the normal Tailwind grid + h-screen/overflow-hidden
      // behavior take over again.
      root.style.display = '';
      root.style.flexDirection = '';
      root.style.height = '';
      root.style.overflow = '';
      root.dataset.layoutMode = 'grid';
    }
  };

  window.addEventListener('resize', updateLayout);
  updateLayout();
};

if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', setupResizeLayout);
  } else {
    setupResizeLayout();
  }
}
