'use client';

import { motion } from 'framer-motion';
import { easings } from '@/lib/motion';

/**
 * Logo grid of the technologies we build with, grouped by category.
 * SVGs are vendored under /public/images/tech (Devicon, Simple Icons,
 * VectorLogoZone sources) so the page has no runtime CDN dependency.
 */

type Tech = { name: string; icon: string };
type TechGroup = { label: string; items: Tech[] };

const GROUPS: TechGroup[] = [
  {
    label: 'Languages & frameworks',
    items: [
      { name: 'Go', icon: 'go' },
      { name: 'Python', icon: 'python' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'React', icon: 'react' },
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'Node.js', icon: 'nodejs' },
    ],
  },
  {
    label: 'Mobile',
    items: [
      { name: 'Flutter', icon: 'flutter' },
      { name: 'React Native', icon: 'react' },
    ],
  },
  {
    label: 'Databases',
    items: [
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'SQL Server', icon: 'microsoftsqlserver' },
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'Redis', icon: 'redis' },
    ],
  },
  {
    label: 'Cloud',
    items: [
      { name: 'AWS', icon: 'amazonwebservices' },
      { name: 'Google Cloud', icon: 'googlecloud' },
      { name: 'Microsoft Azure', icon: 'azure' },
      { name: 'IBM Cloud', icon: 'ibm' },
      { name: 'Linode', icon: 'linode' },
      { name: 'DigitalOcean', icon: 'digitalocean' },
    ],
  },
  {
    label: 'CI/CD & automation',
    items: [
      { name: 'Jenkins', icon: 'jenkins' },
      { name: 'CircleCI', icon: 'circleci' },
      { name: 'GitHub Actions', icon: 'githubactions' },
      { name: 'Docker', icon: 'docker' },
      { name: 'Kubernetes', icon: 'kubernetes' },
      { name: 'Terraform', icon: 'terraform' },
      { name: 'Ansible', icon: 'ansible' },
      { name: 'Chef', icon: 'chef' },
    ],
  },
  {
    label: 'Testing',
    items: [
      { name: 'Jest', icon: 'jest' },
      { name: 'Playwright', icon: 'playwright' },
      { name: 'Cypress', icon: 'cypress' },
      { name: 'Selenium', icon: 'selenium' },
    ],
  },
];

const gridVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.045 },
  },
};

const tileVariants = {
  hidden: { opacity: 0, y: 14, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: easings.outExpo },
  },
};

export default function TechStack() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-8 md:mb-12 max-w-2xl">
          <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-blue/80 mb-2">
            Technologies
          </div>
          <h2 className="font-display font-semibold text-2xl md:text-4xl text-brand-ink leading-tight">
            The stack, at a glance.
          </h2>
          <p className="mt-4 text-brand-ink/70 text-[15px] md:text-base leading-relaxed">
            The tools we reach for most. If yours is not here, ask: this is the
            shortlist, not the limit.
          </p>
        </div>

        <div className="space-y-8 md:space-y-10">
          {GROUPS.map((group) => (
            <div key={group.label}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-ink/50 shrink-0">
                  {group.label}
                </span>
                <span className="h-px flex-1 bg-black/[0.06]" aria-hidden />
              </div>
              <motion.ul
                variants={gridVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-60px' }}
                className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 md:gap-4"
              >
                {group.items.map((tech) => (
                  <motion.li key={tech.name} variants={tileVariants}>
                    <div className="group flex flex-col items-center gap-2.5 rounded-xl bg-white ring-1 ring-black/[0.05] px-3 py-4 h-full hover:ring-brand-blue/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-blue/10 transition-all duration-300 ease-out-expo">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`/images/tech/${tech.icon}.svg`}
                        alt={`${tech.name} logo`}
                        loading="lazy"
                        className="h-9 w-9 object-contain transition-transform duration-300 ease-out-expo group-hover:scale-110"
                      />
                      <span className="text-[11.5px] font-medium text-brand-ink/70 text-center leading-tight group-hover:text-brand-ink transition-colors">
                        {tech.name}
                      </span>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          ))}
        </div>

        <p className="mt-8 text-[11px] text-brand-ink/40 leading-relaxed">
          All product names, logos, and brands are property of their respective owners
          and are used for identification purposes only.
        </p>
      </div>
    </section>
  );
}
