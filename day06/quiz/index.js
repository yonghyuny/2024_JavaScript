// 색깔 다섯개
// 사이즈 다섯개
// 테두리 사이즈 3개
// 배열

// const box = document.querySelector(".box");
// const redBtn = document.querySelector(".red");
// const orangeBtn = document.querySelector(".orange");
// const yellowBtn = document.querySelector(".yellow");
// const greenBtn = document.querySelector(".green");
// const blueBtn = document.querySelector(".blue");

// const xsmallBtn = document.querySelector(".xsmall");
// const smallBtn = document.querySelector(".small");
// const mediumBtn = document.querySelector(".medium");
// const largeBtn = document.querySelector(".large");
// const xlargeBtn = document.querySelector(".xlarge");

// const borderRadiusZeroBtn = document.querySelector(".borderRadiusZero");
// const borderRadiusTenBtn = document.querySelector(".borderRadiusTen");
// const borderRadiusTwentyBtn = document.querySelector(".borderRadiusTwenty");

// const colors = ["red", "orange", "yellow", "green", "blue"];
// const sizes = ["xsmall", "small", "medium", "large", "xlarge"];
// const borders = ["borderRadiusZero", "borderRadiusTen", "borderRadiusTwenty"];

// const colorsBtns = colors.forEach((v) => {
//   document.querySelector(`.${v}`);
// });

// const sizeBtn = sizes.forEach((v) => {
//   document.querySelector(`.${v}`);
// });

// const bordersBtn = borders.forEach((v) => {
//   document.querySelector(`.${v}`);
// });

const colorList = ["red", "orange", "yellow", "green", "blue"];
const sizeList = ["xsmall", "small", "medium", "large", "xlarge"];
const radiusList = [
  "borderRadiusZero",
  "borderRadiusTen",
  "borderRadiusTwenty",
];

// 함수화
const makeButtons = (x, y) => {
  x.forEach((v) => {
    const btn = document.createElement("button");
    btn.innerText = v;
    btn.addEventListener("click", () => {
      const box = document.querySelector(".box");
      x.forEach((v) => box.classList.remove(v));
      box.classList.add(v);
    });
    const ListTag = document.querySelector(y);
    ListTag.appendChild(btn);
  });
};

makeButtons(colorList, ".colorBtnList");
makeButtons(sizeList, ".sizeBtnList");
makeButtons(radiusList, ".radiusBtnList");

// colorList.forEach((v) => {
//   const btn = document.createElement("button");
//   btn.innerText = v;
//   btn.addEventListener("click", () => {
//     const box = document.querySelector(".box");
//     colorList.forEach((v) => box.classList.remove(v));
//     box.classList.add(v);
//   });
//   const colorsBtnListTag = document.querySelector(`.colorBtnList`);
//   colorsBtnListTag.appendChild(btn);
// });

// sizeList.forEach((v) => {
//   const btn = document.createElement("button");
//   btn.innerText = v;
//   btn.addEventListener("click", () => {
//     const box = document.querySelector(".box");
//     sizeList.forEach((v) => box.classList.remove(v));
//     box.classList.add(v);
//   });
//   const sizeBtnListTag = document.querySelector(`.sizeBtnList`);
//   sizeBtnListTag.appendChild(btn);
// });

// radiusList.forEach((v) => {
//   const btn = document.createElement("button");
//   btn.innerText = v;
//   btn.addEventListener("click", () => {
//     const box = document.querySelector(".box");
//     radiusList.forEach((v) => {
//       box.classList.remove(v);
//     });
//     box.classList.add(v);
//   });
//   const radiusListBtnTag = document.querySelector(".radiusBtnList");
//   radiusListBtnTag.appendChild(btn);
// });

// 렉시컬 스코프[lexical(맥락적 구역)]
