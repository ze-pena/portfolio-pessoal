import { useState, useRef, useEffect } from 'react';

export function useStyleState<T>(style: { on: T; off: T; default: T }, delay: number = 1000) {
  const [styleState, setStyleState] = useState<T>(style.default);
  const timeout = useRef<number | null>(null);

  const updateStyleState = (): void => {
    setStyleState(state => {
      if (state === style.default || state === style.off) {
        return style.on;
      }
      return style.off;
    });
  };

  useEffect(() => {
    if (styleState === style.off) {
      timeout.current = setTimeout(() => setStyleState(style.default), delay);
    }

    return () => {
      if (timeout.current !== null) clearTimeout(timeout.current);
    };
  }, [styleState, style, delay]);

  return {
    styleState,
    updateStyleState,
  };
}
