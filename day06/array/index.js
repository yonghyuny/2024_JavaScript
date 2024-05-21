// 데이터 타입: 기본 + 참조
// 기본: number, string, null, undefined, boolean
// 참조: array

// str = String() or "" or `` +
// number = Number() or 123123 or +
// boolean = Boolean() or true or !
// Array = Array() or []

// const fruits = ["apple", "banana", "orange", "kiwi"];

// // 인덱스
// fruits[0]; // apple
// fruits[1]; // banana

// // 추가 및 갱신
// fruits.push("grape");
// fruits[0] = "mango";

// // 삭제
// fruits.pop(); // 맨뒤에 삭제
// delete fruits[1]; // banana 삭제

// 가공하는 기능
// 1. 변형 - push, pop, reverse, shift[맨앞에 자르기], sort
// 2. 접근자 - indexOf[몇번째?], slice[자르고 새로운 배열로 주기]
// 3. 반복[()=>{}] - forEach, map

// const num = [3, 7, 2, 91, 309, 23, 124];

// 요소 바꾸기
// const newArr = num.map((v) => v + 10);
// console.log(newArr);

// const newArr = num.map((v) => v + 100);
// console.log(newArr);

// const newArr = num.map((v)=> v*v);
//     // v ** 2

// const newArr = num.map((v) => v % 2 ==1 ? v **2 : v+100);
//   if (v % 2 == 1) {
//     return v * v;
//   } else {
//     return v + 100;
//   }
// });

// const fruits = ["apple", "banana", "orange", "kiwi"];
// //a포함 대문자 아니면 icecream

const newArr = fruit.map((v) => (v.includes("a") ? v.toUpperCase : "iceCream"));

// const newArr = fruits.map((v) => {
// //   return v.includes("a") ? v.toUpperCase : "iceCream";

//   const check = v.includes("a");
//   if (check) {
//     return v.toUpperCase();
//   } else {
//     return "iceCream";
//   }
// });
// console.log(newArr);

//filter
const num1 = [3, 7, 2, 91, 309, 23, 124];

// const num1Arr = num1.filter((v) => v > 10);

// const num1Arr = num1.filter((v) => return v % 2 == 0);

const fruits = [
  "apple",
  "banana",
  "orange",
  "kiwi",
  "mango",
  "durian",
  "strawberry",
  "melon",
  "watermelon",
];

// const frlength = fruits.filter((v) => return v.length == 6);

// 알파벳 i가 들어가 있으면 제거하고, 제거 후 단어의 문자의 길이로 치환

// const delI = fruits.filter((v) => !v.includes("i");
// });

// const delLen = delI.map((v) =>  v.length);
// console.log(delLen);

// 체이닝(chaining)
// const delI = fruits
//   .filter((v) => !v.includes("i").map((v) => v.length);

// every && some
// const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const every1 = arr3.every((v) => v > 0);

// // console.log(`every1: ${every1}`);

// const some1 = arr3.some((v) => v >= 10);

// console.log(`some1: ${some1}`);
