// 데이터 타입: 기본 + 참조
// 기본: 문자, 숫자

// const a = window.prompt("숫자 입력:");
// 문자 => 숫자 타입 바꾸기
// 1. Number
// const b = Number(a);
// console.log(b + 10);

// 2. parseInt();, parseFloat();  문자타입만 넣었을때 유효함
// const c = parseInt(a);
// console.log(c + 20);

// 1.사칙연산

const n1 = window.prompt("숫자1: ");
const n2 = window.prompt("숫자2: ");

const n3 = Number(n1);
const n4 = Number(n2);
const sum = n3 + n4;

const resultBox = document.createElement("div");
resultBox.innerText = `${n3}+${n4} = ${sum}`;

document.body.appendChild(resultBox);

// const firstNum = wind.prompt("첫 번째 숫자:");
// const firstNumParst = Number(firstNum);
// const secondNum = window.prompt("두 번째 숫자:");
// const secondNumParse = Number(secondNum);
// const numResultDiv = document.createElement("div");
// numResultDiv.innerText =  `합: ${firstNumParse + secondNumParse}, 차: ${firstNumParse - secondNumParse}, 곱: ${firstNumParse * secondNumParse}`;
// document.body.appendChild(numResultDiv);

// 2.출생년도

const age = window.prompt("나이: ");
const ageBox = document.createElement("div");

const ageNum = Number(age);
const bornYear = 2024 - ageNum + 1;

ageBox.innerText = `${bornYear}`;

document.body.appendChild(ageBox);

// const numAge = Number(window.prompt("나이:""))
// const yearDiv = document.createElemnet("div");
// yearDiv.innerText = `${2025 - numAge}년 생이네요`;
// document.body.appendChild(yearDiv);

// 3.정사각형 넓이

const width = window.prompt("한변의 길이: ");
const widthNum = Number(width);

const area = widthNum * widthNum;

const square = document.createElement("div");
square.innerText = `${area}`;

document.body.appendChild(square);

// const side = Number(window.prompt("정사각형의 한 변의 길이:"));
// const squareDiv = document.createElement("div");
// squareDiv.innerText = `정사각형의 넓이: ${side * side}`;
// document.body.appendChild(squareDiv);

// 4. 시간변환
// const num = window.prompt("숫자 입력:");
// const num2 = Number(num);

// const min = num2 / 60;
// const sec = num2 % 60;

// const timer = document.createElement("div");
// timer.innerText = `${min}분 ${sec}초입니다.`;
//
// document.body.appendChild(timer);
