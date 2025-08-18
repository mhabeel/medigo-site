export default function Hero() {
  return (
    <section className="relative w-full h-[600px] flex items-center justify-center text-white">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/transport.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay (dark tint for readability) */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content on top */}
      <div className="relative z-10 max-w-4xl px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Schneller & sicherer <span className="text-brand">medizinischer Transport</span>
        </h1>
        <p className="mt-5 text-lg text-gray-200">
          Wir transportieren Medikamente und sensible Materialien sicher, pünktlich
          und mit vollständiger Nachverfolgung der Lieferkette.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="inline-block rounded-2xl bg-brand px-6 py-3 font-semibold text-white hover:opacity-90"
          >
            Angebot anfordern
          </a>
          <a
            href="#services"
            className="inline-block rounded-2xl border border-white px-6 py-3 font-semibold hover:bg-white hover:text-sButton transition"
          >
            Unsere Leistungen
          </a>
        </div>
      </div>
    </section>
  );
}
