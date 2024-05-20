const menu = [];

// 메뉴를 넣고 제출 버튼누르면
// menu에 글이 누적되면서 추가됩니다.

const menuInput = document.querySelector('.menuInput');
const submit = document.querySelector('.submit');
const menuList = document.querySelector('.menuList');

submit.addEventListener('click', () => {
  const mv = menuInput.value;
  let addMenu = ``;
  menuList.innerText = addMenu;
  menu.push(`${mv}, `);

  menu.forEach((v) => {
    menuList.innerText = `${(addMenu += v)}`;
  });
  console.log(menu);
});
