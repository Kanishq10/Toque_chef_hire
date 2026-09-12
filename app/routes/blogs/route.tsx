import type { Route } from './+types/route';
import { Link } from 'react-router';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Blog — Toque' },
  ];
}

export default function BlogsRoute() {
  const posts = [
    { title: '6 things to keep in mind when hiring a cook for home', tag: 'Home cooking', image: '/images/food-spread.jpg' },
    { title: 'How to plan a relaxed dinner party at home', tag: 'Entertaining', image: '/images/party-spread.jpg' },
    { title: 'Why fresh meals make busy weeks feel easier', tag: 'Wellness', image: '/images/cook-preparing.jpg' },
  ];

  return (
    <main className="min-h-screen bg-[#fff8ef] px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A227]">The Toque table</p>
          <h1 className="text-4xl font-bold leading-tight text-[#1C1C1C] md:text-6xl">Ideas for better meals at home.</h1>
          <p className="mt-5 text-lg leading-8 text-gray-600">Practical notes on hiring help, hosting well, and making everyday cooking feel more human.</p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="overflow-hidden rounded-[--r-lg] border border-[#eadfce] bg-white shadow-sm">
              <img src={post.image} alt="" className="h-56 w-full object-cover" loading="lazy" />
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C9A227]">{post.tag}</p>
                <h2 className="mt-3 text-2xl font-semibold leading-tight text-[#1C1C1C]">{post.title}</h2>
                <p className="mt-5 text-sm font-semibold text-[#8b6c00]">5 min read</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-14 text-center">
          <Link to="/contact" className="inline-flex rounded-[--r-pill] bg-[#C9A227] px-7 py-3 font-semibold text-black">Talk to our team</Link>
        </div>
      </div>
    </main>
  );
}
