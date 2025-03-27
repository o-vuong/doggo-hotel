import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const now = new Date();
  const threeDaysLater = new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000);

  // Create an admin user with a password
  const admin = await prisma.user.create({
    data: {
      email: "admin@example.com",
      password: "password", // plaintext for seeding; use hash in production
      role: "SYSTEM_ADMIN",
    },
  });

  // Create a facility with a name and location
  const facility = await prisma.facility.create({
    data: {
      name: "Main Facility",
      location: "123 Doggo Street",
    },
  });

  // Create a kennel associated with the facility; includes name and category (required)
  const kennel = await prisma.kennel.create({
    data: {
      name: "Kennel A",
      category: "SMALL",
      facility: { connect: { id: facility.id } },
    },
  });

  // Create a pet owned by the admin user (added missing required fields: name and species)
  const pet = await prisma.pet.create({
    data: {
      name: "Fido",
      species: "Dog",
      breed: "Labrador",
      age: 3,
      owner: { connect: { id: admin.id } },
    },
  });

  // Create a reservation for the pet, including mandatory startDate, endDate, kennel, and facility fields
  const reservation = await prisma.reservation.create({
    data: {
      pet: { connect: { id: pet.id } },
      user: { connect: { id: admin.id } },
      status: "PENDING",
      startDate: now,
      endDate: threeDaysLater,
      kennel: { connect: { id: kennel.id } },
      facility: { connect: { id: facility.id } },
    },
  });

  // Create a waitlist entry. Since the PrismaClient types may not expose the waitlist model,
  // we cast prisma to any to bypass the type error.
  await (prisma as any).waitlist.create({
    data: {
      reservation: { connect: { id: reservation.id } },
      user: { connect: { id: admin.id } },
    },
  });

  console.log("Database seeded successfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
