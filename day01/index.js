// console.log("자바스크립트! 시작");

// // 미니퀴즈
// // 자바스크립트 공부 다짐
// // 오늘 점심 메뉴:
// console.log("자바스크립트 부셔버리겠습니다.");
// console.log("오늘 점심 뭐먹지...?");

// window.alert("경고!"); 알림창
// window.confirm("아무거나"); 확인취소창
// window.prompt("왜안나오지?");
// window.open("https://www.naver.com/"); 경로 새창열기
// window.scrollTo(x축,y축); 지정된 위치로 이동

// const a = document.createElement("div");
// a.innerText = "아메리카노";
// a.addEventListener("mouseover", () => {
//   window.alert("메가 커피 짱짱");
// });

// document.body.appendChild(a);

//화면에 버튼 태그를 만들고
//안의 내용은 석가탄신일
// 클릭을 하면 alert으로 부처님 오심 ㄹㅇ

// const a = document.createElement("button");
// a.innerText = "성탄절";
// a.addEventListener("click", () => {
//   window.alert("예수님 태어남");
// });

// document.body.appendChild(a);

// const b = document.createElement("button");
// b.innerText = "석가탄신일";
// b.addEventListener("mouseup", () => {
//   window.alert("부처님 오심 ㄹㅇ");
// });

// document.body.appendChild(b);

// 버튼 태그 만들고, 안에 아메리카노
// 클릭을 하면, 라떼

// const a = document.createElement("button");
// a.innerText = "아메리카노";
// a.addEventListener("click", () => {
//   if ((a.innerText = "아메리카노")) {
//     a.innerText = "라떼";
//   }
// });

// document.body.appendChild(a);

// const b = window.prompt("무엇이든 물어보살");
// console.log(b);

// 첫번째 prompt 버튼 클릭 전 이름
// 두번째 prompt 버튼 클릭 후 이름
// 클릭전 이름 버튼 만들고,  클릭하면 두번째 클릭 이름으로 바뀜

// const a = window.prompt("커피");
// const b = window.prompt("차");

// const c = document.createElement("button");
// c.innerText = a;
// console.log(a);
// c.addEventListener("click", () => {
//   c.innerText = b;
//   console.log(b);
// });

// document.body.appendChild(c);

// button 태그 만들고, 배경색 하늘색, 폰트 사이즈 20px,
// 클릭을 하면, 빨간색으로 바뀌는

// const a = document.createElement("button");
// a.innerText = "ㅎㅇ";
// a.style.backgroundColor = "skyblue";
// a.style.fontSize = "20px";
// console.log(a.style.backgroundColor);

// a.addEventListener("click", () => {
//   a.style.backgroundColor = "red";
//   console.log(a.style.backgroundColor);
// });

// document.body.appendChild(a);

// 버튼이 5개 있음, 빨, 주, 노, 초, 파 있음
// 모두 css를 배경색은 각각 해당 색으로 바꾸고,
// text는 빨, 주, 노, 초, 파
// div 태그가 width: 100px, height: 100px, border: 1px, solid black
// 여기서 위의 5개의 버튼중 하나를 누르면 div의 backgroundcolor가
// 해당 색으로 바뀌는 프로그램

const red = document.createElement("button");
const orange = document.createElement("button");
const yellow = document.createElement("button");
const green = document.createElement("button");
const blue = document.createElement("button");
const a = document.createElement("div");
a.innerText = "ㅎㅇ";

red.style.backgroundColor = "red";
orange.style.backgroundColor = "orange";
yellow.style.backgroundColor = "yellow";
green.style.backgroundColor = "green";
blue.style.backgroundColor = "blue";

red.innerText = "빨강";
orange.innerText = "주황";
yellow.innerText = "노랑";
green.innerText = "초록";
blue.innerText = "파랑";

a.style.width = "100px";
a.style.height = "100px";
a.style.border = "1px solid black";

red.addEventListener("click", () => {
  a.style.backgroundColor = "red";
});
orange.addEventListener("click", () => {
  a.style.backgroundColor = "orange";
});
yellow.addEventListener("click", () => {
  a.style.backgroundColor = "yellow";
});
green.addEventListener("click", () => {
  a.style.backgroundColor = "green";
});
blue.addEventListener("click", () => {
  a.style.backgroundColor = "blue";
});

document.body.appendChild(red);
document.body.appendChild(orange);
document.body.appendChild(yellow);
document.body.appendChild(green);
document.body.appendChild(blue);
document.body.appendChild(a);
