import { useState, useEffect, useRef, RefObject } from 'react';

export const useInView = (options?: IntersectionObserverInit): [RefObject<HTMLDivElement>, boolean] => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, {
      threshold: 0.1,
      ...options,
    });

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref, isInView];
};
