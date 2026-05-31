import { useInView } from 'react-intersection-observer';
import SectionTitle from './SectionTitle';
import './Education.css';

const EDUCATION = [
  {
    school: 'California State University, Fullerton',
    degree: 'M.S. in Computer Science',
    period: 'Aug 2024 – May 2026',
    gpa: '3.9 / 4.0',
    flag: '🇺🇸',
    coursework: [
      'Web Back-End Engineering',
      'Advanced Data Structures & Algorithms',
      'Advanced Database Management',
      'Software Design & Architecture',
      'Modern Software Management',
      'Mobile App Development for Android',
      'Modern Software Deployment',
      'Machine Learning',
      'Neural Networks, Deep Learning & Reinforcement Learning',
      'Seminar in Computer Science',
    ],
    color: '#f97316',
    current: true,
  },
  {
    school: 'APJ Abdul Kalam Technological University (KTU)',
    degree: 'B.Tech in Computer Science & Engineering',
    period: 'Jul 2015 – May 2019',
    gpa: '3.81 / 4.0',
    flag: '🇮🇳',
    coursework: [
      'Data Structures and Algorithms', 'Design and Analysis of Algorithms', 'Object Oriented Design and Programming',
      'Operating Systems', 'Computer Networks', 'Distributed Computing',
      'Principles of Database Design', 'Compiler Design', 'Theory of Computation',
      'Machine Learning', 'Data Mining and Warehousing', 'Computer System Architecture',
      'Computer Organization and Architecture', 'Microprocessors and Microcontrollers', 'Embedded Systems',
      'System Software', 'Programming Paradigms', 'Software Engineering and Project Management',
      'Web Technologies', 'Computer Graphics', 'Cryptography and Network Security',
      'Principles of Information Security', 'Switching Theory and Logic Design',
      'Discrete Computational Structures', 'Graph Theory and Combinatorics',
      'Calculus', 'Linear Algebra and Complex Analysis', 'Differential Equations',
      'Probability Distribution', 'Transforms and Numerical Methods', 'Principles of Management',
    ],
    color: '#fb923c',
    current: false,
  },
];

function EduCard({ edu, delay }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`edu-card ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="edu-card-left">
        <div className="edu-dot-line">
          <div className="edu-dot" style={{ background: edu.color }} />
          <div className="edu-line" />
        </div>
      </div>

      <div className="edu-card-body">
        <div className="edu-header">
          <div>
            <div className="edu-degree-row">
              <span className="edu-flag">{edu.flag}</span>
              <h3 className="edu-degree">{edu.degree}</h3>
              {edu.current && <span className="edu-current">Current</span>}
            </div>
            <p className="edu-school">{edu.school}</p>
          </div>
          <div className="edu-right-meta">
            <span className="edu-period">{edu.period}</span>
            <span className="edu-gpa">GPA: {edu.gpa}</span>
          </div>
        </div>

        {edu.coursework.length > 0 && (
          <div className="edu-coursework">
            <p className="edu-coursework-label">Relevant Coursework:</p>
            <div className="edu-courses">
              {edu.coursework.map(c => (
                <span key={c} className="edu-course">{c}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Education() {
  return (
    <section id="education" className="section-pad education-section">
      <div className="container">
        <SectionTitle label="Education" title="Academic Journey" />
        <div className="edu-list">
          {EDUCATION.map((edu, i) => (
            <EduCard key={edu.school} edu={edu} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}
