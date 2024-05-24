const menus = [
  { coffeeName: "아메리카노", coffeePrice: "3000원" },
  {
    coffeeName: "라떼",
    coffeePrice: "4000원",
  },
  {
    coffeeName: "레몬에이드",
    coffeePrice: "3500원",
  },
];

const makeName = (coffeeName) => {
  const h3 = document.createElement("h3");
  h3.innerText = coffeeName;
  return h3;
};
// 커피이름을 오브젝트에서 가져오는 함수

const makePrice = (coffeePrice) => {
  const h5 = document.createElement("h5");
  h5.innerText = coffeePrice;
  return h5;
};

// 커피 가격을 오브젝트에서 가져오는 함수

const makeButton = (coffeePrice) => {
  const btn = document.createElement("button");
  btn.innerText = "추가하기";
  btn.addEventListener("click", () => {
    const total = document.querySelector(".total");
    total.innerText = parseInt(total.innerText) + coffeePrice + "원";
  });
  return btn;
};

// 각 가격에 대한 버튼을 만들고 그 가격에 대한 버튼을 누르면
// html total클래스에 누른 가격버튼에 대한 추가 가격을 출력하는 함수

const makeCoffee = (coffeeObj) => {
  const coffeeBox = document.createElement("div");
  coffeeBox.appendChild(makeName(coffeeObj.coffeeName));
  coffeeBox.appendChild(makePrice(coffeeObj.coffeePrice));
  coffeeBox.appendChild(makeButton(coffeeObj.coffeePrice));
  document.querySelector(".menu").appendChild(coffeeBox);
};
// 개별의 이름 가격 버튼 의 함수를 다시 함수화 해서
//  붙히는 기능

menus.forEach((v) => makeCoffee(v));
// 메뉴안의
