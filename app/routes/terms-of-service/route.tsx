import type { Route } from './+types/route';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Terms of Service — Toque' },
  ];
}

export default function TermsRoute() {
  return (
    <main className="min-h-screen bg-[#fff8ef] px-4 py-20 md:px-8 md:py-28">
      <article className="mx-auto max-w-3xl rounded-[--r-xl] bg-white p-8 shadow-sm md:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A227]">Toque policies</p>
        <h1 className="mt-3 text-4xl font-bold text-[#1C1C1C]">Terms of Service</h1>
        <div className="mt-8 space-y-8 text-gray-600">
          <section><h2 className="text-xl font-semibold text-[#1C1C1C]">Using Toque</h2><p className="mt-2 leading-7">Toque helps households discover and request home-cooking services. You agree to provide accurate contact and booking information and to use the platform lawfully.</p></section>
          <section><h2 className="text-xl font-semibold text-[#1C1C1C]">Bookings and changes</h2><p className="mt-2 leading-7">Service availability, pricing, timing, and cancellation terms are confirmed for each booking. Please contact our team as early as possible when plans change.</p></section>
          <section><h2 className="text-xl font-semibold text-[#1C1C1C]">Respectful service</h2><p className="mt-2 leading-7">Customers and cooks are expected to treat each other respectfully and to provide a safe cooking environment. We may suspend access when these standards are not met.</p></section>
        </div>
      </article>
    </main>
  );
}
