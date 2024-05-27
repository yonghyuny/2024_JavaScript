// type casting : Number, String, Boolean

//String -> Array

const coffee = "americano";

// 1.split(""), array.from(), ...[전개구문]
// const a1 = coffee.split("");
// const a2 = Array.from(coffee);
// const a3 = [...coffee];

// //quiz["m","r","c","n"]
// const a4 = [...coffee].filter((v) => ![..."aieou"].some((v1) => v1 == v));
// console.log(a4);

// e만 대문자
// const a5 = [...coffee].map((v) => (v == "e" ? v.toUpperCase() : v));
// console.log(a5);

// Array -> String
const fruits = ["apple", "banana", "orange"];

//join(""), toString()
const b1 = fruits.join(""); //applebananaorange
const b2 = fruits.toString(); // apple,banana,orange

const b3 = fruits.map((v) => [...v].filter((v1) => v1 != "a").join());

const b4 = fruits.map((v) => [...v]).flat();
const b5 = [...fruits.join("")];

console.log(b4);

//reduce[누적시키다]  acc[누적],curr[현재]

// [1, 3, 5, 7, 9].reduce((a, c) => {
//   console.log(`a:${a} c: ${c}`);
//   return a + c;
// });

// Array(10)
//   .fill(0)
//   .map((v, i) => i + 1)
//   .reduce((a, c) => a + c);

// [1~10] 홀수는 더하고 짝수는 빼기의 합

const a = Array(10)
  .fill(0)
  .map((v, i) => (i % 2 == 0 ? -(i + 1) : i + 1))
  .reduce((a, c) => a + c);
console.log(a);
