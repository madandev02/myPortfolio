const projects = [
  {
    title: "ServiceNova (SaaS Platform)",
    description:
      "Multi-tenant SaaS platform for managing real business operations including appointments, clients, employees, payments, and workflows. Includes a public-facing app (DentalNova) for booking and a full internal dashboard. Built to simulate production-level architecture with real-time features and automation.",
    tech: [
      "React",
      "Vite",
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Docker",
      "WebSockets",
      "Stripe",
    ],
    link: "https://github.com/madandev02/service-nova",
    demo: null,
    image: "/images/service-nova.png",
  },

  {
    title: "EduNova AI (Adaptive Learning Platform)",
    description:
      "Production-grade AI-powered learning platform with role-based access control, personalized recommendations, analytics dashboards, and full testing suite. Designed with scalable architecture, CI/CD pipelines, and deployment-ready infrastructure.",
    tech: [
      "React",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "JWT",
      "Pytest",
      "Playwright",
    ],
    link: "https://github.com/madandev02/edunova-ai",
    demo: null,
    image: "/images/edunova.png",
  },

  {
    title: "BankNova",
    description:
      "Full Stack banking application with authentication, account management, and transaction flows. Designed with a scalable backend architecture and modern frontend interface.",
    tech: ["React", "Java", "Spring Boot", "PostgreSQL", "Docker"],
    link: "https://github.com/madandev02/bank-nova",
    demo: "https://bank-nova.vercel.app/",
    image: "/images/bank-nova.png",
  },

  {
    title: "Credit Scoring System",
    description:
      "Backend system for credit risk evaluation using business rules and financial scoring logic. Focused on clean architecture and REST API design.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "REST API"],
    link: "https://github.com/madandev02/scoring-credito-api",
    demo: null,
    image: null,
  },

  {
    title: "TaskFlow API",
    description:
      "Project management backend platform with authentication, role-based access, and scalable REST API architecture for SaaS environments.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
    link: null,
    demo: null,
    image: null,
    status: "In Development",
  },

  {
    title: "Fraud Detection API",
    description:
      "Backend service for detecting suspicious financial transactions using rule-based logic and data processing pipelines.",
    tech: ["Python", "FastAPI", "PostgreSQL"],
    link: null,
    demo: null,
    image: null,
    status: "Planned",
  },
];

export default projects;