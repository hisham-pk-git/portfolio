import { useInView } from 'react-intersection-observer';
import SectionTitle from './SectionTitle';
import './Skills.css';

const SKILL_CATEGORIES = [
  {
    title: 'Languages',
    icon: '{ }',
    iconType: 'mono',
    core: ['Java', 'Python', 'JavaScript', 'SQL'],
    secondary: ['C', 'C++'],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    iconType: 'emoji',
    core: ['Spring Boot', 'Spring Framework', 'REST APIs', 'Microservices', 'FastAPI', 'Node.js', 'Spring MVC', 'JPA', 'Hibernate', 'JDBC', 'Spring WebClient', 'Spring Batch'],
    secondary: ['Flask'],
  },
  {
    title: 'Cloud & DevOps',
    icon: '☁️',
    iconType: 'emoji',
    core: ['AWS', 'Amazon EC2', 'Amazon S3', 'Amazon RDS', 'Amazon ECS', 'Amazon EKS', 'AWS Lambda', 'AWS IAM', 'AWS SNS', 'AWS Secrets Manager', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'CI/CD', 'Git', 'GitHub', 'Maven'],
    secondary: ['GitLab', 'Jenkins'],
  },
  {
    title: 'Databases',
    icon: '🗄️',
    iconType: 'emoji',
    core: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
    secondary: ['ChromaDB'],
  },
  {
    title: 'Messaging & Distributed Systems',
    icon: '📡',
    iconType: 'emoji',
    core: ['Apache Kafka', 'RabbitMQ', 'Distributed Systems'],
    secondary: ['WebSocket'],
  },
  {
    title: 'Security',
    icon: '🔒',
    iconType: 'emoji',
    core: ['Spring Security', 'JWT', 'OAuth 2.0'],
    secondary: ['Keycloak'],
  },
  {
    title: 'Testing & API Tools',
    icon: '🧪',
    iconType: 'emoji',
    core: ['JUnit 5', 'Mockito', 'Postman', 'Swagger', 'JaCoCo', 'SonarQube'],
    secondary: ['Log4j', 'Flyway'],
  },
  {
    title: 'Frontend',
    icon: '🖥️',
    iconType: 'emoji',
    core: ['React', 'HTML', 'CSS'],
    secondary: ['Android Development', 'Jetpack Compose'],
  },
  {
    title: 'Data & Big Data',
    icon: '📊',
    iconType: 'emoji',
    core: ['Apache Spark', 'PySpark', 'Pandas', 'Hadoop'],
    secondary: ['HDFS', 'MapReduce', 'Matplotlib', 'Seaborn', 'Plotly', 'Jupyter'],
  },
  {
    title: 'AI / ML',
    icon: '🧠',
    iconType: 'emoji',
    core: ['Machine Learning', 'NLP', 'Bio_ClinicalBERT', 'LLaMA 3.2 RAG'],
    secondary: ['Image Processing', 'CNNs'],
  },
];

function SkillCard({ title, icon, iconType, core, secondary, delay }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });
  return (
    <div
      ref={ref}
      className={`skill-card ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="skill-card-header">
        <span className={`skill-icon ${iconType === 'mono' ? 'skill-icon--mono' : ''}`}>
          {icon}
        </span>
        <h3 className="skill-category">{title}</h3>
      </div>
      <div className="skill-tags">
        {core.map(s => (
          <span key={s} className="skill-tag skill-tag--core">{s}</span>
        ))}
        {secondary.map(s => (
          <span key={s} className="skill-tag skill-tag--secondary">{s}</span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-pad skills-section">
      <div className="container">
        <SectionTitle
          label="Skills"
          title="Tech Arsenal"
          subtitle="Technologies and tools I work with to build scalable, cloud-native systems."
        />
        <div className="skills-grid">
          {SKILL_CATEGORIES.map((cat, i) => (
            <SkillCard key={cat.title} {...cat} delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  );
}
