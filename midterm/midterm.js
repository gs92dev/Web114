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
const compareForm = document.getElementById("compareForm");
const operatorCompare = document.getElementById("operatorCompare");
const assignmentForm = document.getElementById("assignmentForm");
const equalOrStricForm = document.getElementById("equalOrStricForm");
const type1 = document.getElementById("type1");
const type2 = document.getElementById("type2");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input1Wrapper = document.getElementById("input1Wrapper");
const input2Wrapper = document.getElementById("input2Wrapper");
const radio1Wrapper = document.getElementById("radio1Wrapper");
const radio2Wrapper = document.getElementById("radio2Wrapper");
const answer = document.getElementById("answer");
const variableName = document.getElementById("variableName");
const variableValue = document.getElementById("variableValue");

let removedRequiredAttributes = [];

// Function to temporarily remove required attributes from hidden inputs
function removeRequiredAttributes() {
  const hiddenInputs = compareForm.querySelectorAll(".hidden input[required]");
  const hiddenSelects = compareForm.querySelectorAll(
    ".hidden select[required]"
  );

  removedRequiredAttributes = [];

  hiddenInputs.forEach((input) => {
    removedRequiredAttributes.push(input);
    input.removeAttribute("required");
  });

  hiddenSelects.forEach((select) => {
    removedRequiredAttributes.push(select);
    select.removeAttribute("required");
  });
}

// Function to restore required attributes to previously hidden inputs
function restoreRequiredAttributes() {
  removedRequiredAttributes.forEach((elem) => {
    elem.setAttribute("required", "");
  });
  removedRequiredAttributes = [];
  console.log("restoredRequiredAttributes");
}

// Function to change the form based on the selection
function assignment() {
  if (assignmentForm.classList.contains("hidden")) {
    assignmentForm.classList.remove("hidden");
    equalOrStricForm.classList.add("hidden");
  }
}

// Change the input type based on the selection
function numberOrString1() {
  type1.addEventListener("change", () => {
    if (type1.value === "number") {
      input1.setAttribute("type", "number");
      input1.setAttribute("step", "0.01");
    } else {
      input1.setAttribute("type", "text");
      input1.removeAttribute("step");
    }
  });
}

function numberOrString2() {
  type2.addEventListener("change", () => {
    if (type2.value === "number") {
      input2.setAttribute("type", "number");
      input2.setAttribute("step", "0.01");
    } else {
      input2.removeAttribute("step");
      input2.setAttribute("type", "text");
    }
  });
}

function equalOrStrict() {
  if (equalOrStricForm.classList.contains("hidden")) {
    assignmentForm.classList.add("hidden");
    equalOrStricForm.classList.remove("hidden");
  }
  type1.addEventListener("change", () => {
    if (type1.value === "boolean") {
      input1Wrapper.classList.add("hidden");
      radio1Wrapper.classList.remove("hidden");
    } else {
      input1Wrapper.classList.remove("hidden");
      radio1Wrapper.classList.add("hidden");
      numberOrString1();
    }
  });
  type2.addEventListener("change", () => {
    if (type2.value === "boolean") {
      input2Wrapper.classList.add("hidden");
      radio2Wrapper.classList.remove("hidden");
    } else {
      input2Wrapper.classList.remove("hidden");
      radio2Wrapper.classList.add("hidden");
      numberOrString2();
    }
  });
}

// Function to parse values based on type
function parseValue(type, value) {
  switch (type) {
    case "string":
      return value;
    case "number":
      return Number(value);
    case "boolean":
      // Adjust parsing for boolean based on radio button value
      return value === "true"; // Assuming radio button values are "true" or "false"
    default:
      return value;
  }
}

function assign() {
  const varName = variableName.value;
  const varValue = variableValue.value;
  answer.innerHTML = `You have created a variable named: ${varName} with the value of: ${varValue} <br> <br> ${varName} = ${varValue}`;
  assignmentForm.classList.add("hidden");
}

function equal() {
  const type1Value = type1.value;
  let value1;

  if (type1Value === "boolean") {
    const radio1Checked = document.querySelector(
      'input[name="boolean1"]:checked'
    );
    if (radio1Checked) {
      value1 = parseValue("boolean", radio1Checked.value);
    } else {
      // Handle case where no radio button is checked
      console.error("Please select true or false for type 1");
      return;
    }
  } else {
    value1 = parseValue(type1Value, input1.value);
  }

  const type2Value = type2.value;
  let value2;

  if (type2Value === "boolean") {
    const radio2Checked = document.querySelector(
      'input[name="boolean2"]:checked'
    );
    if (radio2Checked) {
      value2 = parseValue("boolean", radio2Checked.value);
    } else {
      // Handle case where no radio button is checked
      console.error("Please select true or false for type 2");
      return;
    }
  } else {
    value2 = parseValue(type2Value, input2.value);
  }

  const result = value1 == value2;
  answer.innerHTML = `Result of ${value1} == ${value2} is: ${result}`;
}

function strictEqual() {
  const type1Value = type1.value;
  let value1;

  if (type1Value === "boolean") {
    const radio1Checked = document.querySelector(
      'input[name="boolean1"]:checked'
    );
    if (radio1Checked) {
      value1 = parseValue("boolean", radio1Checked.value);
    } else {
      // Handle case where no radio button is checked
      console.error("Please select true or false for type 1");
      return;
    }
  } else {
    value1 = parseValue(type1Value, input1.value);
  }

  const type2Value = type2.value;
  let value2;

  if (type2Value === "boolean") {
    const radio2Checked = document.querySelector(
      'input[name="boolean2"]:checked'
    );
    if (radio2Checked) {
      value2 = parseValue("boolean", radio2Checked.value);
    } else {
      // Handle case where no radio button is checked
      console.error("Please select true or false for type 2");
      return;
    }
  } else {
    value2 = parseValue(type2Value, input2.value);
  }

  const result = value1 === value2;
  answer.innerHTML = `Result of ${value1} === ${value2} is: ${result}`;
}

// Event listener to change the form based on the selection
operatorCompare.addEventListener("change", () => {
  answer.textContent = "";
  const option = operatorCompare.value;
  if (option === "assign") {
    assignment();
  } else {
    equalOrStrict();
  }
});

// Remove required attributes before form submission
submitButton.addEventListener("mousedown", () => {
  removeRequiredAttributes();
});

// Function to clean up and reset the form after submission
function cleanAndReset() {
  compareForm.reset();
  restoreRequiredAttributes();
  equalOrStricForm.classList.add("hidden");
  assignmentForm.classList.add("hidden");
  radio1Wrapper.classList.add("hidden");
  radio2Wrapper.classList.add("hidden");
  input2Wrapper.classList.remove("hidden");
  input1Wrapper.classList.remove("hidden");
}

// Submit event listener for the form
compareForm.addEventListener("submit", (e) => {
  e.preventDefault();

  switch (operatorCompare.value) {
    case "assign":
      assign();
      cleanAndReset();
      break;
    case "equal":
      equal();
      cleanAndReset();
      break;
    case "strict":
      strictEqual();
      cleanAndReset();
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
