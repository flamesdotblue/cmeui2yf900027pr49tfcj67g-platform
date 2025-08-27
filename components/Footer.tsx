export default function Footer() {
  return (
    <footer id="ecosystem" className="py-12 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-white/80">
            <div className="w-2 h-2 rounded-full bg-neon-500 shadow-glow" />
            <span className="font-medium">Cradle Protocol</span>
            <span className="text-white/50">© {new Date().getFullYear()}</span>
          </div>
          <div className="text-sm text-white/60 flex items-center gap-4">
            <a href="#" className="hover:text-neon-500 transition">Twitter</a>
            <a href="#" className="hover:text-neon-500 transition">GitHub</a>
            <a href="#" className="hover:text-neon-500 transition">Discord</a>
            <a href="#" className="hover:text-neon-500 transition">Status</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
