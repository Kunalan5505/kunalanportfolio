const header = document.querySelector('.site-header');
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const glow = document.querySelector('.cursor-glow');

window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 20));
menuBtn.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

window.addEventListener('pointermove', e => {
  if (!glow) return;
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
});
