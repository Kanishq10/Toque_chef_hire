import type { Route } from './+types/route';
import { buildMeta } from "~/lib/site";

export function meta({}: Route.MetaArgs) {
  return buildMeta({ title: "Privacy Policy | Toque", description: "Read how Toque handles the information you share when requesting home-cooking services.", path: "/privacy-policy", robots: "noindex, follow" });
}

export default function PrivacyPolicyRoute() {
  return (
    <main className="min-h-screen bg-[#fff8ef] px-4 py-14 sm:py-20 md:px-8 md:py-28">
      <article className="mx-auto max-w-3xl rounded-[--r-xl] bg-white p-8 shadow-sm md:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A227]">Toque policies</p>
        <h1 className="mt-3 text-4xl font-bold text-[#1C1C1C]">Privacy Policy</h1>
        <p className="mt-5 leading-8 text-gray-600">We collect the information you share with us, such as your name, phone number, location, and service preferences, so we can arrange and support your booking.</p>
        <div className="mt-10 space-y-8 text-gray-600">
          <section><h2 className="text-xl font-semibold text-[#1C1C1C]">How we use information</h2><p className="mt-2 leading-7">We use booking details to match you with a suitable cook, communicate updates, improve our services, and respond to support requests.</p></section>
          <section><h2 className="text-xl font-semibold text-[#1C1C1C]">Sharing and security</h2><p className="mt-2 leading-7">We share only the information needed to fulfil a service with relevant cooks and service providers. We use reasonable safeguards and do not sell personal information.</p></section>
          <section><h2 className="text-xl font-semibold text-[#1C1C1C]">Your choices</h2><p className="mt-2 leading-7">You can ask us to review, update, or delete your personal information by contacting our support team.</p></section>
        </div>
      </article>
    </main>
  );
}
