const addBtn = document.querySelector(".addBtn");
const header = document.querySelector(".header");
const main = document.querySelector(".main");
const footer_total = document.querySelector(".completed");
const footer = document.querySelector(".footer");

const lists = document.querySelector(".lists");

addBtn.addEventListener("click", () => {
  main.innerHTML = "";
  header.innerHTML = "";
  footer.innerHTML = "";

  header.insertAdjacentHTML(
    "beforeend",
    `<section class="addPage">
  <div class="addPage__header">
    <div class="addPage__nav">
      <div class="backIcon">
        <i class="fa-solid fa-arrow-left"></i>
      </div>
      <div class="addPage__title">Add new thing</div>
      <div class="filterIcon">
        <i class="fa-solid fa-filter"></i>
      </div>
    </div>
  </div>
  <div class="addPage__main">
    <input type="text" class="todo" placeholder="To-do" />
    <input type="text" class="memo" placeholder="Notification" />
    <input type="text" class="time" placeholder="Time" />
    <button class="addPage__addBtn">ADD YOUR THING</button>
  </div>
</section>`
  );

  const addPage__addBtn = document.querySelector(".addPage__addBtn");
  addPage__addBtn.addEventListener("click", () => {
    lists.insertAdjacentHTML(
      "beforeend",
      `
    <div class="list">
    <div class="plan">
      <div class="plan__title">학원가기</div>
      <div class="plan__sub">코리아it학원 자바스크립트</div>
      <div class="plan__time">9pm</div>
      <button class="cancleBtn">완료</button>
    </div>
  </div>
  `
    );

    header.innerHTML = "";
    header.insertAdjacentHTML(
      "beforeend",
      `
      <div class="backImg">
        <div class="header__nav">
          <div class="header__left">
            <div class="resetIcon">
              <i class="fa-solid fa-bars"></i>
            </div>
            <div class="header__left-text"><span>Hello</span></div>
            <div class="header__left-today"></div>
          </div>
          <div class="header__right">
            <span class="weather">24'c</span>
            <span class="area">Incheon</span>
          </div>
        </div>
      </div>
      <section class="main">
      <div class="lists"></div>
    </section>
    <section class="footer">
      <div class="completed">
        completed
        <div class="footer__num">5</div>
      </div>
      <div class="addBtn"><i class="fa-solid fa-plus"></i></div>
    </section>

      `
    );
    const main = document.querySelector(".main");
    main.appendChild(lists);
  });
});
