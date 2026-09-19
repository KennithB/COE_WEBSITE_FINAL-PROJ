/**
 * Navigation Module - PRMSU College of Engineering
 * Handles responsive navbar drawer, accordion dropdowns, active route detection, and outside-click dismissal.
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

        this.toggleBtn.addEventListener('click', (e) => {
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
            if (this.menu && this.menu.classList.contains('active')) {
                if (!this.menu.contains(e.target) && !this.toggleBtn.contains(e.target)) {
                    this.toggleMenu(false);
                }
            }

            if (!e.target.closest('.dropdown')) {
                document.querySelectorAll('.dropdown-content.open').forEach(c => c.classList.remove('open'));
            }
        });

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
