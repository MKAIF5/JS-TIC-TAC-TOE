const buttons = document.querySelectorAll("#btn");
const playAgain = document.getElementById("play-again");

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        // console.log("clicked...");
        if (turnO) {
            button.innerText = "O"
            turnO = false
        }
        else {
            button.innerText = "X"
            turnO = true
        }
        button.disabled = true;
    });
});