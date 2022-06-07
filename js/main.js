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
