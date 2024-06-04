const today = new Date();
const fullYear = today.getFullYear();
const date = today.getDate();

const engMonth = {
  0: "Jan",
  1: "Feb",
  2: "Mar",
  3: "Apr",
  4: "May",
  5: "Jun",
  6: "Jul",
  7: "Aug",
  8: "Sep",
  9: "Oct",
  10: "Nov",
  11: "Dec",
};

const engDay = {
  1: "MONDAY",
  2: "TUESDAY",
  3: "WENDESDAY",
  4: "THURSDAY",
  5: "FRIDAY",
  6: "SATURDAY",
  7: "SUNDAY",
};

export function makeToday() {
  const year = document.querySelector(".year");
  const month = document.querySelector(".month");
  const date1 = document.querySelector(".date");
  const day = document.querySelector(".day");
  year.innerHTML = `${fullYear}`;
  month.innerHTML = `${engMonth[today.getMonth()]}`;
  day.innerHTML = `${engDay[today.getDay()]}`;
  date1.innerHTML = `${date}`;
}
