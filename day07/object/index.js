// 참조: array, element, object

const coffee = {
  coffeeName: "아메리카노",
  coffeePrice: 2000,
  hasShot: true,
};

const coffee1 = {
  coffeeName: "라떼",
  coffeePrice: 2500,
  hasShot: true,
};

// book title, author, publishedYear, pages

const book = {
  title: "해리포터",
  author: "조앤롤링",
  publishedYear: 2000,
  pages: 500,
};

book["title"]; // 해리포터
book.title;

book.color = "green"; // color: green 추가
delete book.pages; // pages 삭제

"author" in book; // true or false  포함하고있는지 확인
