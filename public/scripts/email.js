// EmailJS-based contact form wiring for the left sidebar.
// Plain JS version served from /public/scripts so it works in production.
// Expects the EmailJS browser SDK UMD bundle to be loaded separately:
// <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>

function setupEmailForm() {
  const emailjs = window.emailjs;
  if (!emailjs) {
    console.warn('EmailJS SDK not found on window.emailjs – contact form disabled.');
    return;
  }
  const form = document.getElementById('email-contact-form');
  const sendButton = form && form.querySelector('[data-email-send]');
  const statusEl = form && form.querySelector('[data-email-status]');
  const emailInput = document.getElementById('email-from');
  const messageInput = document.getElementById('email-message');

  if (!form || !sendButton || !emailInput || !messageInput) {
    console.warn('Email form could not initialise – missing form elements.');
    if (statusEl) {
      statusEl.textContent = 'Email form is temporarily unavailable.';
    }
    return;
  }

  // TODO: Replace these placeholders with your actual EmailJS public credentials.
  const SERVICE_ID = 'YOUR_SERVICE_ID';
  const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
  const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

  emailjs.init(PUBLIC_KEY);

  const setSendingState = (isSending) => {
    sendButton.disabled = isSending;
    sendButton.classList.toggle('opacity-50', isSending);
    if (statusEl) {
      statusEl.textContent = isSending ? 'Sending your message…' : '';
    }
  };

  sendButton.addEventListener('click', async () => {
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
      form.reset();
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
}

if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', setupEmailForm);
  } else {
    setupEmailForm();
  }
}
