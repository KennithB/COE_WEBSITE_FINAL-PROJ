// Redirect the logo and Home link to the home page
const redirectToHome = () => window.location.href = 'HOME.html';

document.getElementById('logo').addEventListener('click', redirectToHome);
document.getElementById('home-link').addEventListener('click', redirectToHome);

// Toggle Dropdowns on hover for desktop with smooth fade-in/fade-out
document.querySelectorAll('.dropdown').forEach(dropdown => {
    const dropdownMenu = dropdown.querySelector('.dropdown-content');

    dropdown.addEventListener('mouseenter', () => {
        dropdownMenu.style.display = 'block';
        setTimeout(() => dropdownMenu.style.opacity = 1, 10); // Fade in
    });

    dropdown.addEventListener('mouseleave', () => {
        dropdownMenu.style.opacity = 0;
        setTimeout(() => dropdownMenu.style.display = 'none', 300); // Fade out
    });
});

// Close dropdown menu if clicked outside
window.addEventListener('click', (event) => {
    if (!event.target.matches('.dropbtn') && !event.target.matches('.dropdown-content a')) {
        document.querySelectorAll('.dropdown-content').forEach(menu => {
            menu.style.opacity = 0;
            setTimeout(() => menu.style.display = 'none', 300); // Hide after fade-out
        });
    }
});

// Mobile dropdown functionality
document.querySelectorAll('.dropbtn').forEach(button => {
    button.addEventListener('click', () => {
        const dropdownContent = button.nextElementSibling;
        const isVisible = dropdownContent.style.display === 'block';

        dropdownContent.style.transition = 'opacity 0.3s ease-in-out';
        dropdownContent.style.opacity = isVisible ? '0' : '1';
        dropdownContent.style.display = isVisible ? 'none' : 'block';
    });
});

const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const dots = document.querySelectorAll(".dots li");
let currentIndex = 0;

function moveToNext() {
    currentIndex++;
    if (currentIndex >= dots.length) currentIndex = 0;
    updateCarousel();
}

function moveToPrev() {
    currentIndex--;
    if (currentIndex < 0) currentIndex = dots.length - 1;
    updateCarousel();
}

function updateCarousel() {
    const items = document.querySelectorAll(".item");
    const list = document.querySelector(".list");
    const activeDot = document.querySelector(".dots .active");
    const newDot = dots[currentIndex];

    list.style.transform = `translateX(-${currentIndex * 100}%)`;

    activeDot.classList.remove("active");
    newDot.classList.add("active");
}

prevButton.addEventListener("click", moveToPrev);
nextButton.addEventListener("click", moveToNext);

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        currentIndex = index;
        updateCarousel();
    });
});

// JavaScript for smooth pop-up animation on scroll
document.addEventListener("DOMContentLoaded", function () {
    const animateSections = document.querySelectorAll('.animate-section');

    function checkVisibility() {
        animateSections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                section.classList.add('show');
            }
        });
    }

    // Initial check and scroll event listener
    checkVisibility();
    window.addEventListener('scroll', checkVisibility);
});

// Scroll animation for vision, mission, and policy sections
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            el.classList.add('show');
        } else {
            el.classList.remove('show');
        }
    });
}

// Listen to scroll event
window.addEventListener('scroll', animateOnScroll);

// Initial check in case elements are in view on page load
animateOnScroll();

// Scroll animation for News or Announcements section
document.addEventListener("DOMContentLoaded", function () {
    const newsItems = document.querySelectorAll(".news-item");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                }
            });
        },
        { threshold: 0.1 }
    );

    newsItems.forEach((item) => observer.observe(item));
});

// Continuous scroll animation for Vision, Mission, and News sections
document.addEventListener('scroll', function () {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    animatedElements.forEach((element) => {
        const rect = element.getBoundingClientRect();

        // Add the 'animated' class when in view
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            if (!element.classList.contains('animated')) {
                element.classList.add('animated');
            }
        } else {
            // Remove the 'animated' class when out of view to allow re-triggering
            element.classList.remove('animated');
        }
    });
});

// Initial check in case elements are in view on page load
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            element.classList.add('animated');
        }
    });
});

function toggleNavbar() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}

function toggleNavbar() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}

  
