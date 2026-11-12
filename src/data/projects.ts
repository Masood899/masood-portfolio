export type Project = {
  slug: string;
  number: string;
  name: string;
  category: string;
  year: string;
  summary: string;
  overview: string;
  stack: string[];
  contributions: string[];
  details: string[];
  visual: "commerce" | "research" | "automl" | "geospatial";
  /** Local screenshot path, e.g. /projects/zubayda-cover.png (stored in public/projects). */
  coverImage?: string;
  /** Optional screenshots shown in the project case study. */
  gallery?: { src: string; alt: string; caption?: string }[];
  featured?: boolean;
  externalUrl?: string;
};

// Add real product screenshots by placing image files in public/projects/ and then
// setting coverImage and gallery on the matching project below. See public/projects/README.md.
export const projects: Project[] = [
  {
    slug: "zubayda-by-a3",
    number: "01",
    name: "Zubayda By A3",
    category: "Full-stack product engineering",
    year: "PERSONAL PROJECT",
    summary:
      "A full-stack abaya e-commerce platform designed around a modular backend, secure customer workflows and a responsive storefront.",
    overview:
      "Zubayda By A3 brings together the core workflows of an online commerce experience: identity, catalog, inventory, cart, addresses, orders, reviews and wishlist. The platform pairs a Java backend with a modern Next.js storefront.",
    stack: ["Java 21", "Spring Boot", "Spring Security", "PostgreSQL", "Next.js 16", "React 19", "TypeScript", "Docker", "AWS"],
    contributions: [
      "Implemented backend modules for authentication, products, categories, inventory, cart, addresses, orders, reviews and wishlist.",
      "Built JWT authentication, refresh-token handling, BCrypt password hashing and role-based authorization.",
      "Designed REST APIs using a Controller–Service–Repository structure, Hibernate, Spring Data JPA and DTO-based request/response handling.",
      "Developed the storefront with Next.js, React, TypeScript, Tailwind CSS, Zustand, TanStack Query and Axios.",
      "Configured schema versioning with Flyway, containerized services with Docker and worked with AWS RDS PostgreSQL and S3."
    ],
    details: [
      "The system is organized around clear application layers and domain-focused modules rather than concentrating the commerce workflows in a single service class.",
      "Security was treated as a core part of the product, with token-based authentication, password hashing and role-based access controls.",
      "The frontend separates server data fetching from client-side interaction state, using TanStack Query and Zustand for their respective responsibilities."
    ],
    visual: "commerce",
    // After adding these files under public/projects/, uncomment and configure:
    coverImage: "/projects/zubayda-cover.png",
    gallery: [{ src: "/projects/zubayda-storefront.png", alt: "Zubayda storefront", caption: "Storefront" }],
    featured: true,
    externalUrl: "https://zubaidabya3.com"
  },
  {
    slug: "unisys-research",
    number: "02",
    name: "Unisys Research",
    category: "Industry collaboration · Applied AI research",
    year: "Jun 2025 — Present",
    summary:
      "A research collaboration exploring reward modeling, pairwise ranking and semantic retrieval for specialized programming-language datasets.",
    overview:
      "This industry-collaborative research project focuses on data-efficient reward modeling for proprietary ALGOL datasets. The work combines structured dataset preparation, pairwise comparisons, document-processing pipelines and retrieval-based evaluation.",
    stack: ["Python", "Pairwise ranking", "Reward modeling", "FAISS", "Semantic retrieval", "NLP"],
    contributions: [
      "Developed a data-efficient reward-modeling pipeline using pairwise ranking techniques.",
      "Curated structured datasets containing 600+ samples and 3,000+ pairwise comparisons through filtering and augmentation.",
      "Engineered document-processing and FAISS-based semantic retrieval pipelines involving cleaning, chunking, filtering and indexing.",
      "Evaluated model performance using pairwise and groupwise accuracy metrics with confidence-estimation techniques."
    ],
    details: [
      "The work connects data curation, preference comparisons and retrieval infrastructure as components of a broader model-evaluation pipeline.",
      "The portfolio intentionally describes the work at a high level. Proprietary datasets, internal implementation details and confidential research material are not included."
    ],
    visual: "research",
    // coverImage: "/projects/unisys-research-cover.png",
  },
  {
    slug: "metarecom",
    number: "03",
    name: "MetaRecom",
    category: "Automated machine learning",
    year: "PERSONAL PROJECT",
    summary:
      "A Flask-based AutoML platform that profiles tabular datasets and recommends suitable classification or regression algorithms using meta-learning.",
    overview:
      "MetaRecom profiles a tabular dataset, derives descriptive meta-features and uses similarity-based meta-learning to recommend an algorithm family. It also provides configurable hyperparameter optimization and hardware-aware execution modes.",
    stack: ["Python", "Flask", "Scikit-learn", "XGBoost", "PCA", "RandomizedSearchCV"],
    contributions: [
      "Built a 32-feature dataset-profiling pipeline covering statistical distributions, missing values, correlations, PCA-based descriptors and outlier indicators.",
      "Implemented a KNN-based meta-learning recommender with distance-weighted aggregation.",
      "Integrated RandomizedSearchCV for automated hyperparameter optimization.",
      "Added configurable GPU/CPU execution modes with XGBoost CUDA capability detection and CPU fallback handling."
    ],
    details: [
      "The recommender uses dataset characteristics as meta-features to compare a new dataset with previously observed dataset profiles.",
      "The platform combines a recommendation stage with a conventional hyperparameter-search stage instead of treating model selection as a single fixed operation."
    ],
    visual: "automl",
    // coverImage: "/projects/metarecom-cover.png",
  },
  {
    slug: "lulc-change-detection",
    number: "04",
    name: "LULC Change Detection",
    category: "Geospatial machine learning",
    year: "PERSONAL PROJECT",
    summary:
      "A geospatial ML system using U-Net segmentation and satellite raster datasets for land-cover classification and temporal change detection.",
    overview:
      "The platform processes satellite raster data to classify land-cover categories and compare them over time. The workflow includes image preprocessing, segmentation, class-wise overlays and statistical analysis of observed changes.",
    stack: ["Python", "U-Net", "NumPy", "OpenCV", "Satellite rasters", "Image segmentation"],
    contributions: [
      "Developed a geospatial machine-learning workflow using U-Net segmentation models and satellite raster datasets.",
      "Implemented satellite-image preprocessing and land-cover classification.",
      "Built class-wise overlays and statistical change-analysis workflows using NumPy, OpenCV and raster-processing techniques."
    ],
    details: [
      "The project combines pixel-level segmentation with temporal comparison so that classified land-cover outputs can be examined across multiple time points.",
      "The emphasis is on the end-to-end geospatial workflow: preparing raster inputs, generating class predictions and analyzing changes."
    ],
    visual: "geospatial",
    // coverImage: "/projects/lulc-cover.png",
  }
];

export const additionalBuilds = [
  {
    name: "Student Syllabus Bot",
    description: "A local RAG chatbot that answers questions from syllabus PDFs using SentenceTransformers, FAISS and a Gradio interface.",
    stack: "Python · FAISS · SentenceTransformers · Gradio",
    url: "https://github.com/Masood899/student-syllabus-bot"
  },
  {
    name: "Deforestation Project",
    description: "A public project comparing forest imagery over time to communicate deforestation change, with an accompanying chatbot.",
    stack: "Python · Image comparison · Web application",
    url: "https://github.com/Masood899/Deforestation_project",
    liveUrl: "https://deforestation-project-1.onrender.com/"
  }
];
