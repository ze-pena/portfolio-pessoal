import { useState, useEffect } from 'react';

export function useObserver(ref: React.RefObject<HTMLElement | null>) {
  const [isObserved, setIsObserved] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsObserved(entry.isIntersecting);
      },
      { threshold: 1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isObserved;
}
