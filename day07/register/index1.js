const optionClassList = [
  {
    className: ".option1",
    isChecked: false,
    msg: "필수 서비스",
  },
  {
    className: ".option2",
    isChecked: false,
    msg: "필수 개인정보",
  },
  {
    className: ".option3",
    isChecked: false,
    msg: "필수 마케팅",
  },
  {
    className: ".option4",
    isChecked: false,
    msg: "필수 광고",
  },
];

optionClassList.forEach((v, i) => {
  const newDiv = document.createElement("div");
  newDiv.innerText = v.msg;
  newDiv.classList.add(v.className);
  newDiv.classList.add(v.isChecked ? "checked" : "notChecked");

  newDiv.addEventListener("click", () => {
    newDiv.classList.toggle("checked");
    newDiv.classList.toggle("notChecked");
    optionClassList[i].isChecked = newDiv.classList.contains("checked");

    const btn = document.querySelector(".button");
    optionClassList.every((v) => v.isChecked)
      ? btn.classList.add("passed")
      : btn.classList.remove("passed");
    console.log(optionClassList);
  });
  const optionList = document.querySelector(".optionList");
  optionList.appendChild(newDiv);
});
