import { SectionHeading } from './SectionHeading';
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
        <SectionHeading
          eyebrow="About"
          title="Backend depth with full stack delivery."
          description={profile.about}
        />
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
