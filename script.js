const navbarToggle = document.getElementById('navbar-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        navbarToggle.addEventListener('change', function() {
            mobileMenu.classList.toggle('active');
            mobileMenu.classList.toggle('hidden');
        });
        const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    scrollToSection(targetSection);
  });
});
function scrollToSection(section) {
  section.scrollIntoView({
    behavior: 'smooth'
  });
}
document.getElementById('navbar-toggle').addEventListener('click', function() {
  var navbarMenu = document.getElementById('mobile-menu');
  navbarMenu.classList.toggle('show');
});