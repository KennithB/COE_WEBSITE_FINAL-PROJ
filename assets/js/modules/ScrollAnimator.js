/**
 * ScrollAnimator Module - PRMSU College of Engineering
 * Modern viewport reveal animation controller utilizing IntersectionObserver.
 */
class ScrollAnimator {
    constructor() {
        this.scrollElements = document.querySelectorAll('.animate-on-scroll, .news-card, .column-card, .paper-card, .timeline-card');
        this.init();
    }

    init() {
        if (!('IntersectionObserver' in window)) {
            this.scrollElements.forEach(el => el.classList.add('show'));
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show', 'in-view');
                }
            });
        }, { threshold: 0.12 });

        this.scrollElements.forEach(el => observer.observe(el));
    }
}
