"use client";

import { useEffect, useRef } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onResize = () => {
      el.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
    };
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <section className="relative w-full" style={{ minHeight: 'calc(var(--vh, 1vh) * 100)' }}>
      <div ref={containerRef} className="absolute inset-0">
        <spline-viewer url="https://prod.spline.design/BL9Cjn3fkAdLBhXm/scene.splinecode" className="block" events-target="global" ar="" shadow=""></spline-viewer>
        <div className="hero-overlay absolute inset-0" />
      </div>

      <div className="relative z-10 pt-28 pb-24 md:pt-36 md:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-wider uppercase text-neon-500/90 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-500 animate-pulse" />
              Cradle of Innovation
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
              Where on-chain physics meets unstoppable coordination
            </h1>
            <p className="mt-5 text-white/75 text-lg">
              Cradle Protocol is a next-gen blockchain architecture engineered for real-time composability, cryptographic finality, and neon-fast settlement. Built for builders who imagine tomorrow.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#docs" className="px-5 py-3 rounded-md bg-neon-600 text-black font-semibold shadow-glow hover:bg-neon-500 transition">
                Launch Docs
              </a>
              <a href="#architecture" className="px-5 py-3 rounded-md border border-white/15 text-white/90 hover:border-neon-500/60 hover:text-neon-500 transition">
                Explore Architecture
              </a>
            </div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 text-white/70 text-sm">
              <div>
                <div className="text-2xl font-bold text-white"><span className="gradient-text">1.2s</span></div>
                <div>Finality</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">200k+</div>
                <div>TPS Capacity</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">Sub-<span className="gradient-text">300ms</span></div>
                <div>Time to First Byte</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">100%</div>
                <div>Open-Source</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <a href="#vision" className="group inline-flex flex-col items-center text-white/60 hover:text-neon-500 transition">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <span className="mt-1 h-8 w-px bg-gradient-to-b from-white/40 via-neon-500/60 to-transparent group-hover:from-neon-500/80" />
        </a>
      </div>
    </section>
  );
}
