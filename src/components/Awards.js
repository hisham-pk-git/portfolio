import { useInView } from 'react-intersection-observer';
import SectionTitle from './SectionTitle';
import './Awards.css';

const AWARDS = [
  {
    title: 'On the Spot Award',
    issuer: 'Tata Consultancy Services',
    date: 'Jun 2023',
    description: 'Awarded for outstanding performance on the AI Precision Platform, achieving a 60% reduction in simulation turnaround time and a 35% decrease in manual planning effort across a live 4-country production deployment.',
    icon: '🏆',
  },
  {
    title: 'On the Spot Award',
    issuer: 'Tata Consultancy Services',
    date: 'Feb 2022',
    description: 'Awarded for significant performance improvements on the AI Precision Platform, delivering an 85% reduction in API response time — from 6 seconds to under 900ms — directly improving campaign execution speed and reliability.',
    icon: '🏆',
  },
  {
    title: 'Learning Achievement Award',
    issuer: 'Tata Consultancy Services',
    date: 'Feb 2021',
    description: 'Recognized for building cross-functional digital skill breadth across Cloud, DevOps, and AI domains, and deep expertise in Backend Engineering and AI through TCS\'s internal iEvolve and Fresco Play learning platforms, aligned with the T-shaped skills framework.',
    icon: '🎓',
  },
  {
    title: 'Star of the Team Award',
    issuer: 'Tata Consultancy Services',
    date: 'Mar 2020',
    description: 'Honored for architectural leadership on the Resistance Monitoring Platform — spearheading the transition from a legacy monolith to 7 cloud-native microservices on AWS EKS, cutting API response times by 45% and scaling to 10,000+ samples annually.',
    icon: '⭐',
  },
];

function AwardCard({ award, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`award-card ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="award-icon-wrap">
        <span className="award-icon">{award.icon}</span>
      </div>
      <div className="award-body">
        <div className="award-header">
          <h3 className="award-title">{award.title}</h3>
          <span className="award-date">{award.date}</span>
        </div>
        <p className="award-issuer">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
          {award.issuer}
        </p>
        <p className="award-description">{award.description}</p>
      </div>
    </div>
  );
}

export default function Awards() {
  return (
    <section id="awards" className="section-pad awards-section">
      <div className="container">
        <SectionTitle
          label="Recognition"
          title="Honors & Awards"
          subtitle="Recognized by Tata Consultancy Services for exceptional performance and contributions."
        />
        <div className="awards-grid">
          {AWARDS.map((award, i) => (
            <AwardCard key={`${award.title}-${award.date}`} award={award} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
