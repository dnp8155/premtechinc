import { useEffect, useRef, useState } from "react";

export default function useHideOnScroll(threshold = 8) {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const diff = y - lastY.current;
      if (y < 80) setHidden(false);
      else if (diff > threshold) setHidden(true);
      else if (diff < -threshold) setHidden(false);
      if (Math.abs(diff) > threshold) lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return hidden;
}