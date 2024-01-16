// // script.js file

// // display() function displays the value of clicked button
// function display(value) {
//   document.getElementById("result").value += value;
// }

// // clearScreen() function clears all the values
// function clearScreen() {
//   document.getElementById("result").value = "";
// }

// // calculate() function evaluates the mathematical expression
// function calculate() {
//   var p = document.getElementById("result").value;
//   var q = eval(p);
//   document.getElementById("result").value = q;
// }

// // memoryClear() function clears the memory value
// function memoryClear() {
//   document.getElementById("memory").value = 0;
// }

// // memoryRecall() function displays the memory value
// function memoryRecall() {
//   var m = document.getElementById("memory").value;
//   document.getElementById("result").value = m;
// }

// // memoryAdd() function adds the current value to the memory value
// function memoryAdd() {
//   var r = document.getElementById("result").value;
//   var m = document.getElementById("memory").value;
//   var n = Number(r) + Number(m);
//   document.getElementById("memory").value = n;
// }

// // memorySubtract() function subtracts the current value from the memory value
// function memorySubtract() {
//   var r = document.getElementById("result").value;
//   var m = document.getElementById("memory").value;
//   var n = Number(m) - Number(r);
//   document.getElementById("memory").value = n;
// }

// // add event listener to the document object to detect the keypress event
// document.addEventListener("keypress", function(event) {
//   // get the key code of the pressed key
//   var key = event.keyCode;

//   // check if the key code is a number (48-57) or an operator (42, 43, 45, 47, 61)
//   if (key >= 48 && key <= 57 || key == 42 || key == 43 || key == 45 || key == 47 || key == 61) {
//     // convert the key code to a string
//     var char = String.fromCharCode(key);

//     // call the appropriate function based on the key code
//     if (char == "=") {
//       calculate();
//     } else {
//       display(char);
//     }
//   } else {
//     // show an alert warning if the key code is not a number or an operator
//     alert("Only numbers and operators are allowed.");
//   }
// });

// This function clears the result input field
function clearResult() {
  document.getElementById("result").value = "";
}

// This function deletes the last character from the result input field
function backspace() {
  let result = document.getElementById("result").value;
  result = result.slice(0, -1); // remove the last character
  document.getElementById("result").value = result;
}

// This function inserts a character to the result input field
function insert(char) {
  document.getElementById("result").value += char;
}

// This function evaluates the expression in the result input field and displays the answer
function calculate() {
  let result = document.getElementById("result").value;
  try {
    result = math.evaluate(result); // use math.js to evaluate the expression
    document.getElementById("result").value = result;
  } catch (error) {
    alert("Invalid expression"); // show an error message if the expression is invalid
  }
}

// This function handles the number keys
function handleNumberKeys(event) {
  // Get the key code
  let keyCode = event.keyCode;
  // Check if the key code is between 48 and 57 (0 to 9) or between 96 and 105 (0 to 9 on the number pad)
  if ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105)) {
    // Get the number from the key code
    let number;
    if (keyCode >= 48 && keyCode <= 57) {
      // Subtract 48 for regular number keys
      number = keyCode - 48;
    } else {
      // Subtract 96 for number pad keys
      number = keyCode - 96;
    }
    // Insert the number to the result input field
    insert(number);
  }
}


// Add the event listener to the document
document.addEventListener("keydown", handleNumberKeys);

// This function handles the operator keys
function handleOperatorKeys(event) {
  // Get the key code
  let keyCode = event.keyCode;
  // Check if the key code matches one of the operators
  switch (keyCode) {
    case 107: // +
      insert("+");
      break;
    case 109: // -
      insert("-");
      break;
    case 106: // *
      insert("*");
      break;
    case 111: // /
      insert("/");
      break;
    case 53: // %
      insert("%");
      break;
  }
}

// Add the event listener to the document
document.addEventListener("keydown", handleOperatorKeys);

// This function handles the enter, backspace and clear keys
function handleSpecialKeys(event) {
  // Get the key code
  let keyCode = event.keyCode;
  // Check if the key code matches one of the special keys
  switch (keyCode) {
    case 13: // Enter
      calculate();
      break;
    case 8: // Backspace
      backspace();
      break;
    case 46: // Delete
      clearResult();
      break;
  }
}

// Add the event listener to the document
document.addEventListener("keydown", handleSpecialKeys);

// This function handles the alphabets and shows an alert
function handleAlphabets(event) {
  // Get the key code
  let keyCode = event.keyCode;
  // Check if the key code is between 65 and 90 (A to Z)
  if (keyCode >= 65 && keyCode <= 90) {
    // Show an alert
    alert("Only numbers are allowed");
  }
}

// Add the event listener to the document
document.addEventListener("keydown", handleAlphabets);
