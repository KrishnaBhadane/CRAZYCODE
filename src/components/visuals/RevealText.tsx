"use client";

import { useEffect } from "react";
import { useAnimate, stagger } from "motion/react";
import useReducedMotion from "@/hooks/useReducedMotion";

export default function RevealText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [scope, animate] = useAnimate();
  const reduced = useReducedMotion();

  useEffect(() => {
    // Text stays readable in server HTML and without JavaScript.
    if (reduced || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const mobile = window.matchMedia("(max-width: 760px)").matches;
    const animation = animate(".reveal-reel", {
      transform: [mobile ? "translateY(-25%)" : "translateY(-91.666667%)", "translateY(0%)"],
    }, {
      duration: mobile ? 2.2 : 3.6,
      delay: stagger(mobile ? 0.025 : 0.035, { startDelay: delay }),
      // A fast initial roll with a long, visible deceleration into the final letter.
      ease: [0.215, 0.61, 0.355, 1],
    });
    return () => { animation.complete(); };
  }, [animate, delay, reduced]);

  return (
    <span ref={scope} className="reveal-line" aria-hidden="true">
      <span className="sr-only">{text} </span>
      {Array.from(text).map((char, index) => (
        <span className="reveal-char" key={index}>
          <span className="reveal-reel">
            {Array.from({ length: 12 }, (_, copy) => (
              <span className="reveal-copy" data-glyph={char === " " ? "\u00a0" : char} key={copy} />
            ))}
          </span>
        </span>
      ))}
    </span>
  );
}
