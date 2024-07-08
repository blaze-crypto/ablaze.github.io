document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');
  
    function showSection(id) {
      sections.forEach(section => {
        section.style.display = section.id === id ? 'block' : 'none';
      });
    }
  
    navLinks.forEach(link => {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        showSection(targetId);
        navLinks.forEach(navLink => navLink.classList.remove('active'));
        this.classList.add('active');
      });
    });
  
    showSection('home');
  });
  