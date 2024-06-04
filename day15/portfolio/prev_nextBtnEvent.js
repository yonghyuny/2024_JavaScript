import { engMonth } from "./date.js";
import { engDay } from "./date.js";

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

export function prevEvent() {
  prev.addEventListener("click", () => {
    const today = new Date();
    const dayNum = today.getDay();
    const date = document.querySelector(".date");
    date.innerHTML -= 1;
    const day = document.querySelector(".day");
  });
}
