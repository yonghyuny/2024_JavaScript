// book 20개 가져와서
// card - image, tilte, author, description

const books = fetch("https://fakerapi.it/api/v1/books?_quantity=20");
const cards = document.querySelector(".cards");
const data = books
  .then((v) => v.json())
  .then(({ data }) => {
    data.forEach((v, i) => {
      cards.insertAdjacentHTML(
        "beforeend",
        `
        <div class="card">
        <div class="imgBox">
          <img src="https://picsum.photos/200" alt="" />
        </div>
        <div class="info">
          <div class="title">title: "${data[i].title}"</div>
          <div class="author">author: "${data[i].author}"</div>
          <div class="description">
            ${data[i].description}
          </div>
          <div class="genre">genre: "${data[i].genre}"</div>
        </div>
      </div>
            `
      );
    });

    console.log(data);
    console.log(data[0].title);
  });
