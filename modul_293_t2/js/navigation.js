// Toggle between bars and close icon
function toggleBurgerMenu() {
    const burgerIcon = document.querySelector('#burger-icon .fa-bars');
    const closeIcon = document.querySelector('#burger-icon .fa-close');
    const menu = document.getElementById('burger-menu');

    if (burgerIcon.style.display === 'none') {
        burgerIcon.style.display = 'block';
        closeIcon.style.display = 'none';
        menu.classList.remove('menu-open');
    } else {
        burgerIcon.style.display = 'none';
        closeIcon.style.display = 'block';
        menu.classList.add('menu-open');
    }
}

// Reset icons when a link is clicked
function resetBurgerMenu() {
    const burgerIcon = document.querySelector('#burger-icon .fa-bars');
    const closeIcon = document.querySelector('#burger-icon .fa-close');
    const menu = document.getElementById('burger-menu');

    // Reset to initial state (bars visible, close hidden)
    burgerIcon.style.display = 'block';
    closeIcon.style.display = 'none';
    menu.classList.remove('menu-open');
}

// Add event listeners to all links in the burger menu
document.querySelectorAll('#burger-menu a').forEach(link => {
    link.addEventListener('click', function () {
        resetBurgerMenu();
    });
});

// Hide navigation bar on scroll down
function hideNav() {
    let lastScrollTop = 0;
    const navbar = document.getElementById('nav');
    const burgerMenu = document.getElementById('burger-menu');

    window.addEventListener('scroll', function () {

        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            navbar.classList.add('nav-hidden');
            burgerMenu.classList.remove('menu-open');
            resetBurgerMenu(); // Reset icon when scrolling down
        } else if (scrollTop < lastScrollTop) {
            navbar.classList.remove('nav-hidden');
            burgerMenu.classList.remove('menu-open');
            resetBurgerMenu(); // Reset icon when scrolling up
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
}
