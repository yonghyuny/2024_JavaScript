// 커피 input
// 가격 input - 숫자여야만하고 [1000 이상 부터 가능]
// 1000원 이상 입력해야 합니다.
// 수량 input - 숫자여야만 하지만 [1~10000개 까지 가능]
// 1~10000개 여야 합니다.
// 제출하기 button
// 3개 글자가 0이 아니여야 제출이 가능하고

// 커피 재고 리스트
// 아메리카노 3000원 10000개
// 라떼 3500원 3000개

// 총 갯수: 13000개

// const coffee = document.querySelector(".coffee");
// const price = document.querySelector(".price");
// const quantity = document.querySelector(".quantity");
// const submit = document.querySelector(".submit");
// const coffeeList = document.querySelector(".list");
// const total = document.querySelector(".total");

// submit.display = "none";

// if (coffee.value !== 0 && price.value !== 0 && quantity.value !== 0) {
// submit.abled
//   submit.addEventListener("click", () => {
//     const priceValue = price.value;
//     const quantityValue = quantity.value;
//     const coffeeValue = coffee.value;
//     const isPriceCheck = parseInt(priceValue) >= 1000;
//     const isQuantityValue =
//       parseInt(quantityValue) >= 1 && parseInt(quantityValue) <= 10000;

//     if (!isPriceCheck) {
//       console.log("가격은 1000원 이상 입력해야합니다.");
//       coffeeList.innerText = "가격은 1000원 이상이여야 합니다";
//     } else if (!isQuantityValue) {
//       console.log("수량은 1~10000개 여야합니다");
//       coffeeList.innerText = "수량은 1~10000개 여야합니다";
//     } else {
//       coffeeList.innerText = `${coffeeValue}, ${priceValue}원, ${quantityValue}개`;
//       total.innerText = `총 갯수: ${quantityValue}개`;
//     }
//   });
// -------------------------------------------------------------
const coffeeInput = document.querySelector(".coffeeInput");
const priceInput = document.querySelector(".priceInput");
const amountInput = document.querySelector(".priceInput");
const submit = document.querySelector(".submit");
const warnMsg = document.querySelector(".warnMsg");
const coffeeList = document.querySelector(".coffeeList");

submit.addEventListener("click", () => {
  const cv = coffeeInput.value;
  const pv = priceInput.value;
  const av = amountInput.value;

  const isValidEmpty = !!cv.length && !!pv.length && av.length;
  const isValidPrice = 1000 <= Number(pv);
  const isValidAmount = 1 <= Number(av) && Number(av) <= 10000;
  warnMsg.style.color = `red`;
  if (!isValidEmpty) warnMsg.innerText = `빈칸을 모두 기입해주세요!`;
  else if (!isValidPrice)
    warnMsg.innerText = `가격이 1000원 이상 입력 해야 합니다.`;
  else if (!isValidAmount) warnMsg.innerText = `수량이 1~10000개 여야 합니다.`;
  else {
    warnMsg.style.color = "black";
    const coffeeListDiv = document.querySelector(".coffeeList");
    const divTag = document.createElement("div");
    divTag.innerText = `커피이름:${cv} 가격: ${pv} 수량: ${av}`;
    // appendChild 자식에 추가
    coffeeListDiv.appendChild(divTag);
    const totalAmount = document.querySelector(".totalAmount");
    totalAmount.innerText = Number(totalAmount.innerText) + Number(av);

    warnMsg.innerText = ``;
  }
});
