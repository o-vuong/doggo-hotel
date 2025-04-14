import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Doggo Hotel',
  description: 'Terms and conditions for using our services.',
}

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
        <p className="mb-4">
          By accessing and using Doggo Hotel's services, you agree to be bound by these Terms of Service.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Booking and Cancellation</h2>
        <p className="mb-4">
          Bookings are subject to availability and our cancellation policy:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Cancellations made 48+ hours before check-in: Full refund</li>
          <li>Cancellations made 24-48 hours before check-in: 50% refund</li>
          <li>Cancellations made less than 24 hours before check-in: No refund</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Pet Requirements</h2>
        <p className="mb-4">
          All pets must:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Be up to date on vaccinations</li>
          <li>Be free of contagious diseases</li>
          <li>Be non-aggressive towards other pets and staff</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Liability</h2>
        <p className="mb-4">
          While we take every precaution to ensure your pet's safety, Doggo Hotel is not liable for:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Pre-existing medical conditions</li>
          <li>Injuries resulting from pet interactions</li>
          <li>Lost or damaged personal items</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">5. Contact</h2>
        <p className="mb-4">
          For questions about these terms, please contact:
        </p>
        <p className="mb-4">
          Email: legal@doggohotel.com<br />
          Phone: (555) 123-4567
        </p>
      </section>
    </div>
  )
} 