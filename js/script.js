// Hero role text cycle.
// Figma's "Homepage Hero Box" component has 3 variants — Designer / Bioengineer / Both —
// which reads as a cycling-text animation on the live site. No keyframe/easing data was
// stored in Figma for it, so this recreates it as a simple, accessible cross-fade.
const heroRoleWord = document.getElementById('hero-role-word');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (heroRoleWord && !prefersReducedMotion) {
  // Figma's "Both" variant renders as "Designer • Bioengineer" (teal dot divider),
  // not the literal word "Both" — matched here via get_design_context on node 309:7343.
  const roles = ['Designer', 'Bioengineer', 'Designer<span class="hero-role-dot" aria-hidden="true"></span>Bioengineer'];
  let roleIndex = 0;

  setInterval(() => {
    heroRoleWord.classList.add('is-swapping');
    setTimeout(() => {
      roleIndex = (roleIndex + 1) % roles.length;
      heroRoleWord.innerHTML = roles[roleIndex];
      heroRoleWord.classList.remove('is-swapping');
    }, 500); // matches the CSS transition duration
  }, 2800);
}

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.getElementById('site-nav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close mobile menu after a nav link is tapped
  siteNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Highlight the current section's nav link while scrolling
const sections = document.querySelectorAll('main section[id], header');
const navLinks = document.querySelectorAll('.site-nav a');

const setActiveLink = () => {
  let currentId = 'top';
  const scrollY = window.scrollY + 120;

  document.querySelectorAll('section[id]').forEach(section => {
    if (scrollY >= section.offsetTop) {
      currentId = section.id;
    }
  });

  navLinks.forEach(link => {
    const targetId = link.getAttribute('href').replace('#', '');
    link.classList.toggle('is-active', targetId === currentId);
  });
};

window.addEventListener('scroll', setActiveLink, { passive: true });
setActiveLink();

// Contact form: placeholder submit handling.
// Replace this with a real endpoint (e.g. Formspree, Netlify Forms, or your own backend)
// before publishing, since GitHub Pages cannot process form submissions on its own.
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    alert(`Thanks! This form isn't wired up to send yet — connect it to a service like Formspree or Netlify Forms so messages from ${email} actually reach you.`);
    contactForm.reset();
  });
}
