/* ==========================================
   VEHICLE WORLD - QUIZ 1 JAVASCRIPT
   ========================================== */


/* ==========================================
   CHECK ANSWERS
   ========================================== */

function CheckAnswer() {

    let score = 0;
    let totalQuestions = 5;

    // Correct answers for Quiz 1
    let answers = {
        Q1: "true",
        Q2: "true",
        Q3: "true",
        Q4: "true",
        Q5: "true"
    };

    // Check each question
    for (let question in answers) {

        // Find the selected answer
        let selected = document.querySelector(
            'input[name="' + question + '"]:checked'
        );

        // Find the correct answer
        let correctRadio = document.querySelector(
            'input[name="' + question + '"][value="' +
            answers[question] + '"]'
        );

        // Highlight the correct answer
        showMark(correctRadio, true);

        // Count the score
        if (selected && selected.value === answers[question]) {

            score++;

        } else if (selected) {

            // Highlight the selected wrong answer
            showMark(selected, false);

        }

    }

    // Save the score for Quiz 1
    sessionStorage.setItem("quiz1Score", score);

    // Display the result
    let result = document.getElementById("result");

    if (result) {

        if (score === totalQuestions) {

            result.innerHTML =
                "🎉 Excellent! You got " + score +
                "/" + totalQuestions + " correct! Perfect score!";

            result.style.color = "#2e9e4f";
            result.style.backgroundColor = "#d4f5dd";

        } else if (score >= 7) {

            result.innerHTML =
                "🌟 Great job! You got " + score +
                "/" + totalQuestions + " correct!";

            result.style.color = "#2878c8";
            result.style.backgroundColor = "#dff4ff";

        } else {

            result.innerHTML =
                "💪 Good try! You got " + score +
                "/" + totalQuestions +
                " correct. Keep learning and try again!";

            result.style.color = "#b86a00";
            result.style.backgroundColor = "#fff0d6";

        }

    }

    // Disable all radio buttons after submission
    document.querySelectorAll('input[type="radio"]').forEach(
        function (radio) {
            radio.disabled = true;
        }
    );

    // Disable the Check Answer button
    let checkButton = document.querySelector(".check-button");

    if (checkButton) {
        checkButton.disabled = true;
    }

}


/* ==========================================
   SHOW CORRECT AND WRONG ANSWERS
   ========================================== */

function showMark(radio, isCorrect) {

    if (!radio) {
        return;
    }

    // Find the label containing the radio button
    let option = radio.closest("label");

    if (!option) {
        return;
    }

    // Add the correct or wrong CSS class
    option.classList.add(isCorrect ? "correct" : "wrong");

    // Create the answer mark
    let mark = document.createElement("span");

    mark.className = "mark";
    mark.textContent = isCorrect ? "✅" : "❌";
    mark.setAttribute("aria-label", isCorrect ? "Correct answer" : "Wrong answer");

    // Add the mark to the option
    option.appendChild(mark);

}


/* ==========================================
   GO TO QUIZ 2
   ========================================== */

function goToNextQuiz() {

    window.location.href = "quiz2.html";

}


/* ==========================================
   RESET QUIZ
   ========================================== */

function TakeQuizAgain() {

    // Clear the score for Quiz 1
    sessionStorage.removeItem("quiz1Score");

    // Reload the page to reset the quiz
    window.location.reload();

}


/* ==========================================
   HIGHLIGHT CURRENT NAVIGATION LINK
   ========================================== */

document.addEventListener("DOMContentLoaded", function () {

    let currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll("nav a").forEach(function (link) {

        let href = link.getAttribute("href");

        if (href === currentPage) {

            link.setAttribute("aria-current", "page");

        }

    });

});