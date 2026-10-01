# Portfolio Asset Replacement Guide

This directory contains visual assets for **Fager Hussein Ahmed's** portfolio website.

## 1. Profile Photo
- **File path:** `assets/images/profile.jpg`
- **Fallback:** `assets/images/profile-placeholder.svg` (active by default until you add `profile.jpg`).
- **How to replace:**
  Simply copy your high-resolution portrait photo here and name it `profile.jpg` (or `.png`).
  The website is configured to automatically load `profile.jpg` with an automatic fallback to the SVG placeholder if not found.

## 2. Project Screenshots
The project mockups currently use crisp, vector SVG screens representing your exact app features.
If you have real mobile screenshots captured from your emulator or device:
- **Lost in Egypt:** Drop files into `assets/images/projects/` named `lost-in-egypt-1.png`, `lost-in-egypt-2.png`, etc., or keep the current vector mockups.
- **ToDo-List App:** `todo-app-1.png`, `todo-app-2.png`
- **Movie App:** `movie-app-1.png`, `movie-app-2.png`
- **Muslim App:** `muslim-app-1.png`, `muslim-app-2.png`
- **My Shopping App:** `shopping-app-1.png`, `shopping-app-2.png`
- **AI Chatbot & Computer Vision:** `ai-chatbot-1.png`, `cv-detection-1.png`

You can update the image paths in `js/data.js` in a single place.

## 3. Curriculum Vitae (PDF)
- **File path:** `assets/Fager_Hussein_Ahmed_CV.pdf`
- **Current status:** Freshly compiled from your authoritative CV content with full education, training, projects, and skills.
- To replace with any new version in the future, simply overwrite `assets/Fager_Hussein_Ahmed_CV.pdf`.
