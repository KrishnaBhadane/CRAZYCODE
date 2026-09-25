"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import useReducedMotion from "@/hooks/useReducedMotion";
import FlameField from "@/components/visuals/FlameField";
import RevealText from "@/components/visuals/RevealText";
import site from "@/data/site";
import styles from "./Hero.module.css";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();
  const still = paused || Boolean(reduced);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    // Tall mobile layouts scroll fully into view before the hero pins.
    const measure = () => hero.style.setProperty("--hero-height", `${hero.offsetHeight}px`);
    const observer = new ResizeObserver(measure);
    observer.observe(hero);
    measure();
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={heroRef} id="hero" aria-labelledby="hero-title" className={styles.hero} data-paused={still}>
      <FlameField paused={still} />
      <div className={styles.grain} aria-hidden="true" />
      <div className={styles.content}>
        <div className={styles.eyebrow}>
          <span><span className={styles.spark} aria-hidden="true">✳</span> INDEPENDENT WEB & DESIGN STUDIO</span>
          <span className={styles.edition}>GOOD ENERGY. GREAT WEBSITES.</span>
        </div>
        <div className={styles.composition}>
          <div className={styles.type}>
            <h1 id="hero-title" className={styles.title} aria-label="A little kreepy. A lot of wow.">
              <span className={styles.headline}>
                <RevealText text="A LITTLE" delay={0.1} />
                <RevealText text="KREEPY." delay={0.3} />
              </span>
              <span className={styles.lastLine}><RevealText text="A LOT OF WOW." delay={0.5} /></span>
            </h1>
            <div className={styles.underline} aria-hidden="true">
              <svg viewBox="0 0 540 22" fill="none"><path d="M3 13C118 0 374 1 532 10M67 20C221 9 401 10 537 16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
            </div>
          </div>
          <div className={styles.marginNote} aria-hidden="true">
            <span>✳</span>
            <p>Good design.<br />No jump scares.</p>
            <svg viewBox="0 0 150 55" fill="none"><path d="M4 10c32 42 90 38 136 8m-22-2 24 1-6 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
          <div className={styles.art} aria-hidden="true">
            <span className={styles.artCaption}>A FRIENDLY GHOST.<br />A SERIOUS EYE FOR DESIGN.</span>
            <div className={styles.sticker}>
              <svg className={styles.seal} viewBox="0 0 340 340">
                <defs><path id="seal-ring" d="M170,170 m-145,0 a145,145 0 1,1 290,0 a145,145 0 1,1 -290,0" /></defs>
                <circle cx="170" cy="170" r="166" fill="var(--color-cream)" />
                <circle cx="170" cy="170" r="129" fill="none" stroke="var(--color-soil)" strokeWidth=".7" />
                <text fill="var(--color-soil)" fontSize="12.5" letterSpacing="3.6"><textPath href="#seal-ring">BUILT WITH SPIRIT ✳ DESIGNED TO BE DIFFERENT ✳ KREEPYCODE ✳ </textPath></text>
              </svg>
              <Image className={styles.ghost} src={site.logo} alt="" width={230} height={250} preload />
              <span className={styles.star}>✳</span>
            </div>
            <span className={styles.handwritten}>your next website,<br />with a little more soul.</span>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>Thoughtful design. Playful details. Clean code.<br className={styles.desktopBreak} /> Websites with personality, made for people<br className={styles.desktopBreak} /> with something to put into the world.</p>
          <div className={styles.actions}>
            <a className={styles.primary} href="#projects">View projects <span aria-hidden="true">↗</span></a>
            <a className={styles.secondary} href="#contact">Let’s talk <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className={styles.footnote}>
          <a href="#about">SCROLL TO MEET THE STUDIO <span aria-hidden="true">↓</span></a>
          <button type="button" onClick={() => setPaused(!paused)} aria-pressed={still} disabled={Boolean(reduced)}>
            <span aria-hidden="true">{still ? "▷" : "Ⅱ"}</span> {reduced ? "Reduced motion" : paused ? "Play motion" : "Pause motion"}
          </button>
        </div>
      </div>
      <div className={styles.ribbon} aria-hidden="true">
        <span>DESIGN WITH CHARACTER</span><b>✳</b><span>CODE WITH PURPOSE</span><b>✳</b><span>A LITTLE DIFFERENT BY DESIGN</span><b>✳</b>
      </div>
    </section>
  );
}
