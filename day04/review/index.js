// 0이하 떨어지지않는

const plus = document.createElement("button");
const display = document.createElement("span");
const minus = document.createElement("button");

plus.innerText = "+";
minus.innerText = "-";
display.innerText = "0";

plus.addEventListener("click", () => {
  const result = parseInt(display.innerText) + 1;
  display.innerText = result;
  // display.innerText = Number(display.innerText) + 1;
});

minus.addEventListener("click", () => {
  const result = parseInt(display.innerText) - 1;
  result === -1 ? (display.innerText = "0") : (display.innerText = result);

  // const isZero = Number(result.innerText) === 0;
  // display.innerText = isZero ? 0 : Number(result.innerText) -1;
});

document.body.appendChild(plus);
document.body.appendChild(display);
document.body.appendChild(minus);
