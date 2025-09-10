import { useCallback, useRef } from 'react';

interface UseIntersectionObserverOptions {
  onIntersect: () => void;
  enabled?: boolean;
  rootMargin?: string;
  threshold?: number;
}

export function useIntersectionObserver({
  onIntersect,
  enabled = true,
  rootMargin = '100px',
  threshold = 0.1,
}: UseIntersectionObserverOptions) {
  const observer = useRef<IntersectionObserver | null>(null);

  const elementRef = useCallback(
    (node: HTMLElement | null) => {
      if (!enabled) return;
      
      if (observer.current) {
        observer.current.disconnect();
      }

      if (node) {
        observer.current = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              onIntersect();
            }
          },
          {
            rootMargin,
            threshold,
          }
        );

        observer.current.observe(node);
      }
    },
    [enabled, onIntersect, rootMargin, threshold]
  );

  return elementRef;
}