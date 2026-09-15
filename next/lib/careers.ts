/** Open roles listed on /careers. Each entry links to its own page under
 *  app/careers/. Add a role here and it appears on the listing; remove it
 *  when the role closes. */

export const CAREERS_EMAIL = 'careers@greyquill.io';

export type Opening = {
  slug: string;
  title: string;
  summary: string;
  terms: string[];
};

export const OPENINGS: Opening[] = [
  {
    slug: 'fde-intern',
    title: 'Forward deployed engineer intern',
    summary:
      'Write code for our products and spend part of each week helping sell them to companies in regulated industries.',
    terms: ['Bengaluru, in person', 'Full time', '2 openings'],
  },
];
