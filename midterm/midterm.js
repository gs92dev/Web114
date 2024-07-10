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
    h2.style.textAlign = "center"; // Set the color of the h2 element to red.
    firstSection.prepend(h2); // Prepend the second section element to the first section element.
  }, 3000);
});

//Compare exercise
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
      return false;
  }
};

const compareBtn = document.querySelector("[data-compare]");
const input1 = document.querySelector("[data-input1]");
const input2 = document.querySelector("[data-input2]");
const selection = document.querySelector("[data-selection]");

compareForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const compared = compare(input1.value, input2.value, selection.value);
  if (compared) {
    document.body.style.backgroundColor = "green";
  } else {
    document.body.style.backgroundColor = "red";
  }
  setTimeout(() => {
    document.body.style.backgroundColor = "";
  }, 1500);
});
