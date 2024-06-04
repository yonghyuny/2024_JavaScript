const addBtn = document.querySelector(".addBtn");
const lists = document.querySelector(".lists");

export function functionAddBtn() {
  addBtn.addEventListener("click", () => {
    const enterTodo = window.prompt("할일 입력");
    const enterTime = window.prompt("시간 입력") || new Date();

    const listItem = document.createElement("li");
    listItem.classList.add("list");

    listItem.innerHTML = `
    <input type="checkbox" class="checkbox"/>
    <div class="todo">${enterTodo}</div>
    <div class="time">${enterTime}</div>
    <button class="cancleBtn">취소</button>
  `;

    lists.appendChild(listItem);

    listItem.addEventListener("click", () => {
      const todo = document.querySelector(".todo");
      const time = document.querySelector(".time");
      todo.classList.toggle("complete");
      time.classList.toggle("complete");
    });

    const cancleBtn = listItem.querySelector(".cancleBtn");
    cancleBtn.addEventListener("click", () => {
      listItem.remove();
    });
  });
}
