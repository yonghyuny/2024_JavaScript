const minus = document.createElement("button");
const plus = document.createElement("button");
const result = document.createElement("span");

minus.innerText = `-`;
plus.innerText = `+`;
result.innerText = `0`;

minus.addEventListener("click", () => {
  result.innerText = Number(result.innerText) - 1;
});

plus.addEventListener("click", () => {
  result.innerText = Number(result.innerText) + 1;
});

document.body.appendChild(minus);
document.body.appendChild(result);
document.body.appendChild(plus);
