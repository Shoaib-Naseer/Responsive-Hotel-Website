// Header Scroll

// nav hide


// Swiper Slider
let parallexSliderOptions = {}
let parallexSlider;
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
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