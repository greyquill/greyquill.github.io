import type { ReactNode } from 'react';
import clsx from 'clsx';

type Props = {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  tone?: 'default' | 'mist' | 'ink';
  className?: string;
};

const toneClasses: Record<NonNullable<Props['tone']>, string> = {
  default: 'bg-white text-brand-ink',
  mist: 'bg-brand-mist/40 text-brand-ink',
  ink: 'bg-brand-ink text-white',
};

export default function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  tone = 'default',
  className,
}: Props) {
  return (
    <section id={id} className={clsx(toneClasses[tone], 'py-20 md:py-28', className)}>
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        {(eyebrow || title || intro) && (
          <header className="max-w-3xl mb-12 md:mb-16">
            {eyebrow && (
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue/80 mb-4">
                <span className="h-px w-6 bg-brand-blue/50" aria-hidden />
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="font-display text-3xl md:text-5xl leading-[1.08] tracking-tight">
                {title}
              </h2>
            )}
            {intro && (
              <p className={clsx(
                'mt-5 text-lg md:text-xl leading-relaxed max-w-2xl',
                tone === 'ink' ? 'text-white/75' : 'text-brand-ink/70',
              )}>
                {intro}
              </p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
