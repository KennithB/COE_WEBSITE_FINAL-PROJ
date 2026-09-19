# PRMSU College of Engineering - Official Web Portal

Official website for the **President Ramon Magsaysay State University (PRMSU) College of Engineering**, featuring academic programs, faculty directory, student & faculty research publications, and community extensions.

🌐 **Live Website (GitHub Pages):**  
[https://kennithb.github.io/COE_WEBSITE_FINAL-PROJ/](https://kennithb.github.io/COE_WEBSITE_FINAL-PROJ/)

---

## 📌 Project Overview

This website serves as an informational and resource portal for the College of Engineering at PRMSU, Iba, Zambales.

### Engineering Departments:
- **BSCE** — Bachelor of Science in Civil Engineering
- **BSCpE** — Bachelor of Science in Computer Engineering
- **BSEE** — Bachelor of Science in Electrical Engineering
- **BSME** — Bachelor of Science in Mechanical Engineering

---

## 📂 Project Structure

```text
COE_WEBSITE_FINAL-PROJ/
├── .gitattributes                # Git settings & Linguist stats config
├── README.md                     # Project documentation
├── index.html                    # Landing page & news
├── History.html                  # College history
├── faculty.html                  # Administration & faculty profiles
├── curricular-offerings.html     # Degree curriculum guides
├── research.html                 # Research portal
├── extension.html                # Extension programs & outreach
├── bsce-research.html            # Civil Engineering research
├── bscpe-research.html           # Computer Engineering research
├── bsee-research.html            # Electrical Engineering research
├── bsme-research.html            # Mechanical Engineering research
└── assets/
    ├── css/
    │   └── style.css             # Unified responsive stylesheet
    ├── js/
    │   └── app.js               # Centralized OOP JavaScript architecture
    └── images/
        ├── logos/                # University and department logos
        ├── slides/               # Carousel slides (slide1.png - slide8.png)
        ├── content/              # News, demos, and background assets
        └── faculty/              # Faculty directories (AL, CE, Chair, CpE, EE, EM, ME)
```

---

## ⚙️ Architecture & Design

### Object-Oriented JavaScript (`assets/js/app.js`)
The client-side logic is structured around ES6 OOP principles:
- `Navigation`: Manages responsive mobile toggling, desktop hover transitions, and outside-click dismissal.
- `Carousel`: Controls slide transitions, dot indicators, and boundaries.
- `SearchEngine`: Centralized client-side routing and instant search query matching.
- `ScrollAnimator`: IntersectionObserver-driven scroll reveal animations.
- `CollegeApp`: Coordinator that boots and binds modules on `DOMContentLoaded`.

---

## 🚀 Deployment (GitHub Pages)

This project is deployed to GitHub Pages via the `main` branch.

To push changes:
```bash
git add .
git commit -m "Refactor folder structure to assets/ and implement OOP JavaScript"
git push origin main
```
Access the deployed site at:  
`https://kennithb.github.io/COE_WEBSITE_FINAL-PROJ/`

---

## 📄 License & Rights

© 2024 PRMSU College of Engineering. All rights reserved.
