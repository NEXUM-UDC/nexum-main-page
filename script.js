// Smooth nav active state on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__links a');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.nav__links a[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => observer.observe(s));

// Form submit feedback
const form = document.querySelector('.contact__form');
form.addEventListener('submit', e => {
  e.preventDefault();
  const btn = form.querySelector('button');
  btn.textContent = 'Submitted!';
  btn.disabled = true;
  btn.style.opacity = '0.7';
});
