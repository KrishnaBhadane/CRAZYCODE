"use client";

import { useEffect, useRef } from "react";

/** Low-resolution flame ribbons, with no video or per-frame React updates. */
export default function FlameField({ paused }: { paused: boolean }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;
    const mobile = window.matchMedia("(max-width: 760px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0, last = 0, time = 0;
    let visible = true, covered = false;

    // Only the wave phase changes per frame; keep geometry and paint cached.
    let ribbons: { base: number; height: number; width: number; paint: CanvasGradient }[] = [];
    const segmentCount = mobile.matches ? 24 : 32;
    const steps = Array.from({ length: segmentCount + 1 }, (_, step) => {
      const progress = step / segmentCount;
      return { progress, taper: Math.pow(1 - progress, 1.6) * 0.5 };
    });
    const prepareRibbons = () => {
      const w = canvas.width, h = canvas.height;
      const count = mobile.matches ? 5 : 9;
      ribbons = Array.from({ length: count }, (_, i) => {
        const height = h * (0.35 + 0.33 * (0.5 + 0.5 * Math.sin(i * 2.3)));
        const paint = context.createLinearGradient(0, h, 0, h - height);
        paint.addColorStop(0, i % 3 === 0 ? "#54392d55" : "#f5f1e837");
        paint.addColorStop(0.65, i % 3 === 0 ? "#54392d1c" : "#f5f1e81d");
        paint.addColorStop(1, "#879f8400");
        return { base: w * i / (count - 1), height, width: w / count * 1.1, paint };
      });
    };
    const draw = () => {
      const w = canvas.width, h = canvas.height;
      context.clearRect(0, 0, w, h);
      for (let i = 0; i < ribbons.length; i++) {
        const { base, height, width, paint } = ribbons[i];
        context.fillStyle = paint;
        context.beginPath();
        for (const side of [-1, 1]) {
          for (let step = 0; step <= segmentCount; step++) {
            const { progress: p, taper } = steps[side === -1 ? step : segmentCount - step];
            const wave = Math.sin(p * 7 - time * 1.6 + i * 1.9) * width * p * 0.5
              + Math.sin(p * 13 - time + i) * width * p * 0.13;
            const x = base + wave + side * width * taper;
            const y = h - p * height;
            if (side === -1 && step === 0) context.moveTo(x, y);
            else context.lineTo(x, y);
          }
        }
        context.closePath();
        context.fill();
      }
    };
    const tick = (now: number) => {
      const interval = 1000 / 30;
      const elapsed = now - last;
      if (elapsed >= interval) {
        // Preserve leftover frame time so cadence does not drift on 60/120 Hz screens.
        const remainder = elapsed % interval;
        time += Math.min((elapsed - remainder) / 1000, 0.1);
        last = now - remainder;
        draw();
      }
      frame = requestAnimationFrame(tick);
    };
    const sync = () => {
      cancelAnimationFrame(frame);
      if (!paused && !reduced.matches && visible && !covered && !document.hidden) {
        last = performance.now();
        frame = requestAnimationFrame(tick);
      } else draw();
    };
    const resize = () => {
      canvas.width = Math.min(1200, Math.round(canvas.clientWidth * (mobile.matches ? 0.5 : 0.7)));
      canvas.height = Math.min(800, Math.round(canvas.clientHeight * 0.65));
      prepareRibbons();
      draw();
      sync();
    };
    const sizeObserver = new ResizeObserver(resize);
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); });
    // Stop drawing once the next section covers the pinned hero.
    let coverObserver: IntersectionObserver | undefined;
    const observeCover = () => {
      coverObserver?.disconnect();
      const overlay = document.querySelector(".page-overlay");
      if (!overlay) return;
      coverObserver = new IntersectionObserver(([entry]) => {
        if (covered === entry.isIntersecting) return;
        covered = entry.isIntersecting;
        canvas.closest("section")?.toggleAttribute("data-covered", covered);
        sync();
      }, { rootMargin: `0px 0px -${Math.max(0, window.innerHeight - 1)}px 0px` });
      coverObserver.observe(overlay);
    };
    observeCover();
    window.addEventListener("resize", observeCover);
    sizeObserver.observe(canvas);
    observer.observe(canvas);
    reduced.addEventListener("change", sync);
    document.addEventListener("visibilitychange", sync);
    resize();
    return () => {
      cancelAnimationFrame(frame);
      coverObserver?.disconnect();
      window.removeEventListener("resize", observeCover);
      sizeObserver.disconnect();
      observer.disconnect();
      reduced.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", sync);
    };
  }, [paused]);

  return <canvas ref={ref} aria-hidden="true" className="flame-field" />;
}
