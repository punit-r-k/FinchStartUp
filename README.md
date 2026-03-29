## Finch

Marketing site for Finch, an intentional internship platform focused on better interview outcomes instead of mass-application volume.

### Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui primitives

### Local development

1. Install dependencies.

```bash
npm install
```

2. Start the dev server.

```bash
npm run dev
```

3. Open `http://localhost:3000`.

### Environment

- `NEXT_PUBLIC_SITE_URL` is optional for local development and recommended for deployed metadata, sitemap, and canonical URLs.

### Project notes

- The site is intentionally public-only.
- Third-party backend auth and billing integrations have been removed from the app surface.
- Waitlist capture routes through `mailto:` to the Finch team rather than a hosted backend form.
