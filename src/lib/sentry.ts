import * as Sentry from '@sentry/nextjs'

const SENTRY_DSN = process.env.SENTRY_DSN

if (SENTRY_DSN) {
  Sentry.init({
    dsn: SENTRY_DSN,
    tracesSampleRate: 1.0,
    environment: process.env.NODE_ENV,
    integrations: [
      new Sentry.BrowserTracing(),
      new Sentry.Replay(),
    ],
  })
}

export function captureError(error: Error, context?: Record<string, unknown>) {
  if (SENTRY_DSN) {
    Sentry.captureException(error, {
      contexts: {
        error: context,
      },
    })
  } else {
    console.error('Error:', error, context)
  }
}

export function captureMessage(message: string, level: Sentry.SeverityLevel = 'info') {
  if (SENTRY_DSN) {
    Sentry.captureMessage(message, level)
  } else {
    console.log(`[${level}] ${message}`)
  }
} 