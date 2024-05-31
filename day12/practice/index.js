import { datas } from "./datas.js";

// 템플릿 리터럴
const category = (category) => `<div class="info__top-item">${category}</div>`;
const gymName = (gymName) => `<div class="info__top-gymname">${gymName}</div>`;

// 이미지
const makeBigImg = (imgurl) => `
<div class="imgBigBox">
<img src="${imgurl}"alt=""/></div>`;

const makeSmallImg = (imgurl) => `
<div class="imgSmallBox">
<img src="${imgurl}"alt=""/></div>`;

// -------------------------------------------
const rate = (rate) =>
  `<div class="rate"><i class="fa-solid fa-star"></i>${rate}</div>`;

const review = (review) => `<div class="review">${review}</div>`;
const address = (address) => `<div class="address">${address}</div>`;

const reservation = (reservation) =>
  reservation === true
    ? `
<div class= "info__top__reservation">
                  <i class="fa-solid fa-calendar-days"></i>예약필요</div>`
    : "";

const daily = (hasDailyItem) =>
  hasDailyItem === true ? `<div class = "daily">일일권</div>` : "";

const memberPrice = (memberPrice) =>
  memberPrice === true ? `<div class = "memberPrice">다짐회원가</div>` : "";

const isCheckperiod = (period) => (period !== null ? period : 1);

const discountPrice = (
  discount,
  period
) => `<span class="discountPrice">${Math.round(
  discount / isCheckperiod(period),
  2
)}~</span
><span class="text">/월</span>`;

// ${discountPrice(
//   Math.round(v.price.lowestPrice / v.price.period),
//   2
// )}

const regularPrice = (isLowestPrice, regularPrice, period) =>
  isLowestPrice === true
    ? `<span class = "regularPrice">${Math.round(
        regularPrice / isCheckperiod(period),
        2
      )}원</span>`
    : "";

// `<span class="regularPrice">${regularPrice}원</span>`;

const calDiscountRate = (x, y) => parseInt(((x - y) / x) * 100);

const discountRate = (discountRate, x, y) =>
  discountRate === true
    ? `<span class = "discountrate">${calDiscountRate(x, y)}%</span>`
    : "";
// -------------------------------------------------------------------------

const freeProgram = (freeProgram) =>
  freeProgram !== ""
    ? `<div class="freeProgram">
<div class="free__title">무료 프로그램</div>
<div class="free__info">${freeProgram}</div>
</div>`
    : ``;

const freeService = (freeService) =>
  freeService !== ""
    ? `<div class="freeService">
<div class="free__title">무료 서비스</div>
<div class="free__info">${freeService}</div>
</div>`
    : "";

// 데이터 대입
const ADList = document.querySelector(".ADList");
datas[0].liteAdList.forEach((v) => {
  ADList.insertAdjacentHTML(
    "beforeend",
    `
    <div class="AD1">
          <div class="mainInfo">
            
              ${makeBigImg(v.gymPhotoBig)}
        
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
                  ${discountPrice(v.price.lowestPrice, v.price.period)}
                  ${regularPrice(
                    v.price.isLowestPrice,
                    v.price.originalPrice,
                    v.price.period
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

//

const list = document.querySelector(".list");
datas[0].centerList.forEach((v) => {
  list.insertAdjacentHTML(
    "beforeend",
    `
    <div class="regularList">
          <div class="mainInfo">
              ${makeSmallImg(v.gymPhotoSmall)}
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
                ${discountPrice(v.price.lowestPrice, v.price.period)}
                  ${regularPrice(
                    v.price.isLowestPrice,
                    v.price.originalPrice,
                    v.price.period
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

const btn = document.querySelector(".header_icon1");
let makeInputBox = false;

btn.addEventListener("click", () => {
  const inputBox = document.createElement("input");

  makeInputBox === false ? btn.appendChild(inputBox) : "";

  makeInputBox = true;

  inputBox.addEventListener("input", (input) => {
    datas[0].centerList.filter((v) => {
      return input.target.value == v.tags
        ? list.insertAdjacentHTML(
            "beforebegin",
            `<div class="regularList">
      <div class="mainInfo">
          ${makeSmallImg(v.gymPhotoSmall)}
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
            ${discountPrice(v.price.lowestPrice, v.price.period)}
              ${regularPrice(
                v.price.isLowestPrice,
                v.price.originalPrice,
                v.price.period
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
