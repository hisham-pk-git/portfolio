import { useInView } from 'react-intersection-observer';
import SectionTitle from './SectionTitle';
import './Experience.css';

const FULL_TIME_PROJECTS = [
  {
    name: 'AI Precision Platform',
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'RabbitMQ', 'AWS', 'Docker'],
    highlights: [
      'Developed Spring Boot middleware for Bayer AG\'s campaign platform, delivering RESTful APIs for customer targeting, simulation, file generation, and Salesforce Marketing Cloud shipments across 4 countries.',
      'Implemented event-driven simulation pipeline using RabbitMQ, Spring WebClient, and WebSocket to decouple compute-intensive Sales Rep-to-HCP mapping from synchronous HTTP threads, reducing simulation turnaround time by 60% and manual planning effort by 35% with real-time frontend notifications.',
      'Integrated AWS Secrets Manager, S3, and IAM Assume Roles to secure credentials, file storage, and cross-account access; contributed to Dockerized ECS Blue-Green CI/CD for zero-downtime production releases.',
      'Engineered PostgreSQL data access layers using Spring Data JPA and Hibernate for multi-stage campaign lifecycle management and implemented Spring AOP audit logging to enforce end-to-end traceability across all backend operations.',
    ],
    metric: { value: '60%', label: 'Simulation time reduction' },
  },
  {
    name: 'Resistance Monitoring Platform',
    tags: ['Java', 'Spring Boot', 'MySQL', 'Spring Security', 'Redis', 'AWS EKS'],
    highlights: [
      'Engineered Spring Boot microservices for Bayer AG\'s Crop Science platform monitoring pesticide, herbicide, and fungicide resistance in agricultural field samples, supporting sample-to-report workflows for 10,000+ samples annually.',
      'Decomposed a legacy Oracle-based monolith into 7 domain-driven microservices on AWS EKS, enabling independent deployments and scaling; implemented a 7-state sample lifecycle and Amazon SES alerts for state changes.',
      'Reduced API response times by 45% by introducing Redis ElastiCache TTL caching and optimizing MySQL reads for high-frequency reference data under concurrent load.',
      'Implemented enterprise API security using Spring Security, JWT RS256, AD/LDAP, and 4-tier RBAC, strengthening access control and GDPR-compliant farmer data handling.',
    ],
    metric: { value: '45%', label: 'API response time reduction' },
  },
];

function TimelineConnector() {
  return (
    <div className="exp-timeline-connector">
      <div className="exp-timeline-dot" />
      <div className="exp-timeline-line" />
      <div className="exp-timeline-dot" />
    </div>
  );
}

function ProjectCard({ project, delay }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });
  return (
    <div
      ref={ref}
      className={`exp-project-card ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="exp-project-header">
        <div>
          <h4 className="exp-project-name">{project.name}</h4>
          <div className="exp-project-tags">
            {project.tags.map(t => (
              <span key={t} className="exp-tag">{t}</span>
            ))}
          </div>
        </div>
        <div className="exp-metric">
          <span className="metric-value">{project.metric.value}</span>
          <span className="metric-label">{project.metric.label}</span>
        </div>
      </div>
      <ul className="exp-highlights">
        {project.highlights.map((h, i) => (
          <li key={i}>
            <span className="bullet" />
            {h}
          </li>
        ))}
      </ul>
    </div>
  );
}

function GTACard() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });
  return (
    <div ref={ref} className={`exp-card exp-card--gta ${inView ? 'visible' : ''}`}>
      <div className="exp-card-header">
        <div className="exp-company-info">
          <div className="exp-company-logo exp-company-logo--gta">CSUF</div>
          <div>
            <h3 className="exp-company">California State University, Fullerton</h3>
            <p className="exp-role">Graduate Teaching Associate</p>
            <p className="exp-meta">Fullerton, CA &nbsp;·&nbsp; Aug 2025 – May 2026 &nbsp;·&nbsp; Part-time</p>
          </div>
        </div>
        <div className="exp-duration-badge exp-duration-badge--current">
          <span className="current-dot" />
          Current
        </div>
      </div>

      <div className="exp-divider" />

      <div className="exp-intern-project">
        <div className="exp-intern-project-header">
          <h4 className="exp-project-name">CPSC 351 — Operating Systems Concepts &nbsp;<span className="exp-course-meta">49 Students</span></h4>
          <p className="exp-course-summary">
            Teaching core systems concepts including processes, threads, memory management, file systems, and OS security to 49 undergraduate students.
          </p>
          <div className="exp-project-tags" style={{ marginTop: '10px' }}>
            {['Operating Systems', 'Linux/Unix', 'Process Management', 'Threads & Synchronization', 'CPU Scheduling', 'Virtual Memory', 'File Systems', 'OS Security'].map(t => (
              <span key={t} className="exp-tag">{t}</span>
            ))}
          </div>
        </div>
        <ul className="exp-highlights">
          <li>
            <span className="bullet" />
            Instructed CPSC 351 — Operating Systems Concepts to 49 undergraduate students, delivering lectures on OS fundamentals, process management, concurrency, virtual memory, file systems, I/O systems, and OS security.
          </li>
          <li>
            <span className="bullet" />
            Taught Unix/Linux-style process concepts — fork(), exec(), wait(), IPC, threads, synchronization primitives, race conditions, deadlocks, CPU scheduling, paging, TLBs, memory protection, virtualization, distributed systems, and cloud computing concepts.
          </li>
          <li>
            <span className="bullet" />
            Designed and graded assignments and examinations, and conducted structured doubt-clearing sessions to strengthen students' grasp of systems-level topics directly applicable to backend engineering, OS internals, and cloud infrastructure.
          </li>
        </ul>
      </div>
    </div>
  );
}

function FullTimeCard() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });
  return (
    <div ref={ref} className={`exp-card ${inView ? 'visible' : ''}`}>
      <div className="exp-card-header">
        <div className="exp-company-info">
          <div className="exp-company-logo">TCS</div>
          <div>
            <h3 className="exp-company">Tata Consultancy Services</h3>
            <p className="exp-role">Software Engineer</p>
            <p className="exp-meta">Kochi, India &nbsp;·&nbsp; Jul 2019 – Jul 2023 &nbsp;·&nbsp; Full-time</p>
          </div>
        </div>
        <div className="exp-duration-badge">4 Years</div>
      </div>

      <div className="exp-divider" />

      <div className="exp-projects">
        {FULL_TIME_PROJECTS.map((p, i) => (
          <ProjectCard key={p.name} project={p} delay={i * 150} />
        ))}
      </div>
    </div>
  );
}

function InternCard() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <div ref={ref} className={`exp-card exp-card--intern ${inView ? 'visible' : ''}`}>
      <div className="exp-card-header">
        <div className="exp-company-info">
          <div className="exp-company-logo exp-company-logo--intern">TCS</div>
          <div>
            <h3 className="exp-company">Tata Consultancy Services</h3>
            <p className="exp-role">Software Development Engineer Intern</p>
            <p className="exp-meta">Kochi, India &nbsp;·&nbsp; May 2018 – Aug 2018 &nbsp;·&nbsp; Internship</p>
          </div>
        </div>
        <div className="exp-duration-badge">3 Months</div>
      </div>

      <div className="exp-divider" />

      <div className="exp-intern-project">
        <div className="exp-intern-project-header">
          <h4 className="exp-project-name">Density-Based Traffic Control System</h4>
          <div className="exp-project-tags">
            {['Python', 'Raspberry Pi', 'Embedded Systems', 'Automation'].map(t => (
              <span key={t} className="exp-tag">{t}</span>
            ))}
          </div>
        </div>
        <ul className="exp-highlights">
          <li>
            <span className="bullet" />
            Built a density-based traffic signal control prototype using Python and Raspberry Pi to dynamically adjust signal timing based on real-time lane congestion and pedestrian crossing priority, replacing fixed-time signal cycles with adaptive, data-driven control logic.
          </li>
          <li>
            <span className="bullet" />
            Implemented lane density calculation and a priority interrupt mechanism for pedestrian requests using GPIO-driven sensor inputs, demonstrating a practical reduction in unnecessary signal wait times and improved intersection responsiveness.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section-pad experience-section">
      <div className="container">
        <SectionTitle label="Experience" title="Where I've Worked" />
        <div className="exp-timeline">
          <GTACard />
          <TimelineConnector />
          <FullTimeCard />
          <TimelineConnector />
          <InternCard />
        </div>
      </div>
    </section>
  );
}
