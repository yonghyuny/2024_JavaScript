const fruits = ["strawberry", "orange", "apple", "banana", "melon", "durian"];

// 1. a가 포함되어있으면 대문자화 시키고, 아니면 '＃' 출력하기

// fruits.forEach((v) => {
//     if (v.includes("a")) {
//       const a = v.toUpperCase();
//       console.log(a);
//     } else {
//       console.log("#");
//     }
//   });
// ----------------------------------------
// fruits.forEach((v)=>{
// console.log(v.incoludes("a")) ? v.toUpperCase() : "#";
// });

// 2. b가 포함되어 있으면 b기준으로 단어를 쪼개서 배열화하고, 아니면 '#'출력하기
// fruits.forEach((v) => {
//   if (v.includes("b")) {
//     const b = v.split("b");
//     console.log(b);
//   } else {
//     console.log("#");
//   }
// });
// ---------------------------------------------------------
// fruits.forEach((v) => {
//   console.log(v.includes("b") ? v.split("b") : "#");
// });

// 3. n이 포함되어있으면 기존에 있던 단어들을 결합해서 최종 단어 보여주기
// let a = " ";
// fruits.forEach((v) => {
//   if (v.includes("n")) {
//     a += v;
//   }
// });
// console.log(a);
// ---------------------------------------------------------------

// let a = "";
// fruits.forEach((v) => {
//   if (v.includes("n")) {
//     a += v;
//   }
// });
// console.log(a);

// 4. 문자의 길이가 6글자 이상이면 알파뱃 a를 k로 바꿔서 출력하고, 아니면 대문자화해서 출력하기

// fruits.forEach((v) => {
//   if (v.length >= 6) {
//     const b = v.replace("a", "k");
//     console.log(b);
//   } else {
//     const a = v.toUpperCase();
//     console.log(a);
//   }
// });
// ----------------------------------------

// fruits.forEach((v) => {
//   console.log(v.length >= 6 ? v.replace("a", "k") : v.toUpperCase());
// });
