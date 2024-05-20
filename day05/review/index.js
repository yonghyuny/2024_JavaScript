// if, switch

// 1. if
// const isOverweight = true;

// if (isOverweight) {
//   console.log("과체중입니다.");
// } else {
//   console.log("정상입니다.");
// }

// 2. switch

// const user = "관리자";

// switch (user) {
//   case "관리자":
//     console.log("관리자 로그인");
//     break;
//   case "편집자":
//     console.log("편집자 로그인");
//     break;
//   case "일반유저":
//     console.log("일반유저 로그인");
//     break;
// }

const arr = ["아메리카노", "라떼", "민트", "바닐라"];
arr.forEach((v, i) => {
  //v => value 의 약자
  if (i % 2 == 0) {
    console.log(`${i}.${v}`);
  }
});
