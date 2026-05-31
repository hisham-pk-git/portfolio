import { useInView } from 'react-intersection-observer';
import SectionTitle from './SectionTitle';
import './About.css';

const STATS = [
  { value: '4+', label: 'Years Experience', icon: '💼' },
  { value: 'M.S.', label: 'Computer Science', icon: '🎓' },
  { value: 'AWS', label: 'Cloud & Microservices', icon: '☁️' },
  { value: '2026', label: 'IEEE CHASE Paper', icon: '📄' },
];

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="section-pad about-section">
      <div className="container">
        <SectionTitle label="About Me" title="Building the future of tech" />

        <div ref={ref} className={`about-grid ${inView ? 'visible' : ''}`}>
          <div className="about-text">
            <p>
              I am <strong>Hisham P Kajahussain</strong>, currently completing my{' '}
              <span className="highlight">M.S. in Computer Science</span> at
              California State University, Fullerton, with a 3.9 GPA.
            </p>
            <p>
              With over <span className="highlight">4 years of software engineering experience</span> at
              Tata Consultancy Services, I've designed and shipped production systems
              serving millions of users across 4 countries.
            </p>
            <p>
              My focus areas span <span className="highlight">backend engineering</span>,
              microservices, distributed systems,{' '}
              <span className="highlight">AWS cloud</span>, DevOps, full-stack development,
              and AI-powered applications. I thrive at the intersection of
              scalability, clean architecture, and business impact.
            </p>
            <p>
              I recently had a paper accepted at{' '}
              <span className="highlight">IEEE CHASE 2026</span> on AI-powered
              medical decision support, combining my engineering background with
              applied machine learning.
            </p>
          </div>

          <div className="about-stats">
            {STATS.map(({ value, label, icon }) => (
              <div className="stat-card" key={label}>
                <span className="stat-icon">{icon}</span>
                <span className="stat-value">{value}</span>
                <span className="stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
