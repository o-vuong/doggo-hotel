import { PrismaClient } from '@prisma/client'
import { hash } from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
  // Create admin user
  const adminPassword = await hash('admin123', 10)
  const admin = await prisma.user.upsert({
    where: { email: 'admin@doggohotel.com' },
    update: {},
    create: {
      email: 'admin@doggohotel.com',
      name: 'Admin User',
      password: adminPassword,
      role: 'ADMIN',
    },
  })

  // Create a facility
  const facility = await prisma.facility.upsert({
    where: { id: 'default-facility' },
    update: {},
    create: {
      id: 'default-facility',
      name: 'Doggo Hotel Main',
      address: '123 Paw Street, Dogtown, CA 94123',
      phone: '(555) 123-4567',
      email: 'info@doggohotel.com',
      operatingHours: {
        monday: { open: '07:00', close: '19:00' },
        tuesday: { open: '07:00', close: '19:00' },
        wednesday: { open: '07:00', close: '19:00' },
        thursday: { open: '07:00', close: '19:00' },
        friday: { open: '07:00', close: '19:00' },
        saturday: { open: '08:00', close: '18:00' },
        sunday: { open: '08:00', close: '18:00' },
      },
    },
  })

  // Create kennels
  const kennelSizes = ['SMALL', 'MEDIUM', 'LARGE', 'EXTRA_LARGE'] as const
  const kennelPrices = {
    SMALL: 35,
    MEDIUM: 45,
    LARGE: 55,
    EXTRA_LARGE: 65,
  }

  for (const size of kennelSizes) {
    for (let i = 1; i <= 5; i++) {
      await prisma.kennel.create({
        data: {
          name: `${size} Kennel ${i}`,
          size,
          price: kennelPrices[size],
          facilityId: facility.id,
        },
      })
    }
  }

  // Create add-on services
  const addOnServices = [
    {
      name: 'Grooming',
      description: 'Full grooming service including bath, brush, and nail trim',
      price: 45.00,
    },
    {
      name: 'Extra Play Time',
      description: 'Additional 30-minute play session',
      price: 20.00,
    },
    {
      name: 'Premium Food',
      description: 'Upgrade to premium dog food during the stay',
      price: 10.00,
    },
    {
      name: 'Training Session',
      description: '30-minute basic training session',
      price: 35.00,
    },
  ]

  for (const service of addOnServices) {
    await prisma.addOnService.create({
      data: service,
    })
  }

  console.log({
    admin,
    facility,
    message: 'Database seeded successfully',
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
