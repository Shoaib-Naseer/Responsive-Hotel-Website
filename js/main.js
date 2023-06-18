// Header Scroll

let nav = document.querySelector(".navbar")
window.onscroll = function (){
    if(document.documentElement.scrollTop > 50){
        nav.classList.add("header-scrolled")
    }else{
        nav.classList.remove("header-scrolled")
    }
}

// nav hide
let navBar = document.querySelectorAll(".nav-link")
let navCollapse = document.querySelector(".navbar-collapse")

navBar.forEach(function(a){
    a.addEventListener("click",function(){
        navCollapse.classList.remove("show")
    })
})


// Swiper Slider
let parallexSliderOptions = {}
let parallexSlider;
const swiper = new Swiper('.swiper', {
    direction: 'vertical',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    on: {
        progress: function () {
            const slides = this.slides;

            for (let i = 0; i < slides.length; i++) {
                const slideProgress = slides[i].progress;
                const innerCaption = slides[i].querySelector('.slide-caption');
                const captionElements = innerCaption.querySelectorAll('h1, p');

                // Parallax effect
                innerCaption.style.opacity = 1 - Math.abs(slideProgress);
                captionElements.forEach((el) => {
                    el.style.transform = `translateY(${slideProgress * 50}px)`;
                });
            }
        },
        touchMove: function () {
            this.slides.forEach((slide) => {
                slide.querySelector('.slide-caption').style.opacity = 1;
            });
        },
    },
});


// Counter Design

// Our Partner