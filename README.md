# PRMSU College of Engineering - Official Web Portal

Official website for the **President Ramon Magsaysay State University (PRMSU) College of Engineering**, featuring academic programs, faculty directory, student & faculty research publications, and community extensions.

**Live Website (GitHub Pages):**  
[https://kennithb.github.io/COE_WEBSITE_FINAL-PROJ/](https://kennithb.github.io/COE_WEBSITE_FINAL-PROJ/)

---

## Project Overview

This website serves as an informational and resource portal for the College of Engineering at PRMSU, Iba, Zambales.

### Engineering Departments:
- **BSCE** — Bachelor of Science in Civil Engineering
- **BSCpE** — Bachelor of Science in Computer Engineering
- **BSEE** — Bachelor of Science in Electrical Engineering
- **BSME** — Bachelor of Science in Mechanical Engineering

---

## Project Structure

```text
COE_WEBSITE_FINAL-PROJ/
├── .gitattributes                # Git settings & Linguist stats config
├── README.md                     # Project documentation
├── index.html                    # Landing page & news
├── History.html                  # College history
├── faculty.html                  # Administration & faculty profiles
├── curricular-offerings.html     # Degree curriculum guides
├── research.html                 # Research portal
├── Extension.html                # Extension programs & outreach
├── bsce-research.html            # Civil Engineering research
├── bscpe-research.html           # Computer Engineering research
├── bsee-research.html            # Electrical Engineering research
├── bsme-research.html            # Mechanical Engineering research
└── assets/
    ├── css/
    │   └── style.css             # Unified responsive stylesheet
    ├── js/
    │   ├── modules/              # Modular OOP ES6 classes
    │   │   ├── Navigation.js
    │   │   ├── Carousel.js
    │   │   ├── SearchEngine.js
    │   │   ├── ScrollAnimator.js
    │   │   └── FacultyData.js
    │   └── app.js               # Centralized OOP JavaScript runtime
    └── images/
        ├── logos/                # University and department logos
        ├── slides/               # Carousel slides (slide1.png - slide8.png)
        ├── content/              # News, demos, and background assets
        └── faculty/              # Faculty directories (AL, CE, Chair, CpE, EE, EM, ME)
```

---

## Deployment (GitHub Pages)

This project is deployed to GitHub Pages via the `main` branch.

To push changes:
```bash
git add .
git commit -m "Update portal content"
git push origin main
```
Access the deployed site at:  
`https://kennithb.github.io/COE_WEBSITE_FINAL-PROJ/`

---

## License and Rights

(c) 2024 PRMSU College of Engineering. All rights reserved.
