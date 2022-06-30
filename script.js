"use strict";

let randomNumber = Math.round(Math.random() * 20);
let score = 20;
let Highscore = 0;

const guess = Number(document.querySelector(".guess").value);
var checkButton = function () {
  console.log(randomNumber);

  console.log(guess);

  if (!guess) {
    document.querySelector(".message").textContent = "😡 Enter a Number";
  } else if (guess > randomNumber) {
    score = score - 1;
    document.querySelector(".message").textContent = "Too High 🙄📈";
    document.querySelector(".score").textContent = score;
  } else if (guess < randomNumber) {
    score = score - 1;
    document.querySelector(".message").textContent = "Too Low 📉🙄";
    document.querySelector(".score").textContent = score;
  } else {
    document.querySelector(".message").textContent = "You Got It";
  }
};

document.querySelector(".check").addEventListener("click", checkButton);
