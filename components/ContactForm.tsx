'use client';

import { FormEvent, useState } from 'react';
import { SITE } from '@/app/data/site';

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get('name') || '');
    const email = String(form.get('email') || '');
    const subject = String(form.get('subject') || '');
    const message = String(form.get('message') || '');

    const body = encodeURIComponent(
      `Nome: ${name}\nEmail: ${email}\n\n${message}`
    );
    const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(subject || 'Contacto via website')}&body=${body}`;
    window.location.href = mailto;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center">
        <p className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Obrigado</p>
        <p className="text-white/60 text-sm">
          O seu cliente de email deve abrir-se. Se não abrir, escreva-nos para{' '}
          <a href={`mailto:${SITE.email}`} className="text-primary hover:underline">{SITE.email}</a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-2">Nome</label>
        <input
          id="name"
          name="name"
          required
          className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white outline-none focus:border-primary/50 transition-colors"
          placeholder="O seu nome"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-2">E-mail</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white outline-none focus:border-primary/50 transition-colors"
          placeholder="nome@email.com"
        />
      </div>
      <div>
        <label htmlFor="subject" className="block text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-2">Assunto</label>
        <input
          id="subject"
          name="subject"
          required
          className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white outline-none focus:border-primary/50 transition-colors"
          placeholder="Como podemos ajudar?"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-2">Mensagem</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white outline-none focus:border-primary/50 transition-colors resize-y"
          placeholder="Escreva a sua mensagem..."
        />
      </div>
      <button type="submit" className="btn-gradient w-full rounded-xl py-3.5 text-xs font-black uppercase tracking-[0.2em]">
        Enviar mensagem
      </button>
    </form>
  );
}
