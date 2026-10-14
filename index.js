
/* ==========================================
   VEHICLE WORLD - HOMEPAGE JAVASCRIPT
   ========================================== */

document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // 1. WELCOME MESSAGE
    // ==========================================

    console.log("Welcome to Vehicle World! 🚗");


    // ==========================================
    // 2. INTERACTIVE VEHICLE CARDS
    // ==========================================

    const vehicleCards = document.querySelectorAll(".card");

    vehicleCards.forEach(function (card) {

        const fact = card.querySelector(".fun-fact");

        // Skip cards without a fun fact
        if (!fact) {
            return;
        }

        // Set initial accessibility state
        card.style.cursor = "pointer";
        card.setAttribute("tabindex", "0");
        card.setAttribute("role", "button");
        card.setAttribute("aria-expanded", "false");

        // Show or hide the fun fact
        function toggleFact() {

            const isHidden = fact.hidden;

            fact.hidden = !isHidden;

            card.setAttribute(
                "aria-expanded",
                String(isHidden)
            );

        }

        // Mouse click
        card.addEventListener("click", function () {
            toggleFact();
        });

        // Keyboard: Enter or Space
        card.addEventListener("keydown", function (event) {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {
                event.preventDefault();
                toggleFact();
            }

        });

    });


    // ==========================================
    // 3. START LEARNING BUTTON
    // ==========================================

    const startButton = document.querySelector(".start-button");

    if (startButton) {

        startButton.addEventListener("click", function () {
            console.log("Starting Learning 1...");
        });

    }


    // ==========================================
    // 4. QUIZ BUTTONS
    // ==========================================

    const quizButtons = document.querySelectorAll(".quiz-button");

    quizButtons.forEach(function (button) {

        button.addEventListener("click", function () {
            console.log("Opening quiz:", button.textContent.trim());
        });

    });


    // ==========================================
    // 5. NAVIGATION ACTIVE LINK
    // ==========================================

    const currentPage = window.location.pathname
        .split("/")
        .pop()
        .toLowerCase();

    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(function (link) {

        const linkPage = link.getAttribute("href");

        if (
            linkPage &&
            linkPage.toLowerCase() === currentPage
        ) {
            link.classList.add("active");
        }

    });

});
