// script.js file

// display() function displays the value of clicked button
function display(value) {
    document.getElementById("result").value += value;
  }
  
  // clearScreen() function clears all the values
  function clearScreen() {
    document.getElementById("result").value = "";
  }
  
  // calculate() function evaluates the mathematical expression
  function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
  }
  
  // memoryClear() function clears the memory value
  function memoryClear() {
    document.getElementById("memory").value = 0;
  }
  
  // memoryRecall() function displays the memory value
  function memoryRecall() {
    var m = document.getElementById("memory").value;
    document.getElementById("result").value = m;
  }
  
  // memoryAdd() function adds the current value to the memory value
  function memoryAdd() {
    var r = document.getElementById("result").value;
    var m = document.getElementById("memory").value;
    var n = Number(r) + Number(m);
    document.getElementById("memory").value = n;
  }
  
  // memorySubtract() function subtracts the current value from the memory value
  function memorySubtract() {
    var r = document.getElementById("result").value;
    var m = document.getElementById("memory").value;
    var n = Number(m) - Number(r);
    document.getElementById("memory").value = n;
  }
  
  // add event listener to the document object to detect the keypress event
  document.addEventListener("keypress", function(event) {
    // get the key code of the pressed key
    var key = event.keyCode;
  
    // check if the key code is a number (48-57) or an operator (42, 43, 45, 47, 61)
    if (key >= 48 && key <= 57 || key == 42 || key == 43 || key == 45 || key == 47 || key == 61) {
      // convert the key code to a string
      var char = String.fromCharCode(key);
  
      // call the appropriate function based on the key code
      if (char == "=") {
        calculate();
      } else {
        display(char);
      }
    } else {
      // show an alert warning if the key code is not a number or an operator
      alert("Only numbers and operators are allowed.");
    }
  });
  
