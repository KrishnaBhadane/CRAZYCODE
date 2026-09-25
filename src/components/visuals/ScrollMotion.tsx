"use client";

import { useEffect } from "react";

// One observer; no scroll listeners or continuous layout reads.
export default function ScrollMotion() {
  useEffect(() => {
    const syncVisibility = () => document.documentElement.toggleAttribute("data-tab-hidden", document.hidden);
    syncVisibility();
    document.addEventListener("visibilitychange", syncVisibility);
    const sections = document.querySelectorAll<HTMLElement>(".page-overlay > section");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        entry.target.classList.toggle("is-in-view", entry.isIntersecting);
        if (entry.isIntersecting) entry.target.classList.add("has-entered");
      });
    }, { threshold: 0.08 });
    sections.forEach(section => {
      section.classList.add("motion-ready");
      observer.observe(section);
    });
    return () => {
      document.removeEventListener("visibilitychange", syncVisibility);
      document.documentElement.removeAttribute("data-tab-hidden");
      observer.disconnect();
      sections.forEach(section => section.classList.remove("motion-ready", "has-entered", "is-in-view"));
    };
  }, []);
  return null;
}
