import nodemailer from "nodemailer";

export async function sendVaccinationReminder(pet: {
  id: string;
  ownerEmail: string;
  vaccinationDue: Date;
}): Promise<any> {
  // Configure the transporter using environment variables
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: process.env.EMAIL_SECURE === "true",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const message = {
    from: process.env.EMAIL_FROM,
    to: pet.ownerEmail,
    subject: "Vaccination Reminder",
    text: `Your pet's vaccination is due on ${pet.vaccinationDue.toDateString()}. Please schedule an appointment.`,
  };

  return await transporter.sendMail(message);
}
