const services: Array<[string, string]> = [
  ['Medikamententransport', 'Temperaturkontrollierte, nachverfolgbare Fahrten.'],
  ['Klinische Materialien', 'Von Laboren zu Kliniken mit Lieferketten-Nachweis.'],
  ['Kurier auf Abruf', 'Schnelle Abholungen mit Echtzeit-Updates.'],
];

export default function Services() {
  return (
    <section id="services" className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-3 gap-6">
        {services.map(([title, text]) => (
          <article key={title} className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-lg text-slate-600">{title}</h3>
            <p className="mt-2 text-slate-600">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
