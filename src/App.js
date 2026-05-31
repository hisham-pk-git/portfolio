import './App.css';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Publications from './components/Publications';
import Certifications from './components/Certifications';
import Awards from './components/Awards';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Publications />
      <Certifications />
      <Awards />
      <Contact />
      <Footer />
      <Analytics />
    </div>
  );
}
