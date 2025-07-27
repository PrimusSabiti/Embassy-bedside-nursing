// Embassy Bedside Nursing and Homecare Services Scripts

// Simple mobile menu toggle with animation and accessibility
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');
if (mobileMenu && navLinks) {
  mobileMenu.setAttribute('tabindex', '0');
  mobileMenu.setAttribute('aria-label', 'Open main menu');
  mobileMenu.setAttribute('role', 'button');
  mobileMenu.addEventListener('click', function() {
    if (navLinks.style.display === 'flex') {
      navLinks.style.maxHeight = '0';
      setTimeout(() => navLinks.style.display = 'none', 400);
    } else {
      navLinks.style.display = 'flex';
      navLinks.style.maxHeight = '500px';
    }
  });
  // Keyboard accessibility
  mobileMenu.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      mobileMenu.click();
    }
  });
}

// Smooth scrolling for anchor links
if (document.querySelectorAll('a[href^="#"]').length) {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// Form submission handling
// Book a Service form: send to WhatsApp
const bookForm = document.querySelector('form[aria-label="Book a Service"]');
if (bookForm) {
  bookForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const location = document.getElementById('location').value.trim();
    // Get selected service from dropdown
    const serviceSelect = document.getElementById('service');
    const serviceText = serviceSelect.options[serviceSelect.selectedIndex].text;
    const date = document.getElementById('date').value;
    const message = document.getElementById('message').value.trim();
    const whatsappNumber = '256770654840'; // International format, no +
    const text =
      `Hello Embassy Bedside Nursing Team,%0A%0A` +
      `I would like to book a service. Here are my details:%0A%0A` +
      `👤 Name: ${name}%0A` +
      `📞 Phone: ${phone}%0A` +
      `📍 Location: ${location}%0A` +
      `🩺 Service Needed: ${serviceText}%0A` +
      `📅 Preferred Date: ${date}%0A` +
      `📝 Additional Info: ${message}%0A%0A` +
      `Thank you!`;
    const url = `https://wa.me/${whatsappNumber}?text=${text}`;
    window.open(url, '_blank');
    this.reset();
  });
}

// Contact form: show alert
const contactForm = document.querySelector('form[aria-label="Contact Form"]');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message. We will contact you shortly!');
    this.reset();
  });
}

// Fade-in animation on scroll for main sections
function fadeInOnScroll() {
  document.querySelectorAll('.fade-in').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.style.animationDelay = '0.1s';
      el.classList.add('animated');
      el.style.opacity = 1;
      el.style.transform = 'none';
    }
  });
}
window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('DOMContentLoaded', () => {
  // Add fade-in class to main sections
  ['.hero', '.services', '.about', '.testimonials', '.faq', '.team', '.blog', '.reviews-certifications', '.contact'].forEach(sel => {
    document.querySelectorAll(sel).forEach(el => el.classList.add('fade-in'));
  });
  fadeInOnScroll();
});

// Toast feedback for Book this Service buttons
function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}
document.querySelectorAll('.service-card .btn-small').forEach(btn => {
  btn.addEventListener('click', function() {
    showToast('WhatsApp will open to complete your booking.');
  });
});
// Ensure skip link is focusable
const skipLink = document.querySelector('.skip-link');
if (skipLink) {
  skipLink.addEventListener('click', function(e) {
    const main = document.getElementById('main-content');
    if (main) main.setAttribute('tabindex', '-1');
    setTimeout(() => main && main.focus(), 10);
  });
}
// Animate section titles on scroll
function animateSectionTitles() {
  document.querySelectorAll('.section-title h2').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.style.animationPlayState = 'running';
    }
  });
}
window.addEventListener('scroll', animateSectionTitles);
window.addEventListener('DOMContentLoaded', animateSectionTitles); 