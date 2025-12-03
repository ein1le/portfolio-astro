// Client-side helper for wiring the EmailJS contact form in the left sidebar.
import emailjs from '@emailjs/browser';

export const setupEmailForm = () => {
  const form = document.getElementById('email-contact-form');
  const sendButton = form?.querySelector<HTMLButtonElement>('[data-email-send]');
  const statusEl = form?.querySelector<HTMLElement>('[data-email-status]');
  const emailInput = document.getElementById('email-from') as HTMLInputElement | null;
  const messageInput = document.getElementById('email-message') as HTMLTextAreaElement | null;

  if (!form || !sendButton || !emailInput || !messageInput) {
    // Fallback: if something is miswired, log and optionally show a message.
    console.warn('Email form could not initialise – missing form elements.');
    if (statusEl) {
      statusEl.textContent = 'Email form is temporarily unavailable.';
    }
    return;
  }

  const SERVICE_ID =
    (import.meta.env.PUBLIC_EMAILJS_SERVICE_ID as string | undefined) ||
    'YOUR_SERVICE_ID';
  const TEMPLATE_ID =
    (import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID as string | undefined) ||
    'YOUR_TEMPLATE_ID';
  const PUBLIC_KEY =
    (import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY as string | undefined) ||
    'YOUR_PUBLIC_KEY';

  emailjs.init(PUBLIC_KEY);

  const setSendingState = (isSending: boolean) => {
    sendButton.disabled = isSending;
    sendButton.classList.toggle('opacity-50', isSending);
    if (statusEl) {
      statusEl.textContent = isSending ? 'Sending your message…' : '';
    }
  };

  console.log('[email] Initialising email form handler');

  sendButton.addEventListener('click', async () => {
    console.log('[email] Send button clicked');
    const fromEmail = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (!fromEmail || !message) {
      alert('Please enter your email and a message before sending.');
      return;
    }

    setSendingState(true);
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_email: fromEmail,
        message,
      });
      (form as HTMLFormElement).reset();
      if (statusEl) {
        statusEl.textContent = 'Message sent successfully. Thank you!';
      } else {
        alert('Message sent!');
      }
    } catch (err) {
      console.error('EmailJS error', err);
      if (statusEl) {
        statusEl.textContent =
          'Sorry, something went wrong sending your message. Please try again later.';
      } else {
        alert('Sorry, something went wrong sending your message.');
      }
    } finally {
      setSendingState(false);
    }
  });
};
