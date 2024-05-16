// 색상 버튼 3개 임의로 만들기
// 파레트 상자 하나 만들기
// - + 버튼 만들기
// #ff9ff3
// #feca57
// #ff6b6b

// 상자가로세로 100px

const btn1 = document.createElement("button");
const btn2 = document.createElement("button");
const btn3 = document.createElement("button");
const palette = document.createElement("div");
const minus = document.createElement("button");
const plus = document.createElement("button");

btn1.innerText = "JIGGLYPUFF";
btn2.innerText = "CASANDORA YELLOW";
btn3.innerText = "PASTEL RED";

btn1.style.backgroundColor = "#ff9ff3";
btn2.style.backgroundColor = "#feca57";
btn3.style.backgroundColor = "#ff6b6b";

minus.innerText = "-";
plus.innerText = "+";

palette.innerText = "null";
palette.style.width = "100px";
palette.style.height = "100px";
palette.style.backgroundColor = null;

btn1.addEventListener("click", () => {
  palette.style.backgroundColor = "#ff9ff3";
  palette.innerText = "JIGGLYPUFF";
});

btn2.addEventListener("click", () => {
  palette.style.backgroundColor = "#feca57";
  palette.innerText = "CASANDORA YELLOW";
});

btn3.addEventListener("click", () => {
  palette.style.backgroundColor = "#ff6b6b";
  palette.innerText = "PASTEL RED";
});

plus.addEventListener("click", () => {
  const length = parseInt(palette.style.width) + 1;
  palette.style.width = `${length}px`;
  palette.style.height = `${length}px`;
});

minus.addEventListener("click", () => {
  const length = parseInt(palette.style.width) - 1;
  const isLength = length === 99;
  palette.style.width = isLength ? `100px` : `${length}px`;
  palette.style.height = isLength ? `100px` : `${length}px`;
});

document.body.appendChild(btn1);
document.body.appendChild(btn2);
document.body.appendChild(btn3);
document.body.appendChild(palette);
document.body.appendChild(plus);
document.body.appendChild(minus);
