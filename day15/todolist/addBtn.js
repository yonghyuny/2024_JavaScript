import { handleBackIconClick } from "./backIcon.js";

export function functionAddBtn() {
  const addBtn = document.querySelector(".addBtn");

  addBtn.addEventListener("click", () => {
    main.innerHTML = "";
    footer.innerHTML = "";

    main.insertAdjacentHTML(
      "beforeend",
      `<section class="addPage">
        <div class="addPage__header">
          <div class="addPage__nav">
            <div class="backIcon">
              <i class="fa-solid fa-arrow-left"></i>
            </div>
            <div class="addPage__title">Add new thing</div>
            <div>
            </div>
          </div>
        </div>
        <div class="addPage__main">
          <input type="text" class="todo" placeholder="To-do" />
          <input type="text" class="time" placeholder="Time" />
          <input type="text" class="Memo" placeholder="Notification" />
          <button class="addPage__addBtn">ADD YOUR THING</button>
        </div>
      </section>`
    );

    const backIcon = document.querySelector(".backIcon");
    handleBackIconClick(backIcon);
  });
}
