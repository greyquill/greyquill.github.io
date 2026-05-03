/**
 * Page-transition wrapper. Next.js re-instantiates a `template.tsx` on
 * every navigation (unlike `layout.tsx`, which persists), so the
 * `route-fade-in` animation runs each time the route changes. Quick
 * (180ms) opacity fade — enough to take the edge off the otherwise
 * instant client-side route swap. Honors `prefers-reduced-motion`.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="route-fade-in">{children}</div>;
}
