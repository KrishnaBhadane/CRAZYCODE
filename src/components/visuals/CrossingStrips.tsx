"use client";

import { useRef, useState } from "react";
import { useInView } from "motion/react";
import useReducedMotion from "@/hooks/useReducedMotion";
import styles from "./CrossingStrips.module.css";

export default function CrossingStrips() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref, { margin: "120px" });
  const reduced = useReducedMotion();
  const [paused, setPaused] = useState(false);

  return (
    <div ref={ref} className={styles.crossing} data-running={visible && !paused && !reduced}>
      <div aria-hidden="true">
        {["KREEPYCODE", "DESIGN / CODE / CREATE"].map((text, band) => (
          <div className={styles.band} data-band={band} key={text}>
            <div className={styles.track}>
              {[0, 1].map((copy) => (
                <div className={styles.group} key={copy}>
                  {[0, 1, 2, 3].map((item) => <span key={item}>{text}<b>✳</b></span>)}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button type="button" className={styles.control} disabled={reduced} aria-pressed={paused || reduced}
        aria-label={reduced ? "Moving strips disabled for reduced motion" : paused ? "Play moving strips" : "Pause moving strips"}
        onClick={() => setPaused(!paused)}>
        <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" fill="currentColor">
          {paused || reduced ? <path d="m5 3 8 5-8 5Z" /> : <path d="M4 3h3v10H4zm5 0h3v10H9z" />}
        </svg>
      </button>
    </div>
  );
}
