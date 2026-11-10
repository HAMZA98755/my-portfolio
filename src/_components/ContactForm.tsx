'use client'

import { useState, type SyntheticEvent } from 'react'

const contactEmail = 'hmzalhosne@gmail.com'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  function handleSubmit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')
    const form = new FormData(event.currentTarget)
    const name = String(form.get('name') || '')
    const email = String(form.get('email') || '')
    const subject = encodeURIComponent(String(form.get('subject') || 'Portfolio enquiry'))
    const message = String(form.get('message') || '')
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.assign(`mailto:${contactEmail}?subject=${subject}&body=${body}`)
    setSubmitted(true)
  }

  return (
    <form
      onSubmit={handleSubmit}
      onInvalid={() => setError('Please fill in all fields before opening your email draft.')}
      className="space-y-5 rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2 text-sm text-gray-300">
          <span>Your name</span>
          <input
            required
            name="name"
            type="text"
            className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-green-400"
            placeholder="Jane Smith"
          />
        </label>
        <label className="space-y-2 text-sm text-gray-300">
          <span>Email address</span>
          <input
            required
            name="email"
            type="email"
            className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-green-400"
            placeholder="jane@example.com"
          />
        </label>
      </div>
      <label className="block space-y-2 text-sm text-gray-300">
        <span>Subject</span>
        <input
          required
          name="subject"
          type="text"
          className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-green-400"
          placeholder="Let’s work together"
        />
      </label>
      <label className="block space-y-2 text-sm text-gray-300">
        <span>Message</span>
        <textarea
          required
          name="message"
          rows={6}
          className="w-full resize-y rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-green-400"
          placeholder="Tell me a little about your project..."
        />
      </label>
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black transition hover:bg-green-400"
        >
          Open email draft
        </button>
        {submitted && <p className="text-sm text-green-400">Your email app should open shortly.</p>}
        {error && <p className="text-sm text-red-400">{error}</p>}
      </div>
      <p className="text-sm text-gray-400">
        If your email app does not open, email me directly at{' '}
        <a className="text-green-400 underline" href={`mailto:${contactEmail}`}>
          {contactEmail}
        </a>
        .
      </p>
    </form>
  )
}
