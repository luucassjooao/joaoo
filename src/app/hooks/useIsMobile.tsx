'use client';
import { useEffect, useState } from "react";

export function useIsMobile({size = 700}: { size?: number }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= size);
    const handleResize = () => {
      setIsMobile(window.innerWidth <= size);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [size]);

  return { isMobile }
}
