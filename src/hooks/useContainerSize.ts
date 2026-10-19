// hooks/useContainerSize.ts

'use client';

import { useState, useEffect, RefObject } from 'react';

interface Size {
  width: number;
  height: number;
}

export const useContainerSize = (ref: RefObject<HTMLDivElement | null>): Size => {
  const [size, setSize] = useState<Size>({ width: 0, height: 0 });

  useEffect(() => {
    if (!ref?.current) return;

    // Observe Size Changes Of The Container
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        setSize({ width, height });
      }
    });

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref]);

  return size;
};