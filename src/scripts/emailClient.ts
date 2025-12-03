// Small client entry that wires the email form on the left sidebar.
import { setupEmailForm } from './email';

if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', () => {
    setupEmailForm();
  });
}

