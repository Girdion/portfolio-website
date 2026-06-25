import { ThemeToggle } from './ThemeToggle';

const navItems = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  return (
    <header className="animate-fade-in sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/95">
      <div className="mx-auto flex max-w-page items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-10">
        <a
          href="#top"
          className="focus-ring text-sm font-semibold uppercase tracking-[0.2em] text-neutral-950 dark:text-white"
        >
          Jonathan Djoko
        </a>
        <div className="flex min-w-0 items-center gap-3 sm:gap-6">
          <nav className="hidden items-center gap-5 sm:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="focus-ring text-sm text-neutral-600 transition duration-300 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
