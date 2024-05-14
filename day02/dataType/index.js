// 데이터타입 기본형 참조형
// 기본 타입
// 1. 문자

// const favorite1 = window.prompt("당신이 좋아하는 커피는");
// const favorite2 = window.prompt("당신이 좋아하는 빵은");

// console.log(
//   "당신이 좋아하는 커피는 " +
//     favorite1 +
//     "이고 " +
//     "당신이 좋아하는 빵은 " +
//     favorite2 +
//     "이군요."
// );

// console.log(
//   `당신이 좋아하는 커피는 ${favorite1} 이고 당신이 좋아하는 빵은 ${favorite2} 이군요.`
// );

// const a = "coffee";
// const b = "bread";
// const c = `latte`; //backtick

// 1번 문제
// const name = window.prompt("이름: ");
// const age = window.prompt("나이: ");
// const favoriteColor = window.prompt("좋아하는 색: ");

// console.log(
//   `제 이름은: ${name}, 나이는: ${age}, 좋아하는 색은 ${favoriteColor}입니다!.`
// );

// 2번 문제
// const date = window.prompt("오늘의 날짜: ");
// const plan = window.prompt("오늘의 할일: ");

// console.log(`오늘은 ${date}, 계획하신 일정은 ${plan}입니다.`);

// 3번 문제
// const data = window.prompt("데이터를 입력하시오");
// const btn = document.createElement("button");
// btn.innerText = `입력한 내용: ${data}`;

// document.body.appendChild(btn);

// 유저에게 세번의 prompt로 헥사코드 색깔을 입력을 받고
// 버튼 3개를 만들고(text: 헥사코드, bg: 헥사코드)
// 박스 하나 만들고(w:100px, h:100px, bg: 선택된 버튼의 헥사코드, text: 입력된 헥사코드: [])

const a = window.prompt("색1 입력: ");
const b = window.prompt("색2 입력: ");
const c = window.prompt("색3 입력: ");

const btn1 = document.createElement("button");
const btn2 = document.createElement("button");
const btn3 = document.createElement("button");

btn1.innerText = `${a}`;
btn2.innerText = `${b}`;
btn3.innerText = `${c}`;

btn1.style.backgroundColor = a;
btn2.style.backgroundColor = b;
btn3.style.backgroundColor = c;

const box = document.createElement("div");
box.style.width = "100px";
box.style.height = "100px";
box.innerText = "ㅎㅇ";

btn1.addEventListener("click", () => {
  box.style.backgroundColor = a;
  box.innerText = `${a}`;
});

btn2.addEventListener("click", () => {
  box.style.backgroundColor = b;
  box.innerText = `${b}`;
});
btn3.addEventListener("click", () => {
  box.style.backgroundColor = c;
  box.innerText = `${c}`;
});

document.body.appendChild(btn1);
document.body.appendChild(btn2);
document.body.appendChild(btn3);
document.body.appendChild(box);
