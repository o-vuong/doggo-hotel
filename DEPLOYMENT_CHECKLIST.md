# Deployment Checklist

## Brand Assets & PWA
- [ ] Replace placeholder PWA icons in `public/icons/`:
  - `icon-192x192.png`
  - `icon-512x512.png`
- [ ] Add logo files in `public/logos/`:
  - `default.svg`
  - `light.svg`
  - `dark.svg`
  - `small.svg`
- [ ] Add social media assets in `public/social/`:
  - `og-image.png`
- [ ] Update brand colors in `src/config/brand-assets.ts`
- [ ] Update social media handles in `src/config/brand-assets.ts`
- [ ] Verify PWA manifest settings in `public/manifest.json`

## Environment Variables
- [ ] Set up production environment variables:
  ```
  DATABASE_URL=
  NEXTAUTH_URL=
  NEXTAUTH_SECRET=
  STRIPE_SECRET_KEY=
  STRIPE_WEBHOOK_SECRET=
  STRIPE_PRICE_ID=
  ```
- [ ] Generate new NEXTAUTH_SECRET for production
- [ ] Update Stripe keys for production environment
- [ ] Verify all sensitive keys are properly secured

## Database
- [ ] Run final database migrations
- [ ] Verify database connection string for production
- [ ] Set up database backup strategy
- [ ] Configure connection pooling for production load

## Authentication & Security
- [ ] Configure production OAuth providers
- [ ] Set up proper CORS settings
- [ ] Enable rate limiting for API routes
- [ ] Set up proper CSP headers
- [ ] Configure session management settings
- [ ] Review and update role-based access controls

## Performance & SEO
- [ ] Add proper meta tags for SEO
- [ ] Configure robots.txt
- [ ] Set up sitemap.xml
- [ ] Implement proper caching strategies
- [ ] Enable image optimization
- [ ] Configure proper compression

## Monitoring & Logging
- [ ] Set up error tracking (e.g., Sentry)
- [ ] Configure application logging
- [ ] Set up performance monitoring
- [ ] Configure uptime monitoring
- [ ] Set up alerts for critical errors

## Testing
- [ ] Run full test suite
- [ ] Perform load testing
- [ ] Test PWA functionality
- [ ] Verify offline capabilities
- [ ] Test payment flows
- [ ] Cross-browser testing
- [ ] Mobile responsiveness testing

## CI/CD
- [ ] Configure production build pipeline
- [ ] Set up automated deployments
- [ ] Configure deployment environment
- [ ] Set up rollback procedures
- [ ] Configure SSL/TLS certificates

## Legal & Compliance
- [ ] Add Privacy Policy
- [ ] Add Terms of Service
- [ ] Verify GDPR compliance
- [ ] Add Cookie consent
- [ ] Verify accessibility compliance (WCAG)

## Business Operations
- [ ] Set up customer support channels
- [ ] Configure notification emails
- [ ] Set up backup admin accounts
- [ ] Document emergency procedures
- [ ] Set up monitoring for business metrics

## Final Verification
- [ ] Test all core user flows
- [ ] Verify all external integrations
- [ ] Check all form validations
- [ ] Test error handling
- [ ] Verify data backup procedures
- [ ] Test disaster recovery procedures

## Post-Deployment
- [ ] Monitor error logs
- [ ] Watch performance metrics
- [ ] Monitor user feedback
- [ ] Set up A/B testing if needed
- [ ] Configure analytics tracking 