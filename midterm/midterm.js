const darkBtn = dark; // Get the button element with the id dark.
let btnText = darkBtn.textContent; // Get the text content of the button element and store it in the btnText variable.
// Function to change the color of the page to dark mode.
const darkMode = () => {
  document.body.classList.toggle("dark"); // Toggle the dark class on the body element to change the color of the page.
  darkBtn.classList.toggle("buttonLight"); // Toggle the buttonLight class on the button element to change its color.

  darkBtn.textContent = btnText;
  document.body.classList.contains("dark")
    ? (btnText = "Dark mode")
    : (btnText = "Light mode");
};
darkBtn.addEventListener("click", darkMode); // Add an event listener to the button element that listens for a click event and calls the darkMode function when the button is clicked.

// ------------------------- Compare =, ==, and === ----------------------------

const assignmentForm = document.getElementById("assignmentForm");
const variableName = document.getElementById("variableName");
const variableValue = document.getElementById("variableValue");
const answer = document.getElementById("answer");

// Function to handle form submission for assignment
function assign() {
  const varName = variableName.value;
  const varValue = variableValue.value;
  // Display feedback or result
  answer.innerHTML = `You have created a variable named: ${varName} with the value of: ${varValue}<br>
  ${varName} = ${varValue} `;
  // Reset the form
  assignmentForm.reset();
}

// Event listener for form submission
assignmentForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form submission
  assign(); // Call the assign function
});

// ------------- Equal and strict equal form

//Declaring variables
const equalityForm = document.getElementById("equalityForm");
const type1 = document.getElementById("type1");
const type2 = document.getElementById("type2");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const radio1Wrapper = document.getElementById("radio1Wrapper");
const radio2Wrapper = document.getElementById("radio2Wrapper");
const true1 = document.getElementById("true1");
const false1 = document.getElementById("false1");
const true2 = document.getElementById("true2");
const false2 = document.getElementById("false2");

// Each time the user selects a type, the form will change accordingly
type1.addEventListener("change", function () {
  switch (type1.value) {
    case "boolean":
      input1.setAttribute("disabled", true);
      input1.classList.add("hidden");
      radio1Wrapper.classList.remove("hidden");
      true1.removeAttribute("disabled");
      false1.removeAttribute("disabled");
      break;
    case "string":
    case "number":
      input1.removeAttribute("disabled");
      input1.classList.remove("hidden");
      radio1Wrapper.classList.add("hidden");
      true1.setAttribute("disabled", true);
      false1.setAttribute("disabled", true);
      input1.type = type1.value === "string" ? "text" : "number";
      break;
  }
});
// Each time the user selects a type, the form will change accordingly
type2.addEventListener("change", function () {
  switch (type2.value) {
    case "boolean":
      input2.setAttribute("disabled", true);
      input2.classList.add("hidden");
      radio2Wrapper.classList.remove("hidden");
      true2.removeAttribute("disabled");
      false2.removeAttribute("disabled");
      break;
    case "string":
    case "number":
      input2.removeAttribute("disabled");
      input2.classList.remove("hidden");
      radio2Wrapper.classList.add("hidden");
      true2.setAttribute("disabled", true);
      false2.setAttribute("disabled", true);
      input2.type = type2.value === "string" ? "text" : "number";
      break;
  }
});

// Function to check the selected values and parse them accordingly
function checkSelectsAndParse() {
  const type1Value = type1.value;
  const type2Value = type2.value;

  let value1, value2;

  switch (type1Value) {
    case "boolean":
      value1 = true1.checked ? true : false;
      break;
    case "string":
      value1 = input1.value;
      break;
    case "number":
      value1 = parseFloat(input1.value);
      break;
  }

  switch (type2Value) {
    case "boolean":
      value2 = true2.checked ? true : false;
      break;
    case "string":
      value2 = input2.value;
      break;
    case "number":
      value2 = parseFloat(input2.value);
      break;
  }

  return { value1, value2 };
}

// Event listener for form submission
equalityForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const { value1, value2 } = checkSelectsAndParse();

  const equal = value1 == value2;
  const strict = value1 === value2;
  // Final result printed below the forms
  answer.innerHTML = `The comparison "${type1.value}" ${value1} == ${value2} "${type2.value}" is: ${equal}<br>
   The comparison "${type1.value}" ${value1} ===  ${value2} "${type2.value}" is: ${strict}`;

  // Reset form and restore initial state
  equalityForm.reset();
  input1.removeAttribute("disabled");
  input1.classList.remove("hidden");
  input1.type = "text";
  input2.removeAttribute("disabled");
  input2.classList.remove("hidden");
  input2.type = "text";
  radio1Wrapper.classList.add("hidden");
  radio2Wrapper.classList.add("hidden");
  true1.setAttribute("disabled", true);
  false1.setAttribute("disabled", true);
  true2.setAttribute("disabled", true);
  false2.setAttribute("disabled", true);
});

//-----------------// Simple calculator

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

//  ------------------------- Expression Calculator ----------------------------
//Define variables
let currentExpressionIndex = 0;
const expressionElement = document.getElementById("expression");
const feedbackElement = document.getElementById("feedback");
const expressionForm = document.getElementById("valueForm");
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

//Function to load the next expression
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

//Submit form
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
    const formattedResult = correctResult.toFixed(3); //Round the result to 3 decimal places
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
