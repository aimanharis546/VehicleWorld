/* ==========================================
   VEHICLE WORLD - QUIZ 2 JAVASCRIPT
   ========================================== */


/* ==========================================
   CHECK ANSWERS
   ========================================== */

function CheckAnswer() {

    let score = 0;
    let totalQuestions = 5;

    // Correct answers for Quiz 2
    let answers = {
        Q1: "true",
        Q2: "true",
        Q3: "true",
        Q4: "true",
        Q5: "true"
    };

    // Check each question
    for (let question in answers) {

        let selected = document.querySelector(
            'input[name="' + question + '"]:checked'
        );

        let correctRadio = document.querySelector(
            'input[name="' + question + '"][value="' +
            answers[question] + '"]'
        );

        // Highlight the correct answer
        showMark(correctRadio, true);

        // Calculate the score
        if (selected && selected.value === answers[question]) {
            score++;
        } else if (selected) {
            showMark(selected, false);
        }
    }

    // Save Quiz 2 score
    sessionStorage.setItem("quiz2Score", score);

    // Display result
    let result = document.getElementById("result");

    if (result) {

        if (score === totalQuestions) {

            result.textContent =
                "🎉 Excellent! You got " + score + "/5 correct!";

            result.style.color = "#2e9e4f";
            result.style.backgroundColor = "#d4f5dd";

        } else if (score >= 4) {

            result.textContent =
                "🌟 Great job! You got " + score + "/5 correct!";

            result.style.color = "#2878c8";
            result.style.backgroundColor = "#dff4ff";

        } else {

            result.textContent =
                "💪 Good try! You got " + score +
                "/5 correct. Keep learning!";

            result.style.color = "#b86a00";
            result.style.backgroundColor = "#fff0d6";
        }
    }

    // Disable all answers after submission
    document.querySelectorAll('input[type="radio"]').forEach(
        function (radio) {
            radio.disabled = true;
        }
    );

    // Disable Check Answer button
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

    let option = radio.closest("label");

    if (!option) {
        return;
    }

    // Add correct or wrong styling
    option.classList.add(isCorrect ? "correct" : "wrong");

    // Add answer mark
    let mark = document.createElement("span");

    mark.className = "mark";
    mark.textContent = isCorrect ? "✅" : "❌";
    mark.setAttribute(
        "aria-label",
        isCorrect ? "Correct answer" : "Wrong answer"
    );

    option.appendChild(mark);
}


/* ==========================================
   FINISH QUIZ
   ========================================== */

function finishQuiz() {

    let result = document.getElementById("result");

    let part1Saved = sessionStorage.getItem("quiz1Score");
    let part2Saved = sessionStorage.getItem("quiz2Score");

    // Both quizzes must be checked first
    if (part1Saved === null || part2Saved === null) {

        if (result) {
            result.textContent =
                "⚠️ Please complete and check both quiz parts first!";

            result.style.color = "#d93636";
            result.style.backgroundColor = "#fde0e0";
        }

        return;
    }

    // Calculate total score
    let part1Score = Number(part1Saved);
    let part2Score = Number(part2Saved);

    let totalScore = part1Score + part2Score;

    // Save final score
    sessionStorage.setItem("totalScore", totalScore);

    // Display final result
    if (result) {

        if (totalScore === 10) {

            result.textContent =
                "🏆 Perfect! Your final score is " +
                totalScore + "/10! Amazing work!";

            result.style.color = "#2e9e4f";
            result.style.backgroundColor = "#d4f5dd";

        } else {

            result.textContent =
                "🏆 Quiz Complete! Your final score is " +
                totalScore + "/10. Keep learning!";

            result.style.color = "#2878c8";
            result.style.backgroundColor = "#dff4ff";
        }
    }
}


/* ==========================================
   RESET BOTH QUIZZES
   ========================================== */

function TakeQuizAgain() {

    // Clear saved scores
    sessionStorage.removeItem("quiz1Score");
    sessionStorage.removeItem("quiz2Score");
    sessionStorage.removeItem("totalScore");

    // Return to Quiz 1
    window.location.href = "quiz1.html";
}


/* ==========================================
   HIGHLIGHT CURRENT NAVIGATION LINK
   ========================================== */

document.addEventListener("DOMContentLoaded", function () {

    let currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll("nav a").forEach(function (link) {

        if (link.getAttribute("href") === currentPage) {
            link.setAttribute("aria-current", "page");
        }
    });

});