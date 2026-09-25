# Toque

Toque is a React Router marketing website for a home-cook booking service in India. It helps visitors learn about the service, choose a cooking option, contact the team, or apply to join the cook network.

## What the website does

- Presents the Toque service and trust proposition.
- Explains monthly cooks, one-time cooks, and chefs for private parties.
- Provides about, cook discovery, blog, privacy, and terms pages.
- Provides enquiry and cook application forms with client-side success states.
- Uses responsive layouts, animated page transitions, FAQs, CTAs, social links, and food photography.
- Generates route-level SEO metadata, Open Graph metadata, Twitter metadata, and canonical URLs.

> Important: form data is currently saved only in the visitor's browser `localStorage`. It is not sent to Toque, a database, email, or CRM. Connect a backend before relying on the forms for real business leads.

## Technology

- React 19
- React Router 8 Framework Mode with server-side rendering enabled
- TypeScript
- Vite 8
- Tailwind CSS 4
- Framer Motion
- React Icons
- Node.js 24 in the provided Dockerfile

## Requirements

- Node.js 22 or newer (Node.js 24 is used by Docker)
- npm

## Local development

```bash
npm ci
npm run dev
```

The development server listens on `http://localhost:3000`.

Useful checks:

```bash
npm run typecheck
npm run build
npm run start
```

`npm run start` serves the production build from `build/server/index.js`. Run `npm run build` first.

## Routes

| URL | Purpose |
| --- | --- |
| `/` | Homepage and primary service CTAs |
| `/about` and `/about-us` | About Toque |
| `/cook-for-month` | Monthly home-cook service |
| `/one-time-cook` | One-time cooking service |
| `/chef-for-party` | Private-party chef service |
| `/cooks` and `/cooks-near-me` | Cook discovery information |
| `/contact` and `/contact-us` | Contact details and enquiry form |
| `/join-chefkart` and `/join-as-chef` | Cook recruitment and application form |
| `/blogs` | Cooking guides and ideas |
| `/privacy-policy` | Privacy information |
| `/terms-of-service` | Terms information |

Unknown URLs return the application's 404 response.

## Deploy to Vercel

This repository includes Vercel configuration and uses React Router SSR. The recommended deployment flow is:

1. Push the repository to GitHub.
2. In Vercel, choose **Add New Project**, import the repository, and keep the project root at the repository root.
3. Use the detected React Router framework settings. The repository's `vercel.json` sets `npm run build` as the build command and `npm ci` as the install command.
4. Deploy a Preview first and test direct loads for `/`, `/about`, `/contact`, and an unknown URL.
5. Add the production domain after the Preview checks pass.

CLI deployment:

```bash
npm install --global vercel
vercel login
vercel
vercel --prod
```

There are currently no required environment variables. Confirm the production domain and contact/social details in `app/lib/site.ts` before launch.

For the deployment checklist and troubleshooting details, read [documentation.md](documentation.md).

## Docker deployment

The included multi-stage `Dockerfile` builds and runs the SSR server:

```bash
docker build -t toque .
docker run --rm -p 3000:3000 toque
```

This image can be used on a Node/Docker host such as Cloud Run, ECS, Railway, Fly.io, or another container platform.

## Project structure

```text
app/
	components/       Reusable UI and page sections
	lib/site.ts       Brand, contact, social, and SEO helpers
	routes/           Route modules
	root.tsx          App shell, navigation, footer, and error boundary
	routes.ts         Route map and aliases
public/images/      Static food and hero images
react-router.config.ts  SSR configuration
vite.config.ts          Vite and React Router plugins
vercel.json              Vercel build configuration
Dockerfile               Production container build
documentation.md         Detailed maintenance and deployment guide
```

## Known limitations before production launch

- Enquiries and cook applications are browser-local only.
- There is no authentication, booking workflow, admin dashboard, database, or payment integration.
- Large PNG assets should be converted to WebP/AVIF and served responsively for better mobile performance.
- There are no automated browser smoke tests yet.
- The build emits a non-blocking Vite `envFile` deprecation warning from the current React Router/Vite integration.
