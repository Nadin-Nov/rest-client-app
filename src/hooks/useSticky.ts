import { useEffect, useState } from 'react';

const DEFAULT_SCROLL_THRESHOLD = 10;

export function useSticky(threshold: number = DEFAULT_SCROLL_THRESHOLD) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrolled;
}
