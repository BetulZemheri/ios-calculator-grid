let result1 = document.querySelector("#result1");
let result2 = document.querySelector("#result2");
let buttonpercent = document.querySelector("#buttonpercent");
let buttondivision = document.querySelector("#buttondivision");
let button7 = document.querySelector("#button7");
let button8 = document.querySelector("#button8");
let button9 = document.querySelector("#button9");
let buttonx = document.querySelector("#buttonx");
let button4 = document.querySelector("#button4");
let button5 = document.querySelector("#button5");
let button6 = document.querySelector("#button6");
let buttonminus = document.querySelector("#buttonminus");
let button1 = document.querySelector("#button1");
let button2 = document.querySelector("#button2");
let button3 = document.querySelector("#button3");
let buttonplus = document.querySelector("#buttonplus");
let button0 = document.querySelector("#button0");
let buttonpoint = document.querySelector("#buttonpoint");
let buttonequal = document.querySelector("#buttonequal");
let buttonAC = document.querySelector("#buttonAC");

button0.addEventListener("click", () => {
  result1.innerText += button0.innerText;
});

button1.addEventListener("click", () => {
  result1.innerText += button1.innerText;
});

button2.addEventListener("click", () => {
  result1.innerText += button2.innerText;
});

button3.addEventListener("click", () => {
  result1.innerText += button3.innerText;
});

button4.addEventListener("click", () => {
  result1.innerText += button4.innerText;
});

button5.addEventListener("click", () => {
  result1.innerText += button5.innerText;
});

button6.addEventListener("click", () => {
  result1.innerText += button6.innerText;
});

button7.addEventListener("click", () => {
  result1.innerText += button7.innerText;
});

button8.addEventListener("click", () => {
  result1.innerText += button8.innerText;
});

button9.addEventListener("click", () => {
  result1.innerText += button9.innerText;
});

buttonAC.addEventListener("click", () => {
  result1.innerText = "";
  result2.innerText = "";
});

buttonplus.addEventListener("click", () => {
  result1.innerText += buttonplus.innerText;
  result2.innerText = result1.innerText;
  result1.innerText = "";
});

buttonminus.addEventListener("click", () => {
  result1.innerText += buttonminus.innerText;
  result2.innerText = result1.innerText;
  result1.innerText = "";
});

buttonx.addEventListener("click", () => {
  result1.innerText += buttonx.innerText;
  result2.innerText = result1.innerText;
  result1.innerText = "";
});

buttondivision.addEventListener("click", () => {
  result1.innerText += buttondivision.innerText;
  result2.innerText = result1.innerText;
  result1.innerText = "";
});

buttonpercent.addEventListener("click", () => {
  result1.innerText += buttonpercent.innerText;
  result2.innerText = result1.innerText;
  result1.innerText = "";
});

buttonpoint.addEventListener("click", () => {
  result1.innerText += buttonpoint.innerText;
});

buttonequal.addEventListener("click", () => {
  if (result2.innerText[result2.innerText.length - 1] == "+") {
    result1.innerText =
      parseFloat(result2.innerText) + parseFloat(result1.innerText);
    result2.innerText = "";
  } else if (result2.innerText[result2.innerText.length - 1] == "-") {
    result1.innerText =
      parseFloat(result2.innerText) - parseFloat(result1.innerText);
    result2.innerText = "";
  } else if (result2.innerText[result2.innerText.length - 1] == "x") {
    result1.innerText =
      parseFloat(result2.innerText) * parseFloat(result1.innerText);
    result2.innerText = "";
  } else if (result2.innerText[result2.innerText.length - 1] == "÷") {
    result1.innerText =
      parseFloat(result2.innerText) / parseFloat(result1.innerText);
    result2.innerText = "";
  } else if (result2.innerText[result2.innerText.length - 1] == "%") {
    result1.innerText =
      (parseFloat(result2.innerText) / 100) * parseFloat(result1.innerText);
    result2.innerText = "";
  }
});
