const startButton = document.getElementById("start-quiz-btn");
const rulesDiv = document.querySelector(".rules-quiz");
const quizDiv = document.querySelector(".main-quiz");
const goBackButton = document.getElementById("rules-go-back")
const continueButton = document.getElementById("rules-continue");
const quitQuizButton = document.getElementById("quit-quiz");

startButton.addEventListener("click", function() {
    startButton.style.display = "none";
    rulesDiv.style.display = "block";
});

quitQuizButton,goBackButton.addEventListener("click", function() {
    rulesDiv.style.display = "none";
    quizDiv.style.display = "none";
    startButton.style.display = "block";
});

continueButton.addEventListener("click", function() {
    rulesDiv.style.display = "none";
    quizDiv.style.display = "block";
});