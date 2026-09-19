/**
 * SearchEngine Module - PRMSU College of Engineering
 * Client-side search engine providing instantaneous query filtering and keyboard navigation.
 */
class SearchEngine {
    constructor() {
        this.searchInputs = document.querySelectorAll('.search-bar, .search-container input');
        this.resultsContainer = document.getElementById('search-results');
        this.routes = [
            { name: "Home - College Overview & News", link: "index.html" },
            { name: "Curricular Offerings - Academic Checklists & CMO", link: "curricular-offerings.html" },
            { name: "Faculty Directory - Administrators & Educators", link: "faculty.html" },
            { name: "Research Portal - Publications & Manuals", link: "research.html" },
            { name: "BSCE Research - Civil Engineering Studies", link: "bsce-research.html" },
            { name: "BSCpE Research - Computer Engineering Projects", link: "bscpe-research.html" },
            { name: "BSEE Research - Electrical Engineering Innovations", link: "bsee-research.html" },
            { name: "BSME Research - Mechanical Engineering Compendium", link: "bsme-research.html" },
            { name: "Extension Programs - TEAM-UP & Outreach", link: "Extension.html" },
            { name: "College History - Milestones & Heritage", link: "History.html" }
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
            noMatch.textContent = 'No matching portal pages found';
            noMatch.style.color = '#94a3b8';
            resultsEl.appendChild(noMatch);
            resultsEl.style.display = 'block';
        }
    }
}
