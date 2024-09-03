let playerOne = document.querySelector(".playerOne");
let headingOne = document.querySelector(".headingOne");
let inputOne = document.querySelector(".inputOne");
let buttonOne = document.querySelector(".buttonOne");
let error = document.querySelector(".error");
let playerTwo = document.querySelector(".playerTwo");
let headingTwo = document.querySelector(".headingTwo");
let inputTwo = document.querySelector(".inputTwo");
let buttonTwo = document.querySelector(".buttonTwo");
let error2 = document.querySelector(".error2");
let chance = document.querySelector(".chance");
let count = 5;

buttonOne.addEventListener("click", function () {
    if (inputOne.value == "") {
        error.innerHTML = "Please Enter Something";
    } else if (isNaN(inputOne.value)) {
        error.innerHTML = "Please Enter a Number";
    } else if (!(inputOne.value > 0 && inputOne.value < 10)) {
        error.innerHTML = "Enter a Number between 1 to 10";
    } else {
        playerTwo.style.display = "block";
        playerOne.style.display = "none";
        error.innerHTML = "";  // Clear any previous error messages
    }
});

buttonTwo.addEventListener("click", function () {
    if (inputTwo.value == "") {
        error2.innerHTML = "Please Enter Something";
    } else if (isNaN(inputTwo.value)) {
        error2.innerHTML = "Please Enter a Number";
    } else if (!(inputTwo.value > 0 && inputTwo.value < 10)) {
        error2.innerHTML = "Enter a Number between 1 to 10";
    } else {
        count--;
        if (inputOne.value == inputTwo.value) {
            error2.innerHTML = "Player Two is the WINNER!";
            buttonTwo.style.display = "none";
            chance.style.display = "none";
        } else {
            if (count > 0) {
                chance.innerHTML = `Chances left: ${count}`;
            } else {
                error2.innerHTML = "Player One is the WINNER!";
                buttonTwo.style.display = "none";
                chance.style.display = "none";
            }
        }
    }
});
