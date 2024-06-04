import { functionAddBtn } from "./addEvent.js";
import { showClock } from "./time.js";
import { makeToday } from "./date.js";
import { prevEvent } from "./prev_nextBtnEvent.js";

functionAddBtn();
showClock();
setInterval(showClock, 1000);
makeToday();
prevEvent();
