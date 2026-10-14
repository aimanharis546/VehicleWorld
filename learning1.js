
/* ========================================
   VEHICLE WORLD - LEARNING JAVASCRIPT
   Used by Learning 1 and Learning 2
   ======================================== */

document.addEventListener("DOMContentLoaded", function () {

    // ========================================
    // 1. VEHICLE FUN FACTS
    // ========================================

    const vehicleFacts = {
        "Car": "🚗 Fun fact: Most cars have four wheels and use roads to travel!",
        "Bus": "🚌 Fun fact: A bus can carry many passengers in one trip!",
        "Police Car": "🚓 Fun fact: Police cars can use sirens and flashing lights during emergencies!",
        "Ambulance": "🚑 Fun fact: An ambulance carries patients and provides emergency medical help!",
        "Fire Truck": "🚒 Fun fact: Fire trucks carry equipment that firefighters use to fight fires!",
        "Motorcycle": "🏍️ Fun fact: A motorcycle usually has two wheels. Always wear a helmet!",
        "Boat": "🚤 Fun fact: Boats can float on water and come in different sizes!",
        "Ship": "🚢 Fun fact: Some ships can carry hundreds of containers!",
        "Submarine": "🌊 Fun fact: A submarine is designed to travel underwater!",
        "Airplane": "✈️ Fun fact: Airplanes use wings to help them fly through the sky!",
        "Helicopter": "🚁 Fun fact: A helicopter uses rotating blades to fly and hover!",
        "Train": "🚆 Fun fact: Trains travel on railway tracks and can carry many passengers!"
    };


    // ========================================
    // 2. INTERACTIVE VEHICLE CARDS
    // ========================================

    const cards = document.querySelectorAll(".card");

    cards.forEach(function (card) {

        const title = card.querySelector("h3");

        if (!title) {
            return;
        }

        const vehicleName = title.textContent.trim();

        // Avoid adding duplicate information if initialized again
        let extraInfo = card.querySelector(".extra-info");

        if (!extraInfo) {
            extraInfo = document.createElement("p");
            extraInfo.className = "extra-info";
            extraInfo.textContent =
                vehicleFacts[vehicleName] ||
                "🌟 Keep exploring and learning about vehicles!";

            extraInfo.hidden = true;
            card.appendChild(extraInfo);
        }

        // Make card keyboard accessible
        card.setAttribute("role", "button");
        card.setAttribute("tabindex", "0");
        card.setAttribute("aria-expanded", "false");
        card.setAttribute(
            "aria-label",
            "Learn more about " + vehicleName
        );

        // Show or hide additional information
        function toggleInformation() {

            extraInfo.hidden = !extraInfo.hidden;

            card.setAttribute(
                "aria-expanded",
                String(!extraInfo.hidden)
            );

        }

        // Mouse or touch click
        card.addEventListener("click", function () {
            toggleInformation();
        });

        // Keyboard interaction
        card.addEventListener("keydown", function (event) {

            // Prevent keyboard interaction from firing twice
            // when the card is activated with Enter or Space
            if (event.target !== card) {
                return;
            }

            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                toggleInformation();
            }

        });

    });


    // ========================================
    // 3. HIGHLIGHT CURRENT NAVIGATION LINK
    // ========================================

    const currentPage = window.location.pathname
        .split("/")
        .pop()
        .toLowerCase();

    const navLinks = document.querySelectorAll(".navbar a");

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

    console.log("Vehicle World Learning page loaded!");

});
