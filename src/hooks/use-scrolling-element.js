import { useEffect } from 'react';

const scrollingElement = () => {
  return document.scrollingElement || document.documentElement;
};

export const useScrollingElement = (trigger) => {
  const scrollElement = scrollingElement();
  useEffect(() => {
    if (trigger) {
      scrollElement.style.overflow = 'hidden';
    } else {
      scrollElement.style.overflow = 'auto';
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger]);
};
