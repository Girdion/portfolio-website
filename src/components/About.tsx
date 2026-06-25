import { profile } from '../data/profile';

const principles = [
  'Production debugging before guesswork',
  'Readable APIs and data flows',
  'Performance improvements tied to user impact',
];

export function About() {
  return (
    <section id="about" className="section-reveal border-t border-neutral-200 dark:border-neutral-800">
      <div className="section-shell">
        <div className="mb-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-start lg:gap-14">
          <div className="max-w-3xl">
            <figure className="mx-auto mb-8 h-32 w-32 overflow-hidden rounded-full border border-neutral-200 dark:border-neutral-800 sm:h-36 sm:w-36 lg:hidden">
              <img
                src="/images/jonathan-djoko.jpg"
                alt="Jonathan Djoko"
                width="800"
                height="800"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </figure>
            <p className="eyebrow">About</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-neutral-950 dark:text-white sm:text-4xl">
              Backend depth with full stack delivery.
            </h2>
            <p className="mt-5 text-base leading-8 text-neutral-600 dark:text-neutral-300">{profile.about}</p>
          </div>
          <figure className="hidden h-52 w-52 overflow-hidden rounded-full border border-neutral-200 dark:border-neutral-800 lg:block lg:justify-self-end">
            <img
              src="/images/jonathan-djoko.jpg"
              alt="Jonathan Djoko"
              width="800"
              height="800"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </figure>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {principles.map((item) => (
            <div key={item} className="border-t border-neutral-950 pt-5 dark:border-white">
              <p className="text-base font-medium leading-7 text-neutral-950 dark:text-white">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
