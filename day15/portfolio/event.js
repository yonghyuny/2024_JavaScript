const header = document.querySelector(".header");
const main = document.querySelector(".main");
const footer = document.querySelector(".footer");

const lists = document.querySelector(".lists");

function functionAddBtn() {
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
    backIcon.addEventListener("click", () => {
      main.innerHTML = "";
      lists.insertAdjacentHTML(
        "beforeend",
        `
            <div class="list">
              <div class="plan">
                <div class="plan__title">학원가기</div>
                <div class="plan__sub">코리아it학원 자바스크립트</div>
                <div class="plan__time">9pm</div>
                <div class="btnGroup">
                  <button class="cancleBtn">완료</button>
                  <button class="completeBtn">취소</button>
                </div>
                </div>
            </div>
          </div>
          `
      );
      main.appendChild(lists);
      footer.insertAdjacentHTML(
        "beforeend",
        `
          <div class="addBtn"><i class="fa-solid fa-plus"></i></div>
        `
      );

      functionAddBtn();
    });
  });
}

functionAddBtn();

