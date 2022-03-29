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

// console.log(0.6 * 10)

// header.innerText = "9 / 8"

// if (header.innerText.match(/\d* [+-/*] \d*/)) {
// 	console.log("test works")
// }

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

// A function which will split a string equation into an array of numbers and return the result
const magic = (equationStr) => {
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

	if (equationStr.includes("+")) {
		const numsArr = equationStr.split("+");
		const num1 = parseInt(numsArr[0]);
		const num2 = parseInt(numsArr[1]);
		return addNums(num1, num2);
	}

	if (equationStr.includes("-")) {
		const numsArr = equationStr.split("-");
		const num1 = parseInt(numsArr[0]);
		const num2 = parseInt(numsArr[1]);
		return minusNums(num1, num2);
	}

	if (equationStr.includes("*")) {
		const numsArr = equationStr.split("*");
		const num1 = parseInt(numsArr[0]);
		const num2 = parseInt(numsArr[1]);
		return multiplyNums(num1, num2);
	}

	if (equationStr.includes("/")) {
		const numsArr = equationStr.split("/");
		const num1 = parseInt(numsArr[0]);
		const num2 = parseInt(numsArr[1]);
		return divideNums(num1, num2);
	}

	if (
		!equationStr.includes("+") ||
		!equationStr.includes("-") ||
		!equationStr.includes("/") ||
		!equationStr.includes("*")
	) {
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
		// if (calcText.innerText.match(/\d* [+-/*] \d*/)) {
		// 	//If there is an equation in the calcText field, and a result in the resultText field, I want resultText to = "" (this will reset the calculation so that numbers pressed don't get appended to the end of the previous result)
		// 	console.log("test works")
		// 	resultText.innerText = "";
		// }
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

	// If the last char in resultText is not 
	if (!resultText.innerText.match(/.*\d/)) {
		addText("0.", resultText);
	}
	if (resultText.innerText.match(/.*\d/) && !resultText.innerText.match(/.*\./)) {
		console.log("decimal test");
		addText(".", resultText);
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
