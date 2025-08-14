'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<null | 'idle' | 'sending' | 'ok' | 'error'>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error('Request failed');
      const data = await res.json();
      if (data.ok) {
        setStatus('ok');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 grid gap-4">
      <input
        name="name"
        placeholder="Your name"
        required
        className="rounded-xl border px-4 py-3"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        className="rounded-xl border px-4 py-3"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <textarea
        name="message"
        placeholder="What do you need moved?"
        rows={5}
        className="rounded-xl border px-4 py-3"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />
      <button
        type="submit"
        disabled={status === 'sending'}
        className="rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white hover:opacity-90 disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending…' : 'Send'}
      </button>

      {status === 'ok' && (
        <p className="text-green-600">Thanks! We’ll be in touch shortly.</p>
      )}
      {status === 'error' && (
        <p className="text-red-600">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}