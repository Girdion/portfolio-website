import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function ScrollToLocation() {
  const location = useLocation();

  useEffect(() => {
    const behavior: ScrollBehavior = prefersReducedMotion() ? 'auto' : 'smooth';

    if (location.hash) {
      const target = document.querySelector(location.hash);
      target?.scrollIntoView({ behavior, block: 'start' });
      return;
    }

    window.scrollTo({ top: 0, behavior });
  }, [location.pathname, location.hash]);

  return null;
}

function RevealSections() {
  const location = useLocation();

  useEffect(() => {
    const revealElements = () => {
      const elements = Array.from(document.querySelectorAll<HTMLElement>('.section-reveal'));

      if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
        elements.forEach((element) => element.classList.add('is-visible'));
        return undefined;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }

            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          });
        },
        { rootMargin: '0px 0px -10% 0px', threshold: 0.12 },
      );

      elements.forEach((element) => observer.observe(element));
      return observer;
    };

    let observer: IntersectionObserver | undefined;
    const timeoutId = window.setTimeout(() => {
      observer = revealElements();
    }, 0);

    return () => {
      window.clearTimeout(timeoutId);
      observer?.disconnect();
    };
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-950 dark:bg-neutral-950 dark:text-white">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <ScrollToLocation />
      <RevealSections />
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
