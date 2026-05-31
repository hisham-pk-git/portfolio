import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import SectionTitle from './SectionTitle';
import './Projects.css';

/* ─────────────────────────────────────────
   Clinical AI Visual — real project image
───────────────────────────────────────── */

function ClinicalAIVisual() {
  return (
    <div className="project-visual-wrap">
      <img
        src="/clinical-ai-banner.png"
        alt="AI Clinical Decision Support System, Bio ClinicalBERT ranked diagnoses and LLaMA 3.2 RAG treatment recommendations dashboard"
        className="project-visual-img"
      />
    </div>
  );
}

/* ─────────────────────────────────────────
   Security Visual — real project image
───────────────────────────────────────── */
function SecurityVisual() {
  return (
    <div className="project-visual-wrap">
      <img
        src="/security-banner.png"
        alt="Secure API Logging System, serverless AWS security monitoring with Lambda, DynamoDB Streams, EventBridge and SNS alerts"
        className="project-visual-img"
      />
    </div>
  );
}

/* ─────────────────────────────────────────
   Snake AI Visual — real project image
───────────────────────────────────────── */
function SnakeAIVisual() {
  return (
    <div className="project-visual-wrap">
      <img
        src="/snakeai-banner.png"
        alt="Snake AI With Deep Q-Learning, reinforcement learning agent trained with Deep Q-Network and replay memory"
        className="project-visual-img"
      />
    </div>
  );
}

/* ─────────────────────────────────────────
   GameVault Visual — real project image
───────────────────────────────────────── */
function GameVaultVisual() {
  return (
    <div className="project-visual-wrap">
      <img
        src="/gamevault-banner.png"
        alt="GameVault, Android game wishlist app built with Kotlin and Jetpack Compose"
        className="project-visual-img"
      />
    </div>
  );
}

/* ─────────────────────────────────────────
   Stratosphere Visual — real project image
───────────────────────────────────────── */
function StratosphereVisual() {
  return (
    <div className="project-visual-wrap">
      <img
        src="/stratosphere-banner.png"
        alt="Stratosphere, Cloud Service Access Management System, FastAPI backend with JWT authentication and RBAC"
        className="project-visual-img"
      />
    </div>
  );
}

/* ─────────────────────────────────────────
   PantryPal Visual — real project image
───────────────────────────────────────── */
function PantryPalVisual() {
  return (
    <div className="project-visual-wrap">
      <img
        src="/pantrypal-banner.png"
        alt="PantryPal, Jetpack Compose Android pantry inventory management app with Firebase Firestore"
        className="project-visual-img"
      />
    </div>
  );
}

/* ─────────────────────────────────────────
   CloudShelf Visual — real project image
───────────────────────────────────────── */
function CloudShelfVisual() {
  return (
    <div className="project-visual-wrap">
      <img
        src="/cloudshelf-banner.png"
        alt="CloudShelf E-Commerce Platform, cloud-native microservices architecture on AWS EKS"
        className="project-visual-img"
      />
    </div>
  );
}

/* ─────────────────────────────────────────
   Project data
───────────────────────────────────────── */
const PROJECTS = [
  {
    title: 'AI Clinical Decision Support System',
    category: ['AI/ML', 'Backend', 'Cloud'],
    visual: 'clinical-ai',
    tags: ['Java', 'Python', 'Spring Boot', 'FastAPI', 'Bio ClinicalBERT', 'LLaMA 3.2 RAG', 'Explainable AI', 'AWS ECS Fargate', 'Terraform IaC', 'GitHub Actions CI/CD'],
    description:
      'Built an end-to-end clinical AI platform using Spring Boot, 4 FastAPI microservices, and LLaMA 3.2 RAG to transform unstructured patient notes into ranked ICU diagnoses, treatment recommendations, and explainable AI insights, enabling clinicians to receive actionable decision support from a single note. Fine-tuned Bio ClinicalBERT on 24,445 samples achieving 87.45% accuracy; deployed on AWS ECS Fargate via Terraform IaC and GitHub Actions CI/CD, reducing deployment from hours to under 10 minutes.',
    metrics: [
      { value: '24,445', label: 'Clinical Samples' },
      { value: '87.45%', label: 'Accuracy' },
      { value: '24-class', label: 'ICU Diagnosis' },
    ],
    highlights: ['Bio ClinicalBERT', 'LLaMA 3.2 RAG', 'Explainable AI', '24-class ICU Diagnosis'],
    github: 'https://github.com/hisham-pk-git/medintellix-clinical-cdss',
    featured: true,
  },
  {
    title: 'CloudShelf E-Commerce Platform',
    category: ['Backend', 'Cloud', 'Full Stack'],
    visual: 'cloudshelf',
    tags: ['Java', 'Spring Boot', 'AWS EKS', 'Apache Kafka', 'PostgreSQL', 'MongoDB', 'Redis', 'Resilience4j', 'Docker', 'GitHub Actions'],
    description:
      'Built a cloud-native bookstore platform on AWS EKS with 9 independently deployable microservices and polyglot persistence (PostgreSQL, MongoDB, Redis) across 3 AWS Availability Zones. Designed an async order notification pipeline using Apache Kafka and AWS SNS, and integrated Resilience4j Circuit Breaker with a 50% failure threshold and automated CI/CD via GitHub Actions and Docker for zero-downtime rolling deployments.',
    metrics: [
      { value: '9', label: 'Microservices' },
      { value: '3 AZs', label: 'AWS Availability Zones' },
      { value: '50%', label: 'Circuit Breaker Threshold' },
    ],
    highlights: ['AWS EKS', 'Apache Kafka', 'AWS SNS', 'Resilience4j', 'Zero-Downtime CI/CD'],
    github: 'https://github.com/hisham-pk-git/AWS-EKS-CloudShelf-Microservices-Project',
    featured: true,
  },
  {
    title: 'Secure API Logging System',
    category: ['Cloud', 'Backend'],
    visual: 'security',
    tags: ['Python', 'AWS Lambda', 'API Gateway', 'DynamoDB', 'DynamoDB Streams', 'EventBridge', 'SNS', 'GuardDuty', 'Terraform', 'Serverless', 'Security Monitoring'],
    description:
      'Built a serverless, event-driven AWS security monitoring system using API Gateway, Lambda, DynamoDB Streams, EventBridge, and SNS to detect suspicious API request patterns and send automated email alerts. Provisioned the full infrastructure with Terraform IaC, including API Gateway, Lambda functions, DynamoDB tables, EventBridge rules, SNS topics, IAM roles, and GuardDuty configuration. Implemented anomaly detection logic to aggregate requests per IP within a time window, flag high-frequency activity, and generate security events for visibility and investigation.',
    metrics: [
      { value: 'Serverless', label: 'AWS Architecture' },
      { value: 'Real-time', label: 'SNS Alert Pipeline' },
      { value: 'Terraform', label: 'Full IaC Provisioning' },
    ],
    highlights: ['AWS Lambda', 'DynamoDB Streams', 'EventBridge', 'GuardDuty', 'Terraform IaC'],
    github: 'https://github.com/hisham-pk-git/secure-api-logging',
    featured: false,
  },
  {
    title: 'Snake AI With Deep Q-Learning',
    category: ['AI/ML', 'Backend'],
    visual: 'snakeai',
    tags: ['Python', 'PyTorch', 'Deep Q-Learning', 'Reinforcement Learning', 'Neural Networks', 'Replay Memory', 'Epsilon-Greedy Strategy', 'Game AI', 'DQN'],
    description:
      'Built a Snake-playing reinforcement learning agent using Deep Q-Learning, training the model to learn optimal movement decisions from game state observations including snake position, food location, and obstacles. Implemented a Deep Q-Network with replay memory and epsilon-greedy exploration, trained with Bellman equation-based Q-value updates to maximize long-term rewards across multiple game episodes.',
    metrics: [
      { value: 'DQN', label: 'Deep Q-Network' },
      { value: 'RL Agent', label: 'Reinforcement Learning' },
      { value: 'Game AI', label: 'Snake Environment' },
    ],
    highlights: ['Reinforcement Learning', 'Deep Q-Network', 'Replay Memory', 'Epsilon-Greedy Strategy', 'Bellman Equation', 'Game AI'],
    github: 'https://github.com/hisham-pk-git/Snake-AI-Deep-Q-Learning',
    featured: false,
  },
  {
    title: 'GameVault',
    category: ['Full Stack'],
    visual: 'gamevault',
    tags: ['Kotlin', 'Jetpack Compose', 'Material 3', 'ViewModel', 'StateFlow', 'Compose Navigation', 'Android Development', 'Reactive UI'],
    description:
      'Built a multi-screen Android game discovery app with Kotlin, Jetpack Compose, and Material 3, enabling users to browse top games, view game details, and manage a personal wishlist. Implemented shared wishlist state using ViewModel and StateFlow for real-time UI updates across Home, Details, and Wishlist screens, with Compose Navigation flows and responsive banner-style game cards.',
    metrics: [
      { value: 'Android', label: 'Jetpack Compose App' },
      { value: '3 Screens', label: 'Compose Navigation' },
      { value: 'Real-time', label: 'Wishlist State' },
    ],
    highlights: ['Kotlin', 'Jetpack Compose', 'StateFlow', 'ViewModel', 'Compose Navigation', 'Reactive UI'],
    github: 'https://github.com/hisham-pk-git/GameVault',
    featured: false,
  },
  {
    title: 'Stratosphere',
    category: ['Backend', 'Cloud'],
    visual: 'stratosphere',
    tags: ['Python', 'FastAPI', 'MySQL', 'SQLAlchemy', 'JWT', 'RBAC', 'REST APIs', 'Async Programming', 'PyMySQL', 'Uvicorn'],
    description:
      'Built a FastAPI backend for secure cloud service access management, enabling users to access simulated cloud services based on subscription plans, permissions, and usage limits. Implemented JWT-based authentication and role-based access control (RBAC) to protect user and admin routes, and designed MySQL-backed subscription and usage-tracking logic with SQLAlchemy to enforce plan limits in real time and support admin management of users, plans, and permissions.',
    metrics: [
      { value: 'FastAPI', label: 'Backend API' },
      { value: 'JWT + RBAC', label: 'Auth & Authorization' },
      { value: 'Real-time', label: 'Usage Tracking' },
    ],
    highlights: ['FastAPI Backend', 'JWT Authentication', 'RBAC', 'Subscription Management', 'Usage Tracking', 'Admin Controls'],
    github: 'https://github.com/hisham-pk-git/stratosphere',
    featured: false,
  },
  {
    title: 'PantryPal',
    category: ['Full Stack'],
    visual: 'pantrypal',
    tags: ['Kotlin', 'Jetpack Compose', 'Firebase Authentication', 'Firebase Firestore', 'MVVM', 'Repository Pattern', 'StateFlow', 'Kotlin Coroutines', 'Material 3'],
    description:
      'Built a 9-screen Android pantry management app with Kotlin and Jetpack Compose, featuring Firebase Authentication (persistent login, password reset, protected navigation) and real-time Firestore inventory sync. Includes full CRUD for pantry items with expiration tracking, user-defined storage zones with in-use validation, and per-user data isolation, built on MVVM, Repository pattern, and StateFlow.',
    metrics: [
      { value: '9', label: 'App Screens' },
      { value: 'Real-time', label: 'Firestore Sync' },
      { value: 'CRUD', label: 'Inventory + Zones' },
    ],
    highlights: ['Firebase Auth + Password Reset', 'Expiration Dashboard', 'Inventory CRUD', 'Storage Zone Management', 'User-scoped Firestore Rules', 'MVVM + Repository'],
    github: 'https://github.com/hisham-pk-git/PantryPal',
    featured: false,
  },
];

const FILTERS = ['All', 'Backend', 'Cloud', 'AI/ML', 'Full Stack'];

function ProjectCard({ project, delay }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <div
      ref={ref}
      className={`project-card ${project.featured ? 'featured' : ''} ${project.visual ? 'has-visual' : ''} ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {project.visual === 'clinical-ai'    && <ClinicalAIVisual />}
      {project.visual === 'cloudshelf'     && <CloudShelfVisual />}
      {project.visual === 'snakeai'        && <SnakeAIVisual />}
      {project.visual === 'gamevault'      && <GameVaultVisual />}
      {project.visual === 'stratosphere'   && <StratosphereVisual />}
      {project.visual === 'pantrypal'      && <PantryPalVisual />}
      {project.visual === 'security'       && <SecurityVisual />}

      {project.featured && <span className="featured-badge">Featured</span>}

      <div className="project-card-top">
        <div className="project-icon-wrap">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
          </svg>
        </div>
        <div className="project-links">
          <a href={project.github} target="_blank" rel="noreferrer" className="project-link" aria-label="GitHub">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </a>
        </div>
      </div>

      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>

      <div className="project-metrics">
        {project.metrics.map(m => (
          <div key={m.label} className="project-metric">
            <span className="pm-value">{m.value}</span>
            <span className="pm-label">{m.label}</span>
          </div>
        ))}
      </div>

      <div className="project-highlights">
        {project.highlights.map(h => (
          <span key={h} className="project-highlight">{h}</span>
        ))}
      </div>

      <div className="project-tags">
        {project.tags.map(t => (
          <span key={t} className="project-tag">{t}</span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = PROJECTS.filter(
    p => activeFilter === 'All' || p.category.includes(activeFilter)
  );

  return (
    <section id="projects" className="section-pad projects-section">
      <div className="container">
        <SectionTitle
          label="Projects"
          title="Featured Work"
          subtitle="End-to-end systems built with production-grade architecture and cloud-native practices."
        />

        <div className="project-filters">
          {FILTERS.map(f => (
            <button
              key={f}
              className={`filter-btn ${activeFilter === f ? 'active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map((p, i) => (
            <ProjectCard key={p.title} project={p} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
