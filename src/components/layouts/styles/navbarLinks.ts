// Central list of navbar links so they can be reused or generated dynamically later.
// TODO: Extend with icons, active states, or section metadata as needed.

export const navbarLinks = [
  { href: '/', label: 'Home' },
  { href: '/education', label: 'Education' },
  { href: '/stack', label: 'Stack' },
  { href: '/timeline', label: 'Timeline' },
  // Clicking "Experiences" should open the Professional experiences page by default.
  { href: '/experiences/professional', label: 'Experiences' },
  { href: '/projects', label: 'Projects' },
];
