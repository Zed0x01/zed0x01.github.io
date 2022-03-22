function getHistory() {
    return document.getElementById("historyValue").innerText;
  }
  
  function printHistory(num) {
    document.getElementById("historyValue").innerText = num;
  }
  
  function getInput() {
    return document.getElementById("inputValue").innerText;
  }
  
  function printInput(num) {
    if (num == "") {
      document.getElementById("inputValue").innerText = num;
    } else {
      document.getElementById("inputValue").innerText = formateNum(num);
    }
  }
  
  function formateNum(num) {
    if (num == "-") {
      return "";
    }
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
  }
  
  function reverseNumber(num) {
    return Number(num.replace(/,/g, ""));
  }
  
  let operator = document.getElementsByClassName("operator");
  
  for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener("click", function () {
      if (this.id == "c") {
        printHistory("");
        printInput("");
      } else {
        var history = getHistory();
        var input = getInput();
        if (input != "") {
          input = reverseNumber(input);
          history += input;
  
          if (this.id == "=") {
            var result = eval(history);
            printInput(result);
            printHistory("");
          } else {
            history += this.id;
            printHistory(history);
            printInput("");
          }
        }
      }
    });
  }
  
  let numbers = document.getElementsByClassName("btn");
  
  for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function () {
      var output = reverseNumber(getInput());
  
      if (output != NaN) {
        output += this.id;
        printInput(output);
      }
    });
  }