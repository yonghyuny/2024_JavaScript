// 기본 타입: string, number, boolean, null, undefined
// 참조 타입: array, element

// const divTag = document.createElement("div");
// divTag.appendChild() 자식 태그 추가하기
// divTag.removeChild() 자식에 해당 태그 지우기

// divTag.style  직접 CSS 관여
// divTag.classList 클래스 리스트 보기
// divTag.classList.add("red") 클래스 리스트에 red 추가
// divTag.classList.remove("red") 클래스 리스트에서 red 삭제
// divTag.classList.toggle("red")  클래스 리스트에 red가 있으면 삭제 없으면 추가

// const box = document.querySelector(".box");
// const color = document.querySelector(".color");
// const shape = document.querySelector(".shape");

// 늘리기 눌르면 w h 200 그리고 줄이기로

// 빨간색 누르면 빨간색으로 바뀌고 파란색으로
// 파란색 누르면 파란색으로 바뀌고 빨간색

// const box = document.querySelector(".box");
// const color = document.querySelector(".color");
// const shape = document.querySelector(".shape");

// color.addEventListener("click", () => {
//   box.classList.add("red");
//   box.classList.remove("blue");
//   color.innerText = "파란색";
// });
// shape.addEventListener("click", () => {
//   box.classList.remove("box");
//   box.classList.add("box1");
//   shape.innerText = "줄이기";
// });
// ----------------------------------------------------------------
// const box = document.querySelector(".box");
// const color = document.querySelector(".color");
// const shape = document.querySelector(".shape");
// const degree = document.querySelector(".degree");

// shape.addEventListener("click", () => {
//   shape.innerText = shape.innerText == "늘리기" ? "줄이기" : "늘리기";
//   box.classList.toggle("medium");
//   box.classList.toggle("large");
// });

// color.addEventListener("click", () => {
//   color.innerText = color.innerText == "빨간색" ? "파란색" : "빨간색";
//   box.classList.toggle("blue");
//   box.classList.toggle("red");
// });

// degree.addEventListener("click", () => {
//   degree.innerText = degree.innerText == "테두리 직각" ? "둥금" : "테두리 직각";
//   box.classList.toggle("radius");
//   box.classList.toggle("deg_90");
// });
