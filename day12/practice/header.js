// import { datas } from "./datas.js";

// const btn = document.querySelector(".header_icon1");
// let makeInputBox = false;

// btn.addEventListener("click", () => {
//   const inputBox = document.createElement("input");

//   makeInputBox === false ? btn.appendChild(inputBox) : "";

//   makeInputBox = true;

//   inputBox.addEventListener("input", (input) => {
//     datas[0].centerList.filter((v) => {
//       return input.target.value == v.tags
//         ? btn.insertAdjacentHTML(
//             "beforeend",
//             `<div class="regularList">
//       <div class="mainInfo">
//           ${makeSmallImg(v.gymPhotoSmall)}
//         <div class="regular__info">
//           <div class="info__top">
//             <div class="info__top-group">
//               ${category(v.price.itemTags)}
//               ${gymName(v.gymName)}
//               <div class="info__top-rateReview">
//                 ${rate(v.review.rate)}
//                 (${review(v.review.count)})
//                 ${address(v.address)}
//               </div>
//               ${reservation(v.isReservationRequired)}
//             </div>
//             <div class="info__top-icon">
//               <i class="fa-regular fa-heart"></i>
//             </div>
//           </div>
//           <div class="info__bottom">
//             <div class="info__bottom-ticket">
//               ${daily(v.hasDailyItem)}
//               ${memberPrice(v.isLowestPrice)}
//             </div>
//             <div class="info__bottom-priceInfo">
//             ${discountRate(
//               v.price.isLowestPrice,
//               v.price.originalPrice,
//               v.price.lowestPrice
//             )}
//             ${discountPrice(v.price.lowestPrice, v.price.period)}
//               ${regularPrice(
//                 v.price.isLowestPrice,
//                 v.price.originalPrice,
//                 v.price.period
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//       <div class="footerInfo">
//       ${freeProgram(v.program.free)}

//       ${freeService(v.service.free)}
//       </div>
//     </div>`
//           )
//         : "";
//     });
//   });
// });
