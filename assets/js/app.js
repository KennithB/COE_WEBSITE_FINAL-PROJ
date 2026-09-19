/**
 * PRMSU College of Engineering Portal - Core Application
 * Modern Object-Oriented Architecture (OOP)
 */

class Navigation {
    constructor() {
        this.toggleBtn = document.getElementById('navbar-toggle');
        this.menu = document.getElementById('navbar-menu');
        this.dropdowns = document.querySelectorAll('.dropdown');
        this.navLinks = document.querySelectorAll('.nav-link, .dropdown-content a');
        this.init();
    }

    init() {
        this.bindToggle();
        this.bindDropdowns();
        this.highlightActivePage();
        this.bindOutsideClick();
    }

    bindToggle() {
        if (!this.toggleBtn || !this.menu) return;

        // Prevent double execution from inline HTML onclick
        this.toggleBtn.removeAttribute('onclick');

        this.toggleBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.toggleMenu();
        });
    }

    toggleMenu(forceState) {
        if (!this.toggleBtn || !this.menu) return;
        const isActive = forceState !== undefined ? forceState : !this.menu.classList.contains('active');
        
        this.toggleBtn.classList.toggle('is-active', isActive);
        this.toggleBtn.setAttribute('aria-expanded', isActive ? 'true' : 'false');
        this.menu.classList.toggle('active', isActive);

        if (window.innerWidth <= 860) {
            document.body.style.overflow = isActive ? 'hidden' : '';
        }
    }

    bindDropdowns() {
        this.dropdowns.forEach(dropdown => {
            const btn = dropdown.querySelector('.dropbtn');
            const content = dropdown.querySelector('.dropdown-content');
            if (!btn || !content) return;

            // Mobile click accordion
            btn.addEventListener('click', (e) => {
                if (window.innerWidth <= 860) {
                    e.preventDefault();
                    e.stopPropagation();
                    const isOpen = content.classList.contains('open');
                    
                    // Close other dropdowns
                    document.querySelectorAll('.dropdown-content.open').forEach(c => {
                        if (c !== content) c.classList.remove('open');
                    });

                    content.classList.toggle('open', !isOpen);
                    btn.setAttribute('aria-expanded', !isOpen ? 'true' : 'false');
                }
            });

            // Desktop hover
            dropdown.addEventListener('mouseenter', () => {
                if (window.innerWidth > 860) {
                    content.style.display = 'block';
                    setTimeout(() => {
                        content.style.opacity = '1';
                        content.style.transform = 'translateY(0)';
                    }, 10);
                }
            });

            dropdown.addEventListener('mouseleave', () => {
                if (window.innerWidth > 860) {
                    content.style.opacity = '0';
                    content.style.transform = 'translateY(8px)';
                    setTimeout(() => {
                        if (content.style.opacity === '0') {
                            content.style.display = 'none';
                        }
                    }, 200);
                }
            });
        });
    }

    highlightActivePage() {
        const currentPath = window.location.pathname.split('/').pop().toLowerCase() || 'index.html';
        
        this.navLinks.forEach(link => {
            const page = (link.getAttribute('data-page') || link.getAttribute('href') || '').toLowerCase();
            if (page === currentPath || (currentPath === '' && page === 'index.html')) {
                link.classList.add('active');
                
                // If it's inside a dropdown, highlight parent button
                const parentDropdown = link.closest('.dropdown');
                if (parentDropdown) {
                    const dropBtn = parentDropdown.querySelector('.dropbtn');
                    if (dropBtn) dropBtn.classList.add('active');
                }
            }
        });
    }

    bindOutsideClick() {
        document.addEventListener('click', (e) => {
            // Close mobile menu if clicked outside
            if (this.menu && this.menu.classList.contains('active')) {
                if (!this.menu.contains(e.target) && !this.toggleBtn.contains(e.target)) {
                    this.toggleMenu(false);
                }
            }

            // Close open mobile dropdowns
            if (!e.target.closest('.dropdown')) {
                document.querySelectorAll('.dropdown-content.open').forEach(c => c.classList.remove('open'));
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.toggleMenu(false);
                document.querySelectorAll('.dropdown-content.open').forEach(c => c.classList.remove('open'));
            }
        });
    }

    toggle() {
        this.toggleMenu();
    }
}

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

        // Pause autoplay on hover
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

class SearchEngine {
    constructor() {
        this.searchInputs = document.querySelectorAll('.search-bar, .search-container input');
        this.resultsContainer = document.getElementById('search-results');
        this.routes = [
            { name: "Home - College Overview", link: "index.html" },
            { name: "Curricular Offerings (BSCE, BSCpE, BSEE, BSME)", link: "curricular-offerings.html" },
            { name: "Faculty Directory - College Staff", link: "faculty.html" },
            { name: "Research Portal - All Projects", link: "research.html" },
            { name: "BSCE Research Papers", link: "bsce-research.html" },
            { name: "BSCpE Research Papers", link: "bscpe-research.html" },
            { name: "BSEE Research Papers", link: "bsee-research.html" },
            { name: "BSME Research Papers", link: "bsme-research.html" },
            { name: "Community Extension Programs", link: "Extension.html" },
            { name: "College History & Milestones", link: "History.html" }
        ];

        this.init();
    }

    init() {
        this.searchInputs.forEach(input => {
            input.addEventListener('input', (e) => this.query(e.target.value));
            input.addEventListener('focus', (e) => {
                if (e.target.value.trim()) this.query(e.target.value);
            });
        });

        // Hide results on outside click
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-container')) {
                const results = document.getElementById('search-results');
                if (results) results.style.display = 'none';
            }
        });
    }

    query(keyword) {
        const resultsEl = this.resultsContainer || document.getElementById('search-results');
        if (!resultsEl) return;

        resultsEl.innerHTML = '';
        const trimmed = (keyword || '').trim().toLowerCase();

        if (!trimmed) {
            resultsEl.style.display = 'none';
            return;
        }

        const matches = this.routes.filter(item => item.name.toLowerCase().includes(trimmed));

        if (matches.length > 0) {
            matches.forEach(item => {
                const itemEl = document.createElement('p');
                itemEl.textContent = item.name;
                itemEl.style.cursor = 'pointer';
                itemEl.onclick = () => window.location.href = item.link;
                resultsEl.appendChild(itemEl);
            });
            resultsEl.style.display = 'block';
        } else {
            const noMatch = document.createElement('p');
            noMatch.textContent = 'No matching pages found';
            noMatch.style.color = '#94a3b8';
            resultsEl.appendChild(noMatch);
            resultsEl.style.display = 'block';
        }
    }
}

class ScrollAnimator {
    constructor() {
        this.scrollElements = document.querySelectorAll('.animate-on-scroll, .news-card, .column-card');
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

// Master Application Coordinator
class CollegeApp {
    constructor() {
        this.navigation = new Navigation();
        this.carousel = new Carousel();
        this.search = new SearchEngine();
        this.animator = new ScrollAnimator();
    }
}

// Global Backward-Compatibility Hooks
let appInstance = null;
let lastNavbarToggle = 0;

function toggleNavbar() {
    const now = Date.now();
    if (now - lastNavbarToggle < 200) return;
    lastNavbarToggle = now;

    if (appInstance && appInstance.navigation) {
        appInstance.navigation.toggle();
    } else {
        const btn = document.getElementById('navbar-toggle');
        const menu = document.getElementById('navbar-menu');
        if (btn && menu) {
            btn.classList.toggle('is-active');
            menu.classList.toggle('active');
        }
    }
}

function showResults(value) {
    if (appInstance && appInstance.search) {
        appInstance.search.query(value);
    }
}

function toggleFaculty(department) {
    const sections = document.querySelectorAll('.faculty-members');
    const buttons = document.querySelectorAll('.dept-btn');

    buttons.forEach(btn => {
        if (btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(department)) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    sections.forEach(section => {
        if (section.id === department) {
            section.style.display = 'flex';
        } else {
            section.style.display = 'none';
        }
    });
}

function toggleSubLinks(id) {
    const subLinks = document.getElementById(id);
    if (!subLinks) return;
    subLinks.style.display = subLinks.style.display === 'block' ? 'none' : 'block';
}

function showDocument(id) {
    const sections = document.getElementsByClassName('document-section');
    for (let i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }
    const section = document.getElementById(id);
    if (section) {
        section.style.display = 'block';
    }
}

// Bootstrap on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
    appInstance = new CollegeApp();
});
