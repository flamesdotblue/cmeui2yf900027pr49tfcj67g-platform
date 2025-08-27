export default function Features() {
  return (
    <section id="vision" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-grid bg-[length:22px_22px] opacity-20 pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">Engineering trust at neon speed</h2>
          <p className="mt-4 text-white/70">
            Our modular consensus, zero-knowledge execution, and intent-centric mempool unlock new coordination patterns for applications and users.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title="Pendulum Consensus" desc="Deterministic leader rotation with cryptographic damping for predictable finality and liveness under stress." />
          <Card title="ZK Pipelines" desc="Verifiable rollups wired directly to the base chain with proof-aware scheduling and state streaming." />
          <Card title="Intent Mesh" desc="MEV-aware, privacy-preserving orderflow that routes intents across chains with cryptographic guarantees." />
          <Card title="Parallel VM" desc="Conflict-free parallel execution with optimistic concurrency and storage sharding." />
          <Card title="Neon Networking" desc="QUIC-first p2p with gossip compaction, edge aggregation, and bandwidth-adaptive propagation." />
          <Card title="DevEx First" desc="Type-safe SDKs, contract hot-reload, and production-grade observability baked in." />
        </div>
      </div>
    </section>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="p-6 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition group">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-lg">{title}</h3>
        <span className="w-2 h-2 rounded-full bg-neon-500 shadow-glow group-hover:scale-110 transition-transform" />
      </div>
      <p className="mt-3 text-sm text-white/70">{desc}</p>
    </div>
  );
}
