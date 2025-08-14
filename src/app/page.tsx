// app/page.tsx
import Image from 'next/image';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" width={100} height={100} alt="MediGo logo" />
          <span className="font-semibold text-lg">MediGo</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="#services" className="hover:text-brand">Services</a>
          <a href="#why" className="hover:text-brand">Why MediGo</a>
          <a href="#contact" className="hover:text-brand">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Fast & secure <span className="text-brand">medical transport</span>
          </h1>
          <p className="mt-5 text-slate-600">
            We move medications and sensitive supplies safely, on-time, and with
            full chain-of-custody tracking.
          </p>
          <div className="mt-8 flex gap-3">
            <a
              href="#contact"
              className="inline-block rounded-2xl bg-brand px-6 py-3 font-semibold text-white hover:opacity-90"
            >
              Get a quote
            </a>
            <a
              href="#services"
              className="inline-block rounded-2xl border border-slate-300 px-6 py-3 font-semibold hover:border-brand"
            >
              Our services
            </a>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/logo.png"
            alt="MediGo vehicle"
            width={600}
            height={380}
            className="mx-auto"
          />
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-3 gap-6">
          {[
            ['Medication transport', 'Temperature-controlled, tracked runs.'],
            ['Clinical supplies', 'From labs to clinics with chain of custody.'],
            ['On-demand courier', 'Rapid pickups with real-time updates.'],
          ].map(([title, text]) => (
            <div key={title} className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section id="why" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold">Why choose MediGo</h2>
        <ul className="mt-6 grid md:grid-cols-2 gap-4 text-slate-700">
          <li>✅ Trained drivers for medical logistics</li>
          <li>✅ Temperature & GPS tracking</li>
          <li>✅ Insured and compliant workflows</li>
          <li>✅ Transparent pricing</li>
        </ul>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-slate-50">
        <div className="mx-auto max-w-2xl px-6 py-16">
          <h2 className="text-2xl font-bold">Get a quote</h2>
          <p className="mt-2 text-slate-600">
            Tell us about your route and requirements. We’ll respond promptly.
          </p>
          <ContactForm />
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-6 py-10 text-sm text-slate-500">
        © {new Date().getFullYear()} MediGo. All rights reserved.
      </footer>
    </main>
  );
}
