import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Doggo Hotel',
  description: 'Our commitment to protecting your privacy and personal information.',
}

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
        <p className="mb-4">
          We collect information that you provide directly to us, including:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Contact information (name, email, phone)</li>
          <li>Pet information (name, breed, medical history)</li>
          <li>Payment information (processed securely through Stripe)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
        <p className="mb-4">
          We use the information we collect to:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Provide and maintain our services</li>
          <li>Process your bookings and payments</li>
          <li>Send you important updates and notifications</li>
          <li>Improve our services and customer experience</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Data Security</h2>
        <p className="mb-4">
          We implement appropriate security measures to protect your personal information.
          All data is encrypted in transit and at rest.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Your Rights</h2>
        <p className="mb-4">
          You have the right to:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Access your personal information</li>
          <li>Correct inaccurate information</li>
          <li>Request deletion of your information</li>
          <li>Opt-out of marketing communications</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">5. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, please contact us at:
        </p>
        <p className="mb-4">
          Email: privacy@doggohotel.com<br />
          Phone: (555) 123-4567
        </p>
      </section>
    </div>
  )
} 