document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        var header = document.querySelector('.navbar-area');
        header.classList.toggle('sticky', window.scrollY > 0);
    });
});