document.addEventListener("DOMContentLoaded", function () {
    let prevScrollPos = window.pageYOffset;
    const navbar = document.querySelector('.navbar-area');

    window.addEventListener('scroll', function () {
        const currentScrollPos = window.pageYOffset;

        if (prevScrollPos > currentScrollPos) {
            // Scrolling up
            navbar.classList.remove('navbar-hidden');
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'; // Adjust alpha value as needed
        } else {
            // Scrolling down
            navbar.classList.add('navbar-hidden');
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 1)'; // Set to fully opaque or adjust as needed
        }

        prevScrollPos = currentScrollPos;
    });
});
