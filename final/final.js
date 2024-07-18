"use strict"; // Use strict mode to prevent errors.
const darkBtn = document.getElementById("dark"); // Get the button element with the id dark.
let btnText = darkBtn.textContent; // Get the text content of the button element and store it in the btnText variable.

// Function to change the color of the page to dark mode.
const darkMode = () => {
  document.body.classList.toggle("dark"); // Toggle the dark class on the body element to change the color of the page.
  darkBtn.classList.toggle("buttonLight"); // Toggle the buttonLight class on the button element to change its color.

  document.body.classList.contains("dark")
    ? (darkBtn.textContent = "Light mode")
    : (darkBtn.textContent = "Dark mode");
};
darkBtn.addEventListener("click", darkMode); //click event
let yourName = window.prompt("Hello there! What is your name?"); // Prompt
let nameChances = 3; // Set the nameChances
// While loop

while (!yourName && nameChances > 0) {
  nameChances = --nameChances; // Decrement the nameChances variable by 1. --
  yourName = window.prompt(
    `Let's try again ${nameChances} times, please enter your name:`
  );
  console.log(nameChances); // console.log the nameChances variable.
}
yourName
  ? window.alert(`Hello ${yourName}!`)
  : window.alert("Hello there! Unknown"); //Ternary operator

yourName = yourName || "Unknown"; // If the name variable is empty, set it to "Unknown".

document.getElementById("player").textContent += yourName; // textContent and +=
document.getElementById("player").classList.add("player"); // ClassList

//Global variable score
let score = 0; // Set the score variable to 0.
const scoreElement = document.getElementById("score");

// Function to update the score
const updateScore = (increment) => {
  score += increment;
  scoreElement.textContent = score; // Update the score display
};

// Compare exercise switch statement
const compare = (a, b, selection) => {
  switch (selection) {
    case "greater":
      return a > b;
    case "greaterequal":
      return a >= b;
    case "less":
      return a < b;
    case "lessequal":
      return a <= b;
    case "equal":
      return a === b;
    case "notequal":
    default:
      return a !== b;
  }
};

const compareForm = document.getElementById("compareForm");

compareForm.addEventListener("submit", (e) => {
  score = score;
  e.preventDefault();
  const num1 = Number(document.getElementById("compare1").value); //id.value
  const num2 = Number(document.getElementById("compare2").value);
  const selection = document.querySelector("[data-selection]").value;
  // Call the compare function
  const compared = compare(num1, num2, selection);
  //if statement
  if (compared) {
    document.body.style.backgroundColor = "green";
    updateScore(1); // Increment the score
  } else {
    document.body.style.backgroundColor = "red";
    updateScore(-1); // Decrement the score
  }
  setTimeout(() => {
    document.body.style.backgroundColor = "";
  }, 1500);
  compareForm.reset();
  return score;
});

// Guess the length exercise
document.addEventListener("DOMContentLoaded", () => {
  const stringOptions = [
    "originally",
    "disestablishment",
    "particular",
    "support",
    "opposition",
    "government",
    "parliament",
    "constitution",
    "legislation",
    "establishment",
    "political",
    "representation",
    "republican",
    "democratic",
    "monarchy",
    "presidential",
  ];

  let randomString;
  let countdown;

  const startButton = document.getElementById("startButton");
  const timerElement = document.getElementById("timer");
  const stringLengthInput = document.getElementById("stringLength");
  const form = document.getElementById("guessForm");
  const rightOrWrong = document.getElementById("rightOrWrong");

  const startGame = () => {
    randomString =
      stringOptions[Math.floor(Math.random() * stringOptions.length)];
    document.getElementById("randomString").innerText = randomString;

    let timeLeft = 5;
    timerElement.innerText = `${timeLeft} seconds`;
    stringLengthInput.disabled = false;
    rightOrWrong.textContent = "";

    countdown = setInterval(() => {
      timeLeft -= 1;
      if (timeLeft < 0) {
        clearInterval(countdown);
        timerElement.innerText = "Time is up!";
        stringLengthInput.disabled = true;
      } else {
        timerElement.innerText = `${timeLeft} seconds`;
      }
    }, 1000);
  };

  startButton.addEventListener("click", startGame);

  stringLengthInput.addEventListener("input", () => {
    document.getElementById("submitButton").disabled =
      stringLengthInput.value === "";
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (stringLengthInput.value === "") {
      rightOrWrong.textContent = "Please enter a guess before submitting.";
      return;
    }

    clearInterval(countdown);

    const guessedLength = parseInt(stringLengthInput.value);
    const actualLength = randomString.length;

    if (guessedLength === actualLength) {
      startButton.textContent = "Next word";
      rightOrWrong.textContent = `Correct! You guessed the right length: ${actualLength}`;
    } else {
      rightOrWrong.textContent = `Incorrect. The correct length is ${actualLength}.`;
    }

    stringLengthInput.value = "";
    stringLengthInput.disabled = true;
    document.getElementById("submitButton").disabled = true;
  });
});

// // Manipulate the image
// document.addEventListener("DOMContentLoaded", () => {
//   const image = document.getElementById("image");
//   let rotation = 0;
//   let position = { top: 0, left: 0 };

//   document.getElementById("rotateLeft").addEventListener("click", () => {
//     rotation -= 15;
//     image.style.transform = `rotate(${rotation}deg)`;
//   });

//   document.getElementById("rotateRight").addEventListener("click", () => {
//     rotation += 15;
//     image.style.transform = `rotate(${rotation}deg)`;
//   });

//   document.getElementById("moveUp").addEventListener("click", () => {
//     position.top -= 10;
//     image.style.top = `${position.top}px`;
//   });

//   document.getElementById("moveDown").addEventListener("click", () => {
//     position.top += 10;
//     image.style.top = `${position.top}px`;
//   });

//   document.getElementById("moveLeft").addEventListener("click", () => {
//     position.left -= 10;
//     image.style.left = `${position.left}px`;
//   });

//   document.getElementById("moveRight").addEventListener("click", () => {
//     position.left += 10;
//     image.style.left = `${position.left}px`;
//   });
// });
