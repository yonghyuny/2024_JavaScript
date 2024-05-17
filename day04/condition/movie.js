// const plusBtn = document.querySelector(".plusBtn");
// const minusBtn = document.querySelector(".minusBtn");
// const ticketSpan = document.querySelector(".ticketAmount");
// const totalPriceSpan = document.querySelector(".totalPrice");

// plusBtn.addEventListener("click", () => {
//   const ticketCount = Number(ticketSpan.innerText) + 1;
//   const ticketPrice = ticketCount * 10000;
//   if (ticketCount >= 10) {
//     totalPriceSpan.innerText = ticketPrice * 0.8;
//   } else if (ticketCount >= 5) {
//     totalPriceSpan.innerText = ticketPrice * 0.9;
//   } else {
//     totalPriceSpan.innerText = ticketPrice * 1;
//   }
// });

// ticketSpan.innerText = Number(ticketSpan.innerText) + 1;

// minusBtn.addEventListener("click", () => {
//   const ticketCount = Number(ticketSpan.innerText) - 1;
//   const ticketPrice = ticketCount * 10000;

//   if (ticketCount > 10) {
//     totalPriceSpan.innerText = ticketCount * totalPriceSpan * 0.8;
//     ticketSpan.innerText = Number(ticketSpan.innerText) - 1;
//   } else if (ticketCount >= 5) {
//     totalPriceSpan.innerText = ticketCount * totalPriceSpan * 0.9;
//     ticketSpan.innerText = Number(ticketSpan.innerText) - 1;
//   } else if (5 > ticketCount && ticketCount > 0) {
//     totalPriceSpan.innerText = ticketPrice * 1;
//     ticketSpan.innerText = Number(ticketSpan.innerText) - 1;
//   } else {
//     totalPriceSpan.innerText = 0;
//     ticketSpan.innerText = 0;
//   }
// });

const minusBtn = document.querySelector(".minusBtn");
const plusBtn = document.querySelector(".plusBtn");
const ticketSpan = document.querySelector(".ticketAmount");
const totalPriceSpan = document.querySelector(".totalPrice");

plusBtn.addEventListener("click", () => {
  const ticketCount = Number(ticketSpan.innerText) + 1;
  const ticketPrice = ticketCount * 10000;
  if (ticketCount >= 10) {
    totalPriceSpan.innerText = ticketPrice * 0.8;
  } else if (ticketCount >= 5) {
    totalPriceSpan.innerText = ticketPrice * 0.9;
  } else {
    totalPriceSpan.innerText = ticketPrice * 1;
  }
  ticketSpan.innerText = Number(ticketSpan.innerText) + 1;
});

minusBtn.addEventListener("click", () => {
  const ticketCount = Number(ticketSpan.innerText) - 1;
  const ticketPrice = ticketCount * 10000;
  if (ticketCount >= 10) {
    totalPriceSpan.innerText = ticketPrice * 0.8;
    ticketSpan.innerText = Number(ticketSpan.innerText) - 1;
  } else if (ticketCount >= 5) {
    totalPriceSpan.innerText = ticketPrice * 0.9;
    ticketSpan.innerText = Number(ticketSpan.innerText) - 1;
  } else if (5 > ticketCount && ticketCount > 0) {
    totalPriceSpan.innerText = ticketPrice * 1;
    ticketSpan.innerText = Number(ticketSpan.innerText) - 1;
  } else {
    totalPriceSpan.innerText = 0;
    ticketSpan.innerText = 0;
  }
});
