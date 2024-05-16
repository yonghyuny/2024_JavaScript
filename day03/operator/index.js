// 연산자: 산술연산자, 대입연산자, 논리연산자, 비교연산자, 삼항연산자, es6연산자 type연산자, ...

// 산술연산자(사칙연산)
const a1 = 1 + 2;   // 더하기
const a2 = 1 - 2;   // 빼기
const a3 = 1 * 2;   // 곱하기
const a4 = 2 ** 10; // es6 제곱
const a5 = 10 / 2;  // 나누기
const a6 = 3 % 2;   // 나머지 5 % 2 => 1, 10 % 4 => 2
const a7 = ++10;    // 증가연산자 1 올리기
const a8 = --10;    // 감소연산자 1 내리기
const a9 = +'123'   // 숫자로 변환하는 연산자
const a10 = -a1     // 부호 반전(+ <-> -)

// 문자열 연결 연산자
const a11 = "hello" + 123 // 문자열이 하나라도 있으면 모두 문자화 "hello123"

// 할당 연산자 =, +=, -=, *=, /=, ...
let b1 = 100;
b1 += 50; // b1 = b1 + 50;
b1 -= 10; // b1 = b1 - 10; 
b1 *= 2;  // b1 = b1 * 2;
b1 **= 4; // b1 = b1 ** 4;

// 비교 연산자 >, <, >=, <=, ==, !=, ===, !== :도출되는 타입은 Boolean
const c1 = 3 > 1;      // true
const c2 = 3 < 1;      // false
const c3 = 3 >= 1;     // true
const c4 = 3 <= 1;     // false
// const c5 = 5 == 5;  // true
// const c6 = 5 != 10; // true
const c7 = 5 === "5"   // false
const c8 = 5 !== "5"   // true

// 논리 연산자: &&[AND], ||[OR], ![NOT]

// &&[AND]: 모든 값이 true이면 true
// ||[OR]: 하나라도 값이 true이면 true
// ![NOT]: true -> false, false -> true

const d1 = 3 > 0 && 5 > 10  // false
const d2 = 3 > 0 || 5 > 10  // true
const d3 = !true            // false

const d4 = !"쉬는시간"       // false
const d5 = !""              // true
const d6 = !!"쉬는시간"     // true

const d8 = !(5 <= 3) || !(10 <= 7)  //true  드모르간의 법칙
const d7 = (5 > 3) && (10 > 7)  //true           


// 삼항 연산자
// 조건(비교연산자) ? true : false
const kg = 67;
const result = kg > 60 ? "과체중" : "정상";

// typeof 연산자
typeof 123 // "number"
typeof "hello" // "string"
typeof true // boolean
typeof !!123 // boolean

// es6이후 연산자 **, ??, 

// Nullish 병합 연산자: ??기준 앞에 값이 null, undefined 일경우 ?? 뒤의 값 도출
const h1 = "엄준식" ?? "살아있음";  // "엄준식"
const h2 = null ?? "데이터";  // "데이터"