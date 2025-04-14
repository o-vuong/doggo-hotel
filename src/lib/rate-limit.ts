import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const RATE_LIMIT = 100 // requests
const RATE_LIMIT_WINDOW = 60 // seconds

const ipRequests = new Map<string, { count: number; resetTime: number }>()

export function rateLimit(request: NextRequest) {
  const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown'
  const now = Date.now()

  // Clean up old entries
  for (const [key, value] of ipRequests.entries()) {
    if (now > value.resetTime) {
      ipRequests.delete(key)
    }
  }

  // Get or initialize request count
  const requestData = ipRequests.get(ip) || { count: 0, resetTime: now + RATE_LIMIT_WINDOW * 1000 }
  
  // Check if rate limit exceeded
  if (requestData.count >= RATE_LIMIT) {
    return NextResponse.json(
      { error: 'Rate limit exceeded' },
      { status: 429 }
    )
  }

  // Update request count
  ipRequests.set(ip, {
    count: requestData.count + 1,
    resetTime: requestData.resetTime
  })

  return null
} 