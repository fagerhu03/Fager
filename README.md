# Fager Hussein Ahmed — Portfolio Website

A modern, responsive, high-performance portfolio website built for **Fager Hussein Ahmed**, Computer & Software Engineering graduate specializing in **Flutter & Cross-Platform Mobile Development**, with additional experience in AI, computer vision, cloud computing, and software testing.

---

## 🚀 Quick Start (Local Preview)

To run and preview the website locally on your computer:

### Option 1: Standard Node.js (Zero external dependencies)
```bash
node server.js
```
Open [http://localhost:3000](http://localhost:3000) in your web browser.

### Option 2: Direct Browser Opening (No server needed)
You can directly double-click [index.html](file:///d:/Fager/index.html) in your file explorer to open it in Google Chrome, Microsoft Edge, or any modern browser.

---

## 🌐 How to Publish

### Method 1: GitHub Pages (Recommended)
Since your existing portfolio link is [`https://fagerhu03.github.io/WebPortfolio/`](https://fagerhu03.github.io/WebPortfolio/):

1. **Commit and Push to your GitHub repository:**
   ```bash
   git init
   git add .
   git commit -m "feat: complete modern portfolio website"
   git branch -M main
   git remote add origin https://github.com/fagerhu03/WebPortfolio.git
   git push -u origin main --force
   ```
2. **Enable GitHub Pages:**
   - Go to your repository on GitHub: `https://github.com/fagerhu03/WebPortfolio`
   - Navigate to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, select **Deploy from a branch**.
   - Select the branch **`main`** and folder **`/ (root)`**, then click **Save**.
   - Within 1–2 minutes, your website will be live at `https://fagerhu03.github.io/WebPortfolio/`.

### Method 2: Netlify (Drag-and-Drop in 30 Seconds)
1. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop the `d:\Fager` folder into the upload box.
3. Your website is instantly deployed with free HTTPS.

### Method 3: Vercel
```bash
npx vercel
```
Follow the quick prompts to deploy immediately.

---

## 📁 Project Structure

```text
d:\Fager\
├── index.html                   # Semantic, accessible, SEO-optimized portfolio
├── server.js                    # Zero-dependency local static preview server
├── package.json                 # Project manifest
├── README.md                    # Setup and publishing documentation
├── css/
│   ├── variables.css            # Design tokens, complete light/dark theme variables
│   ├── base.css                 # CSS reset, typography, and accessibility utilities
│   ├── components.css           # Phone mockups, desktop mockups, buttons, modals, forms
│   ├── sections.css             # Section-specific layouts (Hero, About, Skills, etc.)
│   └── responsive.css           # Mobile and tablet responsive adaptations
├── js/
│   ├── data.js                  # Centralized portfolio data (CV content, projects, skills)
│   ├── theme.js                 # Theme switcher with OS preference detection & persistence
│   ├── navigation.js            # Sticky navbar, scrollspy observer, and mobile drawer menu
│   ├── projects.js              # Project filters, phone mockup gallery sliders, modals
│   ├── contact.js               # Form validation, mailto launcher, and clipboard copy
│   └── main.js                  # Application orchestrator
└── assets/
    ├── Fager_Hussein_Ahmed_CV.pdf   # Downloadable official curriculum vitae PDF
    ├── images/
    │   ├── favicon.svg              # Brand icon
    │   ├── profile.jpg              # Drop your photo here (replaces placeholder automatically)
    │   ├── profile-placeholder.svg  # High-polish vector placeholder fallback
    │   ├── README.md                # Asset replacement instructions
    │   └── projects/                # High-fidelity project screenshots & mockups
    │       ├── lost-in-egypt-1.svg  # Explore & AI Trip Planning Screen
    │       ├── lost-in-egypt-2.svg  # AI Landmark Camera Viewfinder Screen
    │       ├── lost-in-egypt-3.svg  # Interactive Map & Community Feed Screen
    │       ├── todo-app-1.svg       # Task Dashboard & Hive Offline Sync Screen
    │       ├── todo-app-2.svg       # Event Details & Notifications Screen
    │       ├── movie-app-1.svg      # Movie Trending Carousel Screen
    │       ├── movie-app-2.svg      # Movie Details & Offline Favorites Screen
    │       ├── muslim-app-1.svg     # Prayer Times & Adhan Screen
    │       ├── muslim-app-2.svg     # Quran Surahs & Digital Sebha Screen
    │       ├── shopping-app-1.svg   # Product Grid & Deals Screen
    │       ├── shopping-app-2.svg   # Cart & Checkout Flow Screen
    │       ├── ai-chatbot-1.svg     # NLP Chat Dialogue & Metrics Window
    │       ├── ai-chatbot-2.svg     # Flask REST API Payload Inspector Window
    │       ├── cv-detection-1.svg   # Real-Time Webcam Stream Bounding Boxes
    │       └── cv-detection-2.svg   # OpenCV Preprocessing & IoT Relays Window
    └── docs/
        ├── Fager_Hussein_Ahmed_CV.pdf
        └── cv-print.html
```

---

## 🎨 Asset Customization Guide

### 1. Replacing Profile Photo
Drop your high-resolution photo into `assets/images/` and name it:
```text
assets/images/profile.jpg
```
The website is pre-configured to automatically display `profile.jpg` if present, with an automatic fallback to `assets/images/profile-placeholder.svg`.

### 2. Updating Project Screenshots
If you capture live emulator screenshots of your Flutter apps:
- Drop your `.png` or `.jpg` screenshots into `assets/images/projects/`.
- Update the image path in `js/data.js` under the corresponding project entry.

### 3. Contact Form Backend Integration
Currently, the form performs full client-side validation and opens the user's default email client via `mailto:fagerhu03@gmail.com` with the subject and body pre-filled, plus provides a 1-click **Copy Message Text** button (honest delivery).

To connect to a serverless backend service like [Formspree](https://formspree.io):
1. Sign up for free at Formspree and create a new form endpoint (e.g. `https://formspree.io/f/your_form_id`).
2. In [index.html](file:///d:/Fager/index.html), add `action="https://formspree.io/f/your_form_id"` and `method="POST"` to `<form id="contact-form">`.
3. In [js/contact.js](file:///d:/Fager/js/contact.js), uncomment the `fetch()` submission call.

---

## ✅ Verified Features

- **100% Content Accuracy:** Every education entry, 6 industry training programs, 7 projects, 8 technical skill categories, and 10 personal skills from your CV are included.
- **Realistic Phone Frames:** Flutter projects are showcased inside custom mobile phone mockups with dynamic islands, status bars, and interactive multi-screenshot galleries.
- **Desktop Window Mockups:** Python & AI projects are showcased inside desktop terminal/API inspector windows.
- **Light & Dark Themes:** Complete dual-theme styling with OS preference detection, accessible theme toggle (☀️ / 🌙), and `localStorage` persistence.
- **Case Study Modal:** Prominently features your graduation project *Lost in Egypt* with deep technical architecture, challenges, and feature breakdowns.
- **Accessible & Responsive:** Keyboard navigation, Escape-to-close modals, reduced-motion compliance, and mobile drawer menu.
- **Curriculum Vitae Download:** Direct working download of `assets/Fager_Hussein_Ahmed_CV.pdf`.
