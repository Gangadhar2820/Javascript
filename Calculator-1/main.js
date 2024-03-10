var MathExpression = "0";
var formatString = "0";

let resultElement = document.getElementById("result");
resultElement.innerText = MathExpression;

let operands = [...document.querySelectorAll(".operand")];
let btns1_9 = operands.slice(0, 9);
let btns0 = operands.slice(9, 11);
let btnDot = operands[11];

let [AC, backspace, percent, ...operators] = [
  ...document.querySelectorAll(".operator"),
];

let equal = document.querySelector(".equal");

btns1_9.forEach((btn) => {
  btn.onclick = () => {
    if (MathExpression == "0") {
      MathExpression = btn.value;
      resultElement.innerText = MathExpression;
    } else {
      MathExpression += btn.value;
      resultElement.innerText = MathExpression;
    }
  };
});

btns0.forEach((btn) => {
  btn.onclick = () => {
    if (MathExpression != "0") {
      MathExpression += btn.value;
      resultElement.innerText = MathExpression;
    }
  };
});

btnDot.onclick = () => {
  let regEx1 = /[+x\/%\.\-]$/;
  let regEx2 = /\.[0-9]+$/;

  if (MathExpression == "0") {
    MathExpression = "0.";
    resultElement.innerText = MathExpression;
  } else if (!regEx1.test(MathExpression) && !regEx2.test(MathExpression)) {
    MathExpression += btnDot.value;
    resultElement.innerText = MathExpression;
  }
};

operators.forEach((btn) => {
  btn.onclick = () => {
    let regEx1 = /[0-9]$/;
    if (regEx1.test(MathExpression)) {
      MathExpression += btn.value;
      resultElement.innerText = MathExpression;
    } else {
      MathExpression = MathExpression.replace(/.$/, btn.value);
      resultElement.innerText = MathExpression;
    }
  };
});

AC.onclick = () => {
  MathExpression = "0";
  resultElement.innerText = MathExpression;
};

backspace.onclick = (_) => {
  if (MathExpression.length == 1) {
    MathExpression = "0";
    resultElement.innerText = MathExpression;
  } else if (MathExpression.length > 1) {
    MathExpression = MathExpression.replace(/.$/, "");
    resultElement.innerText = MathExpression;
  }
};

equal.onclick = () => {
  if (/x/g.test(MathExpression))
    MathExpression = MathExpression.replaceAll(/x/g, "*");
  if (/[+*\/\.\-]$/.test(MathExpression)) MathExpression = MathExpression.replace(/.$/,"");
  let result = eval(MathExpression);
  MathExpression = result;
  resultElement.innerText = result;
};
