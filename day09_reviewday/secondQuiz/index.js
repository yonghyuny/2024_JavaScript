// 아메리카노 3000원
// 라떼 4000원
// 레몬에이드 3500원
// 솔의눈 2500원
// 카스 4000원
// 바나나 우유 2000원
// 사이다 1500원
// 제로콜라 2000원
// 데자와 3000원
// 비타오백 500원
// 요거트 스무디 6000원
// 초코우유 3000원
// 돌체라떼 4000원
// 딸기라떼 3500원
// 민트라떼 5000원
// 비타천 1000원
// 테라 2500원

const drinkVal = [
  { name: "아메리카노", price: "3000원" },
  {
    name: "라떼",
    price: "4000원",
  },
  {
    name: "레몬에이드",
    price: "3500원",
  },
  {
    name: "솔의눈",
    price: "2500원",
  },
  {
    name: "카스",
    price: "4000원",
  },
  {
    name: "바나나 우유",
    price: "2000원",
  },
  {
    name: "사이다",
    price: "1500원",
  },
  {
    name: "제로콜라",
    price: "2000원",
  },
  {
    name: "데자와",
    price: "3000원",
  },
  {
    name: "비타오백",
    price: "500원",
  },
  {
    name: "요거트스무디",
    price: "6000원",
  },
  {
    name: "초코우유",
    price: "4000원",
  },
  {
    name: "돌체라떼",
    price: "4000원",
  },
  {
    name: "딸기라떼",
    price: "3500원",
  },
  {
    name: "민트라떼",
    price: "5000원",
  },
  {
    name: "비타천",
    price: "1000원",
  },
  {
    name: "테라",
    price: "2500원",
  },
];

const drinkName = document.querySelector(".name");
const drinkPrice = document.querySelector(".price");
const drinkList = document.querySelector(".drinkList");

drinkVal.forEach((v) => {
  drinkName.innerText = v.name;
  drinkPrice.innerText = v.price;
  const btn = document.createElement("button");
});
