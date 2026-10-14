
/* ==========================================
   VEHICLE WORLD - ABOUT PAGE JAVASCRIPT
   ========================================== */

document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // 1. WELCOME MESSAGE
    // ==========================================

    console.log("Welcome to the Vehicle World About page! 🚗");


    // ==========================================
    // 2. HIGHLIGHT CURRENT NAVIGATION LINK
    // ==========================================

    const navLinks = document.querySelectorAll(".nav-links a");

    const currentPage = window.location.pathname
        .split("/")
        .pop()
        .toLowerCase();

    navLinks.forEach(function (link) {

        const linkPage = link.getAttribute("href");

        if (
            linkPage &&
            linkPage.toLowerCase() === currentPage
        ) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        } else {
            link.classList.remove("active");
            link.removeAttribute("aria-current");
        }

    });


    // ==========================================
    // 3. ABOUT CARDS HOVER INTERACTION
    // ==========================================

    const aboutCards = document.querySelectorAll(".about-card");

    aboutCards.forEach(function (card) {

        card.addEventListener("mouseenter", function () {
            card.classList.add("card-hover");
        });

        card.addEventListener("mouseleave", function () {
            card.classList.remove("card-hover");
        });

    });


    // ==========================================
    // 4. EXPLORE BUTTON MESSAGE
    // ==========================================

    const exploreButtons = document.querySelectorAll(
        ".start-button, .explore-button"
    );

    exploreButtons.forEach(function (button) {

        button.addEventListener("click", function () {
            console.log(
                "Opening page: " + button.textContent.trim()
            );
        });

    });

});
