export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-neon-500 shadow-glow" />
          <span className="font-semibold tracking-wide">Cradle Protocol</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <a href="#vision" className="hover:text-white transition">Vision</a>
          <a href="#architecture" className="hover:text-white transition">Architecture</a>
          <a href="#ecosystem" className="hover:text-white transition">Ecosystem</a>
          <a href="#docs" className="px-3 py-1 rounded-md border border-white/10 hover:border-neon-500/60 hover:text-neon-500 transition">Docs</a>
        </nav>
      </div>
    </header>
  );
}
