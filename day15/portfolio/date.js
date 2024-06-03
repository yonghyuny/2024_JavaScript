// 날씨, 지역 api
// 배경화면 무작위 가져오기
// date 비동기
// 입력 및 클릭시 등록, 삭제, 취소선 이벤트처리
// footer 인용 글귀 가져오기
// 상단 리셋 기능

// 이름 적고 할일 적기

const today = new Date();
const year = today.getFullYear();

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

const todayInner = document.querySelector(".header__left-today");

todayInner.innerText = `${engMonth[today.getMonth()]}. ${date}. ${year}`;
