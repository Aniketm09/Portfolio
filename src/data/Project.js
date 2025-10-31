// src/data/Project.js

const projects = [
  {
    id: 1,
    title: "RIT Club Management System",
    desc: "Platform for managing student clubs, events, and announcements.",
    img: "/images/rit-club.png",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
    problem: "Managing multiple student clubs manually was inefficient and prone to errors.",
    architecture: "Three-tier architecture: Frontend (HTML/CSS/JS), Backend (PHP), Database (MySQL).",
    challenges: [
      "Integrating multiple user roles",
      "Ensuring real-time event updates",
      "Secure authentication and authorization"
    ],
    features: [
      "Create and manage clubs",
      "Schedule events with notifications",
      "Announcements and member management",
      "User authentication and role-based access"
    ],
    implementation: "Implemented using PHP for backend, MySQL for database, Bootstrap for responsive UI, and JavaScript for dynamic features.",
    timeline: "2 months: Requirement gathering, design, development, testing.",
    duration: "2 months",
    role: "Full-stack Developer",
    category: "Fullstack",
    github: "https://github.com/yourusername/rit-club-management",
    demo: "https://rit-club-demo.com",
  },
  {
    id: 2,
    title: "E-Commerce Web App",
    desc: "A full-featured e-commerce platform with shopping cart, payment gateway, and admin panel.",
    img: "/images/ecommerce.png",
    tech: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
    problem: "Need for a seamless online shopping experience with easy product management.",
    architecture: "MERN stack: React frontend, Node.js backend, MongoDB database.",
    challenges: [
      "Implementing secure user authentication",
      "Handling concurrent cart updates",
      "Integrating payment gateway"
    ],
    features: [
      "User login/signup",
      "Product browsing and filtering",
      "Shopping cart & checkout",
      "Admin panel for product management"
    ],
    implementation: "Frontend in React with TailwindCSS, Backend in Node.js/Express, MongoDB for storage, Stripe for payments.",
    timeline: "3 months: Design, implementation, testing.",
    duration: "3 months",
    role: "Full-stack Developer",
    category: "Fullstack",
    github: "https://github.com/yourusername/ecommerce-webapp",
    demo: "https://ecommerce-demo.com",
  },
  {
    id: 3,
    title: "Portfolio Website",
    desc: "Personal portfolio website to showcase projects, skills, and experience.",
    img: "/images/portfolio.png",
    tech: ["React", "TailwindCSS", "Framer Motion"],
    problem: "Need a professional personal website to showcase projects and attract clients.",
    architecture: "Single-page React application with component-based structure.",
    challenges: [
      "Responsive design for all devices",
      "Smooth animations and transitions",
      "Dynamic project data integration"
    ],
    features: [
      "Home, About, Skills, Projects, Contact sections",
      "Smooth scrolling and animations",
      "Dark mode toggle",
      "Interactive project cards with view details"
    ],
    implementation: "Built with React, styled with TailwindCSS, Framer Motion for animations, dynamic project data from a JS file.",
    timeline: "1 month: Design and development",
    duration: "1 month",
    role: "Frontend Developer",
    category: "Frontend",
    github: "https://github.com/yourusername/portfolio",
    demo: "https://portfolio-demo.com",
  },
  {
    id: 4,
    title: "Library Management System",
    desc: "Web application to manage library books, members, and borrowing system.",
    img: "/images/library.png",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap"],
    problem: "Manual library management was inefficient and error-prone.",
    architecture: "PHP backend with MySQL database, Bootstrap frontend.",
    challenges: [
      "Tracking book inventory and members",
      "Handling overdue notifications",
      "Maintaining data integrity"
    ],
    features: [
      "Book catalog management",
      "Member registration",
      "Borrowing/return tracking",
      "Overdue notifications"
    ],
    implementation: "Backend in PHP, MySQL for database, frontend with Bootstrap, dynamic JS for validation and interaction.",
    timeline: "2 months: Design, implementation, testing",
    duration: "2 months",
    role: "Full-stack Developer",
    category: "Fullstack",
    github: "https://github.com/yourusername/library-management",
    demo: "https://library-demo.com",
  },
];

export default projects;
