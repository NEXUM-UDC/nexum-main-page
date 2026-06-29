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

// Auth tab switching
function switchTab(tab, el) {
  document.getElementById('signinForm').style.display = tab === 'signin' ? 'flex' : 'none';
  document.getElementById('signupForm').style.display = tab === 'signup' ? 'flex' : 'none';
  document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('auth-tab--active'));
  el.classList.add('auth-tab--active');
}

