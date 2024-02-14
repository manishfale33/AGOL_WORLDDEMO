window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar-area');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 0) {
        navbar.classList.add('is-sticky');
    } else {
        navbar.classList.remove('is-sticky');
    }
});
