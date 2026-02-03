"use client";

import { useEffect, useRef, ReactNode, useState } from "react";

interface SmoothScrollProps {
  children: ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type LocomotiveScrollInstance = any;

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollInstance, setScrollInstance] = useState<LocomotiveScrollInstance | null>(null);

  useEffect(() => {
    let scroll: LocomotiveScrollInstance | null = null;
    let handleResize: (() => void) | null = null;

    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      if (containerRef.current) {
        scroll = new LocomotiveScroll({
          el: containerRef.current,
          smooth: true,
          multiplier: 1,
          lerp: 0.1,
        });

        setScrollInstance(scroll);

        // Update scroll after initial render and dynamic content loads
        setTimeout(() => {
          scroll?.update();
        }, 500);

        // Update on resize
        handleResize = () => {
          if (scroll) {
            scroll.update();
          }
        };
        window.addEventListener("resize", handleResize);
      }
    })();

    return () => {
      if (handleResize) {
        window.removeEventListener("resize", handleResize);
      }
      if (scroll) {
        scroll.destroy();
      }
    };
  }, []);

  // Update scroll when content changes
  useEffect(() => {
    if (scrollInstance) {
      const timer = setTimeout(() => {
        scrollInstance.update();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [scrollInstance, children]);

  return (
    <div ref={containerRef} data-scroll-container>
      {children}
    </div>
  );
}
