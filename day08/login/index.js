// const email = document.querySelector(".email");
// const password = document.querySelector(".password");
// const isChecked = document.querySelector(".confirm");
// const login = document.querySelector(".login");
// const icon = document.querySelector(".icon");

const signUpBox = [
  {
    className: "email",
    placeholder: "exmaple@gmail.com",
    type: "text",
  },
  {
    className: "password",
    placeholder: "must be 8 characters",
    type: "password",
  },
  {
    className: "confirm",
    placeholder: "repeat password",
    type: "password",
  },
];

signUpBox.forEach((v) => {
  const input = document.createElement("input");
  input.type = v.type;
  input.placeholder = v.placeholder;
  input.classList.add(v.className);

  input.addEventListener("input", (e) => {
    const domain = ["@naver", "@daum", "@kakao", "@gmail"];
    let inputMatched = false;

    domain.forEach((v) => {
      e.target.value.includes(v) ? (inputMatched = true) : inputMatched;
    });
    inputMatched ? input.classList.add("red") : input.classList.remove("red");

    const login = document.querySelector(".login");
  });

  document.body.appendChild(input);
});
// email.addEventListener("input", (e) => {
//   e.target.value !== "@naver"
//     ? email.classList.add("red")
//     : email.classList.remove("red");
// });

// password.addEventListener("input", (e) => {
//   e.target.value.length <= 8
//     ? password.classList.add("red")
//     : password.classList.remove("red");
// });

// isChecked.addEventListener("input", (e) => {
//   e.target.value !== password.value
//     ? isChecked.classList.add("red")
//     : isChecked.classList.remove("red");
// });
