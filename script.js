// Variables and Data Types
const name = "John Doe";
const age = 25;
const isStudent = true;
const colors = ["red", "green", "blue"];
const person = { firstName: "Jane", lastName: "Doe" };

console.log("Name:", name, "(Type:", typeof name, ")");
console.log("Age:", age, "(Type:", typeof age, ")");
console.log("Is student:", isStudent, "(Type:", typeof isStudent, ")");
console.log("Colors:", colors, "(Type:", typeof colors, ")");
console.log("Person:", person, "(Type:", typeof person, ")");

// Operators
function calculator() {
  const num1 = parseFloat(prompt("Enter the first number:"));
  const num2 = parseFloat(prompt("Enter the second number:"));
  const operator = prompt("Choose an operation (+, -, *, /):");

  if (isNaN(num1) || isNaN(num2)) {
    alert("Invalid input. Please enter numbers.");
    return;
  }

  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        alert("Division by zero is not allowed.");
        return;
      }
      result = num1 / num2;
      break;
    default:
      alert("Invalid operator.");
      return;
  }

  alert("Result: " + result);
}

// Functions
function greetUser(name) {
  return "Hello, " + name + "!";
}

const greeting = greetUser("Alice");
document.body.innerHTML += "<p>" + greeting + "</p>";

// If Statements
const userAge = parseInt(prompt("Enter your age:"));
if (userAge >= 18) {
  document.body.innerHTML += "<p>You are eligible to vote.</p>";
} else {
  document.body.innerHTML += "<p>You are not eligible to vote.</p>";
}

// Loops
const numberList = document.createElement("ol");
for (let i = 1; i <= 10; i++) {
  const listItem = document.createElement("li");
  listItem.textContent = i;
  numberList.appendChild(listItem);
}
document.body.appendChild(numberList);

// Selecting and Modifying HTML Elements
const heading = document.querySelector("h1");
heading.textContent = "Bidii High School";

const newParagraph = document.createElement("p");
newParagraph.textContent = "Your vote your right Mimi nimepiga kura jee wewe.";
const dynamicContent = document.getElementById("dynamic-content");
dynamicContent.appendChild(newParagraph);
