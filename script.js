// Smooth scroll for navigation
document.querySelectorAll('nav ul a').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if(target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Basic form submission
document.getElementById('contactForm').onsubmit = function(e) {
    e.preventDefault();
    alert('Thank you for reaching out!');
    this.reset();
};