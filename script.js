// Global variables
const numBtn = document.querySelectorAll(".num-btn");
const operatorBtn = document.querySelectorAll(".btn-op");
const equalsBtn = document.getElementById("equalsBtn");
const clearBtn = document.getElementById("clearBtn");
const resultDisplay = document.querySelector(".display-container__result");
const resultText = document.getElementById("resultText");
const resultCurrentCalc = document.querySelector(
	".display-container__calculation",
);
const calcText = document.getElementById("calcText");
const header = document.getElementById("header");
const decimalBtn = document.getElementById("decimalBtn");

// console.log(resultText.offsetWidth)

// Add Text Element Function
const addText = (text, parentNode) => {
	// create a text node
	const textNode = document.createTextNode(text);

	parentNode.appendChild(textNode);
};

// Replace Text Element Function
const replaceText = (text, element) => {
	// create a text node
	const textNode = document.createTextNode(text);

	// replace the text inside the parentNode with the text node we are passing
	return (element.innerText = textNode);
};

// console.log(window.getComputedStyle(header).getPropertyValue('font-size'));

// Decrease text size
const decrFontSize = (target, decrAmount) => {
	const currentSize = window
		.getComputedStyle(header)
		.getPropertyValue("font-size");
	const newSize = currentSize.slice(0, 2) - decrAmount;
	return (target.style.fontSize = `${newSize}px`);
};

console.log(decrFontSize(header, 2));

// A function which will split a string equation into an array of numbers and return the result
const magic = (equationStr) => {
	// You have a string
	// split string at begingin
	const numsArr = equationStr.split(/([-+*/]+)/);
	const num1 = Number(numsArr[0]);
	const num2 = Number(numsArr[2]);
	const operator = numsArr[1];

	// Operator functions (+, -, /, *)
	const addNums = (a, b) => {
		return a + b;
	};
	const minusNums = (a, b) => {
		return a - b;
	};
	const multiplyNums = (a, b) => {
		return a * b;
	};
	const divideNums = (a, b) => {
		return a / b;
	};

	switch (operator) {
		case "+": // (operator === "+")
			return addNums(num1, num2);
		case "-":
			return minusNums(num1, num2);
		case "*":
			return multiplyNums(num1, num2);
		case "/":
			return divideNums(num1, num2);
		default:
			return equationStr;
	}
};

// Number buttons
numBtn.forEach((btn) => {
	btn.addEventListener("click", () => {
		if (resultText.innerText === "0") {
			resultText.innerText = "";
		}
		if (resultText.innerText == "") {
			addText("Ans = 0", calcText);
		}

		// if calcText equation equals current result, move current display to calcText and reset display (reset after pressing equals)
		if (magic(calcText.innerText.slice(0, -1)) == resultText.innerText) {
			calcText.innerText = `Ans = ${resultText.innerText}`;
			resultText.innerText = "";
		}

		// Decrease text size when max-width of 205 is reached
		if (resultText.offsetWidth >= "205") {
			// resultText.style.fontSize -= "0.5"
			// console.log("width-check")
			resultText.offsetWidth = 210;
			decrFontSize(resultText, 10);
		}

		addText(btn.innerText, resultText);
	});
});

// Decimal Button
decimalBtn.addEventListener("click", () => {
	// If there's nothing in resultText, we want '0.'
	if (resultText.innerText === "" && !resultText.innerText.match(/.*\./)) {
		addText("0.", resultText);
		addText("Ans = 0", calcText);
	}

	// If the last char in resultText is not a number, add a 0 before the decimal
	if (!resultText.innerText.match(/.*\d/)) {
		addText("0.", resultText);
	}

	// Print decimal point if first number in the display does not already contain one
	if (
		resultText.innerText.match(/.*\d/) &&
		!resultText.innerText.match(/.*\./)
	) {
		addText(".", resultText);
	}

	// If there is an operator in display
	if (resultText.innerText.match(/([-+*/]+)/)) {
		// If there is no number AFTER the operator, print 0.
		if (!resultText.innerText.split(/([-+*/]+)/)[2].match(/\d/)) {
			addText("0.", resultText);
		}
		// And if the second number in the equation does not already contain a decimal point, we can print it into the display
		if (!resultText.innerText.split(/([-+*/]+)/)[2].match(/\./)) {
			addText(".", resultText);
		}
	}
});

// Clear Button
clearBtn.addEventListener("click", () => {
	if (resultDisplay.innerHTML.includes("")) {
		resultText.innerText = "";
		calcText.innerText = "";
	}
});

// Equals Button
equalsBtn.addEventListener("click", () => {
	if (calcText.innerText === "") {
		resultText.innerText = "0";
		calcText.innerText = "";
	} else {
		calcText.innerText = `${resultText.innerText} =`; // I want this to display the equation I had typed into the calculator BEFORE pressing equals
		resultText.innerText = `${magic(resultText.innerText)}`; //this is what we want to display in the result display
	}
});

// Operator buttons
operatorBtn.forEach((btn) => {
	btn.addEventListener("click", () => {
		// if (resultText.innerText === "0") {
		// 	resultText.innerText = "";
		// }

		if (
			//if we have already entered an operator in the equation
			resultText.innerText.includes("+") ||
			resultText.innerText.includes("-") ||
			resultText.innerText.includes("/") ||
			resultText.innerText.includes("*")
		) {
			// this will return the same result as pressing equals
			calcText.innerText = `${resultText.innerText} =`;
			resultText.innerText = `${magic(resultText.innerText)}`;
		}
		if (
			!resultText.innerText.includes("+") ||
			!resultText.innerText.includes("-") ||
			!resultText.innerText.includes("/") ||
			!resultText.innerText.includes("*")
		) {
			addText(" " + btn.innerText + " ", resultText);
		}
	});
});
