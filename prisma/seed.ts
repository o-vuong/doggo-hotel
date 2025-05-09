import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const now = new Date();
  const threeDaysLater = new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000);

  // Create an admin user with a hashed password
  const hashedPassword = await hash("admin123", 12);
  const admin = await prisma.user.upsert({
    where: { email: "admin@example.com" },
    update: {},
    create: {
      email: "admin@example.com",
      password: hashedPassword,
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

  // Create a waitlist entry linking the reservation and the user, if the model exists
  if (
    (prisma as any).waitlist &&
    typeof (prisma as any).waitlist.create === "function"
  ) {
    await (prisma as any).waitlist.create({
      data: {
        reservation: { connect: { id: reservation.id } },
        user: { connect: { id: admin.id } },
      },
    });
  } else {
    console.warn("Waitlist model not defined, skipping waitlist seeding.");
  }

  // Seed marketing content if not already present
  const existingMarketing = await prisma.marketingContent.findFirst();
  if (!existingMarketing) {
    await prisma.marketingContent.create({
      data: {
        content: "Welcome to Doggo Hotel! Where we treat your pet like family.",
      },
    });
  }

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
