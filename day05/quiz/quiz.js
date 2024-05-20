const menu = [];

// 메뉴를 넣고 제출 버튼누르면
// menu에 글이 누적되면서 추가됩니다.

const menuInput = document.querySelector(".menuInput");
const submit = document.querySelector(".submit");

submit.addEventListener("click", () => {
  const mv = menuInput.value;
  const menuList = document.querySelector(".menuList");
  menuList.innerText = `${mv}`;
  const box = document.createElement("div");

  document.menuList.appendChild(box);
  box.innerText = `${mv}`;
  console.log(mv);
});
