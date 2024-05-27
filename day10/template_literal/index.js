const box = document.querySelector(".box");

// box.innerHTML = `<h1>My Friend</h1>`;

// const list = ["kim", "lee", "park"];

// list.forEach((v) => {
//   const li = document.createElement("li");
//   li.innerHTML = v;
//   box.appendChild(li);
// });
// const a = createElement("ul");
// box.appendChild(a);

// box.innerHTML = `<h1>My Friend</h1>
//  <ul>
//  ${list.map((v) => `<li>${v}</li>`).join("")}
//  </ul>`;

//  ${list.forEach((v) => {
//     const li = document.createElement("li");
//     li.innerHTML = v;
//     appendChild(li);
//   })}

const books = [
  {
    title: "자바스크립트 꿀잼",
    author: "손흥민",
    price: 30000,
    isSale: true,
  },
  {
    title: "타입스크립트 안쓰는법",
    author: "황희찬",
    price: 24000,
    isSale: false,
  },
  {
    title: "구글링 하다가 막혔을 때 코딩하는법",
    author: "김민재",
    price: 14000,
    isSale: true,
  },
];

// book.isSale = true;

// 할인율 10%

//함수화 시켜서 가능
const isBookSale = (books) => {
  return books.isSale ? books.price * 0.9 : books.price;
};

// box.innerHTML = `
// <h1>${book.title}</h1>
// <h4>${book.author}</h4>
// <span>${book.price}원</span><br>
// <span> 10% 할인 가격: ${isBookSale(book)}원</span>`;

// box.innerHTML = `
// ${books
//   .map(
//     (v) => `
//   <h1>${v.title}</h1>
//   <h4>${v.author}</h4>
//   <span>${isBookSale(v)}</span>
// `
//   )
//   .join("")}`;

// box.classList.add("background");

// box.insertAdjacentHTML(어디에,무엇을)

// afterbegin: 맨 처음 자식으로
// beforeend: 맨 뒤 자식으로
// box.insertAdjacentHTML(
//   `beforeend`,
//   `
// <h1>${books[0].title}</h1>
// <h3>${books[0].author}</h3>
// <span>${isBookSale(books[0])}</span>`
// );

// box.insertAdjacentHTML(
//   `beforeend`,
//   `
//   <h1>${books[1].title}</h1>
//   <h3>${books[1].author}</h3>
//   <span>${isBookSale(books[1])}</span>`
// );

// box.insertAdjacentHTML(
//   `beforeend`,
//   `
//     <h1>${books[2].title}</h1>
//     <h3>${books[2].author}</h3>
//     <span>${isBookSale(books[2])}</span>`
// );

const makeBook = (book) =>
  ` <h1>${book.title}</h1>
    <h3>${book.author}</h3>
    <span>${isBookSale(book)}</span>`;
books.forEach((v) => box.insertAdjacentHTML("beforeend", makeBook(v)));

// books.forEach((v) => {
//   box.insertAdjacentHTML(
//     `beforeend`,
//     `
//     <h1>${v.title}</h1>
//     <h3>${v.author}</h3>
//     <span>${isBookSale(v)}</span>`
//   );
// });
