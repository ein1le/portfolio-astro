// Home page visual effects: parallax movement of the background grid.

function setupHomeEffects() {
  const container = document.getElementById('home-main-hover');
  if (!container) return;

  const handleMove = (event) => {
    const rect = container.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
      container.style.setProperty('--home-bg-x', '0px');
      container.style.setProperty('--home-bg-y', '0px');
      return;
    }

    const relX = x / rect.width - 0.5;
    const relY = y / rect.height - 0.5;
    const offsetX = -(relX * 6);
    const offsetY = -(relY * 6);

    container.style.setProperty('--home-bg-x', `${offsetX}px`);
    container.style.setProperty('--home-bg-y', `${offsetY}px`);
  };

  const handleLeave = () => {
    container.style.setProperty('--home-bg-x', '0px');
    container.style.setProperty('--home-bg-y', '0px');
  };

  container.addEventListener('mousemove', handleMove);
  container.addEventListener('mouseleave', handleLeave);
}

if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', setupHomeEffects);
}
