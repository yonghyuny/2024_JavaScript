document
  .getElementById("taskInput")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

function addTask() {
  const taskInput = document.getElementById("taskInput");
  let taskText = taskInput.value.trim();

  if (taskText !== "") {
    const taskList = document.getElementById("taskList");
    const newTask = document.createElement("li");
    newTask.textContent = taskText;
    newTask.addEventListener("click", function () {
      // 완료 표시
      newTask.classList.toggle("completed");
    });

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "삭제";
    deleteButton.addEventListener("click", function () {
      // 삭제 기능
      taskList.removeChild(newTask);
    });

    newTask.appendChild(deleteButton);
    taskList.appendChild(newTask);
    taskInput.value = "";
  } else {
    alert("할 일을 입력하세요!");
  }
}
