const gnvEl = document.querySelector("#lnb nav > ul");
const promotionsEl = document.querySelector(".promotions");
const toTopEl = document.querySelector("#to-top");

gnvEl.addEventListener("mouseover", () => {
  promotionsEl.style.zIndex = -1;
});
gnvEl.addEventListener("mouseout", () => {
  promotionsEl.style.zIndex = 0;
});

const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear(); // 현재 년도

toTopEl.addEventListener("click", function () {
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});
