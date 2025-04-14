# Immediate TODOs Before Deployment

## High Priority
1. Missing Core Files
   - [ ] Create robots.txt
   - [ ] Create sitemap.xml
   - [ ] Add Privacy Policy page
   - [ ] Add Terms of Service page
   - [ ] Add Cookie consent component

2. Security
   - [ ] Add rate limiting to API routes
   - [ ] Set up proper CSP headers
   - [ ] Add error boundaries for all routes
   - [ ] Implement proper CORS settings

3. SEO & Performance
   - [ ] Add meta tags to all pages
   - [ ] Set up proper image optimization
   - [ ] Implement caching strategy
   - [ ] Add loading states for all async operations

4. PWA & Assets
   - [ ] Replace placeholder icons with actual brand icons
   - [ ] Test offline functionality
   - [ ] Add proper error pages (404, 500)
   - [ ] Add proper loading states

5. Testing
   - [ ] Add end-to-end tests for critical flows
   - [ ] Add unit tests for utilities
   - [ ] Add integration tests for API routes
   - [ ] Test all payment flows

6. Monitoring
   - [ ] Set up error tracking
   - [ ] Add proper logging
   - [ ] Set up performance monitoring
   - [ ] Add analytics

## Required Code Changes

1. Add robots.txt:
```txt
User-agent: *
Allow: /
Disallow: /api/
Disallow: /dashboard/
Sitemap: https://doggohotel.com/sitemap.xml
```

2. Add basic sitemap.xml:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://doggohotel.com</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <!-- Add other public URLs -->
</urlset>
```

3. Add middleware for security headers:
```typescript
// src/middleware.ts additions
export const config = {
  matcher: '/((?!api/|_next/|_proxy/|_static/|_vercel|[\\w-]+\\.\\w+).*)',
}

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  }
]
```

4. Add error boundary component:
```typescript
// src/components/error-boundary.tsx
'use client'

import { useEffect } from 'react'

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h2 className="text-2xl font-bold">Something went wrong!</h2>
      <button
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-white"
        onClick={reset}
      >
        Try again
      </button>
    </div>
  )
}
```

## Environment Variables to Set
```env
# Required for production
DATABASE_URL=
NEXTAUTH_URL=https://doggohotel.com
NEXTAUTH_SECRET=  # Generate with: openssl rand -base64 32
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
STRIPE_PRICE_ID=

# Optional but recommended
SENTRY_DSN=
ANALYTICS_ID=
```

## Database Preparations
1. Run migrations:
```bash
pnpm prisma migrate deploy
```

2. Verify indices for common queries
3. Set up backup strategy
4. Configure connection pooling

## Final Steps
1. Run build and check for any warnings:
```bash
pnpm build
```

2. Test PWA installation and offline functionality
3. Verify all form submissions and API endpoints
4. Check mobile responsiveness
5. Test payment flows in production environment 