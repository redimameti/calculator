// Global variables
const buttons = document.querySelectorAll(".btn-main");
const clearBtn = document.getElementById("clearBtn");
const singlePrintBtn = document.querySelectorAll(".btn-single-print");
const resultDisplay = document.querySelector(".display-container__result");
const resultCurrentCalc = document.querySelector(".display-container__calculation");
// console.log(numsAndDecimal);



// A function which will split a string equation into an array of numbers and return the result
const magic = (equationStr) => {
  // Operator functions (+, -, /, *)
  const addNums = (a, b) => {
    return a + b;
  }
  const minusNums = (a, b) => {
    return a - b;
  }
  const multiplyNums = (a, b) => {
    return a * b;
  }
  const divideNums = (a, b) => {
    return a / b;
  }

  if (equationStr.includes("+")) {
    const numsArr = equationStr.split("+");
    const num1 = parseInt(numsArr[0])
    const num2 = parseInt(numsArr[1])
    return addNums(num1, num2)
  }

  if (equationStr.includes("−")) {
    const numsArr = equationStr.split("−");
    const num1 = parseInt(numsArr[0])
    const num2 = parseInt(numsArr[1])
    return minusNums(num1, num2)
  }

  if (equationStr.includes("×")) {
    const numsArr = equationStr.split("×");
    const num1 = parseInt(numsArr[0])
    const num2 = parseInt(numsArr[1])
    return multiplyNums(num1, num2)
  }

  if (equationStr.includes("÷")) {
    const numsArr = equationStr.split("÷");
    const num1 = parseInt(numsArr[0])
    const num2 = parseInt(numsArr[1])
    return addNums(num1, num2)
  }
}

console.log(magic("40×3"))

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    if (resultDisplay.innerText === "") {
      appendTextElement("span", "Ans = 0", resultCurrentCalc)
    }
    appendTextElement("span", btn.innerHTML, resultDisplay)
  })
})

singlePrintBtn.forEach(btn => {
  btn.addEventListener("click", () => {
    if (!resultDisplay.innerHTML.includes(btn.innerHTML)) {
      appendTextElement("span", btn.innerHTML, resultDisplay)
    }
  })
})

clearBtn.addEventListener("click", () => {
  if (resultDisplay.innerHTML.includes("")) {
    resultDisplay.innerText = "";
    resultCurrentCalc.innerText = "";
  }
})

// Append Text Element Function
const appendTextElement = (elementType, text, parentNode) => {
	// create an html element of a specific type
	const newElement = document.createElement(elementType);

	// create a text node
	const textNode = document.createTextNode(text);

	// Attatch the text node to our newly created element
	newElement.appendChild(textNode);

	// Attach  new element to a parent element
	parentNode.appendChild(newElement);
};




