import type { Route } from './+types/route';
import { Link } from 'react-router';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Cooks Near Me — Toque' },
  ];
}

export default function CooksRoute() {
  const cities = [
    { city: 'Delhi NCR', detail: 'Daily cooks, one-time Chefit, and party chefs' },
    { city: 'Bengaluru', detail: 'Reliable home cooking for busy households' },
    { city: 'Mumbai', detail: 'Trained cooks for everyday meals and celebrations' },
  ];

  return (
    <main className="min-h-screen bg-[#fff8ef] px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A227]">Find your perfect cook</p>
            <h1 className="text-4xl font-bold leading-tight text-[#1C1C1C] md:text-6xl">Good food is closer than you think.</h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-gray-600">Tell us where you live and what you need. We will help you choose a trained, background-verified cook who fits your routine.</p>
            <Link to="/contact" className="mt-8 inline-flex rounded-[--r-pill] bg-[#C9A227] px-7 py-3 font-semibold text-black">Find a cook</Link>
          </div>
          <img src="/images/toque-chef-food.png" alt="Chef preparing a meal in a professional kitchen" className="h-[360px] w-full rounded-[--r-xl] object-cover shadow-xl md:h-[470px]" />
        </div>
        <div className="mt-20 grid gap-5 md:grid-cols-3">
          {cities.map((item) => (
            <div key={item.city} className="rounded-[--r-lg] border border-[#eadfce] bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C9A227]">Available now</p>
              <h2 className="mt-3 text-2xl font-semibold text-[#1C1C1C]">{item.city}</h2>
              <p className="mt-3 leading-7 text-gray-600">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
