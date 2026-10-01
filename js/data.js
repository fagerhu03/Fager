/**
 * Centralized Portfolio Data for Fager Hussein Ahmed
 * Authoritative Source: Official Curriculum Vitae
 */

const PORTFOLIO_DATA = {
  personal: {
    name: "Fager Hussein Ahmed",
    title: "Flutter Developer | Computer & Software Engineering Graduate",
    supportingCopy: "I build intuitive mobile applications with Flutter, Firebase, and clean architecture, with additional experience in AI, computer vision, and cloud technologies.",
    email: "fagerhu03@gmail.com",
    phone: "+20 155 214 8113",
    location: "Giza, Egypt",
    university: "Misr University for Science and Technology",
    degree: "B.Sc. in Computer & Software Engineering",
    graduationYears: "2021 – 2026",
    social: {
      github: "https://github.com/fagerhu03",
      linkedin: "https://www.linkedin.com/in/fagerhu",
      portfolio: "https://fagerhu03.github.io/WebPortfolio/",
      whatsapp: "https://wa.me/201552148113"
    },
    cvPath: "assets/Fager_Hussein_Ahmed_CV.pdf",
    photo: "assets/images/profile.jpg",
    photoFallback: "assets/images/profile-placeholder.svg"
  },

  about: {
    summary: "I am a Computer & Software Engineering graduate from Misr University for Science and Technology with a dedicated focus on Flutter and cross-platform mobile application development. My hands-on engineering work bridges responsive, user-centered mobile design with solid software engineering foundations—spanning Firebase services, RESTful API integration, Hive local caching, and Clean Architecture.",
    specializations: [
      {
        icon: "📱",
        title: "Flutter & Cross-Platform",
        description: "Specialized in Dart and Flutter to craft native-performing, high-fidelity applications for Android and iOS with clean architecture and maintainable state management."
      },
      {
        icon: "🔥",
        title: "Backend & Local Persistence",
        description: "Experienced with Firebase Authentication, Cloud Firestore real-time streams, Hive high-performance local storage, and secure REST API consumption."
      },
      {
        icon: "🤖",
        title: "AI & Computer Vision",
        description: "Practical implementation of machine learning, NLP (NLTK, spaCy), and real-time computer vision models using OpenCV, Haar Cascades, and HOG+SVM."
      },
      {
        icon: "☁️",
        title: "Cloud, Testing & IoT",
        description: "Exposure to Google Cloud Platform deployment, automated testing with Selenium, JIRA tracking, and microcontroller prototyping with Arduino and ESP modules."
      }
    ]
  },

  education: {
    institution: "Misr University for Science and Technology",
    location: "Giza, EG",
    degree: "B.Sc. in Computer & Software Engineering",
    period: "2021 – 2026",
    status: "Graduate",
    highlights: [
      "Core focus on Software Engineering Principles, Object-Oriented Design, and System Architecture.",
      "Extensive coursework in Data Structures, Algorithms, Database Management, and Operating Systems.",
      "Graduation Capstone Project (2025–2026): 'Lost in Egypt' — Smart Tourism Mobile Application integrating Flutter, AI/ML, and Computer Vision."
    ]
  },

  experienceAndTraining: [
    {
      id: "exp-1",
      role: "Diploma in Mobile Development",
      organization: "Route Academy",
      type: "Training Program",
      period: "Apr 2025 – Sep 2025",
      bullets: [
        "Learned cross-platform mobile development with Flutter, utilizing Firebase for backend services, Hive for local storage, and pub.dev libraries for responsive UI/UX.",
        "Built mobile applications integrating RESTful APIs, authentication workflows, and real-time features.",
        "Applied agile practices, teamwork, and deployment workflows to simulate real-world production projects."
      ],
      tags: ["Flutter", "Firebase", "Hive", "REST APIs", "Clean Architecture", "Agile"]
    },
    {
      id: "exp-2",
      role: "Mobile Development Summer Camp",
      organization: "Microsoft x Sprints",
      type: "Training Program",
      period: "Summer 2025",
      bullets: [
        "Built mobile applications in Flutter/Dart with Firebase cloud integration.",
        "Focused on modern UI/UX design patterns, state management best practices, and publishing workflows.",
        "Presented functional app demonstrations to technical mentors, receiving feedback on design patterns and architecture."
      ],
      tags: ["Flutter", "Dart", "Firebase", "State Management", "UI/UX"]
    },
    {
      id: "exp-3",
      role: "Computer Vision and IoT Training",
      organization: "AOI (Arab Organization for Industrialization)",
      type: "Technical Training",
      period: "Summer 2025",
      bullets: [
        "Integrated physical sensors and microcontrollers with Python/OpenCV for connected IoT systems.",
        "Created smart object-detection algorithms and automation prototypes.",
        "Delivered a working hardware demonstration combining microcontroller circuitry and AI computer vision."
      ],
      tags: ["Python", "OpenCV", "IoT", "Microcontrollers", "Haar Cascades", "Hardware"]
    },
    {
      id: "exp-4",
      role: "Software Testing Training",
      organization: "We Telecom",
      type: "Technical Training",
      period: "Summer 2024",
      bullets: [
        "Performed manual and automated software testing using Selenium test suites and JIRA tracking.",
        "Designed comprehensive test cases, managed defects, and tracked issues across development cycles.",
        "Ensured product quality through rigorous regression testing and performance evaluation."
      ],
      tags: ["Software Testing", "Selenium", "JIRA", "Test Automation", "Regression Testing"]
    },
    {
      id: "exp-5",
      role: "Cloud Computing Training",
      organization: "We Telecom",
      type: "Technical Training",
      period: "Summer 2023",
      bullets: [
        "Deployed and optimized web and mobile backend applications on Google Cloud Platform (GCP).",
        "Learned cloud object storage, Identity & Access Management (IAM) security policies, and scalable architecture.",
        "Completed practical enterprise labs simulating real-world cloud infrastructure deployments."
      ],
      tags: ["Google Cloud Platform", "IAM Policies", "Cloud Storage", "Scalable Systems"]
    },
    {
      id: "exp-6",
      role: "AI Fundamentals",
      organization: "Impact @ Zewail City",
      type: "Technical Training",
      period: "Summer 2023",
      bullets: [
        "Studied machine learning, deep learning, and natural language processing (NLP) foundations with TensorFlow and scikit-learn.",
        "Built prototype machine learning models for data classification and numerical prediction tasks.",
        "Explored ethical AI design considerations and real-world model deployment challenges."
      ],
      tags: ["TensorFlow", "scikit-learn", "Machine Learning", "NLP", "Python"]
    }
  ],

  projects: [
    {
      id: "lost-in-egypt",
      name: "Lost in Egypt",
      badge: "Graduation Project",
      year: "2025 – 2026",
      category: "flutter",
      previewType: "phone",
      featured: true,
      technologies: ["Flutter", "Firebase", "AI/ML", "Google Maps API", "Computer Vision"],
      tagline: "Smart Tourism Mobile Application for Discovering Egypt's Landmarks",
      shortOverview: "A comprehensive smart tourism mobile application designed to help tourists and locals explore Egypt seamlessly through AI-powered trip planning, camera-based landmark recognition, and interactive routing.",
      keyFeatures: [
        "AI-Powered Trip Planning: Generates personalized itineraries based on user travel interests, schedule, and historical preferences.",
        "Camera Landmark Recognition: Allows visitors to point their mobile camera at monuments for instant historical data, architectural context, and audio guidance.",
        "Interactive Maps & Routing: Integrated Google Maps API with point-to-point navigation, tourist hubs, and offline-accessible markers.",
        "Multilingual Accessibility: Full multi-language localization (English & Arabic) supporting international visitors.",
        "Community Experience Sharing: Travelers and local guides share authentic reviews, photos, tips, and landmark ratings."
      ],
      screenshots: [
        {
          src: "assets/images/projects/lost-in-egypt-1.svg",
          alt: "Lost in Egypt - AI Trip Planning and Explore Screen",
          caption: "Personalized AI trip itinerary and curated Egyptian destination discovery."
        },
        {
          src: "assets/images/projects/lost-in-egypt-2.svg",
          alt: "Lost in Egypt - AI Camera Landmark Recognition Viewfinder",
          caption: "Real-time AI camera landmark recognition with historical audio guide."
        },
        {
          src: "assets/images/projects/lost-in-egypt-3.svg",
          alt: "Lost in Egypt - Interactive Maps and Community Stories",
          caption: "Interactive map navigation and community traveler reviews."
        }
      ],
      caseStudy: {
        problem: "Egypt's historical wealth and vast geography can be overwhelming for travelers. Visitors often encounter fragmented tour information, language barriers at historic sites, and difficulty identifying uncaptioned ancient monuments without hiring private guides.",
        solution: "Lost in Egypt synthesizes smart mobile technology, computer vision, and real-time mapping into an all-in-one companion. By combining on-device camera inference for instant monument identification with AI itinerary generation, travelers receive tailored, educational exploration in their native language.",
        architecture: "Developed with Flutter for fluid 60fps cross-platform mobile performance. Utilizes Firebase for scalable user authentication, real-time community feeds, and cloud storage. Integrated Google Maps SDK for route geometry and custom map stylings, coupled with on-device computer vision models for low-latency landmark classification.",
        engineeringHighlights: [
          "Cross-Platform Consistency: Unified Dart codebase providing smooth 60fps animations across Android and iOS devices.",
          "Hybrid Online/Offline Architecture: Critical landmark details and map cache stored locally for reliable access in remote desert locations.",
          "Bilingual Localization: Structured internationalization supporting both Left-to-Right (LTR) and Right-to-Left (RTL) Arabic typography."
        ]
      }
    },
    {
      id: "todo-list-app",
      name: "ToDo-List App",
      badge: "Mobile Application",
      year: "2025",
      category: "flutter",
      previewType: "phone",
      featured: false,
      technologies: ["Flutter", "Firebase", "Hive"],
      tagline: "Event Planning & Task App with Real-Time Updates & Offline Sync",
      shortOverview: "A robust event-planning and task management mobile application featuring real-time Cloud Firestore updates and resilient offline functionality powered by Hive key-value storage.",
      keyFeatures: [
        "Real-Time Collaboration: Live updates synced across devices through Firebase Firestore listeners.",
        "Offline-First Architecture: Built with Hive local database adapters for instantaneous read/write speeds even without an active internet connection.",
        "User Authentication: Secure multi-provider sign-in and user profile isolation via Firebase Auth.",
        "Search & Notifications: Dynamic task filtering by status/category and scheduled push reminders for critical deadlines.",
        "Optimized UI: Responsive, adaptive layouts conforming to modern Material 3 design specifications."
      ],
      screenshots: [
        {
          src: "assets/images/projects/todo-app-1.svg",
          alt: "ToDo-List App - Event Dashboard and Hive Offline Status",
          caption: "Event planning dashboard with real-time Firebase & Hive synchronization."
        },
        {
          src: "assets/images/projects/todo-app-2.svg",
          alt: "ToDo-List App - Event Details and Notification Scheduling",
          caption: "Detailed event view with notification reminders and cache inspection."
        }
      ]
    },
    {
      id: "movie-app",
      name: "Movie App",
      badge: "Mobile Application",
      year: "2025",
      category: "flutter",
      previewType: "phone",
      featured: false,
      technologies: ["Flutter", "REST API"],
      tagline: "Movie Discovery & Caching App Powered by External REST APIs",
      shortOverview: "A sleek media exploration application that interfaces with external movie databases via RESTful APIs, providing categorized discovery, dynamic search, adaptive layouts, and offline caching.",
      keyFeatures: [
        "RESTful API Integration: Efficient HTTP requests fetching trending movies, top ratings, and upcoming cinema releases.",
        "Dynamic Search & Filtering: Real-time query debouncing and genre filtering across extensive movie catalogs.",
        "Adaptive UI & Pagination: Responsive grid and carousel layouts with infinite scrolling and lazy-loaded pagination.",
        "Favorites & Caching: Persistent local favorites list enabling instant access and reduced network overhead."
      ],
      screenshots: [
        {
          src: "assets/images/projects/movie-app-1.svg",
          alt: "Movie App - Trending Carousel and REST API Discovery",
          caption: "Movie discovery feed with genre filter chips and paginated REST data."
        },
        {
          src: "assets/images/projects/movie-app-2.svg",
          alt: "Movie App - Movie Details and Offline Favorites",
          caption: "Comprehensive synopsis view, cast list, and cached favorites state."
        }
      ]
    },
    {
      id: "muslim-app",
      name: "Muslim App",
      badge: "Mobile Application",
      year: "2025",
      category: "flutter",
      previewType: "phone",
      featured: false,
      technologies: ["Flutter", "Dart"],
      tagline: "Islamic Companion App with Quran, Prayer Times & Localization",
      shortOverview: "An Islamic companion application built with clean architecture principles, presenting Holy Quran texts, precise daily prayer schedules, electronic tasbeeh, and multi-language support.",
      keyFeatures: [
        "Prayer Times & Adhan: Calculation of accurate daily prayer times with countdown indicators and configurable notifications.",
        "Holy Quran Content: Structured index of 114 Surahs with clean typography and reading progression.",
        "Digital Sebha: Interactive electronic tasbeeh counter with haptic feedback.",
        "Clean Architecture: Layered codebase separating domain entities, data repositories, and presentation widgets for high testability and reusability.",
        "Localization: Seamless English and Arabic language switching."
      ],
      screenshots: [
        {
          src: "assets/images/projects/muslim-app-1.svg",
          alt: "Muslim App - Prayer Times and Daily Schedule",
          caption: "Precise prayer schedule with countdown and Adhan notification alerts."
        },
        {
          src: "assets/images/projects/muslim-app-2.svg",
          alt: "Muslim App - Quran Surah Index and Digital Sebha",
          caption: "Quran reader index and interactive electronic Sebha tasbeeh counter."
        }
      ]
    },
    {
      id: "shopping-app",
      name: "My Shopping App",
      badge: "Mobile Application",
      year: "2025",
      category: "flutter",
      previewType: "phone",
      featured: false,
      technologies: ["Flutter", "Dart", "Firebase Integration"],
      tagline: "E-Commerce Mobile Application with Product Catalog & Cart",
      shortOverview: "A mobile e-commerce application developed with Flutter and Dart, featuring an organized product grid, interactive cart management, checkout interface layouts, and Firebase backend synchronization.",
      keyFeatures: [
        "Product Grid & Catalog: Category-based product organization with crisp asset imagery and badge indicators.",
        "Shopping Cart & Checkout Flow: Dynamic quantity adjustment, subtotal computation, and checkout screen routing.",
        "Firebase Backend Integration: Product inventory and user profile storage linked with Cloud Firestore.",
        "Intuitive UI/UX: Polished micro-interactions, responsive sizing, and clean navigation stack."
      ],
      screenshots: [
        {
          src: "assets/images/projects/shopping-app-1.svg",
          alt: "My Shopping App - Product Catalog and Deals Grid",
          caption: "Product catalog grid with Firebase backend data synchronization."
        },
        {
          src: "assets/images/projects/shopping-app-2.svg",
          alt: "My Shopping App - Shopping Cart and Checkout Overview",
          caption: "Cart management view with item steppers and checkout layout."
        }
      ]
    },
    {
      id: "ai-chatbot",
      name: "AI Chat-bot",
      badge: "Python & NLP",
      year: "2023",
      category: "python-ai",
      previewType: "desktop",
      featured: false,
      technologies: ["Python", "Flask", "NLP", "NLTK", "spaCy"],
      tagline: "Intent-Classified Conversational Assistant Deployed via Flask API",
      shortOverview: "An intelligent conversational chatbot trained on 500+ curated Q&A pairs, achieving a 35% accuracy improvement through specialized intent classification and exposed via a Flask REST API.",
      keyFeatures: [
        "Trained on 500+ Q&A Pairs: Domain-specific natural language dataset tailored for user inquiries.",
        "Enhanced Accuracy by 35%: Achieved significant classification gain through intent categorization using NLTK and spaCy preprocessing pipelines.",
        "Flask RESTful API: Lightweight HTTP microservice enabling seamless integration with web frontends and mobile clients.",
        "Entity & Keyword Extraction: Lemmatization and tokenization pipelines for robust text normalization."
      ],
      screenshots: [
        {
          src: "assets/images/projects/ai-chatbot-1.svg",
          alt: "AI Chatbot - Conversational Interface and NLP Pipeline",
          caption: "Chatbot dialogue interface demonstrating intent classification metrics."
        },
        {
          src: "assets/images/projects/ai-chatbot-2.svg",
          alt: "AI Chatbot - Flask REST API Payload Inspector",
          caption: "Flask REST API JSON inspector showcasing inference response and training stats."
        }
      ]
    },
    {
      id: "cv-object-detection",
      name: "Computer Vision Object Detection",
      badge: "Computer Vision & IoT",
      year: "2023",
      category: "python-ai",
      previewType: "desktop",
      featured: false,
      technologies: ["Python", "OpenCV"],
      tagline: "Real-Time Object Detection with Haar Cascades & HOG+SVM",
      shortOverview: "A computer vision system utilizing Haar cascades and HOG+SVM algorithms to detect target objects in real-time webcam video feeds, integrated with IoT hardware prototypes for automated actions.",
      keyFeatures: [
        "Dual Detection Models: Implemented Haar Cascade classifiers alongside Histogram of Oriented Gradients (HOG) with Linear Support Vector Machines (SVM).",
        "Real-Time Stream Preprocessing: Frame resizing, grayscale transformation, Gaussian blur filtering, and contrast tuning for optimal webcam throughput.",
        "IoT Automation Prototypes: Integrated detection triggers via serial communication into microcontroller automation prototypes."
      ],
      screenshots: [
        {
          src: "assets/images/projects/cv-detection-1.svg",
          alt: "Computer Vision - Real-time Webcam Feed and Bounding Boxes",
          caption: "Real-time webcam feed with live Haar & HOG+SVM detection bounding boxes."
        },
        {
          src: "assets/images/projects/cv-detection-2.svg",
          alt: "Computer Vision - Preprocessing Pipeline and IoT Hardware Trigger",
          caption: "4-stage image preprocessing pipeline linked to microcontroller automation relays."
        }
      ]
    }
  ],

  skills: {
    categories: [
      {
        id: "programming",
        name: "Programming Languages",
        icon: "💻",
        skills: [
          { name: "Dart", note: "Primary mobile language" },
          { name: "Python", note: "AI, CV & Backend" },
          { name: "C++", note: "Core engineering logic" },
          { name: "JavaScript", note: "Web & Node.js" },
          { name: "HTML / CSS", note: "Web markup & styling" }
        ]
      },
      {
        id: "mobile",
        name: "Mobile Development",
        icon: "📱",
        skills: [
          { name: "Flutter", note: "Cross-platform framework" },
          { name: "Firebase Auth", note: "Authentication flows" },
          { name: "Cloud Firestore", note: "Real-time NoSQL DB" },
          { name: "Hive", note: "Fast local key-value store" },
          { name: "pub.dev Packages", note: "UI/UX & integration libraries" },
          { name: "State Management", note: "Provider / Bloc patterns" }
        ]
      },
      {
        id: "backend",
        name: "Backend & APIs",
        icon: "🔌",
        skills: [
          { name: "RESTful APIs", note: "API design & consumption" },
          { name: "FastAPI", note: "High-performance Python APIs" },
          { name: "Flask", note: "Lightweight microservices" },
          { name: "Node.js Basics", note: "JavaScript runtime environment" }
        ]
      },
      {
        id: "cloud",
        name: "Cloud Platforms",
        icon: "☁️",
        skills: [
          { name: "Google Cloud Platform (GCP)", note: "Cloud deployment & IAM" },
          { name: "Firebase Hosting", note: "Web application hosting" },
          { name: "Deployment Workflows", note: "Release & build pipelines" }
        ]
      },
      {
        id: "web",
        name: "Web Development",
        icon: "🌐",
        skills: [
          { name: "React", note: "Component-based UI" },
          { name: "HTML5 / CSS3", note: "Semantic & responsive design" },
          { name: "JavaScript (ES6+)", note: "Interactive web logic" },
          { name: "Responsive Design", note: "Mobile-first layouts" }
        ]
      },
      {
        id: "ai-cv",
        name: "AI, ML & Computer Vision",
        icon: "🧠",
        skills: [
          { name: "OpenCV", note: "Image processing & vision" },
          { name: "TensorFlow", note: "Deep learning models" },
          { name: "scikit-learn", note: "ML algorithms & metrics" },
          { name: "NLP (Natural Language Processing)", note: "Text classification" },
          { name: "NLTK", note: "Natural Language Toolkit" },
          { name: "spaCy", note: "Industrial-strength NLP" }
        ]
      },
      {
        id: "iot",
        name: "IoT & Embedded Systems",
        icon: "⚡",
        skills: [
          { name: "Arduino", note: "Microcontroller prototyping" },
          { name: "ESP Modules", note: "Wi-Fi / Bluetooth IoT" },
          { name: "Sensors & Actuators", note: "Hardware data capture" },
          { name: "GSM Modules", note: "Cellular connectivity" },
          { name: "Hardware Integration", note: "CV + IoT automation" }
        ]
      },
      {
        id: "tools",
        name: "Tools & Practices",
        icon: "🛠️",
        skills: [
          { name: "Git / GitHub", note: "Version control & collaboration" },
          { name: "Postman", note: "API testing & documentation" },
          { name: "JIRA", note: "Agile issue tracking" },
          { name: "Agile / Scrum", note: "Sprint workflows & teamwork" },
          { name: "Selenium (Testing)", note: "Automated QA testing" }
        ]
      }
    ],

    personalSkills: [
      "Teamwork & Collaboration",
      "Problem Solving",
      "Communication Skills",
      "Time Management",
      "Adaptability",
      "Attention to Detail",
      "Presentation Skills",
      "Self-Learning",
      "Creativity",
      "Agile/Scrum Workflow"
    ]
  }
};

// Export to window for global access
if (typeof window !== "undefined") {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
