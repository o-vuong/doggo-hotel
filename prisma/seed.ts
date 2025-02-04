import { PrismaClient, Role, KennelSize, KennelStatus, ReservationStatus, PaymentStatus } from '@prisma/client';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Clean existing data
  await prisma.$transaction([
    prisma.payment.deleteMany(),
    prisma.reservation.deleteMany(),
    prisma.vaccination.deleteMany(),
    prisma.pet.deleteMany(),
    prisma.kennel.deleteMany(),
    prisma.facility.deleteMany(),
    prisma.user.deleteMany(),
  ]);

  // Create facility
  const facility = await prisma.facility.create({
    data: {
      name: 'Doggo Hotel Main',
      address: '123 Paw Street, San Francisco, CA 94105',
      phone: '(415) 555-0123',
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
  });

  // Create users with different roles
  const adminPassword = await hash('admin123', 10);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@doggohotel.com' },
    update: {},
    create: {
      email: 'admin@doggohotel.com',
      password: adminPassword,
      role: Role.ADMIN,
      tenantId: facility.id,
    },
  });

  const managerPassword = await hash('manager123', 10);
  const manager = await prisma.user.upsert({
    where: { email: 'manager@doggohotel.com' },
    update: {},
    create: {
      email: 'manager@doggohotel.com',
      password: managerPassword,
      role: Role.MANAGER,
      tenantId: facility.id,
    },
  });

  const staffPassword = await hash('staff123', 10);
  const staff = await prisma.user.upsert({
    where: { email: 'staff@doggohotel.com' },
    update: {},
    create: {
      email: 'staff@doggohotel.com',
      password: staffPassword,
      role: Role.STAFF,
      tenantId: facility.id,
    },
  });

  // Create pet owners
  const owners = await Promise.all(
    [
      { email: 'john@example.com' },
      { email: 'sarah@example.com' },
      { email: 'michael@example.com' },
      { email: 'emily@example.com' },
      { email: 'david@example.com' },
    ].map(async (owner) => {
      const password = await hash('petowner123', 10);
      return prisma.user.upsert({
        where: { email: owner.email },
        update: {},
        create: {
          ...owner,
          password,
          role: Role.PET_OWNER,
          tenantId: facility.id,
        },
      });
    })
  );

  // Create kennels
  const kennels = await Promise.all(
    Array.from({ length: 20 }, (_, i) => {
      const size = i < 8 ? KennelSize.SMALL : i < 14 ? KennelSize.MEDIUM : KennelSize.LARGE;
      const price = size === KennelSize.SMALL ? 35 : size === KennelSize.MEDIUM ? 45 : 55;
      return prisma.kennel.create({
        data: {
          name: `Kennel ${i + 1}`,
          size,
          status: KennelStatus.AVAILABLE,
          price,
          facilityId: facility.id,
          tenantId: facility.id,
        },
      });
    })
  );

  // Create pets with vaccinations
  const pets = await Promise.all(
    [
      { name: 'Max', breed: 'Golden Retriever', age: 3, ownerId: owners[0].id },
      { name: 'Luna', breed: 'French Bulldog', age: 2, ownerId: owners[0].id },
      { name: 'Bella', breed: 'German Shepherd', age: 4, ownerId: owners[1].id },
      { name: 'Charlie', breed: 'Poodle', age: 2, ownerId: owners[2].id },
      { name: 'Lucy', breed: 'Chihuahua', age: 1, ownerId: owners[2].id },
      { name: 'Cooper', breed: 'Labrador', age: 5, ownerId: owners[3].id },
      { name: 'Daisy', breed: 'Beagle', age: 3, ownerId: owners[4].id },
      { name: 'Rocky', breed: 'Rottweiler', age: 4, ownerId: owners[4].id },
    ].map(async (pet) => {
      const createdPet = await prisma.pet.create({
        data: {
          ...pet,
          medicalInfo: pet.name === 'Lucy' ? 'Requires daily medication' : null,
          dietaryNeeds: null,
        },
      });

      // Add vaccinations for each pet
      await prisma.vaccination.create({
        data: {
          type: 'Rabies',
          date: new Date(2023, 1, 1),
          expiryDate: new Date(2024, 1, 1),
          petId: createdPet.id,
        },
      });

      return createdPet;
    })
  );

  // Create reservations
  const now = new Date();
  const reservations = await Promise.all([
    // Past reservations
    ...Array.from({ length: 10 }, (_, i) =>
      prisma.reservation.create({
        data: {
          startDate: new Date(now.getFullYear(), now.getMonth() - 1, i + 1),
          endDate: new Date(now.getFullYear(), now.getMonth() - 1, i + 5),
          status: ReservationStatus.CHECKED_OUT,
          petId: pets[i % pets.length].id,
          kennelId: kennels[i % kennels.length].id,
          userId: owners[i % owners.length].id,
        },
      })
    ),

    // Current reservations
    ...Array.from({ length: 5 }, (_, i) =>
      prisma.reservation.create({
        data: {
          startDate: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 2),
          endDate: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 3),
          status: ReservationStatus.CHECKED_IN,
          petId: pets[(i + 2) % pets.length].id,
          kennelId: kennels[(i + 5) % kennels.length].id,
          userId: owners[(i + 2) % owners.length].id,
        },
      })
    ),

    // Future reservations
    ...Array.from({ length: 8 }, (_, i) =>
      prisma.reservation.create({
        data: {
          startDate: new Date(now.getFullYear(), now.getMonth(), now.getDate() + i + 5),
          endDate: new Date(now.getFullYear(), now.getMonth(), now.getDate() + i + 10),
          status: ReservationStatus.CONFIRMED,
          petId: pets[(i + 4) % pets.length].id,
          kennelId: kennels[(i + 10) % kennels.length].id,
          userId: owners[(i + 4) % owners.length].id,
        },
      })
    ),
  ]);

  // Create payments
  const payments = await Promise.all([
    // Completed payments for past reservations
    ...reservations
      .filter((r) => r.status === ReservationStatus.CHECKED_OUT)
      .map((reservation) =>
        prisma.payment.create({
          data: {
            amount: Math.floor(Math.random() * 300) + 100,
            status: PaymentStatus.PAID,
            stripePaymentId: `pi_${Math.random().toString(36).substr(2, 9)}`,
            reservationId: reservation.id,
            userId: reservation.userId,
          },
        })
      ),

    // Pending payments for current reservations
    ...reservations
      .filter((r) => r.status === ReservationStatus.CHECKED_IN)
      .map((reservation) =>
        prisma.payment.create({
          data: {
            amount: Math.floor(Math.random() * 300) + 100,
            status: PaymentStatus.PENDING,
            stripePaymentId: `pi_${Math.random().toString(36).substr(2, 9)}`,
            reservationId: reservation.id,
            userId: reservation.userId,
          },
        })
      ),

    // Future payments
    ...reservations
      .filter((r) => r.status === ReservationStatus.CONFIRMED)
      .map((reservation) =>
        prisma.payment.create({
          data: {
            amount: Math.floor(Math.random() * 300) + 100,
            status: PaymentStatus.PENDING,
            stripePaymentId: `pi_${Math.random().toString(36).substr(2, 9)}`,
            reservationId: reservation.id,
            userId: reservation.userId,
          },
        })
      ),
  ]);

  console.log({
    users: await prisma.user.count(),
    pets: await prisma.pet.count(),
    kennels: await prisma.kennel.count(),
    reservations: await prisma.reservation.count(),
    payments: await prisma.payment.count(),
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
