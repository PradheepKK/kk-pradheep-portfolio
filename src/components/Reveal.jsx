import { useEffect, useRef, useState } from "react";

// Older browsers without IntersectionObserver show the content immediately.
const supportsObserver =
  typeof window !== "undefined" && "IntersectionObserver" in window;

// Wraps content and fades it in once when it scrolls into view.
function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(!supportsObserver);

  useEffect(() => {
    const element = ref.current;
    if (!element || !supportsObserver) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // Animate only once.
        }
      },
      { rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

export default Reveal;