# 🏗️ BuildPro - Modern Builder Landing Page

![BuildPro Hero Image](main-images/hero-bg.jpg)

## 📌 Overview
BuildPro is a highly optimized, fully responsive, and accessible landing page designed for modern construction and site management software. Built with semantic HTML, Tailwind CSS, and Vanilla JavaScript, this project emphasizes clean UI/UX, advanced accessibility (a11y) features, and high performance.

## ✨ Key Features
- **Modern UI/UX:** Glassmorphism navbar, smooth scrolling, and scroll-triggered animations.
- **Dark/Light Mode:** Seamless theme toggling with system preference detection and LocalStorage support.
- **Advanced Accessibility (a11y):** 
  - 🔠 **Text Resizer:** Increase or decrease base font size (A+ / A-).
  - ◑ **High Contrast Mode:** Enhanced visual contrast for better readability.
  - 🔊 **Text-to-Speech (TTS):** Integrated screen reading capability to read page content aloud.
- **Dynamic Interactions:** 
  - Interactive pricing toggle (Monthly/Yearly).
  - Animated FAQ accordion.
  - Scroll-to-top functionality.
- **Form Validation:** Client-side contact form validation with structured error handling.
- **SEO Optimized:** Implemented Open Graph (OG) tags and meta descriptions for better search engine visibility.

## 🛠️ Tech Stack
- **HTML5:** Semantic architecture.
- **Tailwind CSS:** Utility-first styling via CDN with custom configuration.
- **Vanilla JavaScript:** Modularized scripts for separate functionalities (`js/` directory) for better maintainability (Separation of Concerns).

## 🚀 Folder Structure
```text
📦 FDA internship
 ┣ 📂 avatars/          # User testimonial images
 ┣ 📂 company-logos/    # Client logo assets
 ┣ 📂 js/               # Modularized JavaScript files
 ┃ ┣ 📜 faqAccordion.js
 ┃ ┣ 📜 formValidation.js
 ┃ ┣ 📜 mobileMenu.js
 ┃ ┣ 📜 pricingToggle.js
 ┃ ┣ 📜 textResizer.js
 ┃ ┣ 📜 textToSpeech.js
 ┃ ┣ 📜 themeToggle.js
 ┃ ┗ ...
 ┣ 📂 main-images/      # Optimized core images
 ┣ 📂 work-icons/       # SVG UI icons
 ┣ 📜 index.html        # Main HTML file
 ┗ 📜 README.md         # Project documentation