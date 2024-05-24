// 1. 아메리카노, 라떼
// 3000원      4000원
// 추가하기    추가하기
// 총액: x원

// const ameAddBtn = document.querySelector(".ameAdd");
// const ameCoffeePrice = document.querySelector(".ameCoffeePrice");
// const latteCoffeePrice = document.querySelector(".latteCoffeePrice");
// const totalPrice = document.querySelector(".totalPrice");
// const latteAddBtn = document.querySelector(".latteAdd");

// const amePrice = document.createElement("span");
// const lattePrice = document.createElement("span");

// amePrice.innerText = "3000원";
// lattePrice.innerText = "4000원";

// ameCoffeePrice.appendChild(amePrice);
// latteCoffeePrice.appendChild(lattePrice);

// totalPrice.innerText = 0;

// ameAddBtn.addEventListener("click", () => {
//   totalPrice.innerText =
//     parseInt(totalPrice.innerText) + parseInt(amePrice.innerText);
// });

// latteAddBtn.addEventListener("click", () => {
//   totalPrice.innerText =
//     parseInt(totalPrice.innerText) + parseInt(lattePrice.innerText);
// });

const menus = [
  {
    name: '아메리카노',
    price: '3000원',
  },
  {
    name: '라떼',
    price: '5000원',
  },
  {
    name: '율무차',
    price: '4000원',
  },
];

let total = document.querySelector('.total');
let totalAmount = 0;

total.innerText = parseInt(totalAmount) + '원';

menus.forEach((v) => {
  const h3 = document.createElement('h3');
  h3.innerText = v.name;

  const h5 = document.createElement(`h5`);
  h5.innerText = v.price;

  const btn = document.createElement('button');
  btn.innerText = '추가하기';

  btn.addEventListener('click', () => {
    totalAmount += parseInt(v.price);
    total.innerText = totalAmount + '원';
  });

  const menu = document.querySelector('.menus');

  menu.appendChild(h3);
  menu.appendChild(h5);
  menu.appendChild(btn);
});
