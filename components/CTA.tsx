export default function CTA() {
  return (
    <section id="architecture" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 p-8 md:p-12 bg-gradient-to-b from-white/[0.04] to-transparent relative overflow-hidden">
          <div className="absolute -inset-1 rounded-2xl pointer-events-none" style={{ boxShadow: 'inset 0 0 120px rgba(0,255,198,0.08)' }} />
          <div className="max-w-3xl relative">
            <h3 className="text-2xl md:text-3xl font-bold">Build in the cradle. Launch into orbit.</h3>
            <p className="mt-3 text-white/70">
              Get started with our SDKs, templates, and reference architectures. Whether you are shipping a rollup, an oracle, or an onchain game, Cradle gives you the physics to go faster.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#docs" className="px-4 py-2 rounded-md bg-neon-600 text-black font-semibold shadow-glow hover:bg-neon-500 transition">Read the Docs</a>
              <a href="#ecosystem" className="px-4 py-2 rounded-md border border-white/15 text-white/90 hover:border-neon-500/60 hover:text-neon-500 transition">Explore Ecosystem</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
