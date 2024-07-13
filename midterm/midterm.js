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

// ------------------------- Compare =, ==, and === ----------------------------

const submitButton = document.querySelector("[data-submit]");

// Function to change the form based on the selection
function assignment() {
  // If assignment is selected, show the assignment form
  if (assignmentForm.classList.contains("hidden")) {
    assignmentForm.classList.remove("hidden");
    equalOrStricForm.classList.add("hidden");
  }
  // gater all inputs with required that are hidden and remove the required attribute
  const hiddenInputs = document.querySelectorAll(".hidden input[required]");
  // Remove the required attribute from each hidden input so I can submit the form
  hiddenInputs.forEach((input) => input.removeAttribute("required"));
}

function equal() {
  if (equalOrStricForm.classList.contains("hidden")) {
    assignmentForm.classList.add("hidden");
    equalOrStricForm.classList.remove("hidden");
  }
  type1.addEventListener("change", () => {
    if (type1.value === "boolean") {
      input1Wrapper.classList.add("hidden");
      radio1Wrapper.classList.remove("hidden");
    }
  });
  type2.addEventListener("change", () => {
    if (type2.value === "boolean") {
      input2Wrapper.classList.add("hidden");
      radio2Wrapper.classList.remove("hidden");
    }
  });
}
function strict() {}

// Event listener to change the form based on the selection
operatorCompare.addEventListener("change", () => {
  const option = operatorCompare.value;
  if (option === "assign") {
    assignment();
  } else if (option === "equal") {
    equal();
  } else {
    strict();
  }

  setTimeout(() => {
    document.body.style.backgroundColor = "";
  }, 1500);
});

// Function to submit form
compareForm.addEventListener("submit", (e) => {
  e.preventDefault();
  switch (operatorCompare.value) {
    case "assign":
      const varName = variableName.value;
      const varValue = variableValue.value;
      answer.innerHTML = `You have created a variable named: ${varName} with the value of: ${varValue} <br> <br> ${varName} = ${varValue}`;
      compareForm.reset();
      submitButton.blur();
      assignmentForm.classList.add("hidden");
      break;
    case "equal":
      alert("equal");
      break;
    case "strict":
      alert("strict");
      break;
  }
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
