"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Form submitted:", form);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="text-4xl mb-4">✓</div>
        <h3 className="text-xl font-semibold text-[#12273F] mb-2">Message Sent!</h3>
        <p className="text-neutral-500">Thank you for reaching out. I&apos;ll get back to you soon.</p>
        <button
          onClick={() => { setSubmitted(false); setForm({ name: "", email: "", message: "" }); }}
          className="mt-6 text-sm text-neutral-500 underline underline-offset-2 hover:text-[#12273F]"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1.5">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="Your name"
          className="w-full px-4 py-3 rounded-none border border-neutral-200 text-sm text-[#12273F] placeholder-neutral-400 focus:outline-none focus:border-[#12273F] transition"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1.5">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className="w-full px-4 py-3 rounded-none border border-neutral-200 text-sm text-[#12273F] placeholder-neutral-400 focus:outline-none focus:border-[#12273F] transition"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          value={form.message}
          onChange={handleChange}
          placeholder="Tell me about your project or inquiry..."
          className="w-full px-4 py-3 rounded-none border border-neutral-200 text-sm text-[#12273F] placeholder-neutral-400 focus:outline-none focus:border-[#12273F] transition resize-none"
        />
      </div>

      <button
        type="submit"
        className="bg-[#12273F] text-white px-8 py-3.5 rounded-none text-sm font-medium hover:bg-[#1e3a5f] transition-colors self-start"
      >
        Send Message
      </button>
    </form>
  );
}
