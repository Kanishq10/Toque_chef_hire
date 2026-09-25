# Toque Project Documentation

## 1. Project overview

Toque is a responsive, server-rendered marketing site for a home-cook booking service. The site is designed to turn visitors into enquiries or cook applicants. It is currently a presentation and lead-capture front end, not a complete booking platform.

The application uses React Router Framework Mode. Each route is a route module under `app/routes`, while reusable page sections live under `app/components`.

## 2. Product functionality

### Visitor-facing pages

- **Home**: brand introduction, service selection, trust messaging, and calls to action.
- **About**: company and service explanation.
- **Cook for month**: recurring home-cook service information.
- **One-time cook**: occasional meal and busy-day service information.
- **Chef for party**: private gathering and celebration chef information.
- **Cooks**: cook discovery information and service positioning.
- **Contact**: contact channels, FAQs, and an enquiry form.
- **Join as chef**: recruitment benefits, process information, and a cook application form.
- **Blogs**: cooking and hosting content entry point.
- **Privacy policy and terms of service**: legal content.

The following aliases intentionally render the same content:

- `/about-us` -> `/about`
- `/contact-us` -> `/contact`
- `/join-as-chef` -> `/join-chefkart`
- `/cooks-near-me` -> `/cooks`

### Forms

The contact form collects `name`, `phone`, `email`, `service`, and `message`. On submit it stores a timestamped object in the browser key `toque_enquiries`.

The cook application form collects `fullName`, `mobile`, `city`, `experience`, `cuisine`, `occupation`, and `intro`. On submit it stores a timestamped object in the browser key `toque_cook_applications`.

This is suitable for UI demonstrations only. Browser storage is private to each browser profile and can be cleared at any time. A production implementation should replace both handlers with a server action or API endpoint that validates input, protects against abuse, stores submissions centrally, and sends an acknowledgement or internal notification.

## 3. Technical architecture

### Framework

- React 19 renders the UI.
- React Router 8 runs in Framework Mode.
- `react-router.config.ts` enables SSR with `ssr: true`.
- `app/routes.ts` defines the route table and catch-all 404 route.
- `app/root.tsx` owns the document shell, metadata links, navigation, footer, page transitions, scripts, and the root error boundary.

### Styling and interaction

- Tailwind CSS 4 is integrated through the Vite plugin.
- Shared styles and design tokens are in `app/app.css`.
- Framer Motion supplies page transitions, section reveals, hover states, and accordion animations.
- `MotionConfig` respects the user's reduced-motion preference.
- Google Fonts are loaded by the root document links.

### Metadata and branding

`app/lib/site.ts` is the single source for:

- Site name and canonical base URL.
- Contact email, phone number, and WhatsApp link.
- Social profile URLs.
- The `buildMeta` helper used by route modules for title, description, robots, Open Graph, Twitter, and canonical metadata.

Update this file before launch if the domain, phone number, email address, or social profiles change.

### Static assets

Images are stored in `public/images` and are referenced with root-relative URLs such as `/images/hero-home.png`. `public/robots.txt` is copied directly to the deployed site. The current images are high-resolution PNGs; converting them to WebP or AVIF and adding responsive `srcset` variants is recommended before a high-traffic launch.

## 4. Local development

Install the exact dependency tree from the lockfile:

```bash
npm ci
```

Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

Available package scripts:

| Script | Purpose |
| --- | --- |
| `npm run dev` | Start React Router's Vite development server |
| `npm run typecheck` | Generate route types and run TypeScript checking |
| `npm run build` | Build browser assets and the SSR server bundle |
| `npm run start` | Serve `build/server/index.js` in production mode |

## 5. Production validation

Run the following from a clean checkout or CI environment:

```bash
npm ci
npm run typecheck
npm run build
npm run start
```

With the production server running, check representative routes:

```bash
curl -I http://localhost:3000/
curl -I http://localhost:3000/about
curl -I http://localhost:3000/contact
curl -I http://localhost:3000/does-not-exist
curl -I http://localhost:3000/robots.txt
```

Expected behavior:

- Main pages return `200`.
- Static files such as `/robots.txt` return `200`.
- Unknown URLs return `404`.
- Direct navigation and refreshes on nested routes render correctly.
- Forms show their success state without throwing when local storage is unavailable.

The build currently succeeds and type checking is available. The Vite integration emits a non-blocking `envFile` deprecation warning; it does not prevent deployment.

## 6. Vercel deployment

### Why the repository is configured this way

The app uses SSR and produces both browser and server output:

```text
build/
  client/   Static browser assets
  server/   React Router server bundle
```

Vercel has native support for React Router Framework Mode and can convert the SSR routes into Vercel Functions. The repository therefore keeps the React Router build command and does not force Vercel to treat the entire `build` directory as a static output directory. `vercel.json` specifies:

- Build command: `npm run build`
- Install command: `npm ci`

The optional `@vercel/react-router` preset was not added because the currently published package advertises React Router 7 peer dependencies while this project uses React Router 8. Revisit that integration when a compatible version is available.

### Dashboard deployment

1. Push the project to a Git provider.
2. Open Vercel and select **Add New Project**.
3. Import the repository.
4. Set the project root to the repository root.
5. Let Vercel detect React Router. Do not change the output directory to `build/client` while SSR is enabled.
6. Deploy a Preview.
7. Test direct requests to `/`, `/about`, `/contact`, `/join-chefkart`, `/privacy-policy`, and an unknown path.
8. Confirm images, fonts, canonical URLs, 404 behavior, and client-side navigation.
9. Attach the production domain only after the Preview behaves correctly.

### CLI deployment

```bash
npm install --global vercel
vercel login
vercel
vercel --prod
```

The first command links the local repository to a Vercel project. Use Preview deployments for route and asset checks before running `vercel --prod`.

### Environment variables

No environment variables are currently required. After adding a backend, configure its public or server-only values in Vercel for Development, Preview, and Production as appropriate. Never commit API keys or private credentials.

### Vercel launch checklist

- [ ] Confirm the production URL in `app/lib/site.ts`.
- [ ] Confirm phone, email, WhatsApp, and social URLs.
- [ ] Confirm all public pages have useful title and description metadata.
- [ ] Verify canonical and Open Graph URLs on the final domain.
- [ ] Test all primary links on desktop and mobile.
- [ ] Test direct refreshes on nested URLs.
- [ ] Check `robots.txt` and search indexing intent.
- [ ] Replace browser-only form storage with a central backend or CRM.
- [ ] Add spam protection, input validation, rate limiting, and privacy-consent handling for real submissions.
- [ ] Compress the large PNG assets and check Core Web Vitals.
- [ ] Add browser smoke tests for the critical routes and forms.

## 7. Docker deployment

The multi-stage `Dockerfile` uses Node 24 Alpine. It installs development dependencies to build the app, installs production dependencies separately, copies the generated `build` directory, and starts the SSR server.

Build and run locally:

```bash
docker build -t toque .
docker run --rm -p 3000:3000 toque
```

The container is appropriate for platforms that run long-lived Node containers. It is not required for the native Vercel deployment path.

## 8. Maintenance guide

### Add a route

1. Create a route module under `app/routes/<name>/route.tsx`.
2. Export a default React component.
3. Add a `meta` function using `buildMeta` when the page is indexable.
4. Register the route in `app/routes.ts`.
5. Add navigation or CTA links where appropriate.
6. Run `npm run typecheck` and `npm run build`.

### Update shared site details

Edit `app/lib/site.ts`. This keeps visible contact links and generated metadata aligned. Avoid scattering production URLs across components.

### Update styling

Use existing tokens and shared classes in `app/app.css` before introducing new one-off values. Keep layouts responsive and check both a narrow mobile viewport and a wide desktop viewport after visual changes.

### Add backend form handling

A recommended implementation sequence is:

1. Define a server-side action or API route.
2. Validate and normalize every field on the server.
3. Store submissions in a managed database or CRM.
4. Add notification delivery with a provider that supports retries.
5. Add rate limiting, spam protection, and consent tracking.
6. Return a user-safe success or failure state.
7. Remove the `localStorage` fallback once the central workflow is verified.

## 9. Current readiness assessment

### Ready

- The application has a reproducible npm lockfile.
- TypeScript checking and production builds are available.
- SSR output and a runnable production server are generated.
- Routes, aliases, metadata, static assets, and a root error boundary are present.
- A Docker production path exists.
- Vercel configuration uses the build command and lockfile installation.

### Not yet production-complete

- Form submissions are not delivered to the business.
- There is no booking, account, payment, or operations workflow.
- Image payloads are larger than ideal for mobile performance.
- No automated browser regression suite is included.
- The canonical site data still contains placeholder-looking contact details and must be verified.

The site is ready for a Vercel Preview or a public informational launch after content and domain verification. It should not yet be advertised as a functioning booking or lead-management product until the form backend is implemented.
