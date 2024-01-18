document.addEventListener("DOMContentLoaded", function () {
    let prevScrollPos = window.pageYOffset;
    const navbar = document.querySelector('.navbar-area');

    window.addEventListener('scroll', function () {
        const currentScrollPos = window.pageYOffset;

        if (prevScrollPos > currentScrollPos) {
            // Scrolling up
            navbar.classList.remove('navbar-hidden');
        } else {
            // Scrolling down
            navbar.classList.add('navbar-hidden');
        }

        prevScrollPos = currentScrollPos;
    });
});