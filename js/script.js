const form = document.getElementById('contactForm');
const yearElement = document.getElementById('year');

yearElement.textContent = new Date().getFullYear();

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const company = document.getElementById('company').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !company || !message) {
    alert('Please complete all fields before sending.');
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert('Please provide a valid work email address.');
    return;
  }

  alert('Thanks! Your inquiry has been recorded. We will contact you shortly.');
  form.reset();
});
