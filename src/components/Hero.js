import { useState, useEffect } from 'react';
import './Hero.css';

const ROLES = [
  'Backend Engineer',
  'Full Stack Developer',
  'AI Enthusiast',
  'Cloud & DevOps Engineer',
  'Software Engineer',
];

const TYPING_SPEED = 70;
const DELETE_SPEED = 40;
const PAUSE_AFTER_TYPE = 1800;
const PAUSE_AFTER_DELETE = 400;

function useTypingEffect(words) {
  const [state, setState] = useState({ wordIdx: 0, charIdx: 0, deleting: false });
  const { wordIdx, charIdx, deleting } = state;

  useEffect(() => {
    const word = words[wordIdx];
    let timeout;

    if (!deleting && charIdx < word.length) {
      timeout = setTimeout(
        () => setState(s => ({ ...s, charIdx: s.charIdx + 1 })),
        TYPING_SPEED
      );
    } else if (!deleting && charIdx === word.length) {
      timeout = setTimeout(
        () => setState(s => ({ ...s, deleting: true })),
        PAUSE_AFTER_TYPE
      );
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(
        () => setState(s => ({ ...s, charIdx: s.charIdx - 1 })),
        DELETE_SPEED
      );
    } else if (deleting && charIdx === 0) {
      // Advance word and reset atomically so no intermediate render starts re-typing the old word
      timeout = setTimeout(
        () => setState(s => ({ wordIdx: (s.wordIdx + 1) % words.length, charIdx: 0, deleting: false })),
        PAUSE_AFTER_DELETE
      );
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words]);

  return words[wordIdx].substring(0, charIdx);
}

export default function Hero() {
  const typedRole = useTypingEffect(ROLES);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-bg-orb orb1" />
      <div className="hero-bg-orb orb2" />

      <div className="container hero-inner">
        <div className="hero-content">
          <div className="hero-badges">
            <div className="hero-badge">
              <span className="badge-dot" />
              Open to Opportunities
            </div>
            <div className="hero-badge hero-badge--secondary">
              Open to Relocate
            </div>
          </div>

          <h1 className="hero-heading">
            Hi, I'm<br />
            <span className="hero-name">Hisham P Kajahussain</span>
          </h1>

          <div className="hero-role-line">
            <span className="hero-role-prefix">{'<'}</span>
            <span className="hero-role">{typedRole}</span>
            <span className="cursor" aria-hidden="true">|</span>
            <span className="hero-role-suffix">{' />'}</span>
          </div>

          <p className="hero-summary">
            Software engineer with experience in Java, Spring Boot, AWS, microservices,
            distributed systems design &amp; architecture, full-stack development, and AI-powered applications.
          </p>

          <div className="hero-actions">
            <a
              href="/Hisham_P_K_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
              View Resume
            </a>
            <button
              className="btn btn-outline"
              onClick={() => scrollTo('contact')}
            >
              Get in Touch
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
          </div>

          <div className="hero-socials">
            <a href="mailto:hishampk.dev@gmail.com" aria-label="Email" className="social-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <span>Email</span>
            </a>
            <a href="https://www.linkedin.com/in/hisham-p-k/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/hisham-pk-git" target="_blank" rel="noreferrer" aria-label="GitHub" className="social-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
              <span>GitHub</span>
            </a>
          </div>
        </div>

        <div className="hero-photo-wrap">
          <div className="hero-photo-ring">
            <img
              src="/profile.png"
              alt="Hisham P Kajahussain — Software Engineer"
              className="hero-photo"
            />
          </div>
          <div className="hero-photo-glow" />
        </div>
      </div>

      <div className="hero-scroll-hint" onClick={() => scrollTo('about')}>
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
