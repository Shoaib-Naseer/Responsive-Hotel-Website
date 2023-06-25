// Header Scroll

let nav = document.querySelector(".navbar");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 50) {
    nav.classList.add("header-scrolled");
  } else {
    nav.classList.remove("header-scrolled");
  }
};

// nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse");

navBar.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  });
});

// Swiper Slider
let parallexSliderOptions = {};
let parallexSlider;
const swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  on: {
    progress: function () {
      const slides = this.slides;

      for (let i = 0; i < slides.length; i++) {
        const slideProgress = slides[i].progress;
        const innerCaption = slides[i].querySelector(".slide-caption");
        const captionElements = innerCaption.querySelectorAll("h1, p");

        // Parallax effect
        innerCaption.style.opacity = 1 - Math.abs(slideProgress);
        captionElements.forEach((el) => {
          el.style.transform = `translateY(${slideProgress * 50}px)`;
        });
      }
    },
    touchMove: function () {
      this.slides.forEach((slide) => {
        slide.querySelector(".slide-caption").style.opacity = 1;
      });
    },
  },
});

// Counter Design

document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, step);
  }

  counter("count1", 0, 1287, 1000);
  counter("count2", 100, 1787, 2500);
  counter("count3", 0, 1440, 3000);
  counter("count4", 0, 1287, 3000);
});

// Our Partner

let partnerSwiper = new Swiper(".our-partner", {
 loop: true,
  slidesPerView: 5,
  spaceBetween: 20,
  speed:1500,
  loopedSlides:1,
  autoplay: {
    delay: 1000,
  },
  breakpoints: {
    991: { slidesPerView: 4, spaceBetween: 10 },
    767: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 2,
      spaceBetween: 8,
    },
  },
});
