let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

// Toggle menu and navbar on menu button click
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

// Remove active class on scroll
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    // Sticky navbar on scroll
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 0);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
