import { backendData } from "./data.js";

backendData;

// 1. id, currency, money, phone만 콘솔로 가져오기
// 2. animalName -> animal, car:{make,model,year} 콘솔로
// 3. ipaddress가 맨마지막 세자리가 합이 10이하이면, id,color만 콘솔로
// 4. timezone이 알파벳 모음으로 시작하면, {timezone, carmake, phone앞 세자리만 가져오기}
// 5. money가 50000엔 이하이면, phone[하이픈 제거], appName은 대문자화 하고 가져오기

// 1--------------------------------------------------------------------

// const a = backendData.map(({ id, currency, money, phone }) => ({
//   id,
//   currency,
//   money,
//   phone,
// }));

// console.log(a);

// 2------------------------------------------------------------------

// const c = backendData.map(
//   ({ carMake: make, carModel: model, carModelYear: year }) => ({
//     make,
//     model,
//     year,
//   })
// );

// const b = backendData.map(
//   ({
//     animalCommonName: animal,
//     carcarMake: make,
//     carModel: model,
//     carModelYear: year,
//   }) => ({
//     animal,
//     carmake,
//     model,
//     year,
//   })
// );

// console.log(b);

// 3---------------------------------------------------------

// const a1 = backendData.map((v) => v.ipAddress.replaceAll(".", ""));

// console.log(a1);

// const a2 = backendData.map(({ id, color }) => ({
//   id,
//   color,
// }));

// console.log(a2);

const c = backendData
  .filter(({ ipAddress }) => {
    const ipArr = [...ipAddress];
    const lastDotIndex = ipArr.findLastIndex((v) => v === ".");
    const spliceArr = ipArr
      .splice(lastDotIndex + 1, ipArr.length)
      .map((v) => parseInt(v));
    const sum = spliceArr.reduce((a, c) => a + c);
    return sum <= 10;
  })
  .map(({ ipAddress, id, color }) => ({ ipAddress, id, color }));
console.log(c);

// 4----------------------------------------

backendData.timeZone, backendData.carMake, backendData.phone;
if ((backendData.timeZone[0] = "A" || "E" || "I" || "O" || "U")) {
  backendData.timeZone, backendData.carMake, backendData.phone;
}

// 5-------------------------------
