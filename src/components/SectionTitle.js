import { useInView } from 'react-intersection-observer';
import './SectionTitle.css';

export default function SectionTitle({ label, title, subtitle }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div ref={ref} className={`section-title ${inView ? 'visible' : ''}`}>
      {label && <span className="section-label">{label}</span>}
      <h2 className="section-heading">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
