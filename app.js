const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

// Set header background depending on scroll position
function updateHeaderBackground() {
    if (window.scrollY > 20) {
        header.style.backgroundColor = '#191919';
    } else {
        header.style.backgroundColor = 'transparent';
    }
}

// Hamburger menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

// Update header background on scroll
window.addEventListener('scroll', updateHeaderBackground);

// Set header background correctly on page load
window.addEventListener('DOMContentLoaded', updateHeaderBackground);

menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});