// Barrel file for layout components
// TODO: Refine exports as layout API stabilizes

export { default as GlobalShell } from './GlobalShell.astro';
export { default as Navbar } from './Navbar.astro';
export { default as LeftSidebar } from './LeftSidebar.astro';
export { default as RightSidebar } from './RightSidebar.astro';

// Data / config
export * as navbarLinks from './styles/navbarLinks';
