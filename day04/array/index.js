// 데이터 타입: 기본[String, Number, Boolean, Null, Undefined] & 참조[Array]

// Array

// const colors = ["#1abc9c", "#3498db", "#e74c3c", "#7f8c8d"];
// colors.push("#f1c40f"); // push 배열에 추가해주세요
// colors.sort(); // sort 배열을 정렬해주세요

//divbox h 100 w 100 bg x 나타내기

// colors.forEach((x) => {
//   const a = document.createElement("div");
//   a.style.width = "100px";
//   a.style.height = "100px";
//   a.style.backgroundColor = x;
//   document.body.appendChild(a);
// }); // 한명씩 불러주세요

// const menu = ["americano", "latte", "mint", "vanila", "milkTea"];
// menu.forEach((x) => {
//   console.log(x.toUpperCase());
// });

// const prices = [2000, 3000, 5000, 3000, 4000, 6000];

// prices.forEach((x) => {
//   if (x > 3000) {
//     console.log("비싸네요.");
//   } else {
//     console.log("싸네요.");
//   }
// });

// replace(a,b), -> a를 b로 바꿔줌
// replaceAll(a,b)  -> 모든 a를 b로 바꿔줌
// const a = "hello".replaceAll("l", "z");

//slice(a,b) a부터 b-1까지 문자 짜르기
//

const option = ["100 blue", "200 green", "500 black", "400 red"];
// w 100 h 100 bg blue w200h200 bg green

// const z = option[0].split(" ");

// const box1 = document.createElement("div");
// const box2 = document.createElement("div");

// box1.style.width = `${z[0]}px`;
// box1.style.height = `${z[0]}px`;
// box1.style.backgroundColor = z[1];

// document.body.appendChild(box1);

// const y = option[1].split(" ");

// box2.style.width = `${y[0]}px`;
// box2.style.height = `${y[0]}px`;
// box2.style.backgroundColor = y[1];

// document.body.appendChild(box2);

// option.forEach((x) => {
// const a = x.split(" ");
// const lenght = a[0];
// const color = a[1];

// const box = document.createElement("div");
// box.style.width = `${lenght}px`;
// box.style.height = `${lenght}px`;
// box.style.backgroundColor = color;
// document.body.appendChild(box);

//   x.split(" ").forEach((y)=> {

//   })
// });
