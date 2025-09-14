import { useEffect, useState } from 'react';

const DEFAULT_SCROLL_THRESHOLD = 10;

export function useSticky(threshold: number = DEFAULT_SCROLL_THRESHOLD) {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > threshold);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return sticky;
}
