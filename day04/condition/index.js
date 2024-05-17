// if 조건문
// if(조건식)
// else

// const age = Number(window.prompt("나이"));

// if (age > 19) {
//   console.log("성인이네요.");
// } else {
//   console.log("미성년자이네요");
// }

// console.log("프로그램 종료");

// Quiz

// prompt로 두 개의 숫자를 입력 받고
// 큰 수를 콘솔로 출력하기

// const num1 = parseInt(window.prompt("숫자1"));
// const num2 = parseInt(window.prompt("숫자2"));

// if (num1 > num2) {
//   console.log(num1);
// } else {
//   console.log(num2);
// }
// console.log("프로그램 종료");

// const age = 15;

// if (age > 19) {
//   console.log("성인");
// } else if (age <= 19 && age > 16) {
//   console.log("고딩");
// } else if (age >= 16 && age > 13) {
//   console.log("중딩");
// } else {
//   console.log("잼민이");
// }

// Quiz
// 1. 하나의 정수를 입력받고, 양수, 음수 , 0인지 확인하기

// const num = Number(window.prompt("정수입력:"));
// if (num > 0) {
//   console.log("양수");
// } else if (num === 0) {
//   console.log("0");
// } else {
//   console.log("음수");
// }

// 2. 수학 점수를 입력 받고, 90이상 'A' 80이상 'B', 70이상 'C', 그게 아니면 'D'

// const mat = Number(window.prompt("수학점수"));

// if (mat >= 90) {
//   console.log("A");
// } else if (mat < 90 && mat >= 80) {
//   console.log("B");
// } else if (mat < 80 && mat >= 70) {
//   console.log("C");
// } else {
//   console.log("D");
// }

const num = Number(window.prompt("숫자 입력"));
// num % 2 === 1 홀수
// num % 2 === 0 짝수

//숫자 입력, 양의 홀수, 양싀 짝수, 음의 홀수, 음의 짝수, 0

// if (num % 2 === 1 && num > 0) {
//   console.log("양의 홀수");
// } else if (num % 2 === 0 && num > 0) {
//   console.log("양의 짝수");
// } else if (num % 2 === -1) {
//   console.log("음의 홀수");
// } else if (num % 2 === 0 && num < 0) {
//   console.log("음의 짝수");
// } else {
//   console.log("0");
// }

// const isPositive = num > 0;
// const isNegative = num < 0;
// const isOdd = num % 2 === 1;
// const isEven = num % 2 === 0;

// if (isPositive && isOdd) {
//   console.log("양의 홀수");
// } else if (isPositive && isEven) {
//   console.log("양의 짝수");
// } else if (isNegative && isOdd) {
//   console.log("음의 홀수");
// } else if (isNegative && isEven) {
//   console.log("음의 짝수");
// } else {
//   console.log("zero");
// }

// const age = 10;
// if (age > 7) {
//   if (age > 13) {
//     console.log("청소년");
//   } else {
//     console.log("유소년");
//   }
// }

// switch
const season = "봄";

switch (season) {
  case "봄": {
    console.log("날이 좋아요");
    break;
  }
  case "여름": {
    console.log("날이 더워요");
    break;
  }
  case "가을": {
    console.log("날이 쌀쌀해요");
    break;
  }
  case "겨울": {
    console.log("날이 추워요");
    break;
  }
}
