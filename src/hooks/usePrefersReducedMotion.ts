import { useEffect, useState } from "react";

/**
 * Detects the user's OS-level reduced motion preference.
 * Returns true when motion should be reduced or avoided.
 */
export default function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !("matchMedia" in window)) return;

    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mql.matches);

    // Initialize and subscribe
    setReduced(mql.matches);
    if ("addEventListener" in mql) {
      mql.addEventListener("change", onChange);
    } else {
      // @ts-expect-error - Safari < 14
      mql.addListener(onChange);
    }

    return () => {
      if ("removeEventListener" in mql) {
        mql.removeEventListener("change", onChange);
      } else {
        // @ts-expect-error - Safari < 14
        mql.removeListener(onChange);
      }
    };
  }, []);

  return reduced;
}
