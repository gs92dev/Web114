const darkBtn = dark; // Get the button element with the id dark.
let btnText = darkBtn.textContent; // Get the text content of the button element and store it in the btnText variable.
// Function to change the color of the page to dark mode.
const darkMode = (e) => {
  document.body.classList.toggle("dark"); // Toggle the dark class on the body element to change the color of the page.
  darkBtn.classList.toggle("buttonLight"); // Toggle the buttonLight class on the button element to change its color.

  darkBtn.textContent = btnText;
  document.body.classList.contains("dark")
    ? (btnText = "Dark mode")
    : (btnText = "Light mode");
};
darkBtn.addEventListener("click", darkMode); // Add an event listener to the button element that listens for a click event and calls the darkMode function when the button is clicked.

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const h2 = document.createElement("h2"); // Create a new h2 element.
    h2.textContent = "Welcome to my midterm Exam"; // Set the text content of the h2 element to "Midterm Exam".
    h2.style.textAlign = "center";
    firstSection.parentNode.insertBefore(h2, firstSection); // Prepend the second section element to the first section element.
  }, 3000);
});

//Compare numbers exercise
const equalSign = (a, b, selection) => {
  switch (selection) {
    case "assign":
      return a > b;

    case "greaterequal":
      return a >= b;

    case "equal":
      return a < b;

    case "strict":
      return a <= b;

    default:
      return false;
  }
};

//variables declaration
const compareBtn = document.querySelector("[data-compare]");
const label1 = document.querySelector("label[for='input1']");
const label2 = document.querySelector("label[for='input2']");
const input1 = document.querySelector("[data-input1]");
const input2 = document.querySelector("[data-input2]");
const selection = document.querySelector("[data-equal]");
const option = document.querySelector("[data-option]");
const type1 = document.querySelector("[data-type1]");
const type2 = document.querySelector("[data-type2]");

// Function to submit form
equalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const compared = equalSign(input1.value, input2.value, selection.value);
  if (compared) {
    document.body.style.backgroundColor = "green";
  } else {
    document.body.style.backgroundColor = "red";
  }
  setTimeout(() => {
    document.body.style.backgroundColor = "";
  }, 1500);
});

// Function to change the form based on the selection
function assigment() {
  label1.textContent = "Variable name:";
  label2.textContent = "Give the variable a value:";
  input1.type = "text";
  input2.type = "text";
  input1.setAttribute("pattern", "^[a-zA-Z_$][a-zA-Z_$0-9]*$");
  input1.setAttribute(
    "title",
    "Must be a valid JavaScript variable name (letters, digits, underscores, or dollar signs, and must start with a letter, underscore, or dollar sign)."
  );
  document.body.style.backgroundColor = "green";
}

function equal() {
  input1.type = "text";
  input2.type = "text";
  document.body.style.backgroundColor = "red";
  input1.removeAttribute("pattern");
  input1.removeAttribute("title");
  input1.setAttribute("pattern", "^(true|false)$");
  input1.setAttribute("title", "Must be either true or false.");
  input2.setAttribute("pattern", "^(true|false)$");
  input2.setAttribute("title", "Must be either true or false.");
  document.body.style.backgroundColor = "red";
}
equalForm.addEventListener("change", () => {
  const option = selection.value;
  if (option === "assign") {
    assigment();
  } else if (option === "equal") {
    equal();
  } else if (option === "strict") {
    input1.removeAttribute("pattern");
    input1.removeAttribute("title");
    document.body.style.backgroundColor = "yellow";
  }

  setTimeout(() => {
    document.body.style.backgroundColor = "";
  }, 1500);
});

// Calculator

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

const calculator = document.querySelector("#calculator");
const calculator1 = document.querySelector("[data-calculator1]");
const calculator2 = document.querySelector("[data-calculator2]");
const selectionCalc = document.querySelector("[data-selectionCalc]");

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

//  ------------------------- Expression Calculator ----------------------------
//Array with the expressions to display
const expressionStrings = [
  "5 + 3 ** x - y / 2",
  "(x + y) * 2 - 4 / 2",
  "10 / (2 + x) ** y",
  "x * y + 3 - 5 / 2",
  "(3 + x) * (y ** 2 - 2)",
];
// Array of arrow functions expressions to evaluate
const expressions = [
  (x, y) => 5 + 3 ** x - y / 2,
  (x, y) => (x + y) * 2 - 4 / 2,
  (x, y) => 10 / (2 + x) ** y,
  (x, y) => x * y + 3 - 5 / 2,
  (x, y) => (3 + x) * (y ** 2 - 2),
];
//Function called with the values of x, y, and i [index] to evaluate the expression
const evaluateExpression = (x, y, i) => {
  return expressions[i](x, y);
};

let currentExpressionIndex = 0;
const expressionElement = document.getElementById("expression");
const feedbackElement = document.getElementById("feedback");
const expressionForm = document.getElementById("valueForm");

function loadNextExpression() {
  if (currentExpressionIndex < expressionStrings.length) {
    expressionElement.textContent = expressionStrings[currentExpressionIndex];
    expressionForm.reset();
    xValue.focus();
  } else {
    expressionElement.textContent = "You've completed all expressions!";
    xValue.setAttribute("disabled", true);
    yValue.setAttribute("disabled", true);
    result.setAttribute("disabled", true);
    submitButton.classList.add("hidden");
    reloadGame.classList.remove("hidden");
    reloadGame.focus();
  }
}

expressionForm.addEventListener("submit", function (event) {
  event.preventDefault();
  //Get the values from the form after submit is clicked
  const xInput = parseFloat(xValue.value);
  const yInput = parseFloat(yValue.value);
  const guessedResult = parseFloat(result.value);

  const correctResult = evaluateExpression(
    xInput,
    yInput,
    currentExpressionIndex
  );

  if (guessedResult === correctResult) {
    feedbackElement.textContent = "Correct! Well done!";
  } else {
    const formattedResult = correctResult.toFixed(3);
    feedbackElement.innerHTML = `Incorrect. The correct result was <b>${formattedResult}</b>.<br>
              <br>
              Remember The order of operations:<br> 
               Parentheses, Exponents, Multiplication and Division, Addition and Subtraction.<br>
              P<br>
              E<br>
              M<br>
              D<br>
              A<br>
              S<br>
            `;
  }
  currentExpressionIndex++;
  loadNextExpression();
  reloadGame.addEventListener("click", function () {
    currentExpressionIndex = 0;
    reloadGame.classList.add("hidden");
    loadNextExpression();
    xValue.removeAttribute("disabled");
    yValue.removeAttribute("disabled");
    result.removeAttribute("disabled");
    submitButton.classList.remove("hidden");
    feedbackElement.textContent = "";
  });
});
//Starts the first expression
loadNextExpression();
