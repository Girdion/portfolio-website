import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

const navItems = [
  { label: 'About', href: '/#about' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Projects', href: '/projects' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Contact', href: '/#contact' },
];

const focusableSelector = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const scrollPositionRef = useRef(0);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const releaseScroll = () => {
      const scrollY = scrollPositionRef.current;
      document.body.classList.remove('menu-scroll-lock');
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollY);
    };

    if (!isMenuOpen) {
      releaseScroll();
      return;
    }

    scrollPositionRef.current = window.scrollY;
    document.body.classList.add('menu-scroll-lock');
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPositionRef.current}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';

    const menu = menuRef.current;
    const focusable = menu ? Array.from(menu.querySelectorAll<HTMLElement>(focusableSelector)) : [];
    focusable[0]?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        openButtonRef.current?.focus();
        return;
      }

      if (event.key !== 'Tab' || focusable.length === 0) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      releaseScroll();
    };
  }, [isMenuOpen]);

  return (
    <header className="animate-fade-in sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/95">
      <div className="mx-auto flex max-w-page items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-10">
        <Link
          to="/"
          className="focus-ring min-w-0 truncate text-sm font-semibold uppercase tracking-[0.2em] text-neutral-950 dark:text-white"
        >
          Jonathan Djoko
        </Link>
        <div className="flex min-w-0 items-center gap-3 sm:gap-6">
          <nav className="hidden items-center gap-5 md:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `focus-ring relative py-1 text-sm transition duration-300 after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:origin-left after:bg-current after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-neutral-950 dark:hover:text-white ${
                    isActive && item.href === '/projects'
                      ? 'text-neutral-950 after:scale-x-100 dark:text-white'
                      : 'text-neutral-600 after:scale-x-0 hover:after:scale-x-100 dark:text-neutral-300'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <ThemeToggle />
          <button
            ref={openButtonRef}
            type="button"
            className="focus-ring inline-flex h-10 w-10 items-center justify-center text-neutral-950 hover:-translate-y-0.5 hover:scale-[1.02] dark:text-white md:hidden"
            aria-label="Open navigation menu"
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(true)}
          >
            <span aria-hidden="true" className="flex w-5 flex-col gap-1.5">
              <span className="h-px w-full bg-current" />
              <span className="h-px w-full bg-current" />
              <span className="h-px w-full bg-current" />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        ref={menuRef}
        className={`fixed inset-0 z-[70] flex h-svh min-h-svh overscroll-contain flex-col overflow-y-auto bg-white px-5 py-5 text-neutral-950 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] dark:bg-neutral-950 dark:text-white md:hidden ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full pointer-events-none'
        }`}
        aria-hidden={!isMenuOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between gap-4 border-b border-neutral-200 pb-5 dark:border-neutral-800">
          <Link
            to="/"
            className="focus-ring text-sm font-semibold uppercase tracking-[0.2em] text-neutral-950 dark:text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            Jonathan Djoko
          </Link>
          <button
            type="button"
            className="focus-ring inline-flex h-11 w-11 items-center justify-center text-neutral-950 hover:-translate-y-0.5 hover:scale-[1.02] dark:text-white"
            aria-label="Close navigation menu"
            onClick={() => {
              setIsMenuOpen(false);
              openButtonRef.current?.focus();
            }}
          >
            <span aria-hidden="true" className="relative h-5 w-5">
              <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 rotate-45 bg-current" />
              <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 -rotate-45 bg-current" />
            </span>
          </button>
        </div>

        <nav className="flex flex-1 flex-col justify-center gap-2" aria-label="Mobile navigation links">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className="focus-ring border-b border-neutral-200 py-5 text-3xl font-semibold tracking-[-0.03em] text-neutral-950 transition hover:translate-x-1 dark:border-neutral-800 dark:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
