document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = "#0678";//
        } else {
            navbar.style.backgroundColor = "#fff";
        }
    });
});
