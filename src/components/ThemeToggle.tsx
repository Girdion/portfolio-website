import { useEffect, useState } from 'react';

const getInitialTheme = () => {
  if (typeof window === 'undefined') {
    return false;
  }

  const stored = window.localStorage.getItem('theme');
  if (stored === 'dark') {
    return true;
  }
  if (stored === 'light') {
    return false;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    window.localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <button
      type="button"
      className="focus-ring group inline-flex h-9 w-9 items-center justify-center rounded-full text-neutral-500 transition duration-300 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white"
      onClick={() => setIsDark((value) => !value)}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-4 w-4 transition duration-300 group-hover:rotate-12"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      >
        {isDark ? (
          <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2.5v2.2M12 19.3v2.2M4.7 4.7l1.6 1.6M17.7 17.7l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.7 19.3l1.6-1.6M17.7 6.3l1.6-1.6" />
          </>
        ) : (
          <path d="M20.2 14.4A7.7 7.7 0 0 1 9.6 3.8 8.8 8.8 0 1 0 20.2 14.4Z" />
        )}
      </svg>
    </button>
  );
}
