// Google Analytics configuration
export function trackPageView(url: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
      page_path: url,
    })
  }
}

export function trackEvent(category: string, action: string, label?: string, value?: number) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Custom event types
export const AnalyticsEvents = {
  // User actions
  USER_SIGNUP: 'user_signup',
  USER_LOGIN: 'user_login',
  USER_LOGOUT: 'user_logout',
  
  // Booking actions
  BOOKING_STARTED: 'booking_started',
  BOOKING_COMPLETED: 'booking_completed',
  BOOKING_CANCELLED: 'booking_cancelled',
  
  // Payment actions
  PAYMENT_STARTED: 'payment_started',
  PAYMENT_COMPLETED: 'payment_completed',
  PAYMENT_FAILED: 'payment_failed',
  
  // Search actions
  SEARCH_PERFORMED: 'search_performed',
  SEARCH_RESULTS_VIEWED: 'search_results_viewed',
  
  // Error events
  ERROR_OCCURRED: 'error_occurred',
} as const 