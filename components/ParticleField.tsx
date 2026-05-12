"use client";

import { useEffect, useRef } from "react";

/**
 * ParticleField — atmospheric particle network ("constellation").
 *
 * Slow-drifting particles connected by thin lines when they're
 * close enough to each other. Line opacity is proportional to
 * proximity — closer = brighter. The combined effect reads as
 * a live data network or starfield with connecting paths.
 *
 * Particles bounce off viewport edges and drift continuously.
 * Performance: 50 particles, O(n²) = 2,500 distance checks per
 * frame which is trivial on modern hardware.
 *
 * Per design system v1.1 amendment: ambient page-background
 * animation behind all content. Respects prefers-reduced-motion
 * by rendering the network statically.
 */

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

const PARTICLE_COUNT = 55;
const MAX_LINK_DISTANCE = 150;

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

      // Draw connecting lines FIRST (so particles sit on top of lines)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distSquared = dx * dx + dy * dy;

          if (distSquared < MAX_LINK_DISTANCE * MAX_LINK_DISTANCE) {
            const dist = Math.sqrt(distSquared);
            const opacity = (1 - dist / MAX_LINK_DISTANCE) * 0.22;
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
        // Soft halo
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(245, 245, 244, 0.08)";
        ctx.fill();

        // Bright core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(245, 245, 244, 0.75)";
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
