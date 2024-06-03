import { functionAddBtn } from "./addBtn.js";
import { attachButtonEvents } from "./buttonEvents.js";

export function handleBackIconClick(backIcon) {
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
      `
    );
    main.appendChild(lists);
    footer.insertAdjacentHTML(
      "beforeend",
      `
        <div class="addBtn"><i class="fa-solid fa-plus"></i></div>
      `
    );

    attachButtonEvents();
    functionAddBtn();
  });
}
