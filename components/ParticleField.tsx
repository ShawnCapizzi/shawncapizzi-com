"use client";

import { useEffect, useRef } from "react";

/**
 * ParticleField — slow-drifting particle background.
 *
 * Per design system v1.1 amendment: ambient animated atmosphere
 * across the page background, behind all content. Particles drift
 * slowly upward with subtle horizontal sway. Reads as starfield /
 * dust motes, not as a busy effect.
 *
 * Fixed position covering viewport, z-index 0 (behind content which
 * sits at default z-index in the document flow).
 *
 * Performance: ~60 particles. Canvas-based, single rAF loop, no
 * library dependency. Pauses when tab is not visible.
 *
 * Respects prefers-reduced-motion: renders particles statically with
 * no animation, so atmosphere is preserved without motion.
 */

interface Particle {
  x: number;
  y: number;
  radius: number;
  vy: number; // vertical velocity (negative = upward drift)
  vx: number; // horizontal drift
  opacity: number;
  twinkleSpeed: number;
  twinklePhase: number;
}

const PARTICLE_COUNT = 60;

export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let particles: Particle[] = [];
    let animationFrame = 0;

    function resize() {
      if (!canvas || !ctx) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.scale(dpr, dpr);
    }

    function initParticles() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      particles = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        radius: Math.random() * 1.2 + 0.3,
        vy: -(Math.random() * 0.15 + 0.05),
        vx: (Math.random() - 0.5) * 0.05,
        opacity: Math.random() * 0.5 + 0.2,
        twinkleSpeed: Math.random() * 0.015 + 0.005,
        twinklePhase: Math.random() * Math.PI * 2,
      }));
    }

    function draw() {
      if (!canvas || !ctx) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        if (!prefersReduced) {
          p.y += p.vy;
          p.x += p.vx;
          p.twinklePhase += p.twinkleSpeed;

          // Wrap around viewport
          if (p.y < -10) p.y = h + 10;
          if (p.x < -10) p.x = w + 10;
          if (p.x > w + 10) p.x = -10;
        }

        const twinkle = prefersReduced
          ? p.opacity
          : p.opacity * (0.6 + 0.4 * Math.sin(p.twinklePhase));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245, 245, 244, ${twinkle})`;
        ctx.fill();
      }

      if (!prefersReduced) {
        animationFrame = requestAnimationFrame(draw);
      }
    }

    function handleVisibility() {
      if (document.hidden) {
        if (animationFrame) cancelAnimationFrame(animationFrame);
      } else if (!prefersReduced) {
        animationFrame = requestAnimationFrame(draw);
      }
    }

    resize();
    initParticles();
    draw();

    window.addEventListener("resize", () => {
      resize();
      initParticles();
    });
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
