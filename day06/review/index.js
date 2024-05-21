const input = document.querySelector(".input");
const btnOpen = document.querySelector(".btnOpen");
const btnClose = document.querySelector(".btnClose");

btnClose.style.display = "none";

btnOpen.addEventListener("click", () => {
  input.type = "text";
  btnOpen.style.display = "none";
  btnClose.style.display = "block";
});

btnClose.addEventListener("click", () => {
  input.type = "password";
  btnOpen.style.display = "block";
  btnClose.style.display = "none";
});
