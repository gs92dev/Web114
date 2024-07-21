// Guilherme dos Santos 07/22/2024
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

// Get the name of the user and display it on the page, if not name is provided, set it to "Unknown".
let nameChances = 3;
let yourName = "";

while (!yourName && nameChances > 0) {
  nameChances--; // Decrement the nameChances variable by 1.
  yourName = window.prompt(
    `Let's try again ${nameChances} times, please enter your name:`
  );
  console.log(nameChances); // console.log the nameChances variable.
}

console.log(yourName, "Name"); // console.log the yourName variable.
window.alert(`Hello there ${yourName ? yourName : "Unknown"}.`);

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
      return a === b; //===
    case "notequal":
    default:
      return a !== b; // !==
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
    document.body.style.backgroundColor = "#00FF7F";
    updateScore(1); // Increment the score
  } else {
    document.body.style.backgroundColor = "#800000";
    updateScore(-1); // Decrement the score
  }
  setTimeout(() => {
    document.body.style.backgroundColor = "";
  }, 800);
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
  const guessForm = document.getElementById("guessForm");
  const rightOrWrong = document.getElementById("rightOrWrong");

  const startGame = () => {
    randomString =
      stringOptions[Math.floor(Math.random() * stringOptions.length)];
    document.getElementById("randomString").innerText = randomString;

    let timeLeft = 5;
    timerElement.innerText = `${timeLeft} seconds`;
    stringLengthInput.disabled = false;
    stringLengthInput.focus();
    rightOrWrong.textContent = "";
    startButton.disabled = true;
    startButton.classList.add("hidden");
    startButton.textContent = "Try again";

    countdown = setInterval(() => {
      timeLeft -= 1;
      if (timeLeft < 0) {
        clearInterval(countdown);
        timerElement.innerText = "Time is up!";
        stringLengthInput.disabled = true;
        startButton.disabled = false;
        startButton.classList.remove("hidden");
        updateScore(-1);
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

  guessForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (stringLengthInput.value === "") {
      rightOrWrong.textContent = "Please enter a guess before submitting.";
      return;
    }

    clearInterval(countdown);

    const guessedLength = parseInt(stringLengthInput.value);
    const actualLength = randomString.length;
    startButton.disabled = false;
    startButton.classList.remove("hidden");
    startButton.focus();

    if (guessedLength === actualLength) {
      document.body.style.backgroundColor = "#00FF7F";
      rightOrWrong.textContent = `Correct! You guessed the right length: ${actualLength}`;
      updateScore(1);
    } else {
      updateScore(-1);
      rightOrWrong.textContent = `Incorrect. The correct length is ${actualLength}.`;
      document.body.style.backgroundColor = "#800000";
    }

    stringLengthInput.value = "";
    stringLengthInput.disabled = true;
    document.getElementById("submitButton").disabled = true;
    setTimeout(() => {
      document.body.style.backgroundColor = "";
    }, 800);
  });
});

// Find the length of the string
const FormLength = document.getElementById("FormLength");
console.log(FormLength);
const inputLength = document.getElementById("inputLength");
const wordLength = document.getElementById("wordLength");

FormLength.addEventListener("submit", (e) => {
  e.preventDefault();
  const stringLength = inputLength.value.length;
  wordLength.textContent = `The length of the string is ${stringLength}`;
  FormLength.reset();
});

// JS List

const conceptForm = document.getElementById("conceptForm");
const conceptList = document.getElementById("conceptList");
const customConceptInput = document.getElementById("customConcept");
const clearList = document.getElementById("clearList");

//querySelectorAll
conceptForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const selectedConcepts = [];
  const checkboxes = conceptForm.querySelectorAll(
    'input[type="checkbox"]:checked'
  );
  const customConcept = customConceptInput.value.trim();
  //for loop
  for (let i = 0; i < checkboxes.length; i++) {
    selectedConcepts.push(checkboxes[i].value);
  }

  if (customConcept) {
    selectedConcepts.push(customConcept);
  }

  selectedConcepts.forEach((concept) => {
    addConceptToList(concept);
  });

  // Clear the custom concept input field
  customConceptInput.value = "";

  // Uncheck all checkboxes after submission
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
});

clearList.addEventListener("click", () => {
  conceptList.innerHTML = "";
});

function addConceptToList(concept) {
  const listItem = document.createElement("li");
  listItem.className = "listItem";
  listItem.textContent = concept;

  const deleteButton = document.createElement("button");
  deleteButton.className = "deleteButton";
  deleteButton.textContent = "X";
  deleteButton.addEventListener("click", () => {
    conceptList.removeChild(listItem);
  });

  listItem.appendChild(deleteButton);
  conceptList.appendChild(listItem);
}

//Concatenation

const concatForm = document.getElementById("concatForm");
const string1Input = document.getElementById("string1");
const string2Input = document.getElementById("string2");
const concatenatedOutput = document.getElementById("concatenated");

concatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const string1 = string1Input.value;
  const string2 = string2Input.value;
  concatenatedOutput.textContent = `Concatenated string: ${string1 + string2}`;
});

//Calculator
// Define variables
const calculator = document.querySelector("#calculator");
const calculator1 = document.querySelector("[data-calculator1]");
const calculator2 = document.querySelector("[data-calculator2]");
const selectionCalc = document.querySelector("[data-selectionCalc]");

const calculate = (a, b, selection) => {
  switch (selection) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      if (b === 0) {
        return "Cannot divide by zero";
      } else {
        return a / b;
      }
    case "remainder":
      if (b === 0) {
        return "Cannot divide by zero";
      } else {
        return a % b;
      }
    case "exponent":
      return a ** b;
    default:
      return false;
  }
};
//Submit form
calculator.addEventListener("submit", (e) => {
  e.preventDefault();
  const result = calculate(
    Number(calculator1.value),
    Number(calculator2.value),
    selectionCalc.value
  );
  finalResult.textContent = "";
  calculator.reset();
  finalResult.textContent = result;
});

// Manipulate the image

const image = document.getElementsByTagName("img")[0]; //Get the image element
console.log(image);
let rotation = 0;
let position = { top: 0, left: 0 };

document.getElementById("rotateLeft").addEventListener("click", () => {
  rotation -= 15;
  image.style.transform = `rotate(${rotation}deg)`;
});

document.getElementById("rotateRight").addEventListener("click", () => {
  console.log("rotate right");
  rotation += 15;
  image.style.transform = `rotate(${rotation}deg)`;
});

document.getElementById("moveUp").addEventListener("click", () => {
  position.top -= 10;
  image.style.top = `${position.top}px`;
});

document.getElementById("moveDown").addEventListener("click", () => {
  position.top += 10;
  image.style.top = `${position.top}px`;
});

document.getElementById("moveLeft").addEventListener("click", () => {
  position.left -= 10;
  image.style.left = `${position.left}px`;
});

document.getElementById("moveRight").addEventListener("click", () => {
  position.left += 10;
  image.style.left = `${position.left}px`;
});

document.getElementById("resetImg").addEventListener("click", () => {
  rotation = 0;
  position = { top: 0, left: 0 };
  image.style.transform = `rotate(${rotation}deg)`;
  image.style.top = `${position.top}px`;
  image.style.left = `${position.left}px`;
});
