import { useInView } from 'react-intersection-observer';
import SectionTitle from './SectionTitle';
import './Publications.css';

const PUBS = [
  {
    title: 'MedIntelliX — AI-Powered Medical Decision Support System',
    venue: 'IEEE CHASE 2026',
    status: 'Accepted',
    authors: 'Hisham P. Kajahussain',
    abstract:
      'An AI-powered clinical decision support system leveraging Bio_ClinicalBERT and LLaMA 3.2 RAG to transform unstructured patient notes into ranked diagnoses, treatment recommendations, and explainable clinical insights. Evaluated on 24,445 clinical samples with 87.45% accuracy across 24 ICU diagnosis categories.',
    tags: ['AI/ML', 'NLP', 'Clinical AI', 'RAG', 'Spring Boot', 'FastAPI', 'Explainable AI', 'LLaMA 3.2', 'Bio ClinicalBERT', 'ChromaDB'],
    year: 2026,
  },
];

export default function Publications() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="publications" className="section-pad publications-section">
      <div className="container">
        <SectionTitle
          label="Research"
          title="Publications"
          subtitle="Peer-reviewed research at the intersection of AI and healthcare."
        />

        <div className="pubs-list">
          {PUBS.map((pub, i) => (
            <div
              key={i}
              ref={ref}
              className={`pub-card ${inView ? 'visible' : ''}`}
            >
              <div className="pub-left">
                <div className="pub-year">{pub.year}</div>
                <div className="pub-connector" />
              </div>

              <div className="pub-body">
                <div className="pub-header">
                  <div className="pub-venue-row">
                    <span className="pub-venue">{pub.venue}</span>
                    <span className="pub-status accepted">{pub.status}</span>
                  </div>
                  <h3 className="pub-title">{pub.title}</h3>
                  <p className="pub-authors">{pub.authors}</p>
                </div>

                <p className="pub-abstract">{pub.abstract}</p>

                <div className="pub-tags">
                  {pub.tags.map(t => (
                    <span key={t} className="pub-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
