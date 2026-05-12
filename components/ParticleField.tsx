"use client";

import { useEffect, useRef } from "react";

/**
 * ParticleField — atmospheric particle network ("constellation").
 *
 * Tuning per v1.2: 25% reduction in particle count, color mix of
 * white and moon-cream, max opacity capped at 85% so particles
 * read as luminous but defused — not stark.
 *
 * Particles connected by thin periwinkle lines when within
 * proximity threshold. Bounce off viewport edges.
 *
 * Respects prefers-reduced-motion by rendering the network
 * statically.
 */

type Hue = "white" | "moon";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  hue: Hue;
}

const PARTICLE_COUNT = 41; // reduced from 55 (25% defuse)
const MAX_LINK_DISTANCE = 150;
const MAX_OPACITY = 0.85;

const HUE_COLORS: Record<Hue, string> = {
  white: "245, 245, 244", // text-primary white
  moon: "248, 243, 232", // moon-cream — warm off-white
};

function pickHue(): Hue {
  return Math.random() < 0.5 ? "white" : "moon";
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
    let width = 0;
    let height = 0;

    function resize() {
      if (!canvas || !ctx) return;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    }

    function initParticles() {
      particles = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.2 + 0.8,
        hue: pickHue(),
      }));
    }

    function draw() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, width, height);

      // Update positions
      if (!prefersReduced) {
        for (const p of particles) {
          p.x += p.vx;
          p.y += p.vy;

          // Bounce off viewport edges
          if (p.x <= 0 || p.x >= width) {
            p.vx *= -1;
            p.x = Math.max(0, Math.min(width, p.x));
          }
          if (p.y <= 0 || p.y >= height) {
            p.vy *= -1;
            p.y = Math.max(0, Math.min(height, p.y));
          }
        }
      }

      // Draw connecting lines first
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distSquared = dx * dx + dy * dy;

          if (distSquared < MAX_LINK_DISTANCE * MAX_LINK_DISTANCE) {
            const dist = Math.sqrt(distSquared);
            const opacity = (1 - dist / MAX_LINK_DISTANCE) * 0.18;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(167, 152, 255, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw particles on top
      for (const p of particles) {
        const color = HUE_COLORS[p.hue];

        // Soft halo
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${MAX_OPACITY * 0.09})`;
        ctx.fill();

        // Bright core — capped at MAX_OPACITY
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${MAX_OPACITY})`;
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
