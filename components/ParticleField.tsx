"use client";

import { useEffect, useRef } from "react";

/**
 * ParticleField — slow-drifting glowing particles.
 *
 * Per design system v1.1 amendment: ambient atmospheric animation.
 * Particles render as soft glowing dots ("fireflies") with subtle
 * color variation drawn from the brand color family. Each particle
 * is a two-circle stack: a translucent halo for glow + a bright
 * inner core. Slow drift, gentle twinkle.
 *
 * Performance: 35 particles, single rAF loop, pauses when tab hidden.
 * Respects prefers-reduced-motion (renders particles statically).
 */

type Hue = "white" | "purple" | "blue";

interface Particle {
  x: number;
  y: number;
  radius: number;
  vy: number;
  vx: number;
  baseOpacity: number;
  twinkleSpeed: number;
  twinklePhase: number;
  hue: Hue;
}

const PARTICLE_COUNT = 35;

const HUE_COLORS: Record<Hue, string> = {
  white: "245, 245, 244",
  purple: "167, 152, 255", // tinted periwinkle, brand-purple family
  blue: "150, 140, 220", // softer blue tint
};

function pickHue(): Hue {
  const r = Math.random();
  if (r < 0.65) return "white";
  if (r < 0.85) return "purple";
  return "blue";
}

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
      ctx.setTransform(1, 0, 0, 1, 0, 0); // reset before scaling
      ctx.scale(dpr, dpr);
    }

    function initParticles() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      particles = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        radius: Math.random() * 2.5 + 1.5, // 1.5 to 4.0 px
        vy: -(Math.random() * 0.08 + 0.03), // very slow upward drift
        vx: (Math.random() - 0.5) * 0.04, // gentle horizontal sway
        baseOpacity: Math.random() * 0.4 + 0.35, // 0.35 to 0.75
        twinkleSpeed: Math.random() * 0.008 + 0.003,
        twinklePhase: Math.random() * Math.PI * 2,
        hue: pickHue(),
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

          // Wrap around viewport so particles reappear from the bottom
          if (p.y < -10) {
            p.y = h + 10;
            p.x = Math.random() * w;
          }
          if (p.x < -10) p.x = w + 10;
          if (p.x > w + 10) p.x = -10;
        }

        const twinkleFactor = prefersReduced
          ? 1
          : 0.75 + 0.25 * Math.sin(p.twinklePhase);
        const opacity = p.baseOpacity * twinkleFactor;
        const color = HUE_COLORS[p.hue];

        // Outer glow halo — large + very translucent
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 3.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${opacity * 0.12})`;
        ctx.fill();

        // Mid halo — adds smoother falloff
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 1.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${opacity * 0.3})`;
        ctx.fill();

        // Bright inner core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${opacity})`;
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

    function handleResize() {
      resize();
      initParticles();
    }

    resize();
    initParticles();
    draw();

    window.addEventListener("resize", handleResize);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", handleResize);
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
