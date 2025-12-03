// Subtle cursor-following highlight for the home page main content.
// This implementation creates a circular "spot" element and moves it
// under the cursor within the main content window.

export const setupMainHover = () => {
  const container = document.getElementById('home-main-hover');
  if (!container) return;

  // Create the highlight spot once and reuse it.
  const spot = document.createElement('div');
  spot.className = 'home-main-hover-spot';
  container.appendChild(spot);

  const SPOT_SIZE = 420; // px – should match CSS width/height

  const handleMove = (event: MouseEvent) => {
    const rect = container.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Center the spot around the cursor
    const left = x - SPOT_SIZE / 2;
    const top = y - SPOT_SIZE / 2;

    spot.style.transform = `translate(${left}px, ${top}px)`;
    spot.style.opacity = '0.4';
  };

  const handleLeave = () => {
    spot.style.opacity = '0';
  };

  container.addEventListener('mousemove', handleMove);
  container.addEventListener('mouseleave', handleLeave);
};
