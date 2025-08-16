import ContactForm from './ContactForm';

export default function ContactSection() {
  return (
    <section id="contact" className="bg-slate-50">
      <div className="mx-auto max-w-2xl px-6 py-16">
        <h2 className="text-2xl font-bold text-brand text-slate-600">Angebot anfordern</h2>
        <p className="mt-2 text-slate-600">
          Erzählen Sie uns von Ihrer Route und Ihren Anforderungen. 
          Wir melden uns umgehend bei Ihnen.
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
