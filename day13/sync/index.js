// 동기 프로그래밍
// console.log(1);
// console.log(3);
// console.log(4);
// 비동기[데이터가져오기, 지도위치가져오기, 시간초재기]

// setTimeout(() => {
//   console.log(2);
// }, 1000);

// setInterval(() => {
//   console.log("오늘은 목요일");
// }, 1000);

// ----------------------------------

// const count = document.querySelector(".count");
// setInterval(() => {
//   count.innerText = Number(count.innerText) + 1;
// }, 1000);

// 1. 지금 몇년 몇월 몇일 무슨요일인지 html에 나타내기

// const today = document.querySelector(".today");

// today.innerText = new Date();

// const today = new Date();
// const year = today.getFullYear();
// const month = today.getMonth();
// const date = today.getDate();
// const day = today.getDay();

// const days = ["월", "화", "수", "목", "금", "토", "일"];

// const today1 = document.querySelector(".today");
// today1.innerText = `${year}년 ${month}월 ${date}일 ${day}요일`;

// const dateEl = document.querySelector(".date_el");
// const date = new Date();
// const koreaDay = {
//   1: "월요일",
//   2: "화요일",
//   3: "수요일",
//   4: "목요일",
//   5: "금요일",
//   6: "토요일",
//   7: "일요일",
// };

// dateEl.innerText = `${date.toLocaleString()} ${koreaDay[date.getDay()]}`;

setInterval(() => {
  const dateEl = document.querySelector(".date_el");
  const date = new Date();
  const koreaDay = {
    1: "월요일",
    2: "화요일",
    3: "수요일",
    4: "목요일",
    5: "금요일",
    6: "토요일",
    7: "일요일",
  };

  dateEl.innerText = `${date.toLocaleString()} ${koreaDay[date.getDay()]}`;
}, 1000);
