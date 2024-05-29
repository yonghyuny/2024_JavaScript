import { data } from "./data.js";

const category = (tags) => `<div class="category">${tags}</div>`;
const gymName = (gymName) => `<div class="gymName">${gymName}</div>`;
const rate = (rate) => `<span class="rate">${Math.round(rate)}</span>`;
const count = (count) => `<span class = review">(${count})</span>`;
const address = (address) => `<span class="Location">${address}</span>`;
const ticket = (daily) =>
  data.forEach(({ v }) => {})`<span class="daily">${daily}</span>
<span class="memberPrice">${memberPrice}</span>`;

const adList = document.querySelector(".adList");
data.forEach((v) => {
  adList.insertAdjacentHTML(
    "beforeend",
    `
    <div class="ad1">
    <div class="impInfo">
      <div class="imgBox">
        <img
          src="https://s3.ap-northeast-2.amazonaws.com/stone-i-dagym-centers/images/gyms/18e5ec56c2a2c8a2e4/2WMqrmKY6Sakmdrwo7uXrELngTjjummNA7rG.Big_240324_무브짐앤무브맥스PT시청점_13.jpg"
          alt=""
        />
      </div>
      <div class="info">
        ${category(v.tags)}
        ${gymName(v.gymName)}
        <div class="rateLocation">
          ${rate(v.review.rate)}
          ${count(v.review.count)}
          ${address(v.address)}
        </div>

        <div class="priceInfo">
          <div class="ticket">
            <span class="daily">일일권</span>
            <span class="memberPrice">다짐회원가</span>
          </div>
          <div class="price">
            <span class="regularprice">${v.price.originalPrice}원</span>
            <span class="discount">${parseInt(
              ((v.price.originalPrice - v.price.lowestPrice) /
                v.price.originalPrice) *
                100
            )}%</span>
            <span class="disprice">${parseInt(
              v.price.lowestPrice / v.price.period
            )}원~</span
            ><span class="text">/월</span>
          </div>
        </div>
      </div>
      <div class="addition">
        <div class="program">${v.program.free}</div>
        <div class="free">${v.service.free}</div>
      </div>
    </div>
  </div>
  `
  );
});
