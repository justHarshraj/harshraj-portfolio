import { lazy, Suspense, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/sections/HeroSection';

const Scene3D = lazy(() => import('./components/3d/Scene3D').then(module => ({ default: module.Scene3D })));
const AboutSection = lazy(() => import('./components/sections/AboutSection').then(module => ({ default: module.AboutSection })));
const ProjectsSection = lazy(() => import('./components/sections/ProjectsSection').then(module => ({ default: module.ProjectsSection })));
const CertificationsSection = lazy(() => import('./components/sections/CertificationsSection').then(module => ({ default: module.CertificationsSection })));
const SkillsSection = lazy(() => import('./components/sections/SkillsSection').then(module => ({ default: module.SkillsSection })));
const TerminalSection = lazy(() => import('./components/sections/TerminalSection').then(module => ({ default: module.TerminalSection })));
const ContactSection = lazy(() => import('./components/sections/ContactSection').then(module => ({ default: module.ContactSection })));

function App() {
  useEffect(() => {
    // Reset scroll restoration behavior so the browser does not jump to the previous position
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Scroll to the very top immediately
    window.scrollTo(0, 0);

    // If there is any hash in the URL on load, clear it to ensure they start at the home section
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }, []);

  return (
    <div 
      className="relative min-h-screen overflow-x-hidden"
      style={{
        background: '#070709',
        backgroundImage: `
          radial-gradient(circle at 15% 15%, rgba(99, 102, 241, 0.09) 0%, transparent 40%),
          radial-gradient(circle at 85% 85%, rgba(139, 92, 246, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 50% 40%, rgba(99, 102, 241, 0.03) 0%, transparent 60%)
        `
      }}
    >

      <Suspense fallback={null}>
        <Scene3D />
      </Suspense>
      <Navigation />

      <main className="relative z-10">
        <HeroSection />
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="animate-pulse text-gray-400">Loading...</div>
          </div>
        }>
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <CertificationsSection />
          <TerminalSection />
          <ContactSection />
        </Suspense>
      </main>

      <footer className="relative z-10 py-6 md:py-8 text-center text-gray-500 border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6">
          <p className="text-xs sm:text-sm" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            © 2026 HARSH RAJ. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
