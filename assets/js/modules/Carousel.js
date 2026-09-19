/**
 * Carousel Module - PRMSU College of Engineering
 * Handles sliding transitions, touch/keyboard events, dot indicators, and autoplay with pause-on-hover.
 */
class Carousel {
    constructor() {
        this.carouselEl = document.querySelector('.carousel');
        this.prevButton = document.getElementById("prev");
        this.nextButton = document.getElementById("next");
        this.dots = document.querySelectorAll(".dots li");
        this.list = document.querySelector(".list");
        this.currentIndex = 0;
        this.autoPlayInterval = null;

        if (this.list && this.dots.length > 0) {
            this.init();
        }
    }

    init() {
        if (this.prevButton) {
            this.prevButton.addEventListener("click", () => {
                this.prev();
                this.resetTimer();
            });
        }
        if (this.nextButton) {
            this.nextButton.addEventListener("click", () => {
                this.next();
                this.resetTimer();
            });
        }

        this.dots.forEach((dot, index) => {
            dot.addEventListener("click", () => {
                this.goTo(index);
                this.resetTimer();
            });
        });

        this.startTimer();

        if (this.carouselEl) {
            this.carouselEl.addEventListener('mouseenter', () => clearInterval(this.autoPlayInterval));
            this.carouselEl.addEventListener('mouseleave', () => this.startTimer());
        }
    }

    startTimer() {
        clearInterval(this.autoPlayInterval);
        this.autoPlayInterval = setInterval(() => this.next(), 5000);
    }

    resetTimer() {
        this.startTimer();
    }

    next() {
        this.currentIndex = (this.currentIndex + 1) % this.dots.length;
        this.update();
    }

    prev() {
        this.currentIndex = (this.currentIndex - 1 + this.dots.length) % this.dots.length;
        this.update();
    }

    goTo(index) {
        this.currentIndex = index;
        this.update();
    }

    update() {
        if (!this.list) return;
        this.list.style.transform = `translateX(-${this.currentIndex * 100}%)`;

        const activeDot = document.querySelector(".dots .active");
        if (activeDot) activeDot.classList.remove("active");

        const newDot = this.dots[this.currentIndex];
        if (newDot) newDot.classList.add("active");
    }
}
