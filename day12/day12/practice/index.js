import { datas } from "./datas.js";

// 템플릿 리터럴
// 카테고리
const category = (category) => `<div class="info__top-item">${category}</div>`;
// 헬스장 이름
const gymName = (gymName) => `<div class="info__top-gymname">${gymName}</div>`;

// 이미지
const makeImg = (gymPhotoBig, gymPhotoSmall) => {
  return gymPhotoBig !== null
    ? `
  <div class="imgBigBox">
  <img src="${gymPhotoBig}"alt=""/></div>`
    : `
  <div class="imgSmallBox">
  <img src="${gymPhotoSmall}"alt=""/></div>`;
};
// 등급
const rate = (rate) =>
  `<div class="rate"><i class="fa-solid fa-star"></i>${rate}</div>`;
// 리뷰
const review = (review) => `<div class="review">${review}</div>`;
// 주소
const address = (address) => `<div class="address">${address}</div>`;
// 예약확인
const reservation = (reservation) =>
  reservation === true
    ? `
<div class= "info__top__reservation">
                  <i class="fa-solid fa-calendar-days"></i>예약필요</div>`
    : "";
// 일일권
const daily = (hasDailyItem) =>
  hasDailyItem === true ? `<div class = "daily">일일권</div>` : "";

// 다짐회원가
const memberPrice = (memberPrice) =>
  memberPrice === true ? `<div class = "memberPrice">다짐회원가</div>` : "";

// 기간,횟수 체크
const isCheckperiod = (period, count) => (period !== null ? period : count);

// 할인가
const discountPrice = (
  discount,
  period,
  count
) => `<span class="discountPrice">${Math.round(
  discount / isCheckperiod(period, count),
  2
)}~</span
><span class="text">/월</span>`;

// 정상가
const regularPrice = (isLowestPrice, regularPrice, period, count) =>
  isLowestPrice === true
    ? `<span class = "regularPrice">${Math.round(
        regularPrice / isCheckperiod(period, count),
        2
      )}원</span>`
    : "";

// 할인율 구하는 함수
const calDiscountRate = (x, y) => parseInt(((x - y) / x) * 100);

// 할인율 적용
const discountRate = (discountRate, x, y) =>
  discountRate === true
    ? `<span class = "discountrate">${calDiscountRate(x, y)}%</span>`
    : "";
// -------------------------------------------------------------------------

// 무료 프로그램
const freeProgram = (freeProgram) =>
  freeProgram !== ""
    ? `<div class="freeProgram">
<div class="free__title">무료 프로그램</div>
<div class="free__info">${freeProgram}</div>
</div>`
    : ``;

// 무료 서비스
const freeService = (freeService) =>
  freeService !== ""
    ? `<div class="freeService">
<div class="free__title">무료 서비스</div>
<div class="free__info">${freeService}</div>
</div>`
    : "";

// 광고란 데이터 대입
const ADList = document.querySelector(".ADList");
datas[0].liteAdList.forEach((v) => {
  ADList.insertAdjacentHTML(
    "beforeend",
    `
    <div class="AD1">
          <div class="mainInfo">
              ${makeImg(v.gymPhotoBig, v.gymPhotoSmall)}
            <div class="info">
              <div class="info__top">
                <div class="info__top-group">
                  ${category(v.tags)}
                  ${gymName(v.gymName)}
                  <div class="info__top-rateReview">
                    ${rate(v.review.rate)}
                    (${review(v.review.count)})
                    ${address(v.address)}
                  </div>
                  ${reservation(v.isReservationRequired)}
                </div>
                <div class="info__top-icon">
                  <i class="fa-regular fa-heart"></i>
                </div>
              </div>
              <div class="info__bottom">
                <div class="info__bottom-ticket">
                  ${daily(v.hasDailyItem)}
                  ${memberPrice(v.isLowestPrice)}
                </div>
                <div class="info__bottom-priceInfo">
                  ${discountRate(
                    v.price.isLowestPrice,
                    v.price.originalPrice,
                    v.price.lowestPrice
                  )}
                  ${discountPrice(
                    v.price.lowestPrice,
                    v.price.period,
                    v.price.count
                  )}
                  ${regularPrice(
                    v.price.isLowestPrice,
                    v.price.originalPrice,
                    v.price.period,
                    v.price.count
                  )}
                </div>
              </div>
            </div>
          </div>
          <div class="footerInfo">
              ${freeProgram(v.program.free)} 
              ${freeService(v.service.free)}
            
          </div>
        </div>
   `
  );
});

// 체육관 리스트

const list = document.querySelector(".list");
datas[0].centerList.forEach((v) => {
  list.insertAdjacentHTML(
    "beforeend",
    `
    <div class="regularList">
          <div class="mainInfo">
          ${makeImg(v.gymPhotoBig, v.gymPhotoSmall)}
            <div class="regular__info">
              <div class="info__top">
                <div class="info__top-group">
                  ${category(v.price.itemTags)}
                  ${gymName(v.gymName)}
                  <div class="info__top-rateReview">
                    ${rate(v.review.rate)}
                    (${review(v.review.count)})
                    ${address(v.address)}
                  </div>
                  ${reservation(v.isReservationRequired)}
                </div>
                <div class="info__top-icon">
                  <i class="fa-regular fa-heart"></i>
                </div>
              </div>
              <div class="info__bottom">
                <div class="info__bottom-ticket">
                  ${daily(v.hasDailyItem)}
                  ${memberPrice(v.isLowestPrice)}
                </div>
                <div class="info__bottom-priceInfo">
                ${discountRate(
                  v.price.isLowestPrice,
                  v.price.originalPrice,
                  v.price.lowestPrice
                )}
                ${discountPrice(
                  v.price.lowestPrice,
                  v.price.period,
                  v.price.count
                )}
                ${regularPrice(
                  v.price.isLowestPrice,
                  v.price.originalPrice,
                  v.price.period,
                  v.price.count
                )}
                </div>
              </div>
            </div>
          </div>
          <div class="footerInfo">
           ${freeProgram(v.program.free)}
           ${freeService(v.service.free)}
          </div>
        </div>
        <hr>
   `
  );
});

// 검색 버튼
const btn = document.querySelector(".header_icon1");
let makeInputBox = false;

btn.addEventListener("click", () => {
  const inputBox = document.createElement("input");

  makeInputBox === false ? btn.appendChild(inputBox) : "";

  makeInputBox = true;

  inputBox.addEventListener("input", (input) => {
    ADList.innerHTML = ``;
    list.innerHTML = ``;
    datas[0].centerList.filter((v) => {
      return input.target.value == v.price.itemTags ||
        input.target.value == v.gymName
        ? ADList.insertAdjacentHTML(
            "beforeend",
            `
        <div class="AD1">
          <div class="mainInfo">
          ${makeImg(v.gymPhotoBig, v.gymPhotoSmall)}
            <div class="info">
              <div class="info__top">
                <div class="info__top-group">
                  ${category(v.tags)}
                  ${gymName(v.gymName)}
                  <div class="info__top-rateReview">
                    ${rate(v.review.rate)}
                    (${review(v.review.count)})
                    ${address(v.address)}
                  </div>
                  ${reservation(v.isReservationRequired)}
                </div>
                <div class="info__top-icon">
                  <i class="fa-regular fa-heart"></i>
                </div>
              </div>
              <div class="info__bottom">
                <div class="info__bottom-ticket">
                  ${daily(v.hasDailyItem)}
                  ${memberPrice(v.isLowestPrice)}
                </div>
                <div class="info__bottom-priceInfo">
                  ${discountRate(
                    v.price.isLowestPrice,
                    v.price.originalPrice,
                    v.price.lowestPrice
                  )}
                  ${discountPrice(
                    v.price.lowestPrice,
                    v.price.period,
                    v.price.count
                  )}
                  ${regularPrice(
                    v.price.isLowestPrice,
                    v.price.originalPrice,
                    v.price.period,
                    v.price.count
                  )}
                </div>
              </div>
            </div>
          </div>
          <div class="footerInfo">
              ${freeProgram(v.program.free)} 
              ${freeService(v.service.free)}
          </div>
        </div>`
          )
        : "";
    });
  });
});
