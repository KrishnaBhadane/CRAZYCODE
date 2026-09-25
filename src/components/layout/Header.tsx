"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import useReducedMotion from "@/hooks/useReducedMotion";
import site from "@/data/site";
import styles from "./Header.module.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const header = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const closeOutside = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    };
    const closeEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 900px)");
    const closeDesktop = () => { if (desktop.matches) setOpen(false); };
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("keydown", closeEscape);
    desktop.addEventListener("change", closeDesktop);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("keydown", closeEscape);
      desktop.removeEventListener("change", closeDesktop);
    };
  }, [open]);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <motion.header ref={header} layout={reduced ? false : "size"}
        transition={{ type: "spring", stiffness: 350, damping: 32 }}
        className={styles.island} data-open={open}
        onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false); }}>
        <span className={styles.light} aria-hidden="true" />
        <div className={styles.bar}>
          <a href="#hero" className={styles.brand} aria-label="Kreepycode home" onClick={() => setOpen(false)}>
            <Image src={site.logo} alt="" width={35} height={38} preload />
            <span>kreepycode<span className={styles.period}>.</span></span>
          </a>
          <nav className={styles.desktop} aria-label="Main navigation">
            {site.nav.filter((link) => link.href !== "#contact").map((link) => (
              <a key={link.href} href={link.href}>{link.label}</a>
            ))}
          </nav>
          <a className={styles.contact} href="#contact" onClick={() => setOpen(false)}>
            Let’s talk <span aria-hidden="true">↗</span>
          </a>
          <button ref={toggle} className={styles.toggle} type="button" aria-expanded={open}
            aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}>
            <span /><span />
          </button>
        </div>
        <nav id="mobile-menu" className={styles.mobile} aria-label="Mobile navigation" hidden={!open}>
          {site.nav.map((link, index) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              <span className={styles.index}>0{index + 1}</span>{link.label}<span aria-hidden="true">↗</span>
            </a>
          ))}
          <p>A little different. By design.</p>
        </nav>
      </motion.header>
    </>
  );
}
