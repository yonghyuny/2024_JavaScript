// const input = document.querySelector(".input");
// const button = document.querySelector(".button");
// input을 입력하고 확인 버튼을 눌렀을 때,
// 8글자 이하이면 글자수가 짧습니다[빨간색] 나오고
// 아니면 글자수가 충분합니다[파란색]

// let a = "글자수가 짧습니다.";
// let b = "글자수가 충분합니다.";

// button.addEventListener("click", () => {
//   if (input.value.length <= 8) {
//     console.log(a);
//     window.alert(a);
//   } else {
//     console.log(b);
//     window.alert(a);
//   }
// });

// -------------------------------------
// const msg = document.createElement("div");
// document.body.appendChild(msg);
// button.addEventListener("click", () => {
//   if (input.value.length <= 8) {
//     msg.innerText = `글자수가 짧습니다.`;
//     msg.style.color = `red`;
//   } else {
//     msg.innerText = `글자수가 충분합니다.`;
//     msg.style.color = `blue`;
//   }
// });

// 8~20글자 사이이고,  반드시 !,#,$를 하나라도 포함해야하고
// 글자 시작을 'IT'로 하면, 올바르게 문자를 설정했습니다.
// 아니면 문자를 다시 설정하세요.

// const input = document.querySelector(".input");
// const button = document.querySelector(".button");
// const msg = document.querySelector(".msg");

// const a = input.value.length >= 8 || input.value.length <= 20;
// const b = input.value.startWith("IT");
// const c =
//   input.value.includes("!") ||
//   input.value.includes("#") ||
//   input.value.includes("$");

// button.addEventListener("click", () => {});

// button.addEventListener("click", () => {
//   if (
//     (input.value.length >= 8 || input.value.length >= 20) &&
//     input.value.startsWith("IT") &&
//     (input.value.includes("!") ||
//       input.value.includes("#") ||
//       input.value.includes("$"))
//   ) {
//     msg.innerText = "올바르게 문자를 설정했습니다.";
//   } else {
//     msg.innerText = "문자를 다시 설정하세요.";
//   }
// });
// ---------------------------------------
// button.addEventListener("click", () => {
//   const value = input.value;
//   const isValidLength = 8 <= value.length && value.length <= 20;
//   const isValidSpecialChar =
//     value.includes("!") || value.includes("#") || value.includes("$");
//   const isValidStart = value.startsWith("IT");
//   const isValid = isValidLength && isValidSpecialChar && isValidStart;

//   if (isValid) {
//     msg.innerText = "올바르게 문자를 설정했습니다.";
//     msg.style.color = "blue";
//   } else {
//     msg.innerText = "문자를 다시 설정하세요.";
//     msg.style.color = "red";
//   }
// });

// 8~20글자 사이이고, 아니면 8~20글자 사이로 글자를 만들어주세요!
// 반드시 !,#,$를 하나라도 포함해야하고, 아니면 반드시 !,#,$이 포함되어야 해요!
// 글자 시작을 'IT'로 시작하되 아니면 반드시 IT 시작해야 해요!
// 올바르게 문자를 설정했습니다.
//

const input = document.querySelector(".input");
const button = document.querySelector(".button");
const msg = document.querySelector(".msg");
msg.style.color = "red";
button.addEventListener("click", () => {
  const value = input.value;

  const isLength = value.length >= 8 && value.length <= 20;
  const isSpecialCheck =
    value.includes("!") || value.includes("#") || value.includes("$");
  const isCheckIT = value.startsWith("IT");

  if (!isLength) {
    msg.innerText = "8~20글자 사이로 글자를 만들어주세요";
  } else if (!isSpecialCheck) {
    msg.innerText = "!,#,$ 가 포함되어야 합니다.";
  } else if (!isCheckIT) {
    msg.innerText = "반드시 IT로 시작해야 합니다.";
  } else {
    msg.innerText = "올바르게 문자를 설정했습니다.";
    msg.style.color = "blue";
  }
});
