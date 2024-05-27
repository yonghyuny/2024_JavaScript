// 함수 만들기
// 1.
// my_string n result
// "hello"   3  "hhheeellllllooo"

const solution1 = (my_string, n) => {
  return [...my_string].map((v) => v.repeat(3)).join("");
};

console.log(solution1("apple", 3));

// 2.
// myString result
// "abstract algebra" "AbstrAct AlgebrA"
// "PrOgRaMmErS"      "progrAmmers"

const solution2 = (myString) =>
  [...myString].map((v) => (v == "a" ? "A" : v.toLowerCase())).join("");

console.log(solution2("abstract algebra"));
