document.addEventListener("DOMContentLoaded", function () {

    const menuBtn = document.getElementById("menuBtn");
    const navbar = document.getElementById("navbar");

    // Mobile Menu
    if (menuBtn && navbar) {

        menuBtn.addEventListener("click", function () {

            navbar.classList.toggle("show");

        });

    }


    // Current Year
    const year = document.getElementById("year");

    if (year) {

        year.textContent = new Date().getFullYear();

    }


    // Close mobile menu after clicking
    const navLinks = document.querySelectorAll(".navbar a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (navbar) {
                navbar.classList.remove("show");
            }

        });

    });

});