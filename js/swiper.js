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

// new Swiper(선택자, 옵션ㅇ)
new Swiper(".subway__menu .swiper-container", {
  // direction: "vertical",
  slidesPerView: 4, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true,
  // loopAdditionalSlides: 1,

  // autoplay: {
  //   // delay: 3000,
  // },
  loop: true,
  pagination: {
    el: ".subway__menu .swiper-pagination", // 페이지 번호 요소 선택자
    clickable: true, // 사용자의 페이지번호 요소 제어
  },
  autoHeight: true,
  navigation: {
    prevEl: ".subway__menu .swiper-prev",
    nextEl: ".subway__menu .swiper-next",
  },
});

const tabEl = document.querySelector(".tab ul");
// console.log(tabEl);
// const clasic = document.
const clasic = tabEl.querySelector(".clasic");
const fresh = tabEl.querySelector(".fresh");
const premium = tabEl.querySelector(".premium");
const morning = tabEl.querySelector(".morning");

const slide = document.querySelectorAll(".slide");
console.log(slide);
console.log(slide[0]);
// console.log(clasic);
// console.log(fresh);

const classList = [clasic, fresh, premium, morning];

function addClassName(e) {
  if (e === "clasic") {
    slide[1].classList.replace("on", "off");
    slide[2].classList.replace("on", "off");
    slide[3].classList.replace("on", "off");
    // console.log(e);
    if (slide[0].className === "slide off") {
      slide[0].classList.replace("off", "on");
    }
    return;
  } else if (e === "fresh") {
    slide[0].classList.replace("on", "off");
    slide[2].classList.replace("on", "off");
    slide[3].classList.replace("on", "off");
    // console.log(e);
    if (slide[1].className === "slide off") {
      slide[1].classList.replace("off", "on");
    }
    return;
  } else if (e === "premium") {
    slide[0].classList.replace("on", "off");
    slide[1].classList.replace("on", "off");
    slide[3].classList.replace("on", "off");
    // console.log(e);
    if (slide[2].className === "slide off") {
      slide[2].classList.replace("off", "on");
    }
    return;
  } else if (e === "morning") {
    slide[0].classList.replace("on", "off");
    slide[1].classList.replace("on", "off");
    slide[2].classList.replace("on", "off");
    // console.log(e);
    if (slide[3].className === "slide off") {
      slide[3].classList.replace("off", "on");
    }
    return;
  }
}
