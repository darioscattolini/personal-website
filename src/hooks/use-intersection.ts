import React, { useState, useLayoutEffect } from 'react';

export const useIntersection = (
  element: React.MutableRefObject<HTMLElement>, 
  rootMarginPx: number
) => {
  const rootMargin = rootMarginPx + 'px';
  const [isVisible, setState] = useState(false);

  useLayoutEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { setState(entry.isIntersecting); },
      { rootMargin }
    );

    element.current && observer.observe(element.current);

    return () => observer.unobserve(element.current);
  }, []);

  return isVisible;
};
