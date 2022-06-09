const gnvEl = document.querySelector("#lnb nav > ul");
const promotionsEl = document.querySelector(".promotions");
gnvEl.addEventListener("mouseover", () => {
  promotionsEl.style.zIndex = -1;
});
gnvEl.addEventListener("mouseout", () => {
  promotionsEl.style.zIndex = 0;
});

const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear(); // 2022가 나옴

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
