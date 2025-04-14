'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog'

export function CookieConsent() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setOpen(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true')
    setOpen(false)
  }

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'false')
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Cookie Consent</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p>
            We use cookies to enhance your experience, analyze site traffic, and for marketing purposes.
            By clicking "Accept", you consent to our use of cookies.
          </p>
          <p className="text-sm text-muted-foreground">
            You can learn more about how we use cookies in our{' '}
            <a href="/legal/privacy" className="text-primary hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
        <DialogFooter className="gap-2 sm:gap-0">
          <Button variant="outline" onClick={handleReject}>
            Reject
          </Button>
          <Button onClick={handleAccept}>
            Accept
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
} 