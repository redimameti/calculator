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

	if (equationStr.includes("−")) {
		const numsArr = equationStr.split("−");
		const num1 = parseInt(numsArr[0]);
		const num2 = parseInt(numsArr[1]);
		return minusNums(num1, num2);
	}

	if (equationStr.includes("×")) {
		const numsArr = equationStr.split("×");
		const num1 = parseInt(numsArr[0]);
		const num2 = parseInt(numsArr[1]);
		return multiplyNums(num1, num2);
	}

	if (equationStr.includes("÷")) {
		const numsArr = equationStr.split("÷");
		const num1 = parseInt(numsArr[0]);
		const num2 = parseInt(numsArr[1]);
		return divideNums(num1, num2);
	}

	if (
		!equationStr.includes("+") ||
		!equationStr.includes("−") ||
		!equationStr.includes("÷") ||
		!equationStr.includes("×")
	) {
		return equationStr;
	}
};

numBtn.forEach((btn) => {
	btn.addEventListener("click", () => {
		if (resultText.innerText == "") {
			addText("Ans = 0", calcText);
		}
		addText(btn.innerText, resultText);
	});
});

// Operator buttons
operatorBtn.forEach((btn) => {
	btn.addEventListener("click", () => {
		if (!resultText.innerHTML.includes(btn.innerHTML)) {
			addText(" " + btn.innerText + " ", resultText);
		}

		// if (resultDisplay.innerHTML.includes(btn.innerHTML)) {
		// 	addText(" " + btn.innerHTML + " ", resultText);
		// }
	});
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
	// I want the equals button to work ONLY if there are numbers already on the screen, otherwise it should do nothing - currently it displays an = sign if pressed before any numbers
	// if (!resultText.innerText.includes(/[\d+]/)) {
	// 	continue;
	// }

	calcText.innerText = `${resultText.innerText} =`; // I want this to display the equation I had typed into the calculator BEFORE pressing equals

	//this is what we want to display in the result display
	resultText.innerText = `${magic(resultText.innerText)}`; //

	// If statement for num / 0
	// if (/\d\s*\/\s*[0]/.test(resultText.innerText)) {
	// 	console.log("test works");
	// 	calcText.innerText = `${resultText.innerText} =`;
	// 	resultText.innerText = "0";
	// }
});
