import { useInView } from 'react-intersection-observer';
import SectionTitle from './SectionTitle';
import './Certifications.css';

const CERTS = [
  {
    title: 'AWS Solutions Architect — Associate',
    issuer: 'Amazon Web Services',
    issued: 'Jul 2026',
    upcoming: true,
    issuerColor: '#FF9900',
    issuerBg: 'rgba(255,153,0,0.1)',
    issuerBorder: 'rgba(255,153,0,0.3)',
    description: 'Demonstrated ability to design and deploy scalable, highly available, and fault-tolerant systems on AWS.',
    tags: ['AWS', 'Cloud Architecture', 'Cloud Developer', 'DevOps', 'Security', 'Networking', 'High Availability', 'Fault Tolerance', 'VPC', 'IAM'],
  },
  {
    title: 'Machine Learning and Deep Learning with Python',
    issuer: 'Udemy',
    issued: 'Jan 2020',
    issuerColor: '#a435f0',
    issuerBg: 'rgba(164,53,240,0.1)',
    issuerBorder: 'rgba(164,53,240,0.28)',
    tags: [
      'Python', 'Machine Learning', 'Deep Learning', 'Neural Networks',
      'Linear Regression', 'Logistic Regression', 'SVM', 'Decision Trees', 'Random Forest',
      'CNN', 'RNN & LSTM', 'Transformers', 'GANs', 'Reinforcement Learning',
      'Q-Learning', 'PCA', 'K-means Clustering', 'NumPy', 'TensorFlow', 'Keras', 'Gradient Descent',
    ],
  },
  {
    title: 'Programming, Data Structures & Algorithms Using Python',
    issuer: 'NPTEL',
    issued: 'Sep 2018',
    issuerColor: '#22c55e',
    issuerBg: 'rgba(34,197,94,0.08)',
    issuerBorder: 'rgba(34,197,94,0.25)',
    tags: ['Python', 'Data Structures', 'Algorithms', 'Problem Solving', 'Sorting Algorithms', 'Dynamic Programming', 'Backtracking', 'Stacks & Queues', 'Heaps', 'OOP'],
  },
  {
    title: 'Spring Framework with Spring Boot',
    issuer: 'Udemy',
    issued: 'Dec 2021',
    issuerColor: '#a435f0',
    issuerBg: 'rgba(164,53,240,0.1)',
    issuerBorder: 'rgba(164,53,240,0.28)',
    tags: ['Spring Boot', 'Spring MVC', 'Spring Data JPA', 'Spring Security', 'REST APIs', 'Dependency Injection', 'IoC', 'AOP', 'Hibernate', 'Thymeleaf', 'Maven', 'Spring Boot Actuator'],
  },
  {
    title: 'Core Java Made Easy',
    issuer: 'Udemy',
    issued: 'Jun 2022',
    issuerColor: '#a435f0',
    issuerBg: 'rgba(164,53,240,0.1)',
    issuerBorder: 'rgba(164,53,240,0.28)',
    tags: ['Core Java', 'OOP', 'Collections', 'Multithreading', 'Generics', 'Exception Handling', 'Lambda Expressions', 'Stream API', 'Interfaces', 'Java 8 Features', 'String Handling'],
  },
  {
    title: 'JSP, Servlets and JDBC: Build a Database App',
    issuer: 'Udemy',
    issued: 'May 2021',
    issuerColor: '#a435f0',
    issuerBg: 'rgba(164,53,240,0.1)',
    issuerBorder: 'rgba(164,53,240,0.28)',
    tags: ['JSP', 'Servlets', 'JDBC', 'MVC', 'CRUD', 'Session Management', 'Cookie Handling', 'SQL', 'MySQL', 'Tomcat', 'Servlet Lifecycle', 'PreparedStatement'],
  },
];

function CertCard({ cert, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <div
      ref={ref}
      className={`cert-card ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="cert-card-top">
        <div
          className="cert-issuer-badge"
          style={{
            background: cert.issuerBg,
            border: `1px solid ${cert.issuerBorder}`,
            color: cert.issuerColor,
          }}
        >
          {cert.issuer}
        </div>
        <div className="cert-date-wrap">
          {cert.upcoming && <span className="cert-upcoming-dot" />}
          <span className="cert-date">{cert.issued}</span>
        </div>
      </div>

      <h3 className="cert-title">{cert.title}</h3>

      {cert.description && (
        <p className="cert-description">{cert.description}</p>
      )}

      <div className="cert-tags">
        {cert.tags.map(tag => (
          <span key={tag} className="cert-tag">{tag}</span>
        ))}
      </div>

      <div className="cert-footer">
        <div className="cert-verified">
          {cert.upcoming ? (
            <>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              <span className="cert-upcoming-label">In Progress</span>
            </>
          ) : (
            <>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="6"/>
                <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
              </svg>
              <span>Verified Certificate</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="section-pad certifications-section">
      <div className="container">
        <SectionTitle
          label="Licenses & Certifications"
          title="Certifications"
          subtitle="Industry and academic certifications in software engineering, AI/ML, and backend development."
        />
        <div className="certs-grid">
          {CERTS.map((cert, i) => (
            <CertCard key={cert.title} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
