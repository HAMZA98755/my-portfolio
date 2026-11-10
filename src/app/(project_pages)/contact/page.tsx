import ContactForm from '@/src/_components/ContactForm'
import ContactLinks from '@/src/_components/ContactLinks'
import PageTitle from '@/src/_components/PageTitle'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0B0F19] pb-20 text-white">
      <PageTitle title="Contact Me" />
      <section className="mx-auto grid max-w-7xl gap-10 px-6 md:px-12 lg:grid-cols-[0.8fr_1.2fr] lg:px-20">
        <div className="space-y-6">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-green-400">Let&apos;s connect</p>
            <h1 className="text-3xl font-bold md:text-5xl">Have an idea worth building?</h1>
          </div>
          <p className="max-w-lg leading-relaxed text-gray-400">
            Whether you are starting something new or improving an existing product, send a message and let&apos;s explore how I can help.
          </p>
          <a
            href="mailto:hmzalhosne@gmail.com"
            className="inline-block text-lg font-semibold text-green-400 transition hover:text-green-300"
          >
            hmzalhosne@gmail.com
          </a>
          <ContactLinks />
        </div>
        <ContactForm />
      </section>
    </main>
  )
}
