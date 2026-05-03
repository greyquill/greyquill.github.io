/**
 * Brand glyphs for "we integrate with the tools you already use."
 * Paths sourced from simpleicons.org. Trademarks belong to their
 * respective owners; rendered here in their canonical brand colors at
 * small scale for nominative use.
 */
import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function base(props: IconProps) {
  const { size = 28, ...rest } = props;
  return { width: size, height: size, viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', ...rest } as SVGProps<SVGSVGElement>;
}

export function SapGlyph(props: IconProps) {
  // SAP wordmark in its blue rectangle. simpleicons path is monochrome,
  // so we render a small navy tile with white "SAP" text — closest to
  // the public mark while staying single-color safe.
  const { size = 28, className } = props;
  return (
    <span
      className={className}
      style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: size, height: size, background: 'linear-gradient(180deg,#003f7d,#00255a)', color: '#fff', fontFamily: 'var(--font-display), system-ui, sans-serif', fontWeight: 700, fontSize: Math.round(size * 0.42), letterSpacing: '0.04em', borderRadius: 4 }}
      aria-label="SAP"
    >
      SAP
    </span>
  );
}

export function GoogleDriveGlyph(props: IconProps) {
  // Official Google Drive triangle, 6-piece construction.
  const { size = 28, className } = props;
  return (
    <svg width={size} height={size} viewBox="0 0 87.3 78" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Google Drive">
      <path d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8H0c0 1.55.4 3.1 1.2 4.5z" fill="#0066da" />
      <path d="M43.65 25 29.9 1.2c-1.35.8-2.5 1.9-3.3 3.3L1.2 48.5C.4 49.9 0 51.45 0 53h27.5z" fill="#00ac47" />
      <path d="M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5H59.8l5.85 11.5z" fill="#ea4335" />
      <path d="M43.65 25 57.4 1.2C56.05.4 54.5 0 52.9 0H34.4c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d" />
      <path d="M59.8 53H27.5L13.75 76.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc" />
      <path d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3L43.65 25 59.8 53h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00" />
    </svg>
  );
}

export function OutlookGlyph(props: IconProps) {
  // Microsoft Outlook (the blue "O" with envelope). Simplified glyph.
  const { size = 28, className } = props;
  return (
    <svg {...base({ size, className })} aria-label="Microsoft Outlook">
      <rect x="0" y="3" width="24" height="18" rx="2" fill="#0072c6" />
      <text x="12" y="16.5" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="13" fill="#ffffff" letterSpacing="-0.5">O</text>
    </svg>
  );
}

export function GmailGlyph(props: IconProps) {
  // Official Gmail envelope, 5-piece construction.
  const { size = 28, className } = props;
  return (
    <svg width={size} height={size} viewBox="0 0 256 193" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Gmail">
      <path d="M58.182 192.05V93.14L27.507 65.077 0 49.504v125.091c0 9.658 7.825 17.455 17.455 17.455z" fill="#4285f4" />
      <path d="M197.818 192.05h40.727c9.659 0 17.455-7.826 17.455-17.455V49.504l-31.166 17.837-27.016 25.798z" fill="#34a853" />
      <path d="M58.182 93.14l-4.174-38.647 4.174-36.989L128 69.868l69.818-52.364 4.669 33.469-4.669 42.166L128 145.504z" fill="#ea4335" />
      <path d="M197.818 17.504V93.14L256 49.504V26.231c0-21.585-24.64-33.89-41.89-20.945z" fill="#fbbc04" />
      <path d="m0 49.504 26.759 20.07L58.182 93.14V17.504L41.89 5.286C24.61-7.66 0 4.646 0 26.231z" fill="#c5221f" />
    </svg>
  );
}

export function ExcelGlyph(props: IconProps) {
  const { size = 28, className } = props;
  return (
    <svg {...base({ size, className })} aria-label="Microsoft Excel">
      <rect x="2" y="3" width="20" height="18" rx="2" fill="#107c41" />
      <path d="M7 8l4 4-4 4M17 8l-4 4 4 4" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function TallyGlyph(props: IconProps) {
  // Tally Solutions: red wordmark. Use a red tile with "Tally" lettering.
  const { size = 28, className } = props;
  return (
    <span
      className={className}
      style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: size, height: size, background: '#d52b1e', color: '#fff', fontFamily: 'var(--font-display), system-ui, sans-serif', fontWeight: 700, fontSize: Math.round(size * 0.36), letterSpacing: '0.02em', borderRadius: 4 }}
      aria-label="Tally"
    >
      Tally
    </span>
  );
}

export function PdfGlyph(props: IconProps) {
  const { size = 28, className } = props;
  return (
    <svg {...base({ size, className })} aria-label="PDF document">
      <path d="M5 2.5h11l4 4V21a.5.5 0 01-.5.5h-15A.5.5 0 014 21V3a.5.5 0 01.5-.5z" fill="#fff" stroke="#cf2027" strokeWidth="0.8" />
      <path d="M16 2.5V6a.5.5 0 00.5.5H20" fill="none" stroke="#cf2027" strokeWidth="0.8" />
      <rect x="3" y="13" width="14" height="6" rx="1" fill="#cf2027" />
      <text x="10" y="17.6" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="4" fill="#ffffff" letterSpacing="0.5">PDF</text>
    </svg>
  );
}

export function ScanGlyph(props: IconProps) {
  // Generic camera/scan icon for goods receipt photos.
  const { size = 28, className } = props;
  return (
    <svg {...base({ size, className })} aria-label="Scan">
      <rect x="2" y="6" width="20" height="14" rx="2" fill="#3a3a3a" />
      <circle cx="12" cy="13" r="4.5" fill="#fff" />
      <circle cx="12" cy="13" r="2.8" fill="#3a3a3a" />
      <rect x="8" y="3.5" width="8" height="3" rx="0.7" fill="#3a3a3a" />
    </svg>
  );
}

export function DatabaseGlyph(props: IconProps) {
  // Generic source DB / data warehouse.
  const { size = 28, className } = props;
  return (
    <svg {...base({ size, className })} aria-label="Database">
      <ellipse cx="12" cy="5" rx="8" ry="2.5" fill="#0e7490" />
      <path d="M4 5v6c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5V5" fill="#0e7490" opacity="0.85" />
      <path d="M4 11v6c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5v-6" fill="#0e7490" opacity="0.7" />
      <ellipse cx="12" cy="5" rx="8" ry="2.5" fill="none" stroke="#fff" strokeOpacity="0.25" />
    </svg>
  );
}

export function GstPortalGlyph(props: IconProps) {
  // Indian GST portal — render as a small navy tile with "GST".
  const { size = 28, className } = props;
  return (
    <span
      className={className}
      style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: size, height: size, background: '#0e3a72', color: '#fff', fontFamily: 'var(--font-display), system-ui, sans-serif', fontWeight: 700, fontSize: Math.round(size * 0.36), letterSpacing: '0.04em', borderRadius: 4 }}
      aria-label="GST portal"
    >
      GST
    </span>
  );
}
