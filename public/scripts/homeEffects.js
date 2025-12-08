// Home page visual effects:
// 1. Subtle purple cursor glow that follows the mouse within the main window.
// 2. Parallax movement of the background grid.

function setupHomeEffects() {
  const container = document.getElementById('home-main-hover');
  if (!container) return;

  const glow = document.createElement('div');
  glow.className = 'home-cursor-glow';
  document.body.appendChild(glow);

  const GLOW_SIZE = 320;

  const handleMove = (event) => {
    const rect = container.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
      glow.style.opacity = '0';
      return;
    }

    const left = event.clientX - GLOW_SIZE / 2;
    const top = event.clientY - GLOW_SIZE / 2;
    glow.style.transform = `translate(${left}px, ${top}px)`;
    glow.style.opacity = '0.5';

    const relX = x / rect.width - 0.5;
    const relY = y / rect.height - 0.5;
    const offsetX = -(relX * 16);
    const offsetY = -(relY * 16);

    container.style.setProperty('--home-bg-x', `${offsetX}px`);
    container.style.setProperty('--home-bg-y', `${offsetY}px`);
  };

  const handleLeave = () => {
    glow.style.opacity = '0';
    container.style.setProperty('--home-bg-x', '0px');
    container.style.setProperty('--home-bg-y', '0px');
  };

  container.addEventListener('mousemove', handleMove);
  container.addEventListener('mouseleave', handleLeave);
}

if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', setupHomeEffects);
}

