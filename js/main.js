// 검색창
const searchEl = document.querySelector(".search");
const searchInput = searchEl.querySelector("input");
searchEl.addEventListener("click", () => {
  searchInput.focus();
});
searchInput.addEventListener("focus", () => {
  searchEl.classList.add("focused");
  searchInput.setAttribute("placeholder", "검색");
});
// blur는 focus가 해제될때
searchInput.addEventListener("blur", () => {
  searchEl.classList.remove("focused");
  searchInput.setAttribute("placeholder", "");
});

const gnvEl = document.querySelector("#lnb nav > ul");
const promotionsEl = document.querySelector(".promotions");
gnvEl.addEventListener("mouseover", () => {
  promotionsEl.style.zIndex = -1;
});
gnvEl.addEventListener("mouseout", () => {
  promotionsEl.style.zIndex = 0;
});

// new Swiper(선택자, 옵션ㅇ)
new Swiper(".promotions .swiper-container", {
  // direction: "vertical",
  slidesPerView: 1, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  autoplay: {
    delay: 3000,
  },
  loop: true,
  pagination: {
    el: ".promotions .swiper-pagination", // 페이지 번호 요소 선택자
    clickable: true, // 사용자의 페이지번호 요소 제어
  },
  navigation: {
    prevEl: ".promotions .swiper-prev",
    nextEl: ".promotions .swiper-next",
  },
});

// const itemName = document.querySelectorAll(".main-menu .item");
// console.log(itemName);
// console.log(itemName[2]);
// console.log(itemName[0].lastElementChild);
// // 1
// itemName[0].addEventListener("mouseover", () => {
//   itemName[0].lastElementChild.style.display = "block";
//   itemName[1].lastElementChild.style.display = "block";
//   itemName[2].lastElementChild.style.display = "block";
//   itemName[3].lastElementChild.style.display = "block";
//   itemName[4].lastElementChild.style.display = "block";
//   itemName[5].lastElementChild.style.display = "block";
// });
// itemName[0].addEventListener("mouseout", () => {
//   itemName[0].lastElementChild.style.display = "none";
//   itemName[1].lastElementChild.style.display = "none";
//   itemName[2].lastElementChild.style.display = "none";
//   itemName[3].lastElementChild.style.display = "none";
//   itemName[4].lastElementChild.style.display = "none";
//   itemName[5].lastElementChild.style.display = "none";
// });
// // 2
// itemName[1].addEventListener("mouseover", () => {
//   itemName[0].lastElementChild.style.display = "block";
//   itemName[1].lastElementChild.style.display = "block";
//   itemName[2].lastElementChild.style.display = "block";
//   itemName[3].lastElementChild.style.display = "block";
//   itemName[4].lastElementChild.style.display = "block";
//   itemName[5].lastElementChild.style.display = "block";
// });
// itemName[1].addEventListener("mouseout", () => {
//   itemName[0].lastElementChild.style.display = "none";
//   itemName[1].lastElementChild.style.display = "none";
//   itemName[2].lastElementChild.style.display = "none";
//   itemName[3].lastElementChild.style.display = "none";
//   itemName[4].lastElementChild.style.display = "none";
//   itemName[5].lastElementChild.style.display = "none";
// });
// // 3.
// itemName[2].addEventListener("mouseover", () => {
//   itemName[0].lastElementChild.style.display = "block";
//   itemName[1].lastElementChild.style.display = "block";
//   itemName[2].lastElementChild.style.display = "block";
//   itemName[3].lastElementChild.style.display = "block";
//   itemName[4].lastElementChild.style.display = "block";
//   itemName[5].lastElementChild.style.display = "block";
// });
// itemName[2].addEventListener("mouseout", () => {
//   itemName[0].lastElementChild.style.display = "none";
//   itemName[1].lastElementChild.style.display = "none";
//   itemName[2].lastElementChild.style.display = "none";
//   itemName[3].lastElementChild.style.display = "none";
//   itemName[4].lastElementChild.style.display = "none";
//   itemName[5].lastElementChild.style.display = "none";
// });
// // 4.
// itemName[3].addEventListener("mouseover", () => {
//   itemName[0].lastElementChild.style.display = "block";
//   itemName[1].lastElementChild.style.display = "block";
//   itemName[2].lastElementChild.style.display = "block";
//   itemName[3].lastElementChild.style.display = "block";
//   itemName[4].lastElementChild.style.display = "block";
//   itemName[5].lastElementChild.style.display = "block";
// });
// itemName[3].addEventListener("mouseout", () => {
//   itemName[0].lastElementChild.style.display = "none";
//   itemName[1].lastElementChild.style.display = "none";
//   itemName[2].lastElementChild.style.display = "none";
//   itemName[3].lastElementChild.style.display = "none";
//   itemName[4].lastElementChild.style.display = "none";
//   itemName[5].lastElementChild.style.display = "none";
// });
// itemName[4].addEventListener("mouseover", () => {
//   itemName[0].lastElementChild.style.display = "block";
//   itemName[1].lastElementChild.style.display = "block";
//   itemName[2].lastElementChild.style.display = "block";
//   itemName[3].lastElementChild.style.display = "block";
//   itemName[4].lastElementChild.style.display = "block";
//   itemName[5].lastElementChild.style.display = "block";
// });
// itemName[4].addEventListener("mouseout", () => {
//   itemName[0].lastElementChild.style.display = "none";
//   itemName[1].lastElementChild.style.display = "none";
//   itemName[2].lastElementChild.style.display = "none";
//   itemName[3].lastElementChild.style.display = "none";
//   itemName[4].lastElementChild.style.display = "none";
//   itemName[5].lastElementChild.style.display = "none";
// });
// itemName[5].addEventListener("mouseover", () => {
//   itemName[0].lastElementChild.style.display = "block";
//   itemName[1].lastElementChild.style.display = "block";
//   itemName[2].lastElementChild.style.display = "block";
//   itemName[3].lastElementChild.style.display = "block";
//   itemName[4].lastElementChild.style.display = "block";
//   itemName[5].lastElementChild.style.display = "block";
// });
// itemName[5].addEventListener("mouseout", () => {
//   itemName[0].lastElementChild.style.display = "none";
//   itemName[1].lastElementChild.style.display = "none";
//   itemName[2].lastElementChild.style.display = "none";
//   itemName[3].lastElementChild.style.display = "none";
//   itemName[4].lastElementChild.style.display = "none";
//   itemName[5].lastElementChild.style.display = "none";
// });
