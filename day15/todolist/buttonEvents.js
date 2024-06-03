export function attachButtonEvents() {
  const cancleBtn = document.querySelector(".cancleBtn");
  const completeBtn = document.querySelector(".completeBtn");

  cancleBtn.addEventListener("click", (e) => {
    const list = e.target.closest(".list");
    list.remove();
  });

  completeBtn.addEventListener("click", (e) => {
    const list = e.target.closest(".list");
    list.remove();
  });
}
