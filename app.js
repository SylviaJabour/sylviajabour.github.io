const hamburgerIcon = document.getElementById('hamburger-icon');
const hamburgerMenu = document.getElementById('hamburger-menu');

hamburgerIcon.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('navigation-header__menu--open');
    hamburgerIcon.classList.toggle('navigation-header__hamburger--open');
});

