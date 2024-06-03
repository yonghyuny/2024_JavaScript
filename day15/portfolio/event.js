const addBtn = document.querySelector(".addBtn");
const header = document.querySelector(".header");
const main = document.querySelector(".main");
const footer_total = document.querySelector(".completed");
const footer = document.querySelector(".footer");
let isCheckInput = false;

addBtn.addEventListener("click", () => {
  main.innerHTML = "";
  header.innerHTML = "";
  footer.innerHTML = "";
  isCheckInput = true;
  header.insertAdjacentHTML(
    "beforebegin",
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
    <input type="text" class="category" placeholder="Category" />
    <input type="text" class="todo" placeholder="To-do" />
    <input type="text" class="place" placeholder="Place" />
    <input type="text" class="time" placeholder="Time" />
    <input type="text" class="Memo" placeholder="Notification" />
    <button class="addPage__addBtn">ADD YOUR THING</button>
  </div>
</section>`
  );
});
